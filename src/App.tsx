import { useState } from 'react'
import './App.css'
import { Scene } from './components/Scene'

function App() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const games = [
    { name: "Minecraft", emoji: "⛏️", description: "I love building cute houses and exploring caves!" },
    { name: "Roblox", emoji: "🎮", description: "My favorite games are Adopt Me and Royale High!" },
    { name: "Among Us", emoji: "👾", description: "I'm really good at being the impostor!" },
    { name: "Stardew Valley", emoji: "🌾", description: "I love farming and making friends with the villagers!" }
  ]

  const codingProgress = [
    { skill: "HTML", level: 80 },
    { skill: "CSS", level: 75 },
    { skill: "JavaScript", level: 60 },
    { skill: "React", level: 50 },
    { skill: "TypeScript", level: 40 }
  ]

  return (
    <div className="about-me-container">
      <div className="profile-section">
        <div className="profile-picture">
          <Scene />
        </div>
        <h1 className="name">Fatemeh</h1>
        <p className="location">From Iran 🇮🇷</p>
        <div className="social-links">
          <a href="#" className="social-link">GitHub 🐱</a>
          <a href="#" className="social-link">Discord 🎮</a>
          <a href="#" className="social-link">Steam 🎲</a>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h2>About Me</h2>
          <p>Hi there! I'm a 16-year-old girl who loves gaming and coding! 🎮💻</p>
          <p>I'm from Iran and I love learning new things every day! My dream is to become a game developer one day! 🌟</p>
        </div>

        <div className="info-card">
          <h2>My Interests</h2>
          <div className="interests">
            <span className="interest-tag">Gaming 🎮</span>
            <span className="interest-tag">Coding 💻</span>
            <span className="interest-tag">Learning New Things 🌟</span>
            <span className="interest-tag">Anime 🎌</span>
            <span className="interest-tag">Music 🎵</span>
            <span className="interest-tag">Art 🎨</span>
          </div>
        </div>

        <div className="info-card">
          <h2>My Journey</h2>
          <p>I'm just starting my coding adventure, and I'm super excited to learn more! 🚀</p>
          <p>I started coding because I wanted to make my own games, and now I'm learning React to build cool websites! 💫</p>
        </div>

        <div className="info-card">
          <h2>My Favorite Games</h2>
          <div className="games-grid">
            {games.map((game) => (
              <div 
                key={game.name} 
                className={`game-card ${selectedGame === game.name ? 'selected' : ''}`}
                onClick={() => setSelectedGame(game.name)}
              >
                <span className="game-emoji">{game.emoji}</span>
                <h3>{game.name}</h3>
                {selectedGame === game.name && (
                  <p className="game-description">{game.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h2>Coding Progress</h2>
          <div className="skills-container">
            {codingProgress.map((skill) => (
              <div key={skill.skill} className="skill-bar">
                <span className="skill-name">{skill.skill}</span>
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="info-card">
          <h2>Fun Facts About Me</h2>
          <ul className="fun-facts">
            <li>I can speak 3 languages! 🌍</li>
            <li>My favorite color is pink! 💖</li>
            <li>I love collecting cute plushies! 🧸</li>
            <li>I'm learning to play the piano! 🎹</li>
            <li>I make my own pixel art! 🎨</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
