
!function(){
    window.addEventListener('scroll',function(){
        if(window.scrollY > 0 ){
            toNavBar.classList.add('sticky')
        } else {
            toNavBar.classList.remove('sticky')
        }
    })
}.call()