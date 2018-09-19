window.Controller = function(options){
    var init = options.init

    var object = {
        view:null,
        model:null,
        init:function(view,model){
            //this.view就是view:null,通过传入参数view后this.view就等于传入的view
            this.view = view
            this.model = model
            this.model.init()
            init.call(this,view,model)
            this.bindEvents.call(this)
            //this.bindEvents.call(this)
        },
    }
    for(let key in options){
        if(key !== "init"){
            object[key]=options[key]
        }
    }
    return object
}
