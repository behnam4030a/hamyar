
$(".icon-list").click(function(){
        $(".right-menu").slideToggle(500);
        $(".left-item").toggleClass("col-12");

        
})

/********************************************************************************/
const counterUser = document.querySelector(".counter-user");
const myOrder = document.querySelector(".my-order");
const saved = document.querySelector(".saved");
const downloadHistory = document.querySelector(".download-history");
const transactions = document.querySelector(".transactions");
const exit = document.querySelector(".exit");
const subscrib = document.querySelector(".subscrib");
const ull = document.getElementsByTagName('li')

counterUser.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        counterUser.classList.add('active-link-panel');
})

myOrder.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        myOrder.classList.add('active-link-panel');
})

saved.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        saved.classList.add('active-link-panel');
})

downloadHistory.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        downloadHistory.classList.add('active-link-panel');
})

transactions.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        transactions.classList.add('active-link-panel');
})
subscrib.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        subscrib.classList.add('active-link-panel');
})

exit.addEventListener('click',() =>{
        for(i=0;i<ull.length;i++){
                ull[i].classList.remove('active-link-panel')
        }
        exit.classList.add('active-link-panel');
})
