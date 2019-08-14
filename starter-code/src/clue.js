// Characters

const mrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
};


const drOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist"
};


const profPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
};


const missScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"
};


const mrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
};

const mrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player"
};


// Weapons

const rope = {
    name: "rope",
    weight: 10
}

const knife = {
    name: "knife",
    weight: 8
}
const candlestick = {
    name: "candlestick",
    weight: 2
}
const dumbbell = {
    name: "dumbbell",
    weight: 30
}
const poison = {
    name: "poison",
    weight: 2
}
const axe = {
    name: "axe",
    weight: 15
}
const bat = {
    name: "bat",
    weight: 13
}
const trophy = {
    name: "trophy",
    weight: 25
}
const pistol = {
    name: "pistol",
    weight: 20
}

// Rooms

const diningRoom = {
    name: "Dining Room"
}
const conservatory = {
    name: "Conservatory"
}
const kitchen = {
    name: "Kitchen"
}
const study = {
    name: "Study"
}
const library = {
    name: "Library"
}
const billiardRoom = {
    name: "Billiard Room"
}
const lounge = {
    name: "Lounge"
}
const ballroom = {
    name: "Ballroom"
}
const hall = {
    name: "Hall"
}
const livingRoom = {
    name: "Living Room"
}
const observatory = {
    name: "Observatory"
}
const theater = {
    name: "Theater"
}
const guestHouse = {
    name: "Guest House"
}
const patio = {
    name: "Patio"
}
const spa = {
    name: "Spa"
}


// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];


charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
weaponsArray.push(rope, knife, candlestick, dumbbell,
    poison, axe, bat, trophy, pistol);
roomsArray.push(diningRoom, conservatory, kitchen, study, library,
    billiardRoom, lounge, ballroom, hall, spa, livingRoom, conservatory, theater, guestHouse, patio);

function randomSelector(arr) {
    return arr[Math.floor(Math.random() * arr.length)]; //?????
};




function pickMistery() {

    let mysteryEnvelope = {}
    mysteryEnvelope.suspect = randomSelector(charactersArray);
    mysteryEnvelope.weapon = randomSelector(weaponsArray);
    mysteryEnvelope.room = randomSelector(roomsArray);


    return mysteryEnvelope
};

function revealMistery(carrot) {
    return `${carrot.suspect.first_name} ${carrot.suspect.last_name} killed Mr. Boddy using the ${carrot.weapon.name} in the ${carrot.room.name}!!!!`
};

pickMistery();
revealMistery();
console.log(revealMistery());