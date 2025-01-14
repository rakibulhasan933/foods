# Dynamic Food Box Grid with HTML, CSS, and JavaScript

This example demonstrates how to dynamically generate a grid of food items fetched from an API. The implementation combines HTML, CSS, and JavaScript. Below is the step-by-step breakdown of the code.

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
    <style>
        /* Style for the container that holds all the food boxes */
        #box-container {
            border: 4px solid blue;
            padding: 10px;
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 columns of equal width */
            gap: 10px;
        }

        /* Style for the images inside the food boxes */
        img {
            width: 100%; /* Make images fill the width of their container */
        }
    </style>
</head>

<body>
    <h2>Foods</h2>
    <div id="box-container">
        <!-- This is where the food items will be added dynamically by JavaScript -->
    </div>
    <script src="app.js"></script> <!-- Link to the external JavaScript file -->
</body>

</html>
```

### Explanation:

1. **HTML Layout**: 
   - The `#box-container` div is a placeholder where food items will be dynamically added.
   - A link to `app.js` is included to execute JavaScript logic.

2. **Inline CSS**:
   - The `#box-container` is styled with a blue border, padding, and a grid layout with three columns.
   - Images are made responsive by setting their width to 100%.

---

## JavaScript Logic

```javascript
async function main() {
    const boxContainer = document.getElementById("box-container");

    // Fetch food data from the API
    const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
    const foods = await res.json();

    // Loop through the food data and dynamically create food boxes
    foods.forEach((food) => {
        const box = document.createElement("div");
        box.style.border = "2px solid green";
        box.style.padding = "10px";
        box.style.borderRadius = "8px";
        box.innerHTML = `
        <h1>${food.name}</h1>
        <h4>Category:- ${food.category}</h4>
        <h3>Price:-$ ${food.price}</h3>
        <p>${food.isVegetarian ? "Vegetarian" : "noVegetarian"} </p>
        <img src="${food.image}" width="500" height="300" alt="${food.name}">
        `;
        boxContainer.append(box);
    });
};

main();
```

### Explanation:

1. **Fetching Data**:
   - The `fetch` function retrieves JSON data from the API endpoint `https://www.rakibulhasanrakib.com/api/foods`.
   - The data is parsed into a JavaScript object using `res.json()`.

2. **Dynamically Adding Content**:
   - For each food item, a `div` element is created and styled with a green border, padding, and rounded corners.
   - The `innerHTML` property of each `div` is set with:
     - Name of the food.
     - Category and price.
     - Vegetarian status.
     - An image of the food.
   - Each `div` is appended to the `#box-container`.

3. **Async/Await**:
   - The `main` function uses async/await for clean handling of the asynchronous fetch call.

---

## Result
When the code runs:
- The browser fetches the food data from the API.
- A responsive grid of food items is displayed, each showing the food name, category, price, vegetarian status, and image.

---

### Notes
- Replace the API endpoint with your own if necessary.
- Ensure CORS is properly configured on the API server to avoid issues.
- Adjust CSS grid styles as needed for better responsiveness.

---

Save the HTML code as `index.html`, the JavaScript code as `app.js`, and run the project in a browser to see the output.
