const titulo = document.getElementById('titulo')
console.log(titulo.textContent);
const boton = document.getElementById('btn-saludo');

boton.addEventListener('click', function() {
    titulo.textContent = "Gracias por pasar por acá";
});
