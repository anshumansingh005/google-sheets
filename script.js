"use strict";
const rows = 100;
const cols = 26;
const addressColCont = document.querySelector(".address-col-cont");

const addressRowCont = document.querySelector(".address-row-cont");
for (let i = 0; i < rows; i++) {
  const addressCol = document.createElement("div");
  addressCol.setAttribute("class", "address-col");
  addressCol.innerText = (i + 1).toString();
  addressColCont.appendChild(addressCol);
}
for (let i = 0; i < cols; i++) {
  const addressRow = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = (i + 1).toString();
  addressRowCont.appendChild(addressRow);
}
