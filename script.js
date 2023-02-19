const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container")

const maxPalleteBoxes = 30;

const generatePallete = () => {
container.innerHTML="";
for(let i = 0; i< maxPalleteBoxes ; i++){

    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`
    
    const color= document.createElement("li");
    color.classList.add("color");
    color.innerHTML= `<div class="rect-box" style="background:${randomHex}"></div>
                      <span class="hex-value">${randomHex}</span>`;
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color)

}   
};

generatePallete()

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value") ;
    navigator.clipboard.writeText(hexVal).then(() => {
    colorElement.innerText= "Copied";
    setTimeout(()=> colorElement.innerText = hexVal, 300)
    }).catch(()=> alert("Failed to copy the color code!"))
}

refreshBtn.addEventListener("click", generatePallete);