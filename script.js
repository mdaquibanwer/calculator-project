const buttons = document.querySelectorAll("button");
let String = '';
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const inputs = document.querySelector('input');
        if(e.target.innerHTML == '='){
            String=eval(String);
            inputs.value = String;
        }
        else if(e.target.innerHTML =='C'){
            String=' '
            inputs.value = String;
    
        }else{
            String+=e.target.innerHTML;
            inputs.value = String;
        }
    })
    
})