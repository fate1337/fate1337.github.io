const items = { 
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
    "clinkz": {  
        "name": "Clinkz",
        "path" : "'/image/hero/clinkz.png'",
        "specifications": "agility", 
        "strength": 16, 
        "agility": 22, 
        "intelligence": 18, 
        "movespeed": 290, 
        "health": 520, 
        "mana": 291
    },
    "clocwerk": {  
        "name": "Clocwerk",
        "path" : "'/image/hero/clocwerk.png'",
        "specifications": "strength", 
        "strength": 26, 
        "agility": 13, 
        "intelligence": 18, 
        "movespeed": 310, 
        "health": 720, 
        "mana": 291
    },
    "crystal_maiden": {  
        "name": "Crystal Maiden",
        "path" : "'/image/hero/crystal_maiden.png'",
        "specifications": "intelligence", 
        "strength": 18, 
        "agility": 16, 
        "intelligence": 16, 
        "movespeed": 280, 
        "health": 560, 
        "mana": 267
    },
    "dark_seer": {  
        "name": "Dark Seer",
        "path" : "'/image/hero/dark_seer.png'",
        "specifications": "intelligence", 
        "strength": 22, 
        "agility": 18, 
        "intelligence": 21, 
        "movespeed": 295, 
        "health": 640, 
        "mana": 327
    },
    "dark_willow": {  
        "name": "Dark Willow",
        "path" : "'/image/hero/dark_willow.png'",
        "specifications": "intelligence", 
        "strength": 20, 
        "agility": 18, 
        "intelligence": 21, 
        "movespeed": 290, 
        "health": 600, 
        "mana": 327
    },
    "dawnbreaker": {  
        "name": "Dawnbreaker",
        "path" : "'/image/hero/dawnbreaker.png'",
        "specifications": "strength", 
        "strength": 26, 
        "agility": 14, 
        "intelligence": 20, 
        "movespeed": 310, 
        "health": 720, 
        "mana": 315
    },
    "dazzle": {  
        "name": "Dazzle",
        "path" : "'/image/hero/dazzle.png'",
        "specifications": "intelligence", 
        "strength": 18, 
        "agility": 20, 
        "intelligence": 25, 
        "movespeed": 305, 
        "health": 560, 
        "mana": 375
    }

}

const gridItm = document.querySelector('.screen__grid-items');
for (const key in items) {
    let a = document.createElement('a');
    a.className = "screen__card screen__card-itm";

    let divInA = document.createElement('div');
    divInA.className = "screen__card-image";
    divInA.style.backgroundImage = `url(${items[key].path})`
    let spanInA = document.createElement('span');
    spanInA.className = "screen__card-text screen__card-textItm";
    spanInA.innerHTML = items[key].name

    gridItm.append(a)
    a.append(divInA)
    a.append(spanInA)
}