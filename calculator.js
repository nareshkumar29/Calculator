const output = document.getElementById("output");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const equal = document.getElementById("equal");

const value = document.querySelectorAll(".val");

value.forEach((val) => {
    val.addEventListener("click",()=>{
        output.value += val.value;
    })
});

ac.addEventListener("click",()=>{
    output.value = "";
})

del.addEventListener("click",()=>{
    output.value = output.value.slice(0,-1);
})

equal.addEventListener("click",()=>{
    try{
        output.value = eval(output.value);
    }catch(e){
        alert(e);
    }
})
