let input = document.getElementById("inp");

let btn = document.getElementById("btn");

let container = document.getElementById("downBox");

function text(){
    btn.style.background = "gold";
    if(input.value == ""){
        btn.style.background = "white";
    }
}

btn.addEventListener("click",function(){
    let div1 = document.createElement("div");
    div1.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    height: 9vh;
    width: 95%;
    background: #eee;
    margin: 15px auto 0px auto
    `
    let p = document.createElement("p");
    let txtP = document.createTextNode(input.value);
    p.appendChild(txtP);
    p.style.cssText = `
    font-weight: 500;
    font-size: 20px
    `

    let div2 = document.createElement("div");
    div2.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px
    `
    let btn2 = document.createElement("button");
    let txtBtn1 = document.createTextNode("Delete");
    btn2.style.cssText = `
    padding: 10px 12px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 3px;
    background: red;
    color: white
    `
    btn2.appendChild(txtBtn1);
    btn2.addEventListener("click",function(){
     div1.remove()
    })

    let btn3 = document.createElement("button");
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-check";
    btn3.appendChild(icon);
    btn3.style.cssText = `
    color: #42b800;
    font-size: 20px;
    `
btn3.addEventListener("click",function(){
   p.classList.toggle("class");
   icon.classList.toggle("class2")
})
    div2.append(btn2,btn3);

    div1.append(p,div2);
    document.body.appendChild(div1);

    input.focus();
    input.value = ""
})


