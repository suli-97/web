const add_user=document.getElementById("addUser");
const double_money=document.getElementById("doubleMoney");
const show_M=document.getElementById("showOnlyMillionaires");
const sort=document.getElementById("sortByRichest");
const sum=document.getElementById("calculateEntireWealth");
const content = document.getElementById("content");

let data=[];
getRandomUser();
getRandomUser();
getRandomUser();
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
  
    const user = data.results[0];
  
    const newUser = {
      name: `${user.name.first} ${user.name.last}`,
      money: Math.floor(Math.random() * 1000000)
    };
  
    addData(newUser);
}
function addData(obj) {
    data.push(obj);

    updateDOM();
}
function doubleMoney(){
    data.forEach(function(user,index){
        data[index].money*=2;
    })
    updateDOM();
}
function SBR(){
    data.sort(function(a,b){
        return b.money >a.money;
    })
    updateDOM();
}

function SM(){
    data = data.filter(user => user.money>1000000);
    updateDOM();
}
function S(){
    const wealth = data.reduce(function(acc,user){
        acc+=user.money;
    },0)
    const wealthEL = document.createElement("div");
    wealthEL.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    content.appendChild(wealthEL);
}
function updateDOM(){
    content.innerHTML = "<h2 class='row'><strong class='person'>Person</strong>Wealth</h2>";
    data.forEach(user =>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.money)}`;
        content.appendChild(element);
    })
}
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
add_user.addEventListener('click', getRandomUser);
double_money.addEventListener('click', doubleMoney);
sort.addEventListener('click', SBR);
show_M.addEventListener('click', SM);
sum.addEventListener('click', S);