const getSumBtn = document.createElement("button");
let prices = document.getElementsByClassName("price");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let totalPrice=0;
	for(let i = 0 ; i<prices.length ; i++){
		totalPrice+=Number(prices[i].innerText);
	}

	let newRow = document.createElement("tr");
	newRow.id = 'ans';
	newRow.innerText = totalPrice;
	document.body.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);