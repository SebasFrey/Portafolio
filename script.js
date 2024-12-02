// Datos de los proyectos
const proyectos = [
  {
      id: 1,
      nombre: "Calculadora Web Interactiva",
      descripcion: "Una calculadora web desarrollada utilizando HTML, CSS y JavaScript. Incluye funciones básicas y avanzadas, con una interfaz inspirada en el diseño de una máquina de café.",
      imagen: "url_imagen_calculadora.jpg",
      enlace: "#",
      documento: "calculadora_web.pdf"
  },
  {
      id: 2,
      nombre: "Sistema de Gestión de Cafeterías",
      descripcion: "Aplicación de escritorio desarrollada en C# y .NET Framework para la gestión integral de cafeterías, incluyendo inventario, ventas y fidelización de clientes.",
      imagen: "url_imagen_sistema_cafeterias.jpg",
      enlace: "#",
      documento: "sistema_cafeterias.pdf"
  },
  {
      id: 3,
      nombre: "Blog de Café y Código",
      descripcion: "Un blog personal desarrollado con ASP.NET, donde comparto mis experiencias y conocimientos sobre desarrollo web y la cultura del café.",
      imagen: "url_imagen_blog.jpg",
      enlace: "#",
      documento: "blog_cafe_codigo.pdf"
  },
];

// Función para cargar los proyectos dinámicamente
function cargarProyectos() {
  const contenedorProyectos = document.querySelector('.proyectos');
  proyectos.forEach(proyecto => {
      const proyectoHTML = `
          <div class="proyecto">
              <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
              <div class="contenido-proyecto">
                  <h3>${proyecto.nombre}</h3>
                  <p>${proyecto.descripcion}</p>
                  <div class="enlaces-proyecto">
                      <a href="${proyecto.enlace}" target="_blank">Ver Proyecto</a>
                      <a href="${proyecto.documento}" download>Descargar PDF</a>
                  </div>
              </div>
          </div>
      `;
      contenedorProyectos.innerHTML += proyectoHTML;
  });
}

// Evento que se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  cargarProyectos();

  // Manejo del envío del formulario
  const formulario = document.getElementById('formulario-contacto');
  formulario.addEventListener('submit', (e) => {
      e.preventDefault();
      // Aquí puedes añadir la lógica para enviar el formulario
      alert('Gracias por tu mensaje, Sebastian se pondrá en contacto contigo pronto.');
      formulario.reset();
  });
});

// Función para animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Función para resaltar la sección activa en la navegación
function resaltarSeccionActiva() {
  const secciones = document.querySelectorAll('section');
  const enlaces = document.querySelectorAll('.enlaces-nav a');

  window.addEventListener('scroll', () => {
      let seccionActual = '';
      secciones.forEach(seccion => {
          const seccionTop = seccion.offsetTop;
          const seccionAltura = seccion.clientHeight;
          if (pageYOffset >= seccionTop - seccionAltura / 3) {
              seccionActual = seccion.getAttribute('id');
          }
      });

      enlaces.forEach(enlace => {
          enlace.classList.remove('activo');
          if (enlace.getAttribute('href').slice(1) === seccionActual) {
              enlace.classList.add('activo');
          }
      });
  });
}

resaltarSeccionActiva();

