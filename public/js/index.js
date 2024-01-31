window.onload = iniciar;

function iniciar() {


  //traer elemento a quien aplicar evento
  const menuHam = document.querySelector('.menu');

  //recuperar elemento que se desea deplegar al escuchar el evento
  const menuHamlist = document.querySelector('.menuHam-list');

  menuHam.addEventListener('click', () => {
    menuHamlist.classList.toggle('inactive')
  })

  /*----------------------------------------*/

  //rederizacion de secion portafolio.

  const portafolio = new Portafolio()
  portafolio.renderPortafolio()


  //renderizar la secion de follow

  const follow = new Follow()
  follow.renderFollow()
}

