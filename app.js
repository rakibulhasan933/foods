async function main() {
    const boxContainer = document.getElementById("box-container");
    const spinner = document.getElementById("loading-spinner");

    try {
        spinner.style.display = "block";
        const res = await fetch("https://www.rakibulhasanrakib.com/api/foods");
        const foods = await res.json();
        // console.log(foods);

        foods.forEach((pd) => {
            // console.log(food);
            const box = document.createElement("div");
            box.style.border = "2px solid green";
            box.style.padding = "10px";
            box.style.borderRadius = "8px";

            box.innerHTML = `
        <h1 class="name">${pd.name} <i class="fa fa-cart-plus" aria-hidden="true"></i></h1> 
        <h4>Category: ${pd.category} </h4> 
        <h3 class="price">Price: &#2547; ${pd.price} </h3> 
        <p>${pd.isVegetarian ? "Vegetarian" : "Non-Vegetarian"}</p> 
        <img src="${pd.image}" width="500" height="300" alt="${pd.name}"> 
        `;

            boxContainer.append(box);
        });
    } catch (error) {
        const errorElement = document.createElement("h3");
        errorElement.style.color = "red";
        errorElement.style.fontSize = "100px";
        errorElement.style.textAlign = "center";
        errorElement.innerHTML = "404";
        boxContainer.append(errorElement);
    } finally {
        spinner.style.display = "none";
    }

}

main();
