const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const boom = document.createElement("p");
boom.classList.add("redp");
boom.textContent= "Hey I'm red!";
boom.style.color="red";
container.appendChild(boom);

const bh3=document.createElement("h3");
boom.classList.add("bh3");
bh3.textContent="i'm a blue H3!";
bh3.style.color="blue";
container.appendChild(bh3);

const bpcontainer=document.createElement("div");
bpcontainer.style.borderColor="#000000";
bpcontainer.style.borderStyle="solid";
bpcontainer.style.borderRadius="10px";
bpcontainer.style.backgroundColor="pink";
container.appendChild(bpcontainer);
bpcontainer.textContent="Test";

const childh1=document.createElement("h1");
childh1.textContent="i'm in a div";
bpcontainer.appendChild(childh1);

const pm2=document.createElement("p");
pm2.textContent="ME TOO!";
bpcontainer.appendChild(pm2);

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btnL=document.createElement("button");
btnL.textContent="Hello !";
btnL.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });
container.appendChild(btnL);
