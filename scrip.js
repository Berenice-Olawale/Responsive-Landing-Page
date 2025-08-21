const body = document.body;
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Theme";
toggleBtn.className = "btn btn-secondary position-fixed bottom-0 end-0 m-3";

toggleBtn.addEventListener("click", ()=>{
    body.classList.toggle("bg-dark")
    body.classList.toggle("text-white");
});

document.body.appendChild(toggleBtn);