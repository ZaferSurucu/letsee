class Food{
    constructor(name, description, image){
        this.name = name
        this.description = description
        this.image = image
    }
}

const createMenuPage = (content) => {
    const food1 = new Food("bread","Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture","./Fresh_made_bread_05.jpg")
    const food2 = new Food("naber","Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture","./Fresh_made_bread_05.jpg")
    const food3 = new Food("bread","Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture","./Fresh_made_bread_05.jpg")
    const food4 = new Food("bread","Bread is a staple food prepared from a dough of flour (usually wheat) and water, usually by baking. Throughout recorded history and around the world, it has been an important part of many cultures' diet. It is one of the oldest human-made foods, having been of significance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture","./Fresh_made_bread_05.jpg")

    let foods = [food1,food2,food3,food4]
    content.setAttribute("gap","50px")
    foods.forEach(food => {
        let food_container = document.createElement("div")
        let name = document.createElement("p")
        let description = document.createElement("p")
        let image = document.createElement("img")
        name.textContent = food.name
        description.textContent = food.description
        image.src = food.image
        food_container.append(name,image,description)
        content.append(food_container)
    });
}

export {
    createMenuPage
}