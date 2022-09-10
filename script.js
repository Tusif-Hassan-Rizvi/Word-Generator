let InputWord = document.getElementById("input-word");
let OutputBox = document.getElementById('output-container');
let btn = document.getElementById('btn');







btn.addEventListener('click', () => {
    
    let str = InputWord.value;
    let OutputValue = '';
    let html = '';

if(str===''){
    OutputBox.innerHTML=`<span class="valueBox">Please Input Value!</span>`
}

else{


    for (let i = 0; i < str.length; i++) {
        let RandomNumber = Math.round(0 + (str.length - 1) * Math.random());
        OutputValue += str[RandomNumber];
    }
    html += `<span class="valueBox">${OutputValue.toUpperCase()}</span>`;
    OutputBox.innerHTML = html;
}
})
