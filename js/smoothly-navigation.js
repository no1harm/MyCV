     // tweenjs动画
     function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    
    requestAnimationFrame(animate); 

    let aTags = document.querySelectorAll('nav.menu ul li a')
    for(let i = 0;i<aTags.length;i++){
        aTags[i].onclick = function(x) {
            // 阻止点击的默认动作，因为a标签点击之后会自动刷新网页
            x.preventDefault()
            let a = x.currentTarget
            // 下面这句是不带任何处理的
            // a.getAttribute('href')
            // a.href是带http协议的，是经过浏览器处理的
            // console.log(a.href)
            let href = a.getAttribute('href')   //'#siteWork'
            let element = document.querySelector(href)
            let top = element.offsetTop

            //使用tweenjs库动画
            let currentTop = window.scrollY     //页面当前所在滚动位置
            let targetTop = top - 80    //目标
            let s = targetTop - currentTop  //总距离
            let t = Math.abs((s/100)*250)   //每当移动的距离超过某个时间，则直接设定一个时间
            if (t > 500) {
                t = 500
            }
            var coords = {y: currentTop };
            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    window.scrollTo(0,coords.y)
                })
                .start();
            
            // 使用setInterval创建动画
            /*
            let n = 25  //移动多少次
            let duration = 500 / n    //每次移动多长时间
            let distance = (targetTop - currentTop) / n   //每次滚动的距离
            let i = 0
            let id = setInterval( () => {
                if (i===n) {
                        window.clearInterval(id)    //停止滚动
                        return
                }
                i = i + 1
                window.scrollTo(0,currentTop + distance * i)    //每一次移动多少距离
            },duration)
            */
        }
    }