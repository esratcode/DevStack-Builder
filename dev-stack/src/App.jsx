import bannerStack from "./asset/banner-stack.png";
import logoText from "./asset/logo-text.png";

import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);
  }, []);

  const addToStack = (technology) => {
    const alreadyExists = selectedStack.some(
      (item) => item.id === technology.id,
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const technology = selectedStack.find((item) => item.id === id);

    setSelectedStack(selectedStack.filter((item) => item.id !== id));

    toast.info(`${technology.name} removed from your stack.`);
  };

  const removeAll = () => {
    setSelectedStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <div className="app">
      <ToastContainer position="top-right" autoClose={2000} />
      <nav className="navbar">
        <div className="logo">
          <img src={logoText} alt="Dev Stack" />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">BUILD YOUR DEVELOPMENT STACK</p>

          <h1>
            Build Your
            <span>Perfect Dev Stack</span>
          </h1>

          <p className="hero-description">
            Discover powerful technologies, choose your favorites, and create a
            development stack that fits your needs.
          </p>

          <div className="hero-buttons">
            <a href="#technologies">
              <button className="hero-button">Explore Technologies</button>
            </a>

            <a href="#about">
              <button className="learn-button">Learn More</button>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="hero-stack-image"
          />
        </div>
      </section>

      <section id="technologies" className="technology-section">
        <div className="section-heading">
          <p>EXPLORE TECHNOLOGIES</p>

          <h2>Choose Your Technologies</h2>

          <span>
            Explore popular tools and technologies for modern development.
          </span>
        </div>

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading technologies...</p>
          </div>
        ) : (
          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((technology) => {
                const isSelected = selectedStack.some(
                  (item) => item.id === technology.id,
                );

                return (
                  <div className="technology-card" key={technology.id}>
                    <div className="card-top">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="technology-icon"
                      />

                      <span className="badge">{technology.badge}</span>
                    </div>

                    <h3>{technology.name}</h3>

                    <p className="technology-description">
                      {technology.description}
                    </p>

                    <div className="technology-meta">
                      <span className="category">{technology.category}</span>

                      <span className="difficulty">
                        {technology.difficulty}
                      </span>
                    </div>

                    <div className="card-bottom">
                      <span className="rating">⭐ {technology.rating}</span>

                      <button
                        className="add-button"
                        onClick={() => addToStack(technology)}
                        disabled={isSelected}
                      >
                        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <aside className="your-stack">
              <div className="stack-header">
                <div>
                  <p>YOUR SELECTION</p>
                  <h2>Your Stack</h2>
                </div>

                <span className="stack-count">{selectedStack.length}</span>
              </div>

              <p className="selected-count">
                {selectedStack.length}{" "}
                {selectedStack.length === 1 ? "Technology" : "Technologies"}{" "}
                Selected
              </p>

              {selectedStack.length === 0 ? (
                <div className="empty-stack">
                  <div className="empty-icon">🧰</div>

                  <h3>Your stack is empty</h3>

                  <p>
                    Add technologies from the list to build your development
                    stack.
                  </p>
                </div>
              ) : (
                <div className="selected-items">
                  {selectedStack.map((technology) => (
                    <div className="selected-item" key={technology.id}>
                      <img src={technology.icon} alt={technology.name} />

                      <div className="selected-item-info">
                        <h4>{technology.name}</h4>

                        <span>{technology.category}</span>
                      </div>

                      <button
                        className="remove-button"
                        onClick={() => removeFromStack(technology.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button className="remove-all" onClick={removeAll}>
                    Remove All
                  </button>
                </div>
              )}
            </aside>
          </div>
        )}
      </section>

      <section id="projects" className="about-section">
        <h2>Build Amazing Projects</h2>

        <p>
          Combine different technologies to create modern, scalable and powerful
          applications.
        </p>
      </section>

      <section id="about" className="about-section">
        <h2>Why Dev Stack?</h2>

        <p>
          Dev Stack helps developers discover, compare and organize the
          technologies they need for building modern applications.
        </p>
      </section>

      <section id="contact" className="about-section">
        <h2>Get In Touch</h2>

        <p>Have a question or suggestion? We'd love to hear from you.</p>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logoText} alt="Dev Stack" className="footer-logo" />

            <p>
              Build your perfect development stack with the technologies you
              love.
            </p>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="footer-links">
            <div>
              <h4>Product</h4>

              <a href="#technologies">Technologies</a>

              <a href="#projects">Projects</a>
            </div>

            <div>
              <h4>Company</h4>

              <a href="#about">About</a>

              <a href="#contact">Contact</a>
            </div>

            <div>
              <h4>Legal</h4>

              <a href="#">Privacy</a>

              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack Builder. All rights reserved.</p>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
