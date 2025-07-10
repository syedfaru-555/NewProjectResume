import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Eye, Mail, Github, Linkedin, ExternalLink, Star, Calendar, Award, Code, Briefcase, User, GraduationCap, Phone, MapPin, ChevronUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = ['about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = [
    { name: 'HTML', level: 95, color: 'bg-yellow-500' },
    { name: 'Cascading Style Sheets', level: 90, color: 'bg-yellow-500' },
    { name: 'JAVA', level: 85, color: 'bg-yellow-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React', level: 75, color: 'bg-blue-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'SQL', level: 80, color: 'bg-orange-500' },
  ];

  const projects = [
    {
      title: 'Designing-Secure-Efficient-Bio-Metric-Based-Access-for-Cloud-services ',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/syedfaru-555/Designing-Secure-Efficient-Bio-Metric-Based-Access-for-Cloud-services.git',
      demo: 'designing-secure-effici-git-184c70-syed-faruk-abdullas-projects.vercel.app'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with forecasting',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['JavaScript', 'API Integration', 'Chart.js'],
      github: '#',
      demo: '#'
    }
  ];

  const certifications = [
    {
      name: 'SQL and Relational Databases 101',
      issuer: 'Data Base',
      date: 'June 23, 2025',
      badge: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'java full stack development',
      issuer: 'Frontend web development',
      date: '02-July-2024',
      badge: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      badge: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const navigation = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600"> My Self</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://avatars.githubusercontent.com/u/201896207?s=400&u=383ec55fa8a96a7ec1d6dbd39301ab1ffbe90476&v=4"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Syed Faruk Abdulla
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                JAVA Full Stack Developer
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://www.linkedin.com/in/syed-faruk-abdulla-38b1a0299/" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/syedfaru-555" className="text-gray-700 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="mailto:john@example.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://drive.google.com/file/d/1q_xd95fvUTS0dHEtENtYYM2HhJd8u3Gu/view?usp=drive_link" className="text-blue-600 hover:text-blue-800 transition-colors">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </button>
                 </a>


                <a href="https://drive.google.com/file/d/1q_xd95fvUTS0dHEtENtYYM2HhJd8u3Gu/view?usp=drive_link" className="text-blue-600 hover:text-blue-800 transition-colors">
                 <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center space-x-2">
                  <Eye size={20} />
                  <span>View Resume</span>
                </button>
                </a>
               
                
                
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a dedicated and enthusiastic Computer Science and Engineering graduate with a strong foundation in Java Full Stack Web Development. As a quick learner and problem-solver, I enjoy building responsive web applications and continuously upgrading my technical skills. I’m passionate about technology, teamwork, and contributing to real-world projects. My goal is to join a forward-thinking organization where I can apply my skills, grow professionally, and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg text-gray-600">My academic journey</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-blue-200 h-full"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold text-gray-900">Bachelor of technology</h3>
                    <p className="text-blue-600 font-medium">Andhra Engineering College</p>
                    <p className="text-gray-600">2021 - 2025 • 66.75%</p>
                    <p className="text-gray-600 mt-2">
                      Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Award size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold text-gray-900">XII<sup>th Standerd</sup></h3>
                    <p className="text-blue-600 font-medium">	B S R Junior College</p>
                    <p className="text-gray-600">2020 - 2021 • 60%</p>
                    <p className="text-gray-600 mt-2">
                       Standerd, mathematical, physics and chemistry
                    </p>
                  </div>
                </div>


                 <div className="relative flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <GraduationCap size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="ml-8 md:ml-12 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <h3 className="text-xl font-semibold text-gray-900">X<sup>th</sup> Standard</h3>
                    <p className="text-blue-600 font-medium">	Medha (E.M) Schoolss</p>
                    <p className="text-gray-600">2018 - 2019 • CGPA: 7.8</p>
                    <p className="text-gray-600 mt-2">
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <p className="text-lg text-gray-600">Technologies I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github}
                      className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-lg text-gray-600">Professional credentials</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={cert.badge} 
                  alt={cert.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-full"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-blue-600 font-medium">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">Let's discuss your next project</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">Syedfarukabdulla55@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="text-blue-600" size={14} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 9866748613</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-blue-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">bengaluru</p>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">Syed Faruk</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/syed-faruk-abdulla-38b1a0299/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/syedfaru-555" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:syedfarukabdulla55@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
