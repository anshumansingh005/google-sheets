const rows: number = 100;
const cols: number = 26;

const addressColCont: HTMLElement | null =
  document.querySelector(".address-col-cont");

for (let i: number = 0; i < rows; i++) {
  const addressCol: HTMLDivElement = document.createElement("div");

  addressCol.setAttribute("class", "address-col");

  addressCol.innerText = (i + 1).toString();
  addressColCont!.appendChild(addressCol);
}
for (let i: number = 0; i < cols; i++) {
  const addressRow: HTMLDivElement = document.createElement("div");
  addressRow.setAttribute("class", "address-row");
  addressRow.innerText = (i + 1).toString();

  addressRow!.appendChild(addressRow);
}
