!function(){
    var view = View('section.messages')

    var model = Model({resourceName:'Message'})

    var controller = Controller({
        init:function(view,controller){
            this.myForm = document.querySelector('#postMessage')
            this.loadMessages()
        },
        loadMessages : function () {
            this.model.fetch().then((messages) => {
                messages.forEach((item) => {               
                    let span = $('<span></span>').text('发布于：'+ this.parseTime(item.createdAt))[0]
                    let li = $('<li></li>').text(item.attributes.name + ':' + item.attributes.content)
                    li.append(span)
                    $('#comments').append(li)
                });
            }).then(function (messages) {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },
        bindEvents : function(){
            this.myForm.addEventListener('submit',(e) => {
                // 阻止传播，防止点击刷新
                e.preventDefault()

                this.saveMessages()
            })
        },
        saveMessages : function(){
            //获取输入框内的值
            let content = $('input[name="content"]').val()
            let name = $('input[name="name"]').val()
            this.model.save({"name":name,"content":content}).then((object) => {
                let span = $('<span></span>').text('发布于：'+ this.parseTime(object.createdAt))[0]
                let li = $('<li></li>').text(object.attributes.name +':'+ object.attributes.content)
                li.append(span)
                $('#comments').append(li)
                document.querySelector('#postMessage input[name="content').value = ''
            },function(error){
                console.log(error)
            })
        },
        parseTime:function(d){
            const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
                            + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            return newDate;
        }
    })

    controller.init(view,model) 
    
    /* var controller = {
        view : null,
        model: null,
        init : function(view,model){
            this.model = model
            this.view = view
            this.myForm = document.querySelector('#postMessage')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages : function () {
            this.model.fetch().then((messages) => {
                messages.forEach((item) => {               
                    let span = $('<span></span>').text('发布于：'+ this.parseTime(item.createdAt))[0]
                    let li = $('<li></li>').text(item.attributes.name + ':' + item.attributes.content)
                    li.append(span)
                    $('#comments').append(li)
                });
            }).then(function (messages) {
                // 更新成功
            }, function (error) {
                // 异常处理
            });
        },
        bindEvents : function(){
            this.myForm.addEventListener('submit',(e) => {
                // 阻止传播，防止点击刷新
                e.preventDefault()

                this.saveMessages()
            })
        },
        saveMessages : function(){
            //获取输入框内的值
            let content = $('input[name="content"]').val()
            let name = $('input[name="name"]').val()
            this.model.save({"name":name,"content":content}).then((object) => {
                let span = $('<span></span>').text('发布于：'+ this.parseTime(object.createdAt))[0]
                let li = $('<li></li>').text(object.attributes.name +':'+ object.attributes.content)
                li.append(span)
                $('#comments').append(li)
                document.querySelector('#postMessage input[name="content').value = ''
            },function(error){
                console.log(error)
            })
        },
        parseTime:function(d){
            const newDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' '
                            + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            return newDate;
        }
    } */
}.call()