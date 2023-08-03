"use strict";
const rows = 100;
const cols = 26;
const addressColCont = document.querySelector(".address-col-cont");
const addressRowCont = document.querySelector(".address-row-cont");
const cellsCont = document.querySelector(".cells-cont");
const addressBar = document.querySelector(".address-bar");
function addListenerOnAddressBarDispaly(cell, i, j) {
    cell === null || cell === void 0 ? void 0 : cell.addEventListener("click", (e) => {
        const rowId = i + 1;
        const colId = String.fromCharCode(65 + j);
        addressBar.value = addressBar.innerText = `${colId}${rowId}`;
    });
}
for (let i = 0; i < rows; i++) {
    const addressCol = document.createElement("div");
    addressCol.setAttribute("class", "address-col");
    addressCol.innerText = (i + 1).toString();
    addressColCont.appendChild(addressCol);
}
for (let i = 0; i < cols; i++) {
    const addressRow = document.createElement("div");
    addressRow.setAttribute("class", "address-row");
    addressRow.innerText = String.fromCharCode(65 + i);
    addressRowCont.appendChild(addressRow);
}
for (let i = 0; i < rows; i++) {
    const rowCont = document.createElement("div");
    rowCont.setAttribute("class", "row-cont");
    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");
        rowCont.appendChild(cell);
        addListenerOnAddressBarDispaly(cell, i, j);
    }
    cellsCont === null || cellsCont === void 0 ? void 0 : cellsCont.appendChild(rowCont);
}
