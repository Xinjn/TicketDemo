//sc6界面
function EndUI() {
    EndUI.super(this);
    console.log("进入end界面");
    Laya.stage.on(Laya.Event.MOUSE_DOWN, this, fuck);
    function fuck(e){
        console.log(e.target)
    }

    //初始化
    //设置mask区域
    this.black.width += Laya.stage.width - this.width 
    //设置stage区域
    this.width += Laya.stage.width - this.width 
    //设置side靠右
    this.panel.x = this.width - 215
    //中间区域宽度
    var w = Laya.stage.width - 215
    //设置船票位置
    // this.cardList.x = (w/2) - this.cardList.width
     this.cardList.x = w/2
    
    Laya.stage.on(Laya.Event.RESIZE, this, resizeFn);
    //随着屏幕尺寸改变适配UI位置
    function resizeFn() {
        if (Laya.stage.scaleMode == "fixedheight") {
                //设置mask区域
                this.black.width += Laya.stage.width - this.width 
                //设置stage区域
                this.width += Laya.stage.width - this.width 
                //设置side靠右
                this.panel.x = this.width - 215
                //中间区域宽度
                var w = Laya.stage.width - 215
                //设置船票位置
                // this.cardList.x = (w/2) - this.cardList.width
                this.cardList.x = w/2
        }
    }

    //设置滚动条
    this.panel.vScrollBarSkin = "";
    //橡皮筋效果
    this.panel.vScrollBar.elasticDistance = 200;
    this.panel.vScrollBar.elasticBackTime = 200;

    this.confirm.on(Laya.Event.MOUSE_DOWN,this,onConfirm)
    function onConfirm(){
        console.log("确定")
        this.removeSelf()
    }

    this.share.on(Laya.Event.MOUSE_DOWN,this,onShare)
    function onShare(){
        console.log("分享")
        this.removeSelf()
    }

    this.agine.on(Laya.Event.MOUSE_DOWN,this,onAgine)
    function onAgine(){
        console.log("再看一次")
        var current = Laya.stage._childs[2]
        current.removeSelf()
        Laya.stage.addChild(new SC6UI())
       
    }

    this.cardSide.on(Laya.Event.MOUSE_DOWN,this,onCardClick)

    function onCardClick(e){
        var name = e.target.name
        console.log(name)
        //获取全部卡片列表
        var list = this.cards._childs
        console.log(list)
        switch (name) {
            case "item0":
                list.map(item => {
                    item.visible = false
                })
                this.card0.visible = true
                break;
            case "item1":
                list.map(item => {
                    item.visible = false
                })
                this.card1.visible = true
                break;
            case "item2":
                list.map(item => {
                    item.visible = false
                })
                this.card2.visible = true
                break;
            case "item3":
                list.map(item => {
                    item.visible = false
                })
                this.card3.visible = true
                break;
            case "item4":
                list.map(item => {
                    item.visible = false
                })
                this.card4.visible = true
                break;
            default:
                break;
        }
    }

    // //添加微信头像
    // var ape = new Laya.Sprite();
    // ape.zOrder = 99
    // Laya.stage.addChild(ape);
    // var url = window.localStorage.getItem('headimgurl')
    // ape.loadImage(url);
    // ape.pos(Laya.stage.width/2,Laya.stage.height/2)
}
Laya.class(EndUI, "EndUI", EndPageUI)