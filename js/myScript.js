////////FISHER YATES RAND ALGO///////
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
///////////////END OF ALGO///////////
//cleaning function//
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = ""
}
////////////////////////////
const showB = document.getElementById('buttonShow');
const randB = document.getElementById('buttonMix')
//--imagelist--//
const imageArray = [
    "../img/iEleven.jpg",
    "../img/iFive.jpg",
    "../img/iFour.jpg",
    "../img/iNine.jpg",
    "../img/iOne.jpg",
    "../img/iSeven.jpg",
    "../img/iSix.jpg",
    "../img/iTen.jpg",
    "../img/iThree.jpg",
    "../img/iTwelve.jpg",
    "../img/iTwo.jpg",
    "../11-06/img/iEight.jpg"
]
const notimageArray = [
    "../img/iEleven.jpg",
    "../img/iFive.jpg",
    "../img/iFour.jpg",
    "../img/iNine.jpg",
    "../img/iOne.jpg",
    "../img/iSeven.jpg",
    "../img/iSix.jpg",
    "../img/iTen.jpg",
    "../img/iThree.jpg",
    "../img/iTwelve.jpg",
    "../img/iTwo.jpg",
    "../img/iEight.jpg"
]

////neveikia > sugadina originala
let imageArrayRando = imageArray

///////first button
showB.addEventListener('click', function () {
    clearBox("images")
    notimageArray.forEach(element => {
        let newImg = document.createElement("img");
        newImg.src = element
        document.getElementById("images").appendChild(newImg)
    });
})
////////////////////////////////////////////
//second button
randB.addEventListener('click', function () {
    clearBox("images")
    shuffle(imageArrayRando);
    imageArrayRando.forEach(element => {
        let newImg = document.createElement("img");
        newImg.src = element
        document.getElementById("images").appendChild(newImg)
    });

})
///////////// iskelus const newImg = document.createElement("img"); pagamina tik viena > nesisuka array lenght?
