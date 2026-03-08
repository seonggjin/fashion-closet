let closet = [];

function addItem() {

    let name = document.getElementById("itemName").value;
    let category = document.getElementById("category").value;

    if (name === "") {
        alert("Please enter clothing name");
        return;
    }

    let item = {
        name: name,
        category: category
    };

    closet.push(item);

    displayCloset();

}

function displayCloset() {

    let list = document.getElementById("closetList");

    list.innerHTML = "";

    closet.forEach(item => {

        let card = document.createElement("div");

        card.className = "item-card";

        card.innerHTML = `
        <p>${item.name}</p>
        <small>${item.category}</small>
        `;

        list.appendChild(card);

    });

}

function recommendOutfit() {

    let tops = closet.filter(item => item.category === "Top");
    let bottoms = closet.filter(item => item.category === "Bottom");
    let shoes = closet.filter(item => item.category === "Shoes");

    if (tops.length === 0 || bottoms.length === 0 || shoes.length === 0) {
        alert("Add at least one Top, Bottom, and Shoes first!");
        return;
    }

    let top = tops[0];
    let bottom = bottoms[0];
    let shoe = shoes[0];

    let outfit = top.name + " + " + bottom.name + " + " + shoe.name;

    document.getElementById("outfitResult").textContent =
        "Recommended Outfit: " + outfit;

}