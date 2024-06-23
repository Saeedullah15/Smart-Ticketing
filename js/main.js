const seats = document.getElementsByClassName('seat-no');
for (const seat of seats) {
    seat.addEventListener('click', function () {
        // changing seat color to green
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "white";

        // seat count increasing
        const seatIncrease = document.getElementById("seat-increase").innerText;
        let seatIncreaseInNumber = parseInt(seatIncrease);
        seatIncreaseInNumber = seatIncreaseInNumber + 1;
        document.getElementById("seat-increase").innerText = seatIncreaseInNumber;

        // seat count decreasing
        const seatDecrease = document.getElementById("seat-decrease").innerText;
        let seatDecreaseInNumber = parseInt(seatDecrease);
        seatDecreaseInNumber = seatDecreaseInNumber - 1;
        document.getElementById("seat-decrease").innerText = seatDecreaseInNumber;

        // appending seat name, class, price
        const seatName = seat.innerText;
        const seatListContainer = document.getElementById("seat-list-container");
        const newDiv = document.createElement("div");
        newDiv.classList.add("flex", "justify-between", "my-2");
        newDiv.innerHTML = `
            <p class="font-bold text-[#03071299] text-sm">${seatName}</p>
            <p class="font-bold text-[#03071299] text-sm">Economy</p>
            <p id="seat-price" class="font-bold text-[#03071299] text-sm">550</p>
        `;
        seatListContainer.appendChild(newDiv);

        // total price and grand total
        const seatPrice = parseInt(document.getElementById("seat-price").innerText);
        const totalPrice = seatPrice * seatIncreaseInNumber;
        let totalPriceElement = document.getElementById("total-price");
        let grandTotalElement = document.getElementById("grand-total");
        totalPriceElement.innerText = totalPrice;
        grandTotalElement.innerText = totalPrice;
        console.log(totalPriceElement, grandTotalElement);
    })
}