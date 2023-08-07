type cellProperty = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  alignment: string;
  fontFamily: string;
  fontSize: number;
  fontColor: string;
  BGcolor: string;
};
const sheetDB: cellProperty[][] = [];

for (let i: number = 0; i < rows; i++) {
  let sheetRow: cellProperty[] = [];
  for (let j: number = 0; j < cols; j++) {
    let cellProp: cellProperty = {
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
