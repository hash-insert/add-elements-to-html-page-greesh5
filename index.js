const addelement=(e)=>{
    let el=document.getElementById("ele");
    let it=document.createElement(e);
    el.appendChild(it);
}
addelement("button");
addelement("li")

