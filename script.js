function mostrarContenido(id) {
  const secciones = document.querySelectorAll('.contenido-tema');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  const elementoSeleccionado = document.getElementById(id);
  if (elementoSeleccionado) {
    elementoSeleccionado.style.display = 'block';
  }
}
