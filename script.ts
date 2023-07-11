const rows: number = 100;
const cols: number = 26;

const addressColCont = document.querySelector(
  ".address-col-cont"
) as HTMLDivElement | null;
for (let i: number = 0; i < rows; i++) {
  const addressCol = document.querySelector("div") as HTMLDivElement | null;

  addressCol?.innerText = toString(i + 1);
}
