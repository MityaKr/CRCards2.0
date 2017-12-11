var dw:number=336;
var dh:number=500;
var coef:number=0.5;


class cart{
    public x:number;
    public y:number;
    public v:number;


    constructor(vc:number,x:number,y:number){
        this.v=vc;
        this.x=x;
        this.y=y;
    }


    public draw(){
            ctx.drawImage(img, this.v*(dw),0,dw,dh,this.x,this.y,dw*coef,dh*coef);
    }
}

var elm:any=null;
var ctx:any=null;
let img=new Image();
var coloda:Array<cart>=[];

//**********Вставка карт*******//
window.onload=function(){
    elm = document.getElementById("myCanvas");
    ctx = elm.getContext("2d");
    img.src = "sprite.jpg";

    pushCards();
    function pushCards() {
        for (let i = 0; i <= 1; i++) {
            for (let j = 0; j <= 4; j++) {

                coloda.push(new cart(0, j * (168 + 32), i * (300)));
            }
        }
    }
    img.onload=function() {
        onloadImg();
    };
    function onloadImg(){
        for(let i=0;i<10;i++) {
            coloda[i].draw();
        }

    }
//=============================================
//==============Бинд карт======================
    var c = [];
    var i = 0;
    var nCart = 5;

    while(i<nCart){
        var carta = Math.floor((Math.random()*5)+1);
        if(find(c, carta)==0){
            c[i] = carta;
            i++;
        }

    }

    function find(array, value) {
        for(var i=0; i<array.length; i++) {
            if (array[i]== value) return 1;
        }
        return 0;
    }
    console.log(c);


//==============Menu===========================
    /*var play=document.getElementById("play");
    var menu=document.getElementById("menu");

    play.onclick=function () {
        //menu.style.zIndex=-1;
        menu.style.transitionProperty='width';
        menu.style.transitionDuration='1.5s';
        menu.style.width='0%';
        menu.removeChild(play);
        console.log("play");
    }*/
//==========================================
    for (let j = 0; j <= 1; j++) {
        for (let i = 0; i <= 4; i++) {
            coloda.push(new cart(c[i], i * 200, j*300));
            coloda[i + 10].draw();
        }
    }
//============Сетка карт========================
    var score:number=0;
    var cl:number=0;
    var pr1:number=0;
    var pr2:number=0;
    var hod:number=0;
    var par:number=0;
    var hodi=document.getElementById("score");

    elm.onclick=function(e){
        var x = (e.pageX - elm.offsetLeft) / 200| 0;
        var y = (e.pageY - elm.offsetTop)  / 336 | 0;
        console.log(x,' ',y,' ',c[x]);
        hodi.innerHTML='Ходы: '+hod;

        else if(x==0&&y==0){
            coloda[10].draw();
            cl=cl+1;
            if(pr1==0)
            pr1=coloda[10].v
            else pr2=coloda[10].v;
            console.log("open");
        }
        else if(x==1&&y==0){
            console.log("open2");
            coloda[11].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[11].v
            else pr2=coloda[11].v;
        }
        else if(x==2&&y==0){
            console.log("open2");
            coloda[12].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[12].v
            else pr2=coloda[12].v;
        }
        else if(x==3&&y==0){
            console.log("open2");
            coloda[13].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[13].v
            else pr2=coloda[13].v;
        }
        else if(x==4&&y==0){
            console.log("open2");
            coloda[14].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[14].v
            else pr2=coloda[14].v;
        }
        else if(x==0&&y==1){
            console.log("open2");
            coloda[15].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[15].v
            else pr2=coloda[15].v;
        }
        else if(x==1&&y==1){
            console.log("open2");
            coloda[16].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[16].v
            else pr2=coloda[16].v;
        }
        else if(x==2&&y==1){
            console.log("open2");
            coloda[17].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[17].v
            else pr2=coloda[17].v;
        }
        else if(x==3&&y==1){
            console.log("open2");
            coloda[18].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[18].v
            else pr2=coloda[18].v;
        }
        else if(x==4&&y==1){
            console.log("open2");
            //coloda.push(new cart(c[0], 800, 300));
            coloda[19].draw();
            cl=cl+1;
            if(pr1==0)
                pr1=coloda[19].v
            else pr2=coloda[19].v;
        };
        if(cl==1)hod++;
        if(cl==2)
        {
            if(pr1!=pr2) {
                setTimeout(pushCards, 700);
                setTimeout(onloadImg, 700);
            }
            else{par++};
                pr1=pr2=cl = 0;
        }
    };
//=============================================



    /*var v:number=0;
     var myVar = setInterval(myTimer ,300*2);
     function myTimer() {
     drawAll(v);
     v++;
     if (v>6)v=0;
     console.log(v);
     // clearInterval(myVar);
     };
     }*/
}

