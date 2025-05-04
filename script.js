const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });

  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", 2); // spans both columns
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalRow.appendChild(totalCell);

  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
