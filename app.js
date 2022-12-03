const incBtn = document.getElementById("incBtn");

const saveBtn = document.getElementById("saveBtn");

const countEl = document.getElementById("count-el");

const saveEl = document.getElementById("save-el");

const resetEntries = document.getElementById("ResetEntries");

let count = 0;

let countStr = count + " - ";

const increment = function () {
  count += 1;
  countEl.textContent = count;
};

const save = function () {
  countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
};

const reset = function () {
  countStr = "";
  saveEl.textContent = countStr;
  saveEl.textContent = "Previous entries: ";
};

incBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", save);
resetEntries.addEventListener("click", reset);
