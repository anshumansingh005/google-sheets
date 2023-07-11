"use strict";
const rows = 100;
const cols = 26;
const addressColCont = document.querySelector(".address-col-cont");
for (let i = 0; i < rows; i++) {
    const addressCol = document.querySelector("div");
    addressCol === null || addressCol === void 0 ? void 0 : addressCol.innerText = toString(i + 1);
}
