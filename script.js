window.onload = function(){
    let continer = document.getElementById("continer");
    let img = document.querySelector("img");
    continer.addEventListener("mousemove", function(e){
        const x = e.clientX  - e.target.offsetLeft; 
        const y = e.clientY - e.target.offsetTop;
        img.style.transformOrigin= `${x}px ${y}px`;
        img.style.transform ='scale(2)'
    })
    continer.addEventListener("mouseout", function(e){
        img.style.transformOrigin= `center center`;
        img.style.transform ='scale(1)'
    });
}