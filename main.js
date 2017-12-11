var dw = 336;
var dh = 500;
var coef = 0.5;
var cart = (function () {
    function cart(vc, x, y) {
        this.v = vc;
        this.x = x;
        this.y = y;
    }
    cart.prototype.draw = function () {
        ctx.drawImage(img, this.v * (dw), 0, dw, dh, this.x, this.y, dw * coef, dh * coef);
    };
    return cart;
}());
var elm = null;
var ctx = null;
var img = new Image();
var coloda = [];
//**********Вставка карт*******//
window.onload = function () {
    elm = document.getElementById("myCanvas");
    ctx = elm.getContext("2d");
    img.src = "sprite.jpg";
    pushCards();
    function pushCards() {
        for (var i_1 = 0; i_1 <= 1; i_1++) {
            for (var j = 0; j <= 4; j++) {
                coloda.push(new cart(0, j * (168 + 32), i_1 * (300)));
            }
        }
    }
    img.onload = function () {
        onloadImg();
    };
    function onloadImg() {
        for (var i_2 = 0; i_2 < 10; i_2++) {
            coloda[i_2].draw();
        }
    }
    //=============================================
    //==============Бинд карт======================
    var c = [];
    var i = 0;
    var nCart = 5;
    while (i < nCart) {
        var carta = Math.floor((Math.random() * 5) + 1);
        if (find(c, carta) == 0) {
            c[i] = carta;
            i++;
        }
    }
    function find(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value)
                return 1;
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
    for (var j = 0; j <= 1; j++) {
        for (var i_3 = 0; i_3 <= 4; i_3++) {
            coloda.push(new cart(c[i_3], i_3 * 200, j * 300));
            coloda[i_3 + 10].draw();
        }
    }
    //============Сетка карт========================
    var score = 0;
    var cl = 0;
    var pr1 = 0;
    var pr2 = 0;
    var hod = 0;
    var par = 0;
    var hodi = document.getElementById("score");
    elm.onclick = function (e) {
        var x = (e.pageX - elm.offsetLeft) / 200 | 0;
        var y = (e.pageY - elm.offsetTop) / 336 | 0;
        console.log(x, ' ', y, ' ', c[x]);
        hodi.innerHTML = 'Ходы: ' + hod;
        if (x == 0 && y == 0) {
            coloda[10].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[10].v;
            else
                pr2 = coloda[10].v;
            console.log("open");
        }
        else if (x == 1 && y == 0) {
            console.log("open2");
            coloda[11].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[11].v;
            else
                pr2 = coloda[11].v;
        }
        else if (x == 2 && y == 0) {
            console.log("open2");
            coloda[12].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[12].v;
            else
                pr2 = coloda[12].v;
        }
        else if (x == 3 && y == 0) {
            console.log("open2");
            coloda[13].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[13].v;
            else
                pr2 = coloda[13].v;
        }
        else if (x == 4 && y == 0) {
            console.log("open2");
            coloda[14].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[14].v;
            else
                pr2 = coloda[14].v;
        }
        else if (x == 0 && y == 1) {
            console.log("open2");
            coloda[15].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[15].v;
            else
                pr2 = coloda[15].v;
        }
        else if (x == 1 && y == 1) {
            console.log("open2");
            coloda[16].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[16].v;
            else
                pr2 = coloda[16].v;
        }
        else if (x == 2 && y == 1) {
            console.log("open2");
            coloda[17].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[17].v;
            else
                pr2 = coloda[17].v;
        }
        else if (x == 3 && y == 1) {
            console.log("open2");
            coloda[18].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[18].v;
            else
                pr2 = coloda[18].v;
        }
        else if (x == 4 && y == 1) {
            console.log("open2");
            //coloda.push(new cart(c[0], 800, 300));
            coloda[19].draw();
            cl = cl + 1;
            if (pr1 == 0)
                pr1 = coloda[19].v;
            else
                pr2 = coloda[19].v;
        }
        ;
        if (cl == 1)
            hod++;
        if (cl == 2) {
            if (pr1 != pr2) {
                setTimeout(pushCards, 700);
                setTimeout(onloadImg, 700);
            }
            else {
                par++;
            }
            ;
            pr1 = pr2 = cl = 0;
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
};
