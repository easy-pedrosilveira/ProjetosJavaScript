let raspadinha = document.querySelector('.raspadinha');

raspadinha.addEventListener('mousedown', function() {
  raspadinha.classList.add('raspada');
});

raspadinha.addEventListener('touchstart', function() {
  raspadinha.classList.add('raspada');
});