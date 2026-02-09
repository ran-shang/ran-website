const { useState, useEffect } = React;

// Header Component
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <div className="logo">Ran Shang</div>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

// Hero Component
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="grid-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-label">Online Programmer @ Ubisoft Montreal</div>
                    <h1 className="hero-title">
                        Ran
                        <span className="accent-text"> Shang</span>
                    </h1>
                    <p className="hero-description">
                        Software engineer specializing in systems and backend development.
                        Building scalable, high-performance services and user-facing features,
                        with experience shipping large-scale online systems for AAA products.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-secondary">Let's Connect</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

// About Component
const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">01</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">
                            I'm Ran Shang, an Online Programmer at Ubisoft Montreal with expertise in 
                            game systems architecture and software engineering. I graduated from 
                            Concordia University with a Bachelor's Degree in Computer Science in 2023.
                        </p>
                        <p>
                            My experience spans systems programming in C++ and backend service development using modern frameworks.
                            Through roles at Ubisoft, CAE, and Ericsson, I’ve built and maintained scalable online systems, 
                            distributed services, and performance-critical applications.
                            I enjoy solving complex engineering problems and improving reliability, efficiency, and system design at scale.
                        </p>
                        
                        <div className="experience-section">
                            <h3 className="subsection-title">💼 Working Experience</h3>
                            <div className="timeline-item">
                                <div className="timeline-period">2023 - Present</div>
                                <div className="timeline-content">
                                    <strong>Full-Time Online Programmer</strong>
                                    <div className="timeline-company">Ubisoft, Montreal</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-period">2023</div>
                                <div className="timeline-content">
                                    <strong>Co-op Online Programmer</strong>
                                    <div className="timeline-company">Ubisoft, Montreal</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-period">2022</div>
                                <div className="timeline-content">
                                    <strong>Co-op Software Developer</strong>
                                    <div className="timeline-company">CAE, Montreal</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-period">2021</div>
                                <div className="timeline-content">
                                    <strong>Co-op Integration Engineer</strong>
                                    <div className="timeline-company">Ericsson, Montreal</div>
                                </div>
                            </div>
                        </div>

                        <div className="education-section">
                            <h3 className="subsection-title">🎓 Education</h3>
                            <div className="education-item">
                                <strong>Bachelor's Degree in Computer Science</strong>
                                <div className="education-school">Concordia University, Montreal</div>
                                <div className="education-year">2023</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Projects Component
const Projects = () => {
    const projects = [
        {
            title: "Game Backend Development — Assassin’s Creed Mirage & Shadows",
            type: "Work Project",
            description: "Developed and maintained backend systems for Assassin’s Creed Mirage and Shadows, supporting live online features and services. Implemented performance-critical systems, optimized network workflows, and debugged complex production issues in large-scale distributed environments. Collaborated with cross-functional teams to deliver stable, scalable, and reliable gameplay experiences across multiple platforms.",
            tech: ["C++", "C#", "Debugging", "Multithreading", "Live Services"],
            link: "#"
        },
        {
            title: "Health Check Script",
            type: "Work Project",
            description: "Built an automated Bash-based monitoring system to perform pre-test and post-test health checks on 5G network services. Designed validation algorithms to analyze system status, detect failures, and generate diagnostic reports for 25+ critical components, improving testing efficiency and reliability.",
            tech: ["Bash", "Shell Scripting", "Automation", "Monitoring", "5G/SMF"],
            link: "#"
        },
        {
            title: "AI Tetris Player",
            type: "Academic Project",
            description: "Developed a reinforcement learning agent to play Tetris using PyTorch and Stable-Baselines3. Implemented the game environment in Pygame and optimized training pipelines for efficient experimentation and evaluation.",
            tech: ["Python", "PyTorch", "Pygame", "Reinforcement Learning", "AI"],
            link: "#"
        },
        {
            title: "Project Labyrinth",
            type: "Academic Project",
            description: "Designed and implemented a procedural horror game in Unity using C#. Built core gameplay systems including inventory management, procedural level generation, and asset pipelines, with a focus on performance and user experience.",
            tech: ["Unity", "C#", "Game Systems", "Procedural Generation"],
            link: "#"
        },
        {
            title: "Catering Website",
            type: "Academic Project",
            description: "Developed a full-stack catering management website using JavaScript, PHP, and SQL. Designed database schemas, implemented dynamic menu systems, and optimized backend queries for efficient data retrieval.",
            tech: ["JavaScript", "Full-Stack", "SQL", "Databases"],
            link: "#"
        },
        {
            title: "Risk Board Game",
            type: "Academic Project",
            description: "Built a C++ console-based strategy game prototype inspired by WARZONE Risk. Implemented core game logic, optimized memory usage, and resolved stability issues using advanced debugging and profiling tools.",
            tech: ["C++", "Systems Programming", "Debugging", "Game Logic"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">02</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="project-type">{project.type}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            {project.link !== "#" && (
                                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Skills Component
const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            skills: ["C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Bash"]
        },
        {
            category: "Systems",
            skills: ["AAA Game Development", "Performance-Critical Systems", "Multithreading & Concurrency", "Memory Management", "Cross-Platform Development", "Debugging & Optimization"]
        },
        {
            category: "Tools",
            skills: [".NET / C#", "REST APIs & Microservices", "OpenAPI", "HTML / CSS", "Vue.js", "Git", "CI/CD Pipelines", "Linux", "NUnit/ML", "SQL / Oracle"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">03</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <span className="skill-name">{skill}</span>
                                        <div className="skill-bar">
                                            <div className="skill-progress" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Contact Component
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/xvzbgdra', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                alert('Thank you! Your message has been sent successfully. I\'ll get back to you soon!');
            } else {
                setStatus('error');
                alert('Oops! Something went wrong. Please try again or email me directly at ranshang01@gmail.com');
            }
        } catch (error) {
            setStatus('error');
            alert('Oops! Something went wrong. Please try again or email me directly at ranshang01@gmail.com');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-number">04</span>
                    <h2 className="section-title">Get In Touch</h2>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-text">
                            I'm always interested in discussing software engineering opportunities, 
                            technical challenges, and collaborative projects. Whether you'd like to 
                            talk about game systems architecture, systems programming, or potential 
                            opportunities, feel free to reach out!
                        </p>
                        <div className="contact-links">
                            <a href="mailto:ranshang01@gmail.com" className="contact-link">
                                <span className="link-icon">✉</span>
                                ranshang01@gmail.com
                            </a>
                            <a href="https://github.com/ran-shang" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <span className="link-icon">⚡</span>
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/ran-shang-7605381bb/" className="contact-link" target="_blank" rel="noopener noreferrer">
                                <span className="link-icon">💼</span>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Ran Shang. Built with React.</p>
            </div>
        </footer>
    );
};

// Main App Component
const App = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
