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
      { id: 2, image: "/mnt/project/IMG_20190928_172358__Muzeum.JPG", title: "Museum Tešínska Model" },
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
    "Drawing": [
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

  const nextSlide = () => {
    const items = portfolioCategories[activeCategory];
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    const items = portfolioCategories[activeCategory];
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling || selectedImage) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoScrolling, selectedImage, activeCategory, currentSlide]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'cv', 'portfolio', 'contact'];
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              NG
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'CV', 'Portfolio', 'Contact'].map((item) => (
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

              {/* Mobile menu button */}
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
              {['Home', 'About', 'CV', 'Portfolio', 'Contact'].map((item) => (
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
            <div className={`aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 ${darkMode ? 'border-gray-800 bg-gray-800' : 'border-emerald-200 bg-emerald-50'} w-full max-w-2xl mx-auto lg:mx-0`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-6 sm:p-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className={`text-base sm:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Introduction Video
                  </p>
                  <p className={`text-sm mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">About Me</h2>
          
          {/* Centered Professional Journey */}
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <p className={`mb-4 text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              With 16+ years of passion for technology and continuous learning, my career spans architecture, 
              project management, enterprise IT sales, and blockchain innovation. I transform challenges into 
              solutions through strategic connections, automation, and relentless innovation.
            </p>
            <p className={`text-sm sm:text-base lg:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              My diverse experience includes delivering €2M+ projects under pressure, achieving 170% sales quotas, 
              and building educational platforms that empower communities.
            </p>
          </div>

          {/* Skills Pyramid - Real Triangle Shape using CSS */}
          <div className="mb-12 lg:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Skills Evolution</h3>
            <div className="max-w-4xl mx-auto">
              {/* Pyramid Container */}
              <div className="relative" style={{ paddingBottom: '80%' }}>
                {/* Actual CSS Triangle Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full flex items-end justify-center">
                    <div 
                      className={`absolute bottom-0`}
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '280px solid transparent',
                        borderRight: '280px solid transparent',
                        borderBottom: darkMode ? '400px solid rgba(31, 41, 55, 0.8)' : '400px solid rgba(243, 244, 246, 0.9)',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Pyramid Levels - Positioned absolutely */}
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                  
                  {/* Peak: Self Development */}
                  <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[25%] min-w-[120px]">
                    <div className={`text-center p-2 rounded-lg ${darkMode ? 'bg-pink-900/60 border border-pink-700' : 'bg-pink-100/90 border border-pink-300'} backdrop-blur-sm`}>
                      <div className="text-[10px] font-bold text-pink-600 mb-0.5">2025</div>
                      <div className="text-xs font-semibold leading-tight">Self Development</div>
                      <div className={`text-[9px] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Knowledge Sharing</div>
                    </div>
                  </div>

                  {/* Level 5: AI & Blockchain */}
                  <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[35%] min-w-[160px]">
                    <div className={`text-center p-2 rounded-lg ${darkMode ? 'bg-emerald-900/60 border border-emerald-700' : 'bg-emerald-100/90 border border-emerald-300'} backdrop-blur-sm`}>
                      <div className="text-[10px] font-bold text-emerald-600 mb-0.5">2023-Present</div>
                      <div className="text-xs font-semibold leading-tight">AI • Blockchain • Web3</div>
                    </div>
                  </div>

                  {/* Level 4: Agile */}
                  <div className="absolute top-[38%] left-1/2 -translate-x-1/2 w-[45%] min-w-[200px]">
                    <div className={`text-center p-2 rounded-lg ${darkMode ? 'bg-teal-900/60 border border-teal-700' : 'bg-teal-100/90 border border-teal-300'} backdrop-blur-sm`}>
                      <div className="text-[10px] font-bold text-teal-600 mb-0.5">2023-2025</div>
                      <div className="text-xs font-semibold leading-tight">Scrum Master • Agile</div>
                    </div>
                  </div>

                  {/* Level 3: Enterprise Tech */}
                  <div className="absolute top-[54%] left-1/2 -translate-x-1/2 w-[55%] min-w-[240px]">
                    <div className={`text-center p-2.5 rounded-lg ${darkMode ? 'bg-purple-900/60 border border-purple-700' : 'bg-purple-100/90 border border-purple-300'} backdrop-blur-sm`}>
                      <div className="text-[10px] font-bold text-purple-600 mb-0.5">2020-2023</div>
                      <div className="text-xs font-semibold leading-tight">Enterprise IT Sales • CRM</div>
                    </div>
                  </div>

                  {/* Level 2: Business Strategy */}
                  <div className="absolute top-[70%] left-1/2 -translate-x-1/2 w-[65%] min-w-[280px]">
                    <div className={`text-center p-2.5 rounded-lg ${darkMode ? 'bg-blue-900/60 border border-blue-700' : 'bg-blue-100/90 border border-blue-300'} backdrop-blur-sm`}>
                      <div className="text-[10px] font-bold text-blue-600 mb-0.5">2014-2021</div>
                      <div className="text-xs sm:text-sm font-semibold leading-tight">Product Strategy • Project Management</div>
                    </div>
                  </div>

                  {/* Base: Architecture */}
                  <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[75%] min-w-[320px]">
                    <div className={`text-center p-3 rounded-lg ${darkMode ? 'bg-amber-900/60 border-2 border-amber-700' : 'bg-amber-100/90 border-2 border-amber-300'} backdrop-blur-sm`}>
                      <div className="text-xs font-bold text-amber-600 mb-1">2008-2021 • Foundation</div>
                      <div className="text-sm sm:text-base font-semibold leading-tight">Architecture • Design • 3D Visualization</div>
                      <div className={`text-[10px] mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Rhino, AutoCAD, 3ds Max, SketchUp</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="text-center mt-6">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100'}`}>
                  <span className="text-2xl">▲</span>
                  <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    16+ years of continuous evolution
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallup Strengths - Single Line Design */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Gallup Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { name: 'Relationship Building', icon: '🤝', color: 'from-rose-500 to-pink-500' },
                { name: 'Strategic Thinking', icon: '🎯', color: 'from-blue-500 to-indigo-500' },
                { name: 'Execution', icon: '⚡', color: 'from-amber-500 to-orange-500' },
                { name: 'Woo', icon: '✨', color: 'from-purple-500 to-violet-500' },
                { name: 'Influencing', icon: '💫', color: 'from-teal-500 to-cyan-500' }
              ].map((strength) => (
                <div 
                  key={strength.name}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r ${strength.color} text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}
                >
                  <span className="text-xl sm:text-2xl">{strength.icon}</span>
                  <span className="font-semibold text-sm sm:text-base whitespace-nowrap">{strength.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Section - ATS Compliant */}
      <section id="cv" className={`py-12 sm:py-16 lg:py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Professional Experience</h2>
            <a
              href="/mnt/project/Natalia_Grzegorzek_CV.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base whitespace-nowrap"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download PDF
            </a>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`p-4 sm:p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3 sm:mb-4">
                  <div className="mb-2 lg:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-emerald-500">{exp.title}</h3>
                    <p className="text-base sm:text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="lg:text-right">
                    <p className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.period}</p>
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

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Portfolio</h2>
          <p className={`text-center mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Architecture, 3D visualizations, and technical drawings
          </p>

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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          onClick={() => {
            setSelectedImage(null);
            setIsAutoScrolling(true);
          }}
        >
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => {
              setSelectedImage(null);
              setIsAutoScrolling(true);
            }}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="max-w-7xl max-h-[90vh] w-full">
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70 mt-2">{activeCategory}</p>
            </div>
          </div>
        </div>
      )}

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
              Last updated: September 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
