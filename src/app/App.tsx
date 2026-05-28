import { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { Menu, X, Mail, Phone, MapPin, Code, Palette, Smartphone, Globe, Sun, Moon, Zap, TrendingUp, Star, Instagram, Search, Shield, Target, BarChart3, Database, Cloud, Users, Linkedin } from 'lucide-react';
import logoPrincipal from '../imports/Logo_Principal.png';
import iconoPrincipal from '../imports/Icono_Principal.png';
import whatsappIcon from '../imports/whatsapp.png';
import consultorioImg from '../imports/consultorio.jpeg';
import depositoImg from '../imports/deposito.jpeg';
import tallerImg from '../imports/taller.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<'home' | 'paginas-web' | 'landing-pages' | 'sistemas-web'>('home');
  const [showPopup, setShowPopup] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-nosotras', 'servicios', 'portafolio', 'faq', 'contacto'];
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigateToService = (service: 'paginas-web' | 'landing-pages' | 'sistemas-web') => {
    setCurrentPage(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicios = [
    {
      icon: <Palette className="w-8 h-8" />,
      titulo: "Landing Pages",
      descripcion: "Todo en una sola página. Tu historia, servicios y contacto en un solo lugar, optimizado para que Google te encuentre y tus clientes te escriban directamente.",
      onClick: () => navigateToService('landing-pages')
    },
    {
      icon: <Globe className="w-8 h-8" />,
      titulo: "Páginas Web",
      descripcion: "Tu presencia digital completa. Varias páginas conectadas para mostrar detalladamente cada aspecto de lo que hacés, transmitiendo máxima confianza.",
      onClick: () => navigateToService('paginas-web')
    },
    {
      icon: <Code className="w-8 h-8" />,
      titulo: "Sistemas Web",
      descripcion: "Tu motor de gestión. Herramientas para manejar turnos, stock o clientes, automatizando las tareas de tu día a día.",
      onClick: () => navigateToService('sistemas-web')
    },
    {
      icon: <Zap className="w-8 h-8" />,
      titulo: "Soluciones a Medida",
      descripcion: "Desde E-commerce y blogs hasta portfolios profesionales. Desarrollamos la plataforma digital que tu visión requiera.",
      onClick: null
    }
  ];

  const proyectos = [
    {
      titulo: "Odontología Mica Merlo",
      categoria: "Landing Page",
      descripcion: "Sitio web profesional para clínica odontológica con presentación de servicios.",
      imagen: consultorioImg,
      tags: ["React", "TypeScript", "Responsive"],
      link: "https://odontologiamicamerlo.netlify.app/"
    },
    {
      titulo: "Distribuidora Gaitán",
      categoria: "Landing Page",
      descripcion: "Presencia digital profesional para distribuidora mayorista.",
      imagen: depositoImg,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://distribuidoragaitan.netlify.app/"
    },
    {
      titulo: "Radiadores Campanella",
      categoria: "Landing Page",
      descripcion: "Sitio web institucional para taller especializado en refrigeración automotor.",
      imagen: tallerImg,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://radiadorescampanella.netlify.app/"
    }
  ];

  const estadisticas = [
    { icon: <TrendingUp className="w-8 h-8" />, numero: "98%", texto: "Tasa de Éxito" },
    { icon: <Zap className="w-8 h-8" />, numero: "24/7", texto: "Soporte Disponible" },
    { icon: <Code className="w-8 h-8" />, numero: "100%", texto: "Dedicación" }
  ];

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulta de ${formData.nombre}`;
    const body = `Nombre: ${formData.nombre}%0AEmail: ${formData.email}%0ATelefono: ${formData.telefono}%0A%0AMensaje:%0A${formData.mensaje}`;
    window.location.href = `mailto:viennasystemscba@gmail.com?subject=${subject}&body=${body}`;
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );

  // Service Pages Components
  const PaginasWebPage = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-40 backdrop-blur-xl border-b ${theme === 'dark' ? 'border-white/10 bg-slate-950/80' : 'border-slate-200/80 bg-white/80'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-primary"
            >
              Vienna Systems
            </motion.button>
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ← Volver al inicio
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 bg-primary/5 p-8 rounded-3xl border border-primary/20"
          >
            <motion.div
              className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Globe className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Páginas Web
              <span className="block text-primary">Completas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tu casa en internet. Ideal para profesionales o empresas que necesitan mostrar mucha información organizada en diferentes pestañas (Inicio, Nosotros, Servicios, etc.).
            </p>
          </motion.div>

          {/* Explicación simple */}
          <div className="bg-primary/10 rounded-3xl p-8 mb-16 border border-primary/20 shadow-inner">
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">¿En qué se diferencia de una Landing?</h3>
            <p className="text-center text-lg text-muted-foreground">
              A diferencia de una Landing Page (que es una sola hoja larga), una <strong>Página Web</strong> permite al usuario navegar entre distintas secciones independientes. Es ideal para que te encuentren en Google y mostrar tu trayectoria con lujo de detalle.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Optimizado para SEO",
                description: "Hacemos que tu negocio aparezca cuando te buscan en Google"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Estructura Multi-página",
                description: "Secciones separadas para mayor claridad y orden"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "100% Responsive",
                description: "Adaptada para celulares, tablets y computadoras"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rendimiento Veloz",
                description: "Cargas rápidas para no perder visitantes"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Imagen de Marca",
                description: "Diseño profesional que transmite seriedad"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad y Soporte",
                description: "Tu sitio protegido y siempre en línea"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col text-center items-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Tecnologías que Utilizamos</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML', 'CSS', 'React', 'TypeScript'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para tener tu página web profesional?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Hablemos de tu proyecto y creemos algo increíble juntos.
            </p>
            <motion.a
              href="https://wa.me/5493517554706?text=%C2%A1Hola!%20Quiero%20una%20p%C3%A1gina%20web%20profesional."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
              Iniciar Proyecto
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );

  const LandingPagesPage = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-40 backdrop-blur-xl border-b ${theme === 'dark' ? 'border-white/10 bg-slate-950/80' : 'border-slate-200/80 bg-white/80'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-primary"
            >
              Vienna Systems
            </motion.button>
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ← Volver al inicio
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 bg-primary/5 p-8 rounded-3xl border border-primary/20"
          >
            <motion.div
              className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Palette className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Landing Pages
              <span className="block text-primary">Directas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Toda tu información en un solo lugar. Diseñamos una página única, sin pestañas, enfocada en que el cliente encuentre todo lo que necesita al hacer scroll y te contacte rápidamente.
            </p>
          </motion.div>

          {/* Explicación simple */}
          <div className="bg-primary/10 rounded-3xl p-8 mb-16 border border-primary/20 shadow-inner">
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">¿Cómo funciona?</h3>
            <p className="text-center text-lg text-muted-foreground">
              En una Landing Page, el usuario no salta de una página a otra. Es una experiencia fluida de arriba hacia abajo que incluye tu historia, servicios y contacto, optimizada para aparecer en Google (SEO) y ser fácil de leer en celulares.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "SEO Google",
                description: "Aparecé en los resultados de búsqueda"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Perfecta en Celulares",
                description: "Diseño responsive para todo dispositivo"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Carga Ultrarrápida",
                description: "Tus clientes no tienen que esperar"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Diseño Único",
                description: "Reflejamos la identidad de tu marca"
              },
              {
                icon: <Mail className="w-8 h-8" />, // Changed from BarChart3
                title: "Contacto Directo", // Changed from Analytics Integrado
                description: "Botones de WhatsApp y formularios simples" // Simplified
              },
              {
                icon: <Star className="w-8 h-8" />, // Changed from Smartphone
                title: "Mensaje Claro", // Changed from Mobile First
                description: "Información clave, sin rodeos" // Simplified
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col text-center items-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas una landing page que convierta?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Creamos páginas que no solo se ven bien, sino que generan resultados.
            </p>
            <motion.a
              href="https://wa.me/5493517554706?text=%C2%A1Hola!%20Quiero%20una%20landing%20page%20de%20alto%20impacto."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
              Crear mi Landing Page
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );

  const SistemasWebPage = () => (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 w-full z-40 backdrop-blur-xl border-b ${theme === 'dark' ? 'border-white/10 bg-slate-950/80' : 'border-slate-200/80 bg-white/80'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold text-primary"
            >
              Vienna Systems
            </motion.button>
            <motion.button
              onClick={navigateToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ← Volver al inicio
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 bg-primary/5 p-8 rounded-3xl border border-primary/20"
          >
            <motion.div
              className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sistemas Web
              <span className="block text-primary">a Medida</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Olvidate del Excel y los papeles. Creamos herramientas que se encargan de organizar tu negocio: gestión de stock, cobros, turnos y bases de datos.
            </p>
          </motion.div>

          {/* Explicación simple */}
          <div className="bg-primary/10 rounded-3xl p-8 mb-16 border border-primary/20 shadow-inner">
            <h3 className="text-2xl font-bold mb-4 text-center text-primary">¿Cómo te ayuda esto?</h3>
            <p className="text-center text-lg text-muted-foreground">
              Un <strong>Sistema Web</strong> es como tener un asistente digital que nunca duerme. Centraliza toda la información de tu negocio en un solo lugar seguro y accesible desde cualquier celular o PC.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Bases de Datos",
                description: "Diseño y optimización de bases de datos escalables"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad Avanzada",
                description: "Protección de datos y autenticación robusta"
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud Ready",
                description: "Sistemas preparados para la nube y escalabilidad"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Multi-usuario",
                description: "Sistemas con roles, permisos y gestión de usuarios"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Dashboards",
                description: "Paneles de control con métricas y reportes"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "APIs RESTful",
                description: "Integraciones y conexiones con otros sistemas"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-lg border border-border/50 h-full flex flex-col text-center items-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold mb-8">Stack Tecnológico</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Frontend', tech: ['HTML', 'CSS', 'React', 'TypeScript'] },
                { name: 'Backend', tech: ['Node.js', 'Next.js', 'JS'] },
                { name: 'Database', tech: ['PostgreSQL', 'Supabase'] },
                { name: 'Deploy', tech: ['Vercel', 'Railway'] }
              ].map((stack, index) => (
                <div key={stack.name} className="bg-card p-6 rounded-2xl shadow-lg border border-border/50">
                  <h3 className="text-lg font-bold mb-4 text-primary">{stack.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas un sistema web personalizado?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Desarrollamos soluciones a medida que se adaptan perfectamente a tus procesos.
            </p>
            <motion.a
              href="https://wa.me/5493517554706?text=%C2%A1Hola!%20Quiero%20un%20sistema%20web%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 object-contain" />
              Desarrollar mi Sistema
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );

  // Render based on current page
  if (currentPage === 'paginas-web') {
    return <PaginasWebPage />;
  }

  if (currentPage === 'landing-pages') {
    return <LandingPagesPage />;
  }

  if (currentPage === 'sistemas-web') {
    return <SistemasWebPage />;
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Floating Particles */}
      <FloatingParticles />
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border shadow-lg"
      >
        <div className="w-full px-8 sm:px-12 lg:px-16">
          <div className="flex justify-between items-center h-24">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <img src={iconoPrincipal} alt="Vienna Systems" className="h-20 drop-shadow-lg" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {['inicio', 'sobre-nosotras', 'servicios', 'portafolio', 'faq', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm uppercase tracking-wider transition-colors relative ${
                    activeSection === item ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {item.replace('-', ' ')}
                  {activeSection === item && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </button>
              ))}

              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-primary/10 text-primary"
              >
                {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-card"
          >
            <nav className="flex flex-col p-4 gap-4">
              {['inicio', 'sobre-nosotras', 'servicios', 'portafolio', 'faq', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-left text-sm uppercase tracking-wider py-2 ${
                    activeSection === item ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-primary/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgb(107, 140, 174, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(107, 140, 174, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
              >
                Desarrollo Web Freelance
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transformamos{' '}
                <motion.span
                  className="text-primary inline-block"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #6B8CAE, #7fa3c9, #6B8CAE)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  ideas
                </motion.span> en{' '}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-primary">realidad digital</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/20 -z-10"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Somos <strong className="text-foreground">Vienna Systems</strong>, un equipo freelance apasionado por crear soluciones web
                únicas y efectivas para tu negocio.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 140, 174, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contacto')}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">Comenzar Proyecto</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('portafolio')}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary/5 transition-colors backdrop-blur-sm"
                >
                  Ver Proyectos
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center relative"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={iconoPrincipal}
                    alt="Vienna Systems Icon"
                    className="relative w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Orbiting elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary/40 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      rotate: [0 + i * 120, 360 + i * 120],
                      x: [0, 120 * Math.cos((i * 120) * Math.PI / 180)],
                      y: [0, 120 * Math.sin((i * 120) * Math.PI / 180)],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Estadísticas Section */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estadisticas.map((stat, index) => (
              <motion.div
                key={stat.texto}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block mb-4 text-primary-foreground/80"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className="text-4xl md:text-5xl mb-2"
                >
                  {stat.numero}
                </motion.div>
                <div className="text-sm md:text-base opacity-90">{stat.texto}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotras" className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgb(107, 140, 174, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgb(107, 140, 174, 0.1) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgb(107, 140, 174, 0.1) 75%), linear-gradient(-45deg, transparent 75%, rgb(107, 140, 174, 0.1) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
            >
              Sobre Nosotras
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Sobre Nosotras</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más que una empresa, somos un equipo apasionado por la tecnología y el diseño
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl mb-4">Nuestra Historia</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Somos <strong className="text-foreground font-semibold">Vienna Systems</strong>, un equipo de dos analistas de sistemas egresadas del Colegio Universitario IES. Nuestra formación nos permite entender procesos y optimizarlos, generando soluciones técnicas desde la base, asegurando que cada desarrollo sea eficiente y escalable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No nos limitamos a ejecutar; nos involucramos en entender la lógica de cada negocio para que el resultado final tenga un propósito claro.
                  Nuestro objetivo es crear soluciones que no solo funcionen con precisión técnica, sino que también logren reflejar con coherencia la identidad y los valores de la marca.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
                <h4 className="text-xl mb-6">Nuestros Valores</h4>
                <div className="space-y-4">
                  {[
                    { icon: <Zap className="w-5 h-5" />, titulo: "Innovación Constante", desc: "Siempre buscamos las mejores tecnologías y tendencias para tus proyectos." },
                    { icon: <Star className="w-5 h-5" />, titulo: "Calidad Superior", desc: "Cada línea de código está escrita con dedicación y atención al detalle." },
                    { icon: <Mail className="w-5 h-5" />, titulo: "Comunicación Transparente", desc: "Mantenemos una comunicación clara y honesta durante todo el proceso." },
                    { icon: <TrendingUp className="w-5 h-5" />, titulo: "Resultados Medibles", desc: "Nos enfocamos en objetivos claros y métricas que demuestren el éxito." }
                  ].map((valor, index) => (
                    <motion.div
                      key={valor.titulo}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        {valor.icon}
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{valor.titulo}</h5>
                        <p className="text-sm text-muted-foreground">{valor.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 relative overflow-hidden">
        <FloatingParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
            >
              Lo que hacemos
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones completas de desarrollo web adaptadas a tus necesidades
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <motion.button
                key={servicio.titulo}
                onClick={servicio.onClick || undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`bg-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-border/50 relative overflow-hidden group text-center flex flex-col items-center w-full h-full ${servicio.onClick ? 'cursor-pointer' : 'cursor-default'}`}
                disabled={!servicio.onClick}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 relative mx-auto"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {servicio.icon}
                </motion.div>
                <h3 className="text-xl mb-3 relative">{servicio.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed relative">
                  {servicio.descripcion}
                </p>
                {servicio.onClick && (
                  <div className="mt-auto pt-6 flex items-center justify-center text-primary font-bold text-sm">
                    <span>Conocer más</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    > →</motion.span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-12 italic text-center">
            * Todos nuestros desarrollos incluyen optimización para dispositivos móviles y tablets de forma nativa.
          </p>
        </div>
      </section>

      {/* Portafolio Section */}
      <section id="portafolio" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B8CAE' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
            >
              Nuestro Trabajo
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Portafolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Algunos de los proyectos que hemos desarrollado con amor y dedicación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.titulo}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${proyecto.link ? 'cursor-pointer' : ''}`}
                onClick={() => proyecto.link && window.open(proyecto.link, '_blank')}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-card border border-border">
                  <div className="relative overflow-hidden h-64">
                    <motion.div
                      className="w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm mb-2 opacity-90">{proyecto.categoria}</p>
                        <h3 className="text-xl mb-2">{proyecto.titulo}</h3>
                        <p className="text-sm opacity-90 mb-3">{proyecto.descripcion}</p>
                        <div className="flex flex-wrap gap-2">
                          {proyecto.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary mb-1">{proyecto.categoria}</p>
                    <h3 className="text-lg">{proyecto.titulo}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(135deg, rgb(107, 140, 174, 0.1) 25%, transparent 25%), linear-gradient(225deg, rgb(107, 140, 174, 0.1) 25%, transparent 25%), linear-gradient(135deg, transparent 75%, rgb(107, 140, 174, 0.1) 75%), linear-gradient(225deg, transparent 75%, rgb(107, 140, 174, 0.1) 75%)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
            >
              Preguntas Frecuentes
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Resolvemos tus Dudas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas saber sobre nuestros servicios de desarrollo web
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                pregunta: "¿Cómo trabajamos en nuestros proyectos?",
                respuesta: "Trabajamos de forma colaborativa y transparente. Iniciamos con una reunión de diagnóstico para entender tus necesidades, definimos el diseño de tu página, desarrollamos y, finalmente, te la entregamos ya publicada. Además, te acompañamos en el post-lanzamiento por si queda algo por corregir."
              },
              {
                pregunta: "¿Cuánto tiempo tarda en hacerse una página web?",
                respuesta: "El tiempo depende de la complejidad del proyecto. Una landing page simple demora menos de 1 semana, una pagina web completa puede llevar entre 1-2 semanas, y un Sistema de Gestión se entrega por etapas según su complejidad."
              },
              {
                pregunta: "¿Qué incluye el SEO en sus servicios?",
                respuesta: "En todos nuestros desarrollos aplicamos SEO técnico inicial. Esto significa que optimizamos la estructura de la página, la velocidad de carga y las etiquetas necesarias para que los buscadores (como Google) puedan indexar tu sitio correctamente desde el primer día."
              },
              {
                pregunta: "¿Hacen sistemas a medida para empresas o emprendimientos?",
                respuesta: "Sí, desarrollamos sistemas personalizados según las necesidades específicas de tu negocio. Si necesitás digitalizar procesos, controlar stock, gestionar turnos o administrar clientes, diseñamos una herramienta desde cero que se adapte a tu flujo de trabajo."
              },
              {
                pregunta: "¿Ofrecen servicios de dominio y hosting?",
                respuesta: "Sí, podemos ayudarte con el registro de dominio y configuración de hosting. Si ya tenés un servicio contratado, nos encargamos de realizar la implementación allí; y si no tenés nada, te ayudamos a elegir la mejor opción según el proyecto."
              },
              {
                pregunta: "¿Ofrecen soporte después del lanzamiento?",
                respuesta: "Por supuesto. Una vez entregado el proyecto, ofrecemos un período de acompañamiento para resolver dudas, corregir errores o agregar funcionalidades."
              },
              {
                pregunta: "¿Pueden trabajar con mi diseño existente?",
                respuesta: "¡Claro! Si ya tienes un diseño (en Figma, Adobe XD, o incluso bocetos en papel), podemos implementarlo fielmente. También podemos crear el diseño desde cero si lo prefieres."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary/5 transition-colors">
                    <h3 className="text-lg font-semibold pr-4">{faq.pregunta}</h3>
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.respuesta}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">¿Tienes alguna otra pregunta?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              Contáctanos
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <FloatingParticles />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm backdrop-blur-sm border border-primary/20"
            >
              Hablemos
            </motion.div>
            <h2 className="text-4xl md:text-5xl mb-4">Trabajemos Juntos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Contáctanos y hagamos realidad tu visión
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
                <h3 className="text-2xl mb-6">Envíanos un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm">Nombre</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Teléfono</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="+54 9 351 755 4706"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Mensaje</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(107, 140, 174, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Enviar Email
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-6 h-6" />, titulo: "Email", texto: "viennasystemscba@gmail.com", href: "mailto:viennasystemscba@gmail.com" },
                    { icon: <Phone className="w-6 h-6" />, titulo: "Teléfono", texto: "+54 9 351 755 4706", href: "tel:+5493517554706" },
                    { icon: <Linkedin className="w-6 h-6" />, titulo: "LinkedIn", texto: "Vienna Systems", href: "https://www.linkedin.com/in/vienna-systems" },
                    { icon: <Instagram className="w-6 h-6" />, titulo: "Instagram", texto: "@vienna.systems", href: "https://instagram.com/vienna.systems" },
                    { icon: <MapPin className="w-6 h-6" />, titulo: "Ubicación", texto: "Cordoba Capital Argentina", href: "#" }
                  ].map((item, index) => (
                    <motion.a
                      key={item.titulo}
                      href={item.href}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="mb-1">{item.titulo}</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.texto}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-xl border border-border relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                <h4 className="text-xl mb-4 relative">¿Por qué elegirnos?</h4>
                <ul className="space-y-3 text-muted-foreground relative">
                  {[
                    "Soluciones personalizadas para cada cliente",
                    "Comunicación directa y transparente",
                    "Diseños modernos y responsivos",
                    "Soporte post-lanzamiento"
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <motion.span
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        className="text-primary mt-1 inline-block"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </motion.span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <img
                  src={logoPrincipal}
                  alt="Vienna Systems"
                  className="h-10 mb-4"
                />
              </motion.div>
              <p className="text-muted-foreground">
                Transformando ideas en experiencias digitales excepcionales.
              </p>
            </div>
            <div>
              <h4 className="mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {['inicio', 'sobre-nosotras', 'servicios', 'portafolio', 'faq', 'contacto'].map((item) => (
                  <motion.button
                    key={item}
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(item)}
                    className="block text-muted-foreground hover:text-primary transition-colors capitalize"
                  >
                    {item.replace('-', ' ')}
                  </motion.button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4">Síguenos</h4>
              <p className="text-muted-foreground mb-4">Mantente conectado con nosotros</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-4">
                <motion.a
                  href="https://instagram.com/vienna.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @vienna.systems
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/vienna-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2026 Vienna Systems. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Modern Popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20, x: 20 }}
        animate={showPopup ? { opacity: 1, scale: 1, y: 0, x: 0 } : { opacity: 0, scale: 0.5, y: 20, x: 20 }}
        className={`fixed bottom-24 right-6 z-50 max-w-[280px] rounded-3xl p-5 shadow-2xl backdrop-blur-xl border ${
          theme === 'dark' 
            ? 'bg-slate-900/90 border-white/10 text-white' 
            : 'bg-white/90 border-slate-200 text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors"
        >
          <X className="w-4 h-4 opacity-50" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <img src={iconoPrincipal} alt="Vienna" className="w-6 h-6 object-contain" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full" />
          </div>
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-wider">Vienna Systems</p>
            <p className="text-[10px] opacity-60">En línea ahora</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-4">
          ¡Hola! 👋 ¿Tenés alguna idea en mente? Escribinos y la hacemos realidad.
        </p>

        <a
          href="https://wa.me/5493517554706?text=%C2%A1Hola!%20Quiero%20iniciar%20mi%20pr%C3%B3ximo%20proyecto%20web."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-2xl text-sm font-bold transition-all shadow-lg shadow-green-500/20"
        >
          Chatear ahora
        </a>
        
        {/* Triangle Arrow */}
        <div className={`absolute -bottom-2 right-8 w-4 h-4 rotate-45 border-r border-b ${theme === 'dark' ? 'bg-slate-900/90 border-white/10' : 'bg-white/90 border-slate-200'}`} />
      </motion.div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5493517554706?text=%C2%A1Hola!%20Quiero%20iniciar%20mi%20pr%C3%B3ximo%20proyecto%20web."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-3xl transition-shadow"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
        </motion.div>
      </motion.a>
    </div>
  );
}
