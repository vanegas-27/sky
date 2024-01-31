/**
 * clase de secion portafolio
 *
 * la encargada de crear todos los bloques necesarios en el html,
 * estas se crean y se les agrega la clase y atributo de adecuado para cada una
 */

class Portafolio{

    /**
   * metodo para crear etiquetas
   *
   * @param null
   *
   * @returns object
   */
  crearEtiquetasP(){
    const containerCarts = document.createElement('div')
    const cartCasa = document.createElement('div')
    const span1 = document.createElement('span')
    const h2 = document.createElement('h2')
    const img1 = document.createElement('img')
    const ul = document.createElement('ul')
    const span2 = document.createElement('span')
    const img2 = document.createElement('img')
    const h4 = document.createElement('h4')
    const hr = document.createElement('hr')

    return {containerCarts,cartCasa,span1,h2,img1,ul,span2,img2,h4,hr}
  }


    /**
   * metodo para renderizar html
   *
   * @param null
   *
   * @returns void
   */
  renderPortafolio(){
    const containerCasas = document.querySelector('.conatiner-carts-casas')

    infoPortafolio.forEach(dato => {
      //crear las etiquetas
      const {
        containerCarts,
        cartCasa,
        span1,
        h2,
        img1,
        ul,
        span2,
        img2,
        h4,
        hr
      } = this.crearEtiquetasP()

      // se crean sus atributos y contenido
      span1.classList.add('precio')
      span1.innerText = `${dato.precio}`

      h2.innerText = `${dato.title}`

      img1.setAttribute('src', dato.img1)
      img1.setAttribute('loading', 'lazy')

      for (let i = 1; i <= 3; i++) {

        containerCarts.classList.add('col-md-3')
        containerCarts.classList.add('carts-casas')

        cartCasa.classList.add('casas')

        const li = document.createElement('li')
        dato.tInfo.forEach(etiLi => {
          li.innerHTML = etiLi[i]
          console.log()
          ul.appendChild(li)
        })
      }

      img2.setAttribute('src', dato.img2)
      img2.setAttribute('loading', 'lazy')

      span2.classList.add('self')
      span2.innerText = '(55)'
      span2.appendChild(img2)


      h4.innerText = dato.descrip

      //insertar en cada bloque
      cartCasa.append(span1, h2, img1, ul, span2, hr, h4)
      containerCarts.appendChild(cartCasa)
      containerCasas.appendChild(containerCarts)
    })
  }

}

// --------------- // -------------------End Render Portafolio------------------------------ // -------------------------






/**
 * clase de seccion follow
 *
 * encargada de renderizar y manejar los diferentes metodos de esa seccion
 */

class Follow{

  /**
   * metodo para crear etiquetas
   *
   * @param null
   *
   * @returns object
   */
  crearEtiquetasF(){
    const article = document.createElement('article')
    const div = document.createElement('div')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const h4 = document.createElement('h4')
    const p = document.createElement('p')

    return {article,div,img,span,h4,p}
  }


  /**
   * metodo para renderizar html
   *
   * @param null
   *
   * @returns void
   */
  renderFollow(){

    const containerFollow = document.getElementById('containFollow')


    infoFollow.forEach( info => {
      const {article,div,img,span,h4,p} = this.crearEtiquetasF()

      article.classList.add('col-md-3')

      div.classList.add('containerNum')

      img.setAttribute('src', info.img)
      img.setAttribute('loading' , 'lazy')
      img.setAttribute('alt' , info.alt)

      span.innerText = info.span

      h4.innerText = info.h4

      p.innerText = info.p

      div.append(img,span)
      article.append(div,h4,p)
      containerFollow.append(article)
    })

  }
}

// --------------- // -------------------End Render Follow------------------------------ // -------------------------

