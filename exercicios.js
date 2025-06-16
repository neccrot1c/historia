function mostrarQuiz(tema) {
  // Ocultar todos los quizzes
  const quizzes = document.querySelectorAll('.quiz-tema');
  quizzes.forEach(q => {
    q.style.display = 'none';
    // limpiar feedback y reactivar botones
    const feedbacks = q.querySelectorAll('.feedback');
    feedbacks.forEach(f => (f.textContent = ''));
    const buttons = q.querySelectorAll('button');
    buttons.forEach(b => {
      b.disabled = false;
      b.style.backgroundColor = '#008080';
      b.style.color = 'white';
    });
  });

  // Mostrar el quiz seleccionado
  const quizMostrar = document.getElementById(tema);
  if (quizMostrar) {
    quizMostrar.style.display = 'block';
  }
}

function verificarRespuesta(boton, esCorrecta) {
  const feedback = boton.parentElement.querySelector('.feedback');
  if (esCorrecta) {
    feedback.textContent = '¡Correcto!';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Incorrecto. Intenta otra vez.';
    feedback.style.color = 'red';
  }
  // Desactivar todos los botones para esta pregunta
  const botones = boton.parentElement.querySelectorAll('button');
  botones.forEach(b => {
    b.disabled = true;
    b.style.backgroundColor = '#ccc';
    b.style.color = '#666';
  });
  // Resaltar el botón correcto (solo si el que pulsaste es incorrecto)
  if (!esCorrecta) {
    const correcto = Array.from(botones).find(b => b.onclick.toString().includes('true'));
    if (correcto) {
      correcto.style.backgroundColor = 'green';
      correcto.style.color = 'white';
    }
  }
}
