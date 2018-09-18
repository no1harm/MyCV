// 初始化
var APP_ID = 'WeRm0B5ispQM0SvP8o3F90yU-gzGzoHsz';
var APP_KEY = '9IHzsUJNVLPyH5U4lvLx2Huy';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 拉取历史留言
var query = new AV.Query('Message');
query.find().then(function (messages) {
    messages.forEach(function (item) {
        let li = $('<li></li>').text(item.attributes.name +':'+item.attributes.content)
        $('#comments').append(li)
    });
}).then(function (messages) {
    // 更新成功
}, function (error) {
    // 异常处理
});

let myForm = document.querySelector('#postMessage')
// 为什么要监听表单的submit事件而不是button的click事件,因为一旦用户输完密码按回车键提交的话,监听就落空了.submit事件包括了点击和回车
myForm.addEventListener('submit',function(e){
    // 阻止传播，防止点击刷新
    e.preventDefault()

    //获取输入框内的值
    let content = $('input[name="content"]').val()
    let name = $('input[name="name"]').val()
    var Message = AV.Object.extend('Message');
    var messages = new Message();
    messages.save({
        "name":name,
        "content":content ,
      }).then(function(object) {
        let li = $('<li></li>').text(object.attributes.name +':'+ object.attributes.content)
        $('#comments').append(li)
        console.log(1)
        myForm.querySelector('input[name="content"]').value = ''
      }) 
})


/* 
// 创建一个TestObject的表
var TestObject = AV.Object.extend('TestObject');

// 创建一行数据
var testObject = new TestObject();

// 存储信息
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
 */