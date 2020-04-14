const $container = document.getElementById('container')
const $overlay = document.getElementById('overlay')

$container.addEventListener("click",function(e){
    if (e.target.src){
        $overlay.innerHTML = (`<img src="${e.target.src}" >`)
        $overlay.classList.add('show')
    }
}) 
 $overlay.addEventListener("click",function(o){
    $overlay.innerHTML = (` `)
    $overlay.classList.remove('show')
 })
