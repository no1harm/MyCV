!function(){
    
    var view = document.querySelector('#toNavBar')

    var controller = {
        view:null,
        init:function(view){
            //this.view就是view:null,通过传入参数view后this.view就等于传入的view
            this.view = view
            this.bindEvents()
            //this.bindEvents.call(this)
        },
        bindEvents:function(){
            var view = this.view
            window.addEventListener('scroll',(x) => {
                if(window.scrollY > 0 ){
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    //controller.init.call(controller,view)
}.call()