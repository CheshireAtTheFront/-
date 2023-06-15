let btn = document.querySelector('.btn-js');
let btnClose = document.querySelector('.btn_close-js');
let list = document.querySelector('.hide');
let liText = document.querySelectorAll('.li_text-js');
let input = document.querySelector('.input-js');
let btnSend = document.querySelector('.btn-js_send');
const ulList = document.querySelector('.list-js');


// input.value = liText[0].textContent;
btn.addEventListener('click', funcOpen);

// для открытия блока со списком и показать кнопку закрыть 
function funcOpen() {
  list.style = "display: block";
  btn.style = "display: none";
  btnClose.style = "display: block";
}

btnClose.addEventListener('click', funcClose);

// для закрытия блока со списком и показать кнопку open 
function funcClose() {
  list.style = "display: none";
  btn.style = "display: block";
  btnClose.style = "display: none";
}

// копирование текста в input из списка
for(let text of liText) {
  text.addEventListener('click', copyText);
}

//   изменение строк через input
let childLi = ulList.firstElementChild;
function copyText() { 
  childLi.textContent = this.textContent;
  input.value = this.textContent;
  list.style = "display: none";
  btn.style = "display: block";
  btnClose.style = "display: none";
  input.style = "border-bottom: 0.5px solid black";
  
  childLi.dataset.num = this.dataset.num;
} 

//   изменение текста в списке через input
btnSend.addEventListener('click', changeText);

function changeText() { 
  if(input.value == '') {
   input.style = "border: 0.5px solid red";
  }
  if(input.value != '') {
    liText[0].textContent = input.value;
    input.style = "border-bottom: 0.5px solid black";
    if(childLi.dataset.num == 1) {
      liText[1].textContent = input.value;
    }else if(childLi.dataset.num == 2) {
      liText[2].textContent = input.value;
    }else if(childLi.dataset.num == 3) {
      liText[3].textContent = input.value;
    }else if(childLi.dataset.num == 4) {
      liText[4].textContent = input.value;
   }
  }
}
