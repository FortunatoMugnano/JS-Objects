console.log("This is working fine!");

const hamster = {
    fluffy: true,
    name: "Hammond",
    age: 40,
    legs: 3,
    children: ["Captain Hook", "Peter Pan", "Sally"],
    nickname: "Ham Sir",
    chewing: function chew(what) {
        console.log("chewing", what);
    },
}

const familyMembers = [daddy = { age: 63, name: "Ciro", alive: true },
mama = { age: 65, name: "Giuseppina", alive: true },
son = { age: 31, name: "Fortunato", alive: true },
daugther = { age: 35, name: "Imma", alive: true }];

console.log("Family Members", familyMembers);

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

wardrobe.material = "Cedar";

console.log("wardrobe height is",
    wardrobe.height, ", is manufactures is",
    wardrobe.manufacturer, "its content is", wardrobe.contents,
    "its depth is", wardrobe.depth,
    "and its width is", wardrobe.width,
    "and last its material is", wardrobe.material);


const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log("The Empire State dimensions are: ", empireStateBuilding.stories + " stories",
    ", the heigth is", empireStateBuilding.height,
    ", it is ", empireStateBuilding.squareFeet + " square feet",
    ", the east towesr lenght is ", empireStateBuilding.eastWestLength,
    " and the north to south lenght is ", empireStateBuilding.northSouthLength);

const keyToLookup = [empireStateBuilding.address,
empireStateBuilding.constructionDate,
empireStateBuilding.cost,
empireStateBuilding.owner,
empireStateBuilding.architect];
const ESBAddress = keyToLookup[0];
const ESBConstructionDate = keyToLookup[1];
const ESBCost = keyToLookup[2];
const ESBOwner = keyToLookup[3];
const ESBArchitect = keyToLookup[4];
console.log("The empire state building address is ", ESBAddress,
    ", its construction date is ", ESBConstructionDate,
    " it costed ", ESBCost + " million dollars, ",
    " its owner is", ESBOwner,
    " and last its architect are ", ESBArchitect);

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const AllInstructorsFull = nashvilleSoftwareSchool.instructors.fullTime;
const AllInstructorsPart = nashvilleSoftwareSchool.instructors.partTime;

for (var i = 0; i < AllInstructorsFull.length; i++) {


    console.log(`Instructors name are ${AllInstructorsFull[i]}`);
}


AllInstructorsFull.forEach(instructor => {
    console.log(instructor)

});

AllInstructorsPart.forEach(instructor => {
    console.log(instructor)

});

console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0]);


const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(beatles.members[1].name, " was in the Beatles from ",
    beatles.history.formed, " to", beatles.history.disbanded,
    ". He was born in", beatles.members[1].birth,
    ". He contributed heavily to the", beatles.albums[3]);



