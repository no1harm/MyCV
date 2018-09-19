window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'WeRm0B5ispQM0SvP8o3F90yU-gzGzoHsz'
            var APP_KEY = '9IHzsUJNVLPyH5U4lvLx2Huy'
            AV.init({appId: APP_ID,appKey: APP_KEY})
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            return query.find() //Promise对象
        },
        save:function(object){
            var X = AV.Object.extend(resourceName)
            var x = new X();
            return x.save(object)
        }
    }
}