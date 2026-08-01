// Function to calculate the total bill
// ...prices is a rest parameter
// It collects all the passed prices into an array.
function calculateTotal(...prices) {
    
    let total = 0; // Variable to store the total amount

   
    for (let price of prices) {   // Loop through each price in the prices array

        total += price;         // Add the current price to the total
    }
    console.log("Total Bill = ₹" + total);// Print the final bill amount
}

// Function Call

// JavaScript internally creates:
// prices = [500, 1000, 200, 1500]
calculateTotal(500, 1000, 200, 1500);