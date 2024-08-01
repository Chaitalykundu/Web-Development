//Write you javascript code here

let c = 0;
let count = document.getElementById("count");

function countIncrease() {
  c += 1;
  count.innerHTML = c;
}

function countDecrease() {
  if (c == 0) disable();
  else {
    c -= 1;
    count.innerHTML = c;
  }

  /*
    alternative (no need of disable function)

    if(c>0){
        c -= 1;
        count.innerHTML = c;
    }
  */
}

function disable() {
  let btn = document.getElementById("decrease");

  btn.disable = true;
}

// reset button
let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", reset);

function reset() {
  c = 0;
  count.innerHTML = c;
}
