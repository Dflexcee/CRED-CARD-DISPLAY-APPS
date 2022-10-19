// const bb = document.querySelector('.right');
// bb.style.background = 'yellow';

//  CARD BOTTON
const btn = document.querySelector('.btn').addEventListener("click", btnRuns);
function btnRuns(e) {
    alert("I HOPE YOU ENJOY THE EXPERIENCE ");
    e.preventDefault(); 
};


//  CARD DISPLAY
const fullname = document.querySelector('#fname');
fullname.addEventListener('keyup', myfunction22);
function myfunction22(e) {
    let cardDispaly = document.querySelector('.display-name');
    cardDispaly.innerHTML  = fullname.value;
    e.preventDefault();
};

//  CARD DAY

const datedsp = document.querySelector('#dmonth');
datedsp.addEventListener('keyup', myfunction23);
function myfunction23(e) {
    let cardDispalydd = document.querySelector('.display-date');
    cardDispalydd.innerHTML  = datedsp.value;
    e.preventDefault();
};


//  CARD YEAR

const dateyear = document.getElementById('dyear');
dateyear.addEventListener('keyup', myfunction26);
function myfunction26(e) {
    let cardDispalyear = document.querySelector('#ddmth');
    let yearhash = dateyear.value;    
    cardDispalyear.innerHTML  = yearhash;
    yearhash.split("/");

    e.preventDefault();
};


const ccc = document.getElementById('ccv1');
ccc.addEventListener('keyup', myfunction25);
function myfunction25(e) {
    let cardDispalccc = document.querySelector('.display-cvc');
    cardDispalccc.innerHTML  = ccc.value;
    e.preventDefault();
};




const cardnumber = document.querySelector('#cnumber');
cardnumber.addEventListener('input', myfunction24);
function myfunction24(e) {
    
    let cardDispalyno = document.querySelector('#ddname');
    let numdivder =   cardnumber.value;
    cardDispalyno.innerHTML  = numdivder;
    // . if letter count = 4 then add space
    // console.log(numdivder.trim());
    if(numdivder.replaceAll(" ", '').length % 4 == 0){
      // add to input
      cardnumber.value = cardnumber.value + " ";
    }
    e.preventDefault();
};


