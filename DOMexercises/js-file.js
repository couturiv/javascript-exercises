// add div class="content" with text inside div id="container"
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// add p with style color="red""
const text = document.createElement("p");
text.style.color = "red";
text.textContent = "Hey I’m red";
container.appendChild(text);

// add h3 with style color="blue"
const titleH3 = document.createElement("h3");
titleH3.style.color = "blue";
titleH3.textContent = "I’m a blue h3!";
container.appendChild(titleH3);

// add div with class="border" with black border and pink background
const mydiv = document.createElement("div");
const titleH1 = document.createElement("h1");
mydiv.classList.add("border");
mydiv.style.cssText = "border: solid; border-color: black; border-radius: 2px; background: pink"
titleH1.textContent = "I’m in a div!"
text.textContent = "ME TOO!"

container.appendChild(mydiv);
mydiv.appendChild(titleH1);
mydiv.appendChild(text);

// button onclick event
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

// display the clicked element in console
btn.addEventListener("click", function (e) {
    console.log(e.target);
  });

// set bg color on click
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});