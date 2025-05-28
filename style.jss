:root {
  --bg-light: #f5f7fa;
  --bg-dark: #121212;
  --text-light: #333;
  --text-dark: #eee;
  --primary: #7f5af0;
  --accent: #2cb67d;
  --gradient: linear-gradient(135deg, #7f5af0, #2cb67d);
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.4s, color 0.4s;
}

body.light {
  background: var(--bg-light);
  color: var(--text-light);
}

body.dark {
  background: var(--bg-dark);
  color: var(--text-dark);
}

.theme-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

#themeToggle {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: var(--gradient);
  color: white;
}

.navbar .logo {
  font-weight: bold;
  font-size: 1.4rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: opacity 0.3s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.hero {
  background: var(--gradient);
  color: white;
  padding: 5rem 2rem;
  text-align: center;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-content h1 span {
  background: white;
  color: #2cb67d;
  padding: 0 0.5rem;
  border-radius: 5px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  background-color: white;
  color: #2cb67d;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s;
}

.btn:hover {
  transform: scale(1.05);
}

.contact-section {
  padding: 3rem 2rem;
  text-align: center;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.contact-section a {
  text-decoration: none;
  color: var(--primary);
  font-weight: bold;
  transition: color 0.3s;
}

.contact-section a:hover {
  color: var(--accent);
}

footer {
  background: #1f1f1f;
  color: #aaa;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
}
