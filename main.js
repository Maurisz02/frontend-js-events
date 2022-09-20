
function mainKatt(e){
    //window.alert("Pressed");
    //document.body.classList.toggle('fontos');
    e.currentTarget.classList.toggle('fontos');

    if(e.currentTarget.classList.contains('fontos')){
        e.currentTarget.textContent = "Ez egy fontos gomb";
    }else{
        e.currentTarget.textContent = "Ez egy gomb";
    }

}

function mainDouble(){
    console.log("Pointer Enter");
}

function keyBoard(){
    alert("typing");
}

function userChange(e){
    //console.log(e.);
    //let newErtek = document.getElementById('userName').value;
    let newValue = e.currentTarget.value;
    console.log(newValue);
    //console.log("Megváltozott",newErtek);
}

function userInput(e){
    let newErtek = e.currentTarget.value;
    console.log(newErtek);
}

//document.getElementById('userName').addEventListener('keyup',keyBoard);

function osszead(){
    let x = parseInt(document.getElementById('xNum').value);
    let y = parseInt(document.getElementById('yNum').value);
    document.getElementById('eredmeny').value = x + y;
    document.getElementById('kivonas').textContent = x - y; //.innerHTML html tageket is vissza lehet adni

}

function colorPicker(e){
    let szin = e.currentTarget.value;
    document.getElementById('szinez').style.background = szin;
}

function textColor(e){
    let szin = e.currentTarget.value;
    document.body.style.color = szin;
}

function init(){
    console.log('init');
    document.getElementById('mainButton').addEventListener('click',mainKatt);
    document.getElementById('mainButton').addEventListener('pointerenter',mainDouble);
    document.getElementById('userName').addEventListener('change',userChange);
    document.getElementById('userName').addEventListener('input',userInput);

    document.getElementById('xNum').addEventListener('change',osszead);
    document.getElementById('yNum').addEventListener('change',osszead);

    document.getElementById('hatter').addEventListener('input',colorPicker);
    document.getElementById('betu').addEventListener('input', textColor);
}


document.addEventListener('DOMContentLoaded',init);//== head ben is jó a script meghívása