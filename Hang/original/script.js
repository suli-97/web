var ctx=document.getElementById("canvas").getContext('2d');
var wrongEL=document.getElementById("wrong");
var wordEL = document.getElementById("word");
const container = document.getElementById("container");
const t =  document.getElementById("dialogText");
var lose = "Unfortunately you lost. 😕";
var win = "Congratulations! You won! 😃";
var b = document.getElementById("replay");
var s = new Set();
ctx.strokeStyle = "white";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(0,240);
ctx.lineTo(80,240);
ctx.moveTo(40,240);
ctx.lineTo(40,10);
ctx.lineTo(150,10);
ctx.lineTo(150,50);
ctx.stroke();
function* gen(){
    ctx.moveTo(170,70);
    ctx.arc(150,70,20,0,2*(Math.PI),true);
    ctx.stroke();
    yield 1;
    ctx.moveTo(150,90);
    ctx.lineTo(150,150);
    ctx.stroke();
    yield 2;
    ctx.moveTo(150,110);
    ctx.lineTo(120,95);
    ctx.stroke();
    yield 3;
    ctx.moveTo(150,110);
    ctx.lineTo(180,95);
    ctx.stroke();
    yield 4;
    ctx.moveTo(150,148);
    ctx.lineTo(115,185);
    ctx.stroke();
    yield 5;
    ctx.moveTo(150,148);
    ctx.lineTo(185,185);
    ctx.stroke();
    yield 6;
}
function search(arr, c){
    var res = [];
    for(let i=0;i<arr.length;i++)
        if(arr[i]==c) res.push(i);
    return res;
}
var reset = function(){ctx.clearRect(100,47,100,200);};

word_list = ["programming","alphabet","bilibili"];

function start_game(){
    var it = gen();
    var word = word_list[Math.floor(Math.random()*3)];
    var l = word.length;
    for(let i=0;i<word.length;i++){
        var Xel = document.createElement("span");
        Xel.innerHTML = " \n ";
        wordEL.appendChild(Xel);
    }
    document.onkeydown = function(e){
        if(e.key >'z' || e.key < 'a' || s.has(e.key))
            return;
        s.add(e.key);
        var arr = search(word,e.key);
        if(arr.length == 0){
            var n = it.next();
            wrongEL.innerHTML += (" " + e.key);
            if(n.value==6){
                document.onkeydown = function(){};
                t.innerHTML = lose;
                container.style.display = "flex";
            }
        }else{
            l-=arr.length;
            var spans = document.querySelectorAll("span");
            for(let index of arr)
                spans[index].innerHTML = e.key;
            if(l==0){
                document.onkeydown = function(){};
                t.innerHTML = win;
                container.style.display = "flex";   
            }
        }
    };
}
b.addEventListener('click',function(){location.reload();});
start_game();