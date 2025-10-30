import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Globe, Mail, Phone, MapPin, ChevronLeft, ChevronRight, Moon, Sun, Menu, X, ExternalLink } from 'lucide-react';

const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Architecture Mock-ups');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Portfolio organized by 3 categories
  const portfolioCategories = {
    "Architecture Mock-ups": [
      { id: 1, image: "/mnt/project/IMG_20190928_172450__zestaw.JPG", title: "Museum Exhibition Set" },
      { id: 2, image: "/mnt/project/IMG_20190928_172358__Muzeum.JPG", title: "Museum Těšínska Model" },
      { id: 3, image: "/mnt/project/y.JPG", title: "Historic Helmet Model" },
      { id: 4, image: "/mnt/project/2787966.JPG", title: "Architectural Elements" },
      { id: 5, image: "/mnt/project/1f_carlloft.JPG", title: "Carl Loft Model" },
      { id: 6, image: "/mnt/project/1c_carlloft.JPG", title: "Carl Loft Detail" }
    ],
    "Virtual Projects": [
      { id: 7, image: "/mnt/project/3cmokotow.jpg", title: "Mokotów Development" },
      { id: 8, image: "/mnt/project/3dmokotow.JPG", title: "Mokotów Visualization" },
      { id: 9, image: "/mnt/project/3aMokotow.jpg", title: "Mokotów Complex" },
      { id: 10, image: "/mnt/project/3fMokotow.jpg", title: "Mokotów Aerial View" },
      { id: 11, image: "/mnt/project/845674.jpg", title: "Commercial Complex" },
      { id: 12, image: "/mnt/project/7eLisiJar.jpg", title: "Lisi Jar Resort" },
      { id: 13, image: "/mnt/project/8aMuzeumHistoriiPolski.JPG", title: "Museum of Polish History" },
      { id: 14, image: "/mnt/project/9b_dom_na_skarpie.jpg", title: "Hillside House" },
      { id: 15, image: "/mnt/project/9d_dom_na_skarpie.JPG", title: "Hillside House Model" },
      { id: 16, image: "/mnt/project/4aOstoja.jpg", title: "Ostoja Complex" },
      { id: 17, image: "/mnt/project/2cKCK.JPG", title: "KCK Sports Complex" },
      { id: 18, image: "/mnt/project/10_BCK_100930wizualizacja_2.jpg", title: "BCK Visualization" }
    ],
    "Drawings": [
      { id: 19, image: "/mnt/project/IMG_0113.jpg", title: "Gothic Cathedral" },
      { id: 20, image: "/mnt/project/IMG_20190928_155041__Rotunda.JPG", title: "Rotunda Study" },
      { id: 21, image: "/mnt/project/IMG_0103.jpg", title: "Architectural Detail" },
      { id: 22, image: "/mnt/project/IMG_0107.jpg", title: "Interior Study" },
      { id: 23, image: "/mnt/project/IMG_5557.JPG", title: "Glass Objects" },
      { id: 24, image: "/mnt/project/IMG_5558.JPG", title: "Still Life" },
      { id: 25, image: "/mnt/project/IMG_5687.JPG", title: "Still Life Composition" },
      { id: 26, image: "/mnt/project/IMG_0004.jpg", title: "Chair Study" },
      { id: 27, image: "/mnt/project/IMG_0012.jpg", title: "Furniture Drawing" },
      { id: 28, image: "/mnt/project/IMG_0017.jpg", title: "Angel Figure" },
      { id: 29, image: "/mnt/project/IMG_0049.jpg", title: "Vintage Car" }
    ]
  };

  const experiences = [
    {
      title: "Founder",
      company: "Fintern.net & Femichain",
      period: "Mar 2025 – Present",
      location: "Remote/Onsite",
      achievements: [
        "Building blockchain education platform and support group for women in crypto",
        "Created networking space for women in Web3",
        "Leveraged 4+ years crypto investment experience"
      ]
    },
    {
      title: "Scrum Master / Team Player",
      company: "Scottish Tech Army",
      period: "Jan 2023 – Jan 2025",
      location: "Remote",
      achievements: [
        "Supporting tech teams across time zones with Agile/Kanban methodologies",
        "Used JIRA, Teams, Miro, Slack, GitHub for ticket resolution and project tracking"
      ]
    },
    {
      title: "Senior Account Manager / BDM",
      company: "Dell Technologies",
      period: "Jan 2022 – Jan 2023",
      location: "Warsaw",
      achievements: [
        "Achieved 170% quota, ranked #1 in Poland for server sales in first 6 months",
        "Managed multimillion dollar pipelines using Salesforce, CRM systems, Dynamics, SAP",
        "Delivered energy audits and automation solutions for B2B clients",
        "Closed deals during supply chain/inflation crisis"
      ]
    },
    {
      title: "Account Manager",
      company: "HP Inc.",
      period: "Mar 2021 – Dec 2021",
      location: "Prague",
      achievements: [
        "Closed deals during supply chain crisis",
        "Launched digital program for 10,000+ students",
        "Managed government relations across Poland"
      ]
    },
    {
      title: "Project Manager",
      company: "CAVisual + Freelance",
      period: "Jan 2020 – Mar 2021",
      location: "PL/CZ",
      achievements: [
        "Delivered €2M public park project under pandemic pressure",
        "Met 12-month deadline with outdated budget",
        "Used 3D printing & CNC machine to cut costs and time by 85%"
      ]
    },
    {
      title: "Product Strategy Manager",
      company: "Sprint",
      period: "May 2014 – Sep 2017",
      location: "Cracow",
      achievements: [
        "Boosted growth: 150% in Year 1, 200% in Year 2",
        "Pivoted from entertainment to construction sector",
        "Tripled customer acquisition with digital strategy",
        "Led full business transformation (1-year plan)",
        "Main bridge between tech teams and investor"
      ]
    },
    {
      title: "Architect & Visual Designer",
      company: "A-Projekt + Freelance",
      period: "Jan 2008 – Jan 2021",
      location: "Cracow",
      achievements: [
        "Designed 3D and physical models using Rhino, AutoCAD, 3ds Max, SketchUp",
        "Expanded into branding: logos, websites, product identity",
        "Negotiated and acquired new investors"
      ]
    }
  ];

  const skills = {
    "Technical": [
      "AI Implementation (GPT Certified 2023)",
      "3D Visualization (Rhino, AutoCAD, 3ds Max, SketchUp)",
      "CRM Systems (Salesforce, SAP, Dynamics)",
      "Project Management (JIRA, Agile, Kanban)",
      "3D Printing & CNC"
    ],
    "Business": [
      "Enterprise IT Sales (B2B)",
      "Digital Transformation",
      "Strategic Planning",
      "Business Development",
      "Stakeholder Management"
    ],
    "Creative": [
      "Architecture & Design",
      "Visual Identity & Branding",
      "Product Strategy",
      "Event Management"
    ],
    "Blockchain & Web3": [
      "Blockchain Education",
      "Crypto Investment (4+ years)",
      "Web3 Community Building",
      "Smart Contract Understanding"
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      const items = portfolioCategories[activeCategory];
      const currentIndex = items.findIndex(item => item.id === selectedImage.id);
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        setSelectedImage(items[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        setSelectedImage(items[nextIndex]);
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setSelectedImage(null);
        setIsAutoScrolling(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, activeCategory]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Enhanced 3D Spatial Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Multi-layered depth grid */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/20' : 'bg-gradient-to-br from-indigo-100/60 via-purple-100/40 to-pink-100/30'}`} />
          
          {/* 3D perspective grid layers */}
          <svg className="absolute inset-0 w-full h-full" style={{transform: 'perspective(1000px) rotateX(60deg)'}}>
            <defs>
              <pattern id="grid1" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke={darkMode ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.1)'} strokeWidth="1"/>
              </pattern>
              <pattern id="grid2" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M 150 0 L 0 0 0 150" fill="none" stroke={darkMode ? 'rgba(168, 85, 247, 0.1)' : 'rgba(168, 85, 247, 0.08)'} strokeWidth="1.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid1)" />
            <rect width="100%" height="100%" fill="url(#grid2)" opacity="0.5" transform="translate(25, 25)" />
          </svg>
        </div>

        {/* Floating geometric shapes with parallax */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full blur-3xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-purple-600/10 to-pink-600/10' 
                  : 'bg-gradient-to-br from-purple-200/20 to-pink-200/20'
              }`}
              style={{
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Radial gradient overlay for depth */}
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-radial-gradient from-transparent via-gray-900/30 to-gray-900/60' 
            : 'bg-radial-gradient from-transparent via-gray-50/30 to-gray-50/60'
        }`} style={{background: darkMode 
          ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(17, 24, 39, 0.3) 50%, rgba(17, 24, 39, 0.6) 100%)'
          : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(249, 250, 251, 0.3) 50%, rgba(249, 250, 251, 0.6) 100%)'
        }} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) scale(1); }
          33% { transform: translateY(-30px) translateX(20px) scale(1.05); }
          66% { transform: translateY(20px) translateX(-20px) scale(0.95); }
        }
      `}</style>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              NG
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-emerald-500 font-semibold'
                      : darkMode ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-600 hover:text-emerald-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg transition-colors"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-3 space-y-3">
              {['Home', 'About', 'Portfolio', 'CV', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'bg-emerald-500 text-white'
                      : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent leading-tight">
                Natalia Grzegorzek
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-3 lg:mb-4 font-light">
                Team Player • Architect • Tech Freak
              </p>
              <p className={`text-base sm:text-lg mb-6 lg:mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xl mx-auto lg:mx-0`}>
                Transforming complex challenges into solutions through technology, design, and strategic thinking.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-6 lg:mb-8">
                <a
                  href="mailto:natalia.grzegorzek@o2.pl"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className={`px-6 py-3 rounded-lg border-2 transition-all ${
                    darkMode 
                      ? 'border-gray-700 hover:border-emerald-500 hover:bg-gray-800' 
                      : 'border-gray-300 hover:border-emerald-500 hover:bg-gray-50'
                  }`}
                >
                  View Portfolio
                </button>
              </div>

              <div className="flex justify-center lg:justify-start gap-3">
                <a href="https://www.linkedin.com/in/natalia-grzegorzek" target="_blank" rel="noopener noreferrer" 
                   className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-emerald-500' : 'bg-gray-100 hover:bg-emerald-500'} hover:text-white`}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://grzegorz-ek.eu" target="_blank" rel="noopener noreferrer"
                   className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-emerald-500' : 'bg-gray-100 hover:bg-emerald-500'} hover:text-white`}>
                  <Globe className="w-5 h-5" />
                </a>
                <a href="tel:+48887037788"
                   className={`p-3 rounded-lg transition-all hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-emerald-500' : 'bg-gray-100 hover:bg-emerald-500'} hover:text-white`}>
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Video placeholder area */}
            <div className={`aspect-video rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-center`}>
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Video Introduction
                  <br />
                  <span className="text-xs">(Coming Soon)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Stepped Pyramid */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">About Me</h2>
          
          <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/80 backdrop-blur' : 'bg-white/80 backdrop-blur'} shadow-2xl mb-16`}>
            <p className="text-lg leading-relaxed mb-6">
              A <span className="font-semibold text-emerald-500">multidisciplinary professional</span> with 17+ years of experience spanning architecture, technology, and business leadership. My journey began with designing physical structures and evolved into building digital ecosystems, enterprise sales strategies, and Web3 communities.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From crafting <span className="font-semibold">3D architectural models</span> to managing <span className="font-semibold">multimillion-dollar enterprise deals</span> at Dell and HP, I thrive at the intersection of creativity and analytical thinking. Currently focused on blockchain education through fintern.net and empowering women in Web3 through Femichain.
            </p>
            <p className="text-lg leading-relaxed">
              My approach combines <span className="font-semibold text-teal-500">strategic vision</span>, <span className="font-semibold text-purple-500">technical execution</span>, and <span className="font-semibold text-pink-500">human-centered design</span>. Whether leading Agile teams, closing enterprise deals, or educating beginners about blockchain security, I believe in building solutions that create lasting impact.
            </p>
          </div>

          {/* Stepped Pyramid - Career Evolution */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-center">Career Evolution</h3>
            
            <div className="relative">
              {/* Step 5 - Top (2025-Present) */}
              <div className="flex justify-center mb-8">
                <div className={`w-full max-w-md p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-900/40 to-violet-900/30 border-2 border-purple-500/30' 
                    : 'bg-gradient-to-br from-purple-100/70 to-violet-100/60 border-2 border-purple-300/40'
                }`}>
                  <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    2025 – Present
                  </div>
                  <div className={`text-xl font-bold mb-3 ${darkMode ? 'text-purple-100' : 'text-purple-900'}`}>
                    Self Development • Knowledge Sharing
                  </div>
                  <div className={`text-sm leading-relaxed ${darkMode ? 'text-purple-200/90' : 'text-purple-800/90'}`}>
                    Blockchain education • Women in Web3 empowerment • Community mentorship • Public speaking
                  </div>
                </div>
              </div>

              {/* Step 4 (2023-Present) */}
              <div className="flex justify-center mb-8">
                <div className={`w-full max-w-xl p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-800/40 to-indigo-900/30 border-2 border-purple-500/30' 
                    : 'bg-gradient-to-br from-purple-200/70 to-indigo-200/60 border-2 border-purple-400/40'
                }`}>
                  <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    2023 – Present
                  </div>
                  <div className={`text-xl font-bold mb-3 ${darkMode ? 'text-purple-100' : 'text-purple-900'}`}>
                    Blockchain • Web3 • AI Innovation
                  </div>
                  <div className={`text-sm leading-relaxed ${darkMode ? 'text-purple-200/90' : 'text-purple-800/90'}`}>
                    AI/GPT certification • 4+ years crypto experience • Web3 community building • Smart contracts • Cutting-edge tech
                  </div>
                </div>
              </div>

              {/* Step 3 (2020-2023) */}
              <div className="flex justify-center mb-8">
                <div className={`w-full max-w-2xl p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-700/40 to-blue-900/30 border-2 border-purple-500/30' 
                    : 'bg-gradient-to-br from-purple-300/70 to-blue-300/60 border-2 border-purple-400/40'
                }`}>
                  <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                    2020 – 2023
                  </div>
                  <div className={`text-xl font-bold mb-3 ${darkMode ? 'text-purple-100' : 'text-purple-900'}`}>
                    Enterprise Sales • Business Development
                  </div>
                  <div className={`text-sm leading-relaxed ${darkMode ? 'text-purple-200/90' : 'text-purple-800/90'}`}>
                    Dell & HP • 170% quota • Multimillion $ pipelines • Salesforce/SAP/Dynamics • Digital transformation • Crisis management
                  </div>
                </div>
              </div>

              {/* Step 2 (2014-2023) */}
              <div className="flex justify-center mb-8">
                <div className={`w-full max-w-3xl p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-600/40 to-violet-800/30 border-2 border-purple-500/30' 
                    : 'bg-gradient-to-br from-purple-400/70 to-violet-400/60 border-2 border-purple-500/40'
                }`}>
                  <div className={`text-sm font-bold mb-2 ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                    2014 – 2023
                  </div>
                  <div className={`text-xl font-bold mb-3 ${darkMode ? 'text-purple-50' : 'text-purple-950'}`}>
                    Project/Product Manager • Team Leadership
                  </div>
                  <div className={`text-sm leading-relaxed ${darkMode ? 'text-purple-100/90' : 'text-purple-900/90'}`}>
                    Scrum Master • €2M+ projects • 150-200% growth • PSM I certified • Agile/Kanban • Cross-timezone coordination • Tech-business bridge
                  </div>
                </div>
              </div>

              {/* Step 1 - Foundation (2008-2021) */}
              <div className="flex justify-center">
                <div className={`w-full max-w-4xl p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gradient-to-br from-purple-900/50 to-indigo-900/40 border-3 border-purple-600/40' 
                    : 'bg-gradient-to-br from-purple-500/70 to-indigo-500/60 border-3 border-purple-600/50'
                }`}>
                  <div className={`text-base font-bold mb-3 ${darkMode ? 'text-purple-200' : 'text-purple-100'}`}>
                    2008 – 2021 • FOUNDATION
                  </div>
                  <div className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-white'}`}>
                    Architecture • Design • 3D Visualization
                  </div>
                  <div className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-purple-100/90' : 'text-white/90'}`}>
                    BSc Architecture • Physical mock-ups • Museum exhibitions • 3D modeling • Technical drawings • Branding • Event management (25+ events)
                  </div>
                  <div className={`text-xs font-semibold ${darkMode ? 'text-purple-200' : 'text-purple-100'}`}>
                    Rhino • AutoCAD • 3ds Max • SketchUp • 3D Printing • CNC
                  </div>
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="text-center mt-12">
                <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full shadow-xl ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-900/60 to-indigo-900/60 backdrop-blur-sm border-2 border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-100/80 to-indigo-100/80 backdrop-blur-sm border-2 border-purple-300/40'
                }`}>
                  <span className="text-3xl">▲</span>
                  <div className="text-left">
                    <div className={`text-base font-bold ${darkMode ? 'text-white' : 'text-purple-900'}`}>
                      17+ Years of Evolution
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-purple-200' : 'text-purple-700'}`}>
                      From Architecture to AI • Continuous Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallup Strengths - Subtle Colors */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">Gallup Strengths</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'Relationship Building', icon: '🤝', from: 'rose-400', to: 'pink-400' },
                { name: 'Strategic Thinking', icon: '🎯', from: 'blue-400', to: 'indigo-400' },
                { name: 'Execution', icon: '⚡', from: 'amber-400', to: 'orange-400' },
                { name: 'Woo', icon: '✨', from: 'purple-400', to: 'violet-400' },
                { name: 'Influencing', icon: '💫', from: 'teal-400', to: 'cyan-400' }
              ].map((strength) => (
                <div 
                  key={strength.name}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 ${
                    darkMode 
                      ? `bg-gradient-to-r from-${strength.from}/30 to-${strength.to}/30 border border-${strength.from}/50` 
                      : `bg-gradient-to-r from-${strength.from}/20 to-${strength.to}/20 border border-${strength.from}/30`
                  }`}
                >
                  <span className="text-2xl">{strength.icon}</span>
                  <span className={`font-semibold text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    {strength.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages - Balanced Proportions with Subtle Colors */}
          <div className="mt-16">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Polish - Native */}
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 w-64 ${
                darkMode 
                  ? 'bg-gradient-to-r from-red-500/30 to-rose-500/30 border border-red-500/50' 
                  : 'bg-gradient-to-r from-red-400/20 to-rose-400/20 border border-red-400/30'
              }`}>
                <span className="text-2xl">🇵🇱</span>
                <div className="flex flex-col flex-1">
                  <span className={`font-semibold text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Polish
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Native
                  </span>
                </div>
              </div>

              {/* English - C2 */}
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 w-64 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-500/50' 
                  : 'bg-gradient-to-r from-blue-400/20 to-indigo-400/20 border border-blue-400/30'
              }`}>
                <span className="text-2xl">🇬🇧</span>
                <div className="flex flex-col flex-1">
                  <span className={`font-semibold text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    English
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    C2 - Proficient
                  </span>
                </div>
              </div>

              {/* Russian - B2 */}
              <div className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 w-64 ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500/30 to-violet-500/30 border border-purple-500/50' 
                  : 'bg-gradient-to-r from-purple-400/20 to-violet-400/20 border border-purple-400/30'
              }`}>
                <span className="text-2xl">🇷🇺</span>
                <div className="flex flex-col flex-1">
                  <span className={`font-semibold text-base ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    Russian
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    B2 - Upper-Intermediate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(portfolioCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-105'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Continuous Scrolling Belt */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays for fade effect */}
            <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
              darkMode 
                ? 'bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent' 
                : 'bg-gradient-to-r from-blue-50 via-blue-50/50 to-transparent'
            }`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${
              darkMode 
                ? 'bg-gradient-to-l from-gray-900 via-gray-900/50 to-transparent' 
                : 'bg-gradient-to-l from-blue-50 via-blue-50/50 to-transparent'
            }`}></div>

            {/* Scrolling container */}
            <div 
              className="flex gap-6 animate-scroll"
              style={{
                animation: isAutoScrolling ? 'scroll 60s linear infinite' : 'none',
                width: 'max-content'
              }}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              {/* Duplicate items for seamless loop */}
              {[...portfolioCategories[activeCategory], ...portfolioCategories[activeCategory]].map((item, index) => (
                <div 
                  key={`${item.id}-${index}`}
                  className={`flex-shrink-0 w-72 sm:w-80 lg:w-96 cursor-pointer group ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                  onClick={() => {
                    setSelectedImage(item);
                    setIsAutoScrolling(false);
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className={`font-semibold text-center ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Control hint */}
            <div className={`text-center mt-6 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              <p>Hover to pause • Click image to view full size</p>
            </div>
          </div>
        </div>

        {/* Add animation keyframes */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* Image Modal with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => {
            setSelectedImage(null);
            setIsAutoScrolling(true);
          }}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
              setIsAutoScrolling(true);
            }}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/30 transition-all z-50 group"
            onClick={(e) => {
              e.stopPropagation();
              const items = portfolioCategories[activeCategory];
              const currentIndex = items.findIndex(item => item.id === selectedImage.id);
              const prevIndex = (currentIndex - 1 + items.length) % items.length;
              setSelectedImage(items[prevIndex]);
            }}
          >
            <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/30 transition-all z-50 group"
            onClick={(e) => {
              e.stopPropagation();
              const items = portfolioCategories[activeCategory];
              const currentIndex = items.findIndex(item => item.id === selectedImage.id);
              const nextIndex = (currentIndex + 1) % items.length;
              setSelectedImage(items[nextIndex]);
            }}
          >
            <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Image container */}
          <div className="max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg font-semibold">{selectedImage.title}</p>
          </div>

          {/* Image counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
            <p className="text-white text-sm">
              {portfolioCategories[activeCategory].findIndex(item => item.id === selectedImage.id) + 1} / {portfolioCategories[activeCategory].length}
            </p>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs">
            Use ← → arrows or ESC to navigate
          </div>
        </div>
      )}

      {/* CV Section */}
      <section id="cv" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Curriculum Vitae</h2>
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all text-sm sm:text-base whitespace-nowrap">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download PDF
            </button>
          </div>

          {/* Skills Grid */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Core Competencies</h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
                  <h4 className="text-lg sm:text-xl font-bold text-emerald-500 mb-3 sm:mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((skill, index) => (
                      <li key={index} className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        • {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className={`mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2">
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-emerald-500">{exp.title}</h4>
                    <p className="font-semibold text-sm sm:text-base">{exp.company}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className={`text-xs sm:text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.period}</p>
                    <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-10 sm:mt-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Education & Certifications</h3>
            <div className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-4`}>
              <h4 className="text-lg sm:text-xl font-bold text-emerald-500">BSc Architecture Engineering</h4>
              <p className="font-semibold text-sm sm:text-base">Cracow University of Technology</p>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sep 2008 – May 2013 • Cracow</p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { name: "PSM I – Scrum Master", org: "Scrum.org", year: "2022" },
                { name: "AI/GPT Certification", org: "Udemy", year: "2023" },
                { name: "Elements of AI", org: "University of Helsinki", year: "2023-2024" },
                { name: "Power Speaking", org: "Toastmasters", year: "2024-Present" }
              ].map((cert) => (
                <div key={cert.name} className={`p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow`}>
                  <p className="font-semibold text-sm sm:text-base">{cert.name}</p>
                  <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.org} • {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-indigo-900/20 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Get In Touch</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div className={`p-6 sm:p-8 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur' : 'bg-white/80 backdrop-blur'} shadow-lg`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:natalia.grzegorzek@o2.pl" className="flex items-center gap-3 group">
                  <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base break-all">natalia.grzegorzek@o2.pl</span>
                </a>
                <a href="tel:+48887037788" className="flex items-center gap-3 group">
                  <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base">+48 887 037 788</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm sm:text-base">Warsaw / Cracow, Poland</span>
                </div>
              </div>

              <div className={`mt-6 sm:mt-8 pt-6 sm:pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Connect Online</h4>
                <div className="flex gap-3 sm:gap-4">
                  <a 
                    href="https://www.linkedin.com/in/natalia-grzegorzek" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-emerald-500' : 'bg-gray-100 hover:bg-emerald-500'} hover:text-white group hover:scale-110`}
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                  <a 
                    href="https://grzegorz-ek.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg transition-all ${darkMode ? 'bg-gray-900 hover:bg-emerald-500' : 'bg-gray-100 hover:bg-emerald-500'} hover:text-white group hover:scale-110`}
                  >
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className={`p-6 sm:p-8 rounded-xl ${darkMode ? 'bg-gray-800/80 backdrop-blur' : 'bg-white/80 backdrop-blur'} shadow-lg`}>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Passions & Interests</h3>
              
              {/* Chess Passion */}
              <div className={`p-5 rounded-lg mb-6 ${darkMode ? 'bg-gradient-to-br from-amber-900/30 to-orange-900/30' : 'bg-gradient-to-br from-amber-50 to-orange-50'} border-2 ${darkMode ? 'border-amber-700/50' : 'border-amber-200'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">♟️</span>
                  <h4 className="font-bold text-lg text-amber-600">Chess Enthusiast</h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Strategic thinking on the board mirrors problem-solving in life. Chess teaches patience, 
                  foresight, and the beauty of calculated risks.
                </p>
              </div>

              {/* Life Curiosity */}
              <div className={`p-5 rounded-lg ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-violet-900/30' : 'bg-gradient-to-br from-purple-50 to-violet-50'} border-2 ${darkMode ? 'border-purple-700/50' : 'border-purple-200'}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🌟</span>
                  <h4 className="font-bold text-lg text-purple-600">Life Curiosity</h4>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Endlessly curious about technology, culture, and human potential. Every conversation 
                  is an opportunity to learn, and every challenge is a chance to grow.
                </p>
              </div>

              {/* Additional Interests */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm sm:text-base">Also Exploring</h4>
                <div className="flex flex-wrap gap-2">
                  {['Blockchain Research', 'Web3 Communities', 'AI Innovation', 'Architecture', 'Design Thinking'].map((interest) => (
                    <span 
                      key={interest}
                      className={`px-3 py-1 text-xs sm:text-sm rounded-full ${
                        darkMode 
                          ? 'bg-gradient-to-r from-teal-900/50 to-cyan-900/50 text-teal-300 border border-teal-700/50' 
                          : 'bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 border border-teal-200'
                      }`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-950 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Natalia Grzegorzek. All rights reserved.
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Last updated: October 2025
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default PortfolioWebsite;
