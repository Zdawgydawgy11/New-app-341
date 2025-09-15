// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

function initGame() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const startScreen = document.getElementById('startScreen');
    const gameOverScreen = document.getElementById('gameOver');
    const finalScoreElement = document.getElementById('finalScore');
    const restartBtn = document.getElementById('restartBtn');

    // Debug logging
    console.log('Canvas found:', !!canvas);
    console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);

let gameState = 'start';
let score = 0;
let gameSpeed = 2;

const bird = {
    x: 100,
    y: canvas.height / 2,
    width: 30,
    height: 30,
    velocity: 0,
    gravity: 0.6,
    jump: -12,
    color: '#FFD700'
};

const pipes = [];
const pipeWidth = 60;
const pipeGap = 200;
const pipeSpacing = 300;

let lastPipeX = canvas.width;

function drawBird() {
    ctx.fillStyle = bird.color;
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
    
    ctx.fillStyle = '#FFA500';
    ctx.fillRect(bird.x + 20, bird.y + 10, 8, 6);
    
    ctx.fillStyle = '#000';
    ctx.fillRect(bird.x + 5, bird.y + 8, 4, 4);
}

function drawPipe(pipe) {
    ctx.fillStyle = '#228B22';
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
    ctx.fillRect(pipe.x, pipe.topHeight + pipeGap, pipeWidth, canvas.height - pipe.topHeight - pipeGap);
    
    ctx.fillStyle = '#32CD32';
    ctx.fillRect(pipe.x, pipe.topHeight - 20, pipeWidth, 20);
    ctx.fillRect(pipe.x, pipe.topHeight + pipeGap, pipeWidth, 20);
}

function createPipe() {
    const minHeight = 50;
    const maxHeight = canvas.height - pipeGap - 50;
    const topHeight = Math.random() * (maxHeight - minHeight) + minHeight;
    
    return {
        x: canvas.width,
        topHeight: topHeight,
        passed: false
    };
}

function updateBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;
    
    if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height;
        gameOver();
    }
    
    if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
    }
}

function updatePipes() {
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - pipeSpacing) {
        pipes.push(createPipe());
    }
    
    for (let i = pipes.length - 1; i >= 0; i--) {
        pipes[i].x -= gameSpeed;
        
        if (!pipes[i].passed && pipes[i].x + pipeWidth < bird.x) {
            pipes[i].passed = true;
            score++;
            scoreElement.textContent = score;
        }
        
        if (pipes[i].x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }
    }
}

function checkCollisions() {
    for (const pipe of pipes) {
        if (bird.x < pipe.x + pipeWidth &&
            bird.x + bird.width > pipe.x &&
            (bird.y < pipe.topHeight || bird.y + bird.height > pipe.topHeight + pipeGap)) {
            gameOver();
            return;
        }
    }
}

function gameOver() {
    gameState = 'gameOver';
    finalScoreElement.textContent = score;
    gameOverScreen.style.display = 'block';
}

function resetGame() {
    bird.y = canvas.height / 2;
    bird.velocity = 0;
    pipes.length = 0;
    score = 0;
    scoreElement.textContent = score;
    gameOverScreen.style.display = 'none';
    startScreen.style.display = 'none';
    gameState = 'playing';
}

function jump() {
    if (gameState === 'start') {
        resetGame();
    } else if (gameState === 'playing') {
        bird.velocity = bird.jump;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (gameState === 'playing') {
        updateBird();
        updatePipes();
        checkCollisions();
    }
    
    for (const pipe of pipes) {
        drawPipe(pipe);
    }
    
    drawBird();
    
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        jump();
    }
});

canvas.addEventListener('click', jump);

restartBtn.addEventListener('click', () => {
    gameState = 'start';
    startScreen.style.display = 'block';
    gameOverScreen.style.display = 'none';
});

    gameLoop();
}