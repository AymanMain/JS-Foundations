const btn=document.querySelector("button");
const ulV=document.querySelector("ul");

function addButton(){
    const input=document.querySelector("input");
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");

    span.textContent=input.value;
    button.textContent="Delete";

    button.addEventListener("click",()=>li.remove());

    li.appendChild(span);
    li.appendChild(button);
    ulV.appendChild(li);
    input.value="";
};
btn.addEventListener("click",addButton);