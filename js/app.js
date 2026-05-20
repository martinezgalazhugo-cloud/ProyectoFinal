// Espera a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los botones de filtro en la sección de filtros
  const filterButtons = document.querySelectorAll('#section-filters button');
  // Selecciona todos los elementos de platillos en el contenedor
  const platillos = document.querySelectorAll('.container-platillos .platillo');

  // Función que aplica el filtro a los platillos
  const applyFilter = (filter) => {
    // Itera sobre cada platillo
    platillos.forEach((platillo) => {
      // Si el filtro es "todos", muestra todos los platillos
      if (filter === 'todos') {
        platillo.style.display = '';
        return;
      }

      // Busca la etiqueta dentro del platillo
      const etiqueta = platillo.querySelector('.etiqueta');
      // Verifica si la etiqueta existe y contiene la clase del filtro
      const matches = etiqueta && etiqueta.classList.contains(filter);
      // Muestra u oculta el platillo según si coincide
      platillo.style.display = matches ? '' : 'none';
    });
  };

  // Itera sobre cada botón de filtro
  filterButtons.forEach((button) => {
    // Agrega un evento de clic a cada botón
    button.addEventListener('click', () => {
      // Remueve la clase "activo" de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove('activo'));
      // Agrega la clase "activo" al botón clicado
      button.classList.add('activo');

      // Obtiene el texto del botón, lo limpia y lo convierte a minúsculas
      //const filtro = button.textContent.trim().toLowerCase();
      const filtro = button.getAttribute("data-filter").toLowerCase();
      // Aplica el filtro usando el texto obtenido
      applyFilter(filtro);
    });
  });
});


