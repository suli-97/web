const ul_el = document.getElementById("ul");
const income_el = document.getElementById("income");
const expense_el = document.getElementById("expense");
const text_el = document.getElementById("text");
const amount_el = document.getElementById("amount");
const submit_bt = document.getElementById("submit");
const balance_el = document.getElementById("balance");
submit_bt.addEventListener("click",function(){
    
    var text = text_el.value;
    var amount = +amount_el.value;
    if(text=="" || amount_el.value=="")
        return;
    if(amount > 0){
        income_el.innerHTML = +income_el.innerHTML+amount;
    }else{
        expense_el.innerHTML = +expense_el.innerHTML-amount;
    }
    balance_el.innerHTML = +balance_el.innerHTML+amount;
    var new_li = document.createElement("li"); 
    new_li.className = "history-li "+ (amount >= 0 ? "plus":"minus");
    var new_text = document.createElement("div");
    new_text.className = "li-text";
    new_text.innerHTML = text;
    var new_amount = document.createElement("div");
    new_amount.className = "li-amount";
    new_amount.innerHTML = amount;
    var new_button = document.createElement("button");
    new_button.className = "delete-li";
    new_button.innerHTML = "x";
    new_li.appendChild(new_text);
    new_li.appendChild(new_amount);
    new_li.appendChild(new_button);
    new_button.addEventListener("click",function(){
        ul_el.removeChild(new_li);
        if(amount > 0){
            income_el.innerHTML = +income_el.innerHTML - amount;
        }else{
            expense_el.innerHTML = +expense_el.innerHTML + amount;
        }
        balance_el.innerHTML = +balance_el.innerHTML - amount;
    })
    ul_el.appendChild(new_li);
});