# Flappy Bird Web Game

A web-based implementation of the classic Flappy Bird game built with HTML5 Canvas, CSS, and JavaScript.

## 🎮 Play the Game

[Live Demo](https://your-deployment-url.vercel.app) (will be available after deployment)

## 🚀 Features

- **Classic Gameplay**: Navigate the bird through pipes by jumping
- **Responsive Controls**: Use spacebar or mouse clicks to control the bird
- **Score Tracking**: Keep track of your best scores
- **Smooth Animations**: 60fps gameplay with HTML5 Canvas
- **Game States**: Start screen, gameplay, and game over with restart
- **Mobile Friendly**: Touch controls for mobile devices

## 🛠️ Local Development

### Prerequisites
- A modern web browser
- A local web server (optional, but recommended)

### Running Locally

1. Clone this repository:
```bash
git clone https://github.com/yourusername/flappy-bird-web.git
cd flappy-bird-web
```

2. Open `index.html` in your web browser, or serve it with a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js:**
```bash
npx serve .
```

**Using VS Code Live Server:**
- Install the Live Server extension
- Right-click on `index.html` and select "Open with Live Server"

## 🎯 How to Play

1. **Start**: Press SPACE or click to start the game
2. **Jump**: Press SPACE or click to make the bird jump
3. **Avoid Pipes**: Navigate through the gaps between pipes
4. **Score**: Earn points by successfully passing through pipes
5. **Game Over**: Hit a pipe or the ground to end the game
6. **Restart**: Click the restart button to play again

## 🏗️ Project Structure

```
flappy-bird-web/
├── index.html          # Main HTML file
├── style.css           # Game styling
├── game.js             # Game logic and mechanics
├── package.json        # Project metadata
└── README.md           # This file
```

## 🚀 Deploy to Vercel

1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import this repository
4. Deploy with default settings

## 🚀 Deploy to GitHub Pages

1. Fork this repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Your game will be available at `https://yourusername.github.io/flappy-bird-web`

## 🎨 Customization

You can easily customize the game by modifying:

- **Bird appearance**: Change colors and size in `game.js`
- **Pipe colors**: Modify pipe colors in the `drawPipe()` function
- **Game physics**: Adjust gravity, jump strength, and game speed
- **Styling**: Update `style.css` for different themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by the original Flappy Bird game by Dong Nguyen
- Built as a learning project for web game development