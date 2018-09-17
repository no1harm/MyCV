!function () {
    let specialTags = document.querySelectorAll('[data-x]')  //获取含有data-x属性的节点

    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    autoHightLight()

    window.addEventListener('scroll', function () {
        autoHightLight()
    })

    function autoHightLight() {
        let specialTags = document.querySelectorAll('[data-x]')  //获取含有data-x属性的节点
        let minIndex = 0
        // 找到所有含有data-x属性的节点中离页面顶端距离最小的那一个
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brotherAndMe = li.parentNode.children
        for (let i = 0; i < brotherAndMe.length; i++) {
            brotherAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    let liTags = document.querySelectorAll('nav.menu ul li')
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {
            // 获取a节点
            //     let li = x.currentTarget
            //     // 获取a节点的兄弟节点
            //     let brother = li.getElementsByTagName('ul')[0]
            //     // 因为兄弟节点之间可能存在有空格，所以需要递归寻找不是文本内容的节点
            //     // while(brother.nodeType === 3){
            //     //     brother = brother.nextSibling
            //     // }
            //     // 也可以：使用循环寻找到TagName为指定名称的节点为止（一定要大写）
            //     // while(brother.tagName !== 'UL'){
            //     //     brother = brother.nextSibling
            //     // }
            //     brother.classList.add('active')
            x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (x) {
            // let li = x.currentTarget
            // let brother = li.getElementsByTagName('ul')[0]
            // brother.classList.remove('active')
            x.currentTarget.classList.remove('active')
        }
    }

}.call()
