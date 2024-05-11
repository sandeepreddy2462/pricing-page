const checkbox = document.getElementById("toggle");
let pricingcards = document.querySelectorAll(".pricing-card");

function priceUpdate() {
    pricingcards.forEach(card => {
        let priceElement = card.querySelector(".price");
        let initialPrice = parseFloat(priceElement.dataset.initial);
        if (checkbox.checked) {
            priceElement.textContent = '$' + (initialPrice *1.8 ).toFixed(2);        
          } else {
            priceElement.textContent = '$' + initialPrice.toFixed(2);
        }
    });
}

checkbox.addEventListener('change', priceUpdate);
function setInitialPrices() {
    pricingcards.forEach(card => {
        let priceElement = card.querySelector(".price");
        let initialPrice = parseFloat(priceElement.textContent.slice(1)); 
        priceElement.dataset.initial = initialPrice;
    });
}

setInitialPrices();
priceUpdate();
