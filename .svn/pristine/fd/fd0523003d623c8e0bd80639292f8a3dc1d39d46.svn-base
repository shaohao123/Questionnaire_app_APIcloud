//公共方法
//打开tabLayout布局
export function openTabLayout(name, url, title, pageParam, barStyle) {
    api.openTabLayout({
        name,
        url,
        title,
        hideNavigationBar: false,
        // 传递数据的方式除了 sendEvent-eventListener  之外，pageparam也可以传递数据，不过一般用于传递openwin或者actionsheet的这种序号的数据
        pageParam: pageParam || null,
        navigationBar: {
            background: '#3371ff',
            color: '#fff',
            fontsize: 20,
            fontWeight: 500,
            leftButtons: [{
                // iconPath: 'widget://image/back.png',
                // iconPath: 'widget:./image/back.png',
                iconPath: '../../image/back.png',
                fontsize: 30,
                width:"5px",
                height:"5px"

            }],
            // 替换leftbuttons 里边的内容样式的，有的用，有的不用，靠经验写的
            ...barStyle
        }
    });

}



/*
** @desc: 封装ajax方法
** @param: url-请求地址
** @param: method-请求方式
** @param: data-请求参数
*/
export function myAjax(url, method='get', data=null) {
    return new Promise((resolve, reject) => {
        api.ajax({
            url,
            method,
            data
        }, function(ret, err) {
            if (ret) {
                resolve(ret);
            } else {
                reject( JSON.stringify(err))
            }
        });
    })
}


// 监听头部按钮操作
export function addListenNaviteBtn() {
    api.addEventListener({
        name:'navitembtn'
    },function(ret, err){
        if (ret.type === 'left') {
            api.closeWin();
        }
    });
}
