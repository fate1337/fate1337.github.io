const hero = { 
    "abaddon" : { 
        "name": "Abaddon",
        "path" : "'/image/hero/abaddon.png'",
        "specifications": "strength", 
        "strength": 22, 
        "agility": 23, 
        "intelligence": 18, 
        "movespeed": 325, 
        "health": 640, 
        "mana": 291 
    }, 
    "alchemist": {  
        "name": "Alchemist",
        "path" : "'/image/hero/alchemist.png'",
        "specifications": "strength", 
        "strength": 25, 
        "agility": 22, 
        "intelligence": 25, 
        "movespeed": 305, 
        "health": 700, 
        "mana": 375 
    }, 
    "ancient_apparition": {  
        "name": "Ancient Apparition",
        "path" : "'/image/hero/ancient_apparition.png'",
        "specifications": "intelligence", 
        "strength": 20, 
        "agility": 20, 
        "intelligence": 23, 
        "movespeed": 285, 
        "health": 600, 
        "mana": 351 
    },
    "antimage": {  
        "name": "Anti-Mage",
        "path" : "'/image/hero/antimage.png'",
        "specifications": "agility", 
        "strength": 21, 
        "agility": 24, 
        "intelligence": 12, 
        "movespeed": 310, 
        "health": 620, 
        "mana": 219 
    },
    "arc_warden": {  
        "name": "Arc Warden",
        "path" : "'/image/hero/arc_warden.png'",
        "specifications": "agility", 
        "strength": 22, 
        "agility": 20, 
        "intelligence": 24, 
        "movespeed": 285, 
        "health": 640, 
        "mana": 363 
    },
    "axe": {  
        "name": "Axe",
        "path" : "'/image/hero/axe.png'",
        "specifications": "strength", 
        "strength": 25, 
        "agility": 20, 
        "intelligence": 18, 
        "movespeed": 310, 
        "health": 700, 
        "mana": 291 
    },
}

const grid = document.querySelector('.screen__grid');
for (const key in hero) {
    let a = document.createElement('a');
    a.className = "screen__card";

    let divInA = document.createElement('div');
    divInA.className = "screen__card-image";
    divInA.style.backgroundImage = `url(${hero[key].path})`
    console.log(JSON.stringify(hero[key].path))
    let spanInA = document.createElement('span');
    spanInA.className = "screen__card-text";
    spanInA.innerHTML = hero[key].name

    grid.append(a)
    a.append(divInA)
    a.append(spanInA)
}