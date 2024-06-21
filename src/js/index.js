// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const starPointElemente = document.getElementById('start-point')
starPointElemente.previousElementSibling.textContent = 'cambio titulo'
starPointElemente.textContent= 'hola'



console.log(`Soy un ${starPointElemente.tagName} con el id ${starPointElemente.id} y la clase ${starPointElemente.className} mi padre es un ${starPointElemente.parentElement.tagName} con el id ${starPointElemente.parentElement.id} y la clase es ${starPointElemente.parentElement.className}, mi hermano es un ${starPointElemente.previousElementSibling.previousElementSibling.tagName} con el id ${starPointElemente.previousElementSibling.previousElementSibling.id} con la clase ${starPointElemente.previousElementSibling.previousElementSibling.className} y mi otro hermano es un ${starPointElemente.previousElementSibling.tagName} con un id ${starPointElemente.previousElementSibling.id} y con la clase ${starPointElemente.previousElementSibling.className}  y su contenido seria ${starPointElemente.previousElementSibling.textContent}`)