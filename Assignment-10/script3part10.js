function submitOrder() {

    let size = document.querySelector('input[name="size"]:checked');
    
    if (!size) {
        alert("select a pizza size!");
        return;
    }

    let selectedSize = size.value;

    let toppings = document.querySelectorAll('input[name="topping"]:checked');
    let selectedToppings = [];

    toppings.forEach(function(topping) {
        selectedToppings.push(topping.value);
    });

    // Display order summary
    let orderSummary = "You ordered a " + selectedSize + " pizza";
    
    if (selectedToppings.length > 0) {
        orderSummary += " with " + selectedToppings.join(", ");
    } else {
        orderSummary += " with no toppings.";
    }

    document.getElementById("orderSummary").innerHTML = orderSummary;
}
