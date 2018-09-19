!function(){
    var view = document.querySelector('#toNavBar')
    window.addEventListener('scroll',function(){
        if(window.scrollY > 0 ){
            view.classList.add('sticky')
        } else {
            view.classList.remove('sticky')
        }
    })
}.call()