function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

//When we make an item, we will give it the behavior to respond to being picked up.
//Add an event listener to item that responds to the click event.
//Since item is in scope, we can reference it within the event listener and use its remove method
//Now that we can pick up items, let's add them to our inventory. Here's what we need to do:
//Create an img element.
//Define its src attribute using the URL parameter passed from above.
//Append the img to inventory.
function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  item.addEventListener("click", function () {
    item.remove();
    let inventoryItem = document.createElement("img");
    inventoryItem.src = url;
    inventory.append(inventoryItem);
  });
}

//To fix the scope bug, move the definition of inventory outside of newInventory.
//This will make the inventory div a global variable, allowing us to reference and append to it within our event listener for picking up items.
//At this point, you should be able to click on an item and see it move from the main area of the screen to inside your inventory.
let inventory;
function newInventory() {
  inventory = document.createElement("div");
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
}

newInventory();
newImage("assets/green-character.gif", 100, 250);
newImage("assets/tree.png", 200, 450);
newImage("assets/pillar.png", 350, 250);
newImage("assets/pine-tree.png", 450, 350);
newImage("assets/crate.png", 150, 350);
newImage("assets/well.png", 500, 575);

newItem("assets/sword.png", 500, 555);
newItem("assets/shield.png", 165, 335);
newItem("assets/staff.png", 600, 250);

//Bonus
//It doesn't make sense that newInventory() doesn't actually make our inventory div anymore. Try to move let inventory = document.createElement('div') back inside the newInventory function but define inventory as a global variable using return values.
//Refactor the code so the logic for adding an item to the inventory is in its own function.
