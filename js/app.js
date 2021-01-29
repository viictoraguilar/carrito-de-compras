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
}


//Funciones
function agregarCurso(e) {
  e.preventDefault()
  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado)
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

  //Agrega elementos al arreglo de carrito
  articulosCarrito = [...articulosCarrito, inforCurso]

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