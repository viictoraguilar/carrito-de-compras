//Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEventListeners()
function cargarEventListeners() {
  //Cuando agregas un curso presionando agregar al carrito
  listaCursos.addEventListener('click', agregarCurso)

  //elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso)
}


//Funciones
function agregarCurso(e) {
  e.preventDefault()
  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado)
  }
}

//elimina un curso del carrito
function eliminarCurso(e) {
  if(e.target.classList.contains('borrar-curso')) {
    const cursoId = e.target.getAttribute('data-id')

    //Elimina del arreglo por el data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

    carritoHTML() //Iterar sobre el carrito y mostrar su HTML
  }
}

//Lee el contenido del html al que se le dio clicj y extrae la información del curso
function leerDatosCurso(curso) {
  // console.log(curso)

  //Crear un objeto con el contenido del curso actual
  const inforCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some(curso => curso.id === inforCurso.id)
  if(existe) {
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map(curso => {
      if(curso.id === inforCurso.id) {
        curso.cantidad++
        return curso //Retorna el objeto actualziado
      } else {
        return curso //Retorna los objetos que no son los duplicados
      }
    })
    articulosCarrito = [...cursos]
  } else {
    //Agrega elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, inforCurso]
  }


  console.log(articulosCarrito)

  carritoHTML()
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {

  //Limpiar el html
  limpiarHTML()

  //Recorre el carrito y genera el html
  articulosCarrito.forEach(curso => {
    const {imagen, titulo, precio, cantidad, id} = curso
    console.log(curso)
    const row = document.createElement('tr')
    row.innerHTML = `
      <td>
        <img srC="${imagen}" width="100">
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
      </td>
    `

    //Agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row)
  })
}

//ELimina los cursos del table body
function limpiarHTML() {
  //Forma lenta
  // contenedorCarrito.innerHTML = ''

  while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}