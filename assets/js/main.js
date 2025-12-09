// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
}

// ========================================
// PROYECTOS - AQUÍ AGREGAS TUS PROYECTOS
// ========================================
const projects = [
    // POWER BI PROJECTS
    {
        title: "Dashboard ventas vs presupuesto comercial",
        description: "Comparativo dinámico de ventas vs ppto con KPIs de cumplimiento, variaciones y desglose por cliente, canal y equipo comercial.",
        category: "powerbi",
        icon: "fas fa-chart-line",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI" // REEMPLAZA CON TU LINK
    },
    {
        title: "Dashboard de Cumplimiento de Visitas Comerciales",
        description: "Control de visitas programadas vs realizadas, con KPIs de cumplimiento y desglose por cliente, vendedor y zona comercial.",
        category: "powerbi",
        icon: "fas fa-street-view",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Dashboard de venta perdida",
        description: "Identificación de oportunidades no concretadas, causas de pérdida y análisis por cliente, producto y canal comercial.",
        category: "powerbi",
        icon: "fas fa-arrow-down",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint", "outlook"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Segumiento desarrollos BI",
        description: "Control del estado de requerimientos BI, con seguimiento por proyecto, prioridad y avances del equipo.",
        category: "powerbi",
        icon: "fas fa-tasks",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint", "List microsoft"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Alertas sicetac",
        description: "Monitoreo de indicadores regulatorios con alertas tempranas sobre desviaciones e incumplimientos según la norma SIETAC en Colombia.",
        category: "powerbi",
        icon: "fas fa-exclamation-triangle",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Cierre corredores",
        description: "Control de placas que realizan cierre de rutas entre el mismo origen y destino, permitiendo validar retornos, identificar anomalías y optimizar la operación logística.",
        category: "powerbi",
        icon: "fas fa-exchange-alt",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Indicadores hojas de vida",
        description: "Seguimiento a los tiempos del proceso de vinculación de nuevos conductores, evaluando la gestión del analista de seguridad desde la recepción del documento hasta la aprobación final.",
        category: "powerbi",
        icon: "fas fa-id-card",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Indicadores de deserción, recuperación",
        description: "Seguimiento a placas recuperadas, casos de deserción y altas de nuevas placas, facilitando el control operativo y la gestión continua de la flota.",
        category: "powerbi",
        icon: "fas fa-truck",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Enturnamiento de vehículos",
        description: "Control de turnos asignados por vehículo, optimizando la rotación operativa y el uso eficiente de la flota.",
        category: "powerbi",
        icon: "fas fa-sync-alt",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Reporte de variación gastos",
        description: "Análisis de variaciones en los gastos de compras con comparativos por periodo, categoría y proveedor.",
        category: "powerbi",
        icon: "fas fa-chart-line",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },
    {
        title: "Reporte de indicadores de selección",
        description: "Métricas clave del proceso de reclutamiento, incluyendo tiempos de selección, efectividad por vacante y gestión de candidatos.",
        category: "powerbi",
        icon: "fas fa-user-check",
        tags: ["Power BI", "DAX", "Power Query", "SQL Server", "Sharepoint", "List microsoft"],
        link: "https://app.powerbi.com/view?r=TU_LINK_AQUI"
    },



    // PYTHON PROJECTS
    /*{
        title: "Análisis Predictivo de Ventas",
        description: "Modelo de machine learning para predicción de ventas usando regresión y series temporales. Implementación con scikit-learn y análisis de features.",
        category: "python",
        icon: "fas fa-chart-area",
        tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        link: "https://github.com/tu-usuario/proyecto-1" // REEMPLAZA CON TU LINK
    },
    {
        title: "ETL Automatizado",
        description: "Pipeline completo de extracción, transformación y carga de datos desde múltiples fuentes hacia SQL Server y Power BI.",
        category: "python",
        icon: "fas fa-sync",
        tags: ["Python", "Pandas", "SQL", "Automation"],
        link: "https://github.com/tu-usuario/proyecto-2"
    },
    {
        title: "Análisis de Customer Churn",
        description: "Modelo predictivo para identificar clientes en riesgo de abandono. Incluye análisis exploratorio, feature engineering y clasificación.",
        category: "ml",
        icon: "fas fa-users",
        tags: ["Python", "Machine Learning", "Classification"],
        link: "https://github.com/tu-usuario/proyecto-3"
    },
    {
        title: "Dashboard Interactivo con Streamlit",
        description: "Aplicación web interactiva para análisis de datos en tiempo real con visualizaciones dinámicas y filtros personalizados.",
        category: "python",
        icon: "fas fa-desktop",
        tags: ["Python", "Streamlit", "Plotly", "Data Viz"],
        link: "https://github.com/tu-usuario/proyecto-4"
    },*/

    // POWER APPS PROJECTS
    /*{
        title: "Monitor de Precios de Competencia",
        description: "Sistema automatizado de scraping para monitoreo de precios de e-commerce. Alertas automáticas y análisis de tendencias de pricing.",
        category: "powerapps",
        icon: "fas fa-spider",
        tags: ["Python", "BeautifulSoup", "Selenium", "Automation"],
        link: "https://github.com/tu-usuario/proyecto-5"
    },
    {
        title: "Extracción de Datos Inmobiliarios",
        description: "Web scraper para recopilación de datos de propiedades de múltiples portales. Análisis de mercado y detección de oportunidades.",
        category: "powerapps",
        icon: "fas fa-home",
        tags: ["Python", "Scrapy", "Real Estate", "API"],
        link: "https://github.com/tu-usuario/proyecto-6"
    },
    {
        title: "Análisis de Sentimientos en Redes Sociales",
        description: "Scraping y análisis de opiniones de clientes en redes sociales. Procesamiento de lenguaje natural para detección de sentimientos.",
        category: "powerapps",
        icon: "fas fa-comments",
        tags: ["Python", "NLP", "Twitter API", "Sentiment Analysis"],
        link: "https://github.com/tu-usuario/proyecto-7"
    },
    {
        title: "Agregador de Noticias del Sector",
        description: "Sistema de recopilación automática de noticias relevantes de múltiples fuentes con categorización y alertas personalizadas.",
        category: "powerapps",
        icon: "fas fa-newspaper",
        tags: ["Python", "RSS", "Web Scraping", "Automation"],
        link: "https://github.com/tu-usuario/proyecto-8"
    },*/

    // POWER AUTOMATE PROJECTS
    /*{
        title: "Segmentación de Clientes (Clustering)",
        description: "Análisis de segmentación usando K-Means y algoritmos de clustering para identificar grupos de clientes y estrategias personalizadas.",
        category: "powerautomate",
        icon: "fas fa-project-diagram",
        tags: ["Python", "Clustering", "K-Means", "Segmentation"],
        link: "https://github.com/tu-usuario/proyecto-9"
    },
    {
        title: "Sistema de Recomendación",
        description: "Motor de recomendaciones basado en filtrado colaborativo y content-based filtering para e-commerce.",
        category: "powerautomate",
        icon: "fas fa-magic",
        tags: ["Python", "Recommendation System", "Collaborative Filtering"],
        link: "https://github.com/tu-usuario/proyecto-10"
    },
    {
        title: "Detección de Fraudes",
        description: "Modelo de machine learning para detección de transacciones fraudulentas usando técnicas de anomaly detection y clasificación.",
        category: "powerautomate",
        icon: "fas fa-shield-alt",
        tags: ["Python", "Anomaly Detection", "Classification", "Finance"],
        link: "https://github.com/tu-usuario/proyecto-11"
    }*/

    // DESARROLLOS WEB PROJECTS
    {
        title: "Wep spa Yaneth Jimenez",
        description: "Desarrollo de una plataforma web para un spa de uñas que incluye página principal informativa, sistema de registro e inicio de sesión para manicuristas y administradores, y herramientas internas para gestionar citas, servicios y operaciones del negocio.",
        category: "Web",
        icon: "fas fa-globe",
        tags: ["HTML", "CSS", "JS", "NODE JS", "MYSQL WORKBENCH"],
        link: "https://spa-yaneth-jimenez.onrender.com"
    },
];

// Variable para mantener el filtro actual
// Cuando ingresemos todas las categorias cambiar variable por all
let currentFilter = ''; 

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${currentFilter === 'all' || currentFilter === project.category ? 'active' : ''}`;
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank">
                    Ver Proyecto <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Filter Projects - CORREGIDO
function filterProjects(category) {
    currentFilter = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encuentra el botón que se clickeó y actívalo
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Show/hide projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const project = projects[index];
        if (category === 'all' || project.category === category) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// Event listeners para los botones de filtro
document.addEventListener('DOMContentLoaded', function() {
    // Render initial projects
    renderProjects();
    
    // Add click events to filter buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProjects(category);
        });
    });
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animation on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s forwards';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
});