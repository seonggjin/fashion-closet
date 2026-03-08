let closet = [];

function addItem() {
    let name = document.getElementById("itemName").value; 
    let category = document.getElementById("category").value;
    
    let item = {
        name: name,
        category: category
    }
    closet.push(item);
    
    displayCloset();
}

function displayCloset() {
    let list = document.getElementById("closetList");
    list.innerHTML = "";

    for (let i=0;i<closet.length;i++) {
        let li = document.createElement("li");
        li.textContent = closet[i].name + " (" +closet[i].category + ")";
        list.appendChild(li);
    }
}

function recommendOutfit() {
    let tops = closet.filter(item => item.category === "Top");
    let bottoms = closet.filter(item => item.category === "Bottom");
    let shoes = closet.filter(item => item.category === "shoes");

    let outfit = tops[0].name + " + " + bottoms[0].name + " + " + shoes[0].name;
    
    alert("Recommended Outfit: " +outfit);
}