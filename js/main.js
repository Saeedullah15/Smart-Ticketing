const seats = document.getElementsByClassName('seat-no');
let seatsArray = [];
for (const seat of seats) {
    seat.addEventListener('click', function () {
        // removing seat duplication
        if (!seatsArray.includes(seat)) {
            seatsArray.push(seat);
            console.log(seatsArray);
        }
        else {
            alert("you can not select one seat more than once!");
            return
        }

        // changing seat color to green
        seat.style.backgroundColor = "#1DD100";
        seat.style.color = "white";

        // seat count increasing
        const seatIncrease = document.getElementById("seat-increase").innerText;
        let seatIncreaseInNumber = parseInt(seatIncrease);
        seatIncreaseInNumber = seatIncreaseInNumber + 1;
        document.getElementById("seat-increase").innerText = seatIncreaseInNumber;

        // maximum ticket buying
        if (seatIncreaseInNumber > 4) {
            alert("you can not select more than 4 seats!");
            seat.style.backgroundColor = "#F7F8F8";
            seat.style.color = "#03071280";
            document.getElementById("seat-increase").innerText = 4;
            return
        }

        // next button enabling based on conditions
        const nextBtn = document.getElementById("next-btn");
        document.getElementById("phone").addEventListener("keyup", function (e) {
            const phoneValue = e.target.value;
            if (seatIncreaseInNumber >= 1 && phoneValue !== "") {
                nextBtn.removeAttribute("disabled");
            }
        });

        // apply button enabling based on a condition
        const applyBtn = document.getElementById("apply-btn");
        if (seatIncreaseInNumber === 4) {
            applyBtn.removeAttribute("disabled");
        }

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
        let totalPrice = seatPrice * seatIncreaseInNumber;
        let totalPriceElement = document.getElementById("total-price");
        let grandTotalElement = document.getElementById("grand-total");
        totalPriceElement.innerText = totalPrice;
        grandTotalElement.innerText = totalPrice;
    })
}

// apply button interactions
const couponInput = document.getElementById("coupon-input");
const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function () {
    let couponInputValue = couponInput.value;
    let totalPrice = parseInt(document.getElementById("total-price").innerText);
    let grandTotal = parseInt(document.getElementById("grand-total").innerText);
    let couponContainer = document.getElementById("coupon-container");

    if (couponInputValue === "NEW15") {
        let discountedPrice = totalPrice * (15 / 100);

        const totalPriceContainer = document.getElementById("total-price-container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("flex", "justify-between", "my-4");
        newDiv.innerHTML = `
                    <p class="font-bold text-sm text-black">Discounted Price</p>
                    <p class="font-bold text-sm text-black">BDT ${discountedPrice}</p>
                `;
        totalPriceContainer.appendChild(newDiv);

        grandTotal = grandTotal - discountedPrice;
        document.getElementById("grand-total").innerText = grandTotal;

        // hiding coupon part 
        couponContainer.classList.add("hidden");
    }
    else if (couponInputValue === "Couple 20") {
        let discountedPrice = totalPrice * (20 / 100);

        const totalPriceContainer = document.getElementById("total-price-container");
        let newDiv = document.createElement("div");
        newDiv.classList.add("flex", "justify-between", "my-4");
        newDiv.innerHTML = `
                    <p class="font-bold text-sm text-black">Discounted Price</p>
                    <p class="font-bold text-sm text-black">BDT ${discountedPrice}</p>
                `;
        totalPriceContainer.appendChild(newDiv);

        grandTotal = grandTotal - discountedPrice;
        document.getElementById("grand-total").innerText = grandTotal;

        // hiding coupon part
        couponContainer.classList.add("hidden");
    }
    else {
        alert("wrong coupon inserted!!");
    }
})

// refreshing page
document.getElementById("continue-btn").addEventListener("click", function () {
    location.reload();
})