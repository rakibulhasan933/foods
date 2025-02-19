﻿# Dynamic Food Box Grid with HTML, CSS, and JavaScript

This guide will help you create a dynamic food grid step by step. Each step will build on the previous one, making it beginner-friendly and easy to understand.

---

## Step 1: Create the Basic HTML Structure

First, we need an HTML file to define the structure of our webpage.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Grid</title>
</head>

<body>
    <h2>Foods</h2>
    <div id="box-container">
        <!-- Food items will be added here dynamically -->
    </div>
</body>

</html>
```

**What did we do here?**
1. Defined an HTML structure with `<!DOCTYPE html>`.
2. Added a `<head>` section to include metadata and the page title.
3. Added a `<body>` section with an `<h2>` heading and a `<div>` container (`id="box-container"`) to hold the food items.

---

## Step 2: Add Some Basic Styling

Next, let's add styles to make the page look nicer.

```html
<style>
    #box-container {
        border: 4px solid blue;
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    img {
        width: 100%;
    }
</style>
```

**What did we do here?**
1. Styled `#box-container` to use a grid layout with three columns and gaps between items.
2. Ensured images inside the container will fill their container's width.

---

## Step 3: Link an External JavaScript File

Now, let's link a JavaScript file to our HTML to dynamically add content.

```html
<script src="app.js"></script>
```

Place this line just before the closing `</body>` tag. This will allow JavaScript to modify the page after it loads.

---

## Step 4: Fetch Data Using JavaScript

Create a new file called `app.js` and start by writing the code to fetch data from an API.

```javascript
async function main() {
    // Step 1: Select the container where food items will be displayed
    const boxContainer = document.getElementById("box-container");

    // Step 2: Fetch food data from the API
    const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
    const foods = await res.json();

    console.log(foods); // Log the data to see its structure
}

main();
```

**What did we do here?**
1. Created an `async` function `main()` to handle asynchronous operations.
2. Selected the `#box-container` element using `document.getElementById`.
3. Used `fetch()` to get data from the API.
4. Logged the data to the console to understand its structure.

---

## Step 5: Display Data Dynamically

Now, let’s use the fetched data to create food boxes dynamically.

```javascript
async function main() {
    const boxContainer = document.getElementById("box-container");
    const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
    const foods = await res.json();

    foods.forEach((food) => {
        // Create a new div for each food item
        const box = document.createElement("div");

        // Style the div
        box.style.border = "2px solid green";
        box.style.padding = "10px";
        box.style.borderRadius = "8px";

        // Add content to the div
        box.innerHTML = `
            <h1>${food.name}</h1>
            <h4>Category: ${food.category}</h4>
            <h3>Price: $${food.price}</h3>
            <p>${food.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</p>
            <img src="${food.image}" alt="${food.name}">
        `;

        // Add the div to the container
        boxContainer.append(box);
    });
}

main();
```

**What did we do here?**
1. Used `forEach()` to loop through each food item.
2. Created a new `div` for each item using `document.createElement("div")`.
3. Styled the `div` with borders, padding, and rounded corners.
4. Used `innerHTML` to add content like the name, category, price, and image of the food.
5. Appended the `div` to the `#box-container`.

---

## Step 6: Test the Page

Open the `index.html` file in your browser. You should see a grid of food items, each showing:
- Name
- Category
- Price
- Vegetarian status
- Image

---

## Additional Tips for Beginners

- **Break It Down**: Work on small steps, test them, and then move to the next step.
- **Console Logs**: Use `console.log()` often to see what your code is doing.
- **CSS Improvements**: Customize the styles to make your page look unique.

---

Save your files and enjoy seeing your dynamic food grid in action!
