const inputChange = document.querySelector('#font-size-control')
const abracadabra = document.querySelector('#text')

inputChange.addEventListener('change', e => {
    abracadabra.style.fontSize = `${e.target.value }px`
})