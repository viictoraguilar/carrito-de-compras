//Variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

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
  console.log(curso)

  //Crear un objeto con el contenido del curso actual
  const inforCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }

  console.log(inforCurso)
}

