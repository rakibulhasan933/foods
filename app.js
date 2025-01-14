// Define an asynchronous function to fetch and display food data
async function main() {
    // Select the container where food boxes will be appended
    const boxContainer = document.getElementById("box-container");

    // Fetch food data from the API
    const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
    const foods = await res.json(); // Convert the response to JSON

    // Loop through each food item in the fetched data
    foods.forEach((food) => {
        // Create a new div element for each food item
        const box = document.createElement("div");
        box.style.border = "2px solid green"; // Add a green border to each box
        box.style.padding = "10px"; // Add padding inside each box
        box.style.borderRadius = "8px"; // Round the corners of each box

        // Set the inner HTML of the box with food details
        box.innerHTML = `
        <h1>${food.name}</h1> <!-- Display the food name -->
        <h4>Category: ${food.category}</h4> <!-- Display the food category -->
        <h3>Price: $${food.price}</h3> <!-- Display the food price -->
        <p>${food.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</p> <!-- Show if the food is vegetarian -->
        <img src="${food.image}" width="500" height="300" alt="${food.name}"> <!-- Display the food image -->
        `;

        // Append the newly created box to the container
        boxContainer.append(box);
    });
}

// Call the main function to execute the code
main();
