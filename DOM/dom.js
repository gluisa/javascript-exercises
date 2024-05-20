const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("content");
para.textContent = "Hey this is red!";
para.style.color = "red";


const head = document.createElement("h3");
head.classList.add("content");
head.textContent = "I'm a blue h3!";
head.style.color = "blue";

const blackBox = document.createElement("div");
blackBox.classList.add("blackBox");
blackBox.style.backgroundColor = "pink";
blackBox.style.border = "thick solid black";

const head2 = document.createElement("h1");
head2.classList.add("blackBox");
head2.textContent = "I'm in a div";
blackBox.appendChild(head2);

const p2 = document.createElement("p");
p2.classList.add("blackBox");
p2.textContent = "ME TOO!";
blackBox.appendChild(p2);

container.appendChild(content);
container.appendChild(para);
container.appendChild(head);
container.appendChild(blackBox);

