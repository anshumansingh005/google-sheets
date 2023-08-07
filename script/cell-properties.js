"use strict";
const sheetDB = [];
for (let i = 0; i < rows; i++) {
    let sheetRow = [];
    for (let j = 0; j < cols; j++) {
        let cellProp = {
            bold: true,
            italic: true,
            underline: true,
            alignment: "left",
            fontFamily: "monospace",
            fontSize: 14,
            fontColor: "#000000",
            BGcolor: "#000000",
        };
        sheetRow.push(cellProp);
    }
    sheetDB.push(sheetRow);
}
