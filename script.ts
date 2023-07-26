const rows: number = 100;
const cols: number = 26;

const addressColCont: HTMLDivElement | null =
  document.querySelector(".address-col-cont");

const addressRowCont: HTMLDivElement | null =
  document.querySelector(".address-row-cont");

const cellsCont: HTMLDivElement | null = document.querySelector(".cells-cont");

const addressBar: HTMLInputElement | null =
  document.querySelector(".address-bar");

function addListenerOnAddressBarDispaly(
  cell: HTMLElement,
  i: number,
  j: number
): void {
  cell?.addEventListener("click", (e: MouseEvent): void => {
    const rowId: number = i + 1;
    const colId: String = String.fromCharCode(65 + j);
    addressBar!.value = addressBar!.innerText = `${colId}${rowId}`;
  });
}

for (let i: number = 0; i < rows; i++) {
  const addressCol: HTMLDivElement = document.createElement("div");
  addressCol.setAttribute("class", "address-col");

  addressCol.innerText = (i + 1).toString();
  addressColCont!.appendChild(addressCol);
}
for (let i: number = 0; i < cols; i++) {
  const addressRow: HTMLDivElement = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = String.fromCharCode(65 + i);

  addressRowCont!.appendChild(addressRow);
}

for (let i: number = 0; i < rows; i++) {
  const rowCont: HTMLDivElement | null = document.createElement("div");
  rowCont.setAttribute("class", "row-cont");

  for (let j: number = 0; j < cols; j++) {
    let cell: HTMLDivElement | null = document.createElement("div");
    cell.setAttribute("class", "cell");
    cell.setAttribute("contenteditable", "true");
    rowCont.appendChild(cell);
    addListenerOnAddressBarDispaly(cell, i, j);
  }
  cellsCont?.appendChild(rowCont);
}
