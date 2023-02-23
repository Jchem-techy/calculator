const btns = document.querySelectorAll(`.btn`);
const screen = document.querySelector(`.screen`);
const equalBtn = document.querySelector(`.btn-equal`);
const clearBtn = document.querySelector(`.btn-clear`);

btns.forEach((btn) => {
  // console.log(btn);
  btn.addEventListener(`click`, (e) => {
    let number = btn.innerHTML;
    console.log(number);
    screen.value += number;
  });
});
equalBtn.addEventListener(`click`, () => {
  let value = eval(screen.value);
  screen.value = value;
});
clearBtn.addEventListener(`click`, () => {
  screen.value = ``;
});
