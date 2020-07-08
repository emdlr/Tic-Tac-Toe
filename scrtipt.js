let header = document.querySelector('header');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');
let table = document.createElement('table');
let row2 = document.createElement('tr');
let cel21 = document.createElement('td');
let cel22 = document.createElement('td');
let row3 = document.createElement('tr');
let cel31 = document.createElement('td');
let cel32 = document.createElement('td');
let redScore =0;
let blueScore =0;
let currentColor='RED';
let fColor;
let adminRooms = [];
let gotWinner=false;
div1.addEventListener('click',changeColor);
div2.addEventListener('click',changeColor);
div3.addEventListener('click',changeColor);
div4.addEventListener('click',changeColor);
div5.addEventListener('click',changeColor);
div6.addEventListener('click',changeColor);
div7.addEventListener('click',changeColor);
div8.addEventListener('click',changeColor);
div9.addEventListener('click',changeColor);
wipeOutDivs();
header.innerText ='TIC - TAC - TOE';
let sec1 = document.querySelector('#section1');
let sec2 = document.querySelector('#section2');
let resetBtn = document.createElement('button');
resetBtn.innerText ='Reset';
sec1.appendChild(resetBtn);
resetBtn.setAttribute('class','btn');


cel21.innerText=blueScore;
cel22.innerText=`Blue's`;
cel31.innerText=redScore;
cel32.innerText=`Red's`;

row3.appendChild(cel31);
row3.appendChild(cel32);
row2.appendChild(cel21);
row2.appendChild(cel22);
table.appendChild(row2);
table.appendChild(row3);
sec2.appendChild(table);

resetBtn.onclick = function(){
    currentColor='RED';
    adminRooms = [];
    gotWinner =false;
    wipeOutDivs();
};
function changeColor(e){
    e.preventDefault();
    if(gotWinner)
        return;

    let target = e.target;
    let isBusy = false;
    for(let i=0;i<adminRooms.length;i++){
        if(adminRooms[i]===target)
            isBusy=true;
    }
    if(!isBusy){
        let dColor =target.style.background;
        if(dColor==='white'){
            if(currentColor==='RED'){
                currentColor='BLUE';
                fColor='royalblue';
             }else {
                currentColor='RED';
                fColor='salmon';
            };
            target.style.background = fColor;
            adminRooms.push(target);
            reviewWinner(target,adminRooms.length);
        };
    };
};
function reviewWinner (t, len){
    if((div1.style.background===div2.style.background&&div1.style.background===div3.style.background&&div1.style.background!=='white')
       || (div1.style.background===div5.style.background&&div1.style.background===div9.style.background&&div1.style.background!=='white')
       || (div1.style.background===div4.style.background&&div1.style.background===div7.style.background&&div1.style.background!=='white')
       || (div2.style.background===div5.style.background&&div2.style.background===div8.style.background&&div2.style.background!=='white')
       || (div3.style.background===div6.style.background&&div3.style.background===div9.style.background&&div3.style.background!=='white')
       || (div3.style.background===div6.style.background&&div3.style.background===div9.style.background&&div3.style.background!=='white')
       || (div3.style.background===div5.style.background&&div3.style.background===div7.style.background&&div3.style.background!=='white')
       || (div4.style.background===div5.style.background&&div4.style.background===div6.style.background&&div4.style.background!=='white')
       || (div7.style.background===div8.style.background&&div7.style.background===div9.style.background&&div7.style.background!=='white'))
         gotWinner=true;
    else if(len === 9)
         div5.innerText='No Winner😔';

    if(gotWinner){
        currentColor==='RED'?redScore++:blueScore++;
        t.innerText = `${currentColor} Wins 🎉`;
        cel21.innerText=blueScore;
        cel31.innerText=redScore; 
    };
};
function wipeOutDivs(){
    div1.style.background ='white'
    div2.style.background ='white'
    div3.style.background ='white'
    div4.style.background ='white'
    div5.style.background ='white'
    div6.style.background ='white'
    div7.style.background ='white'
    div8.style.background ='white'
    div9.style.background ='white'
    div1.innerText='';
    div2.innerText='';
    div3.innerText='';
    div4.innerText='';
    div5.innerText='';
    div6.innerText='';
    div7.innerText='';
    div8.innerText='';
    div9.innerText='';
};