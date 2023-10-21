
const dot8 = document.querySelector('.dot-8');
const dot6 = document.querySelector('.dot-6');

dot8.addEventListener('click',(e) =>{
    e.preventDefault()
    dot8.classList.add('active')
    dot6.classList.remove('active')
})

dot6.addEventListener('click',(e) =>{
    e.preventDefault()
    dot8.classList.remove('active')
    dot6.classList.add('active')
})