////////FISHER YATES RAND ALGO///////
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
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
  function clearBox(elementID)
  {
      document.getElementById(elementID).innerHTML = ""
  }
////////////////////////////

const showB = document.getElementById('buttonShow');
const randB = document.getElementById('buttonMix')
const imageDiv = document.getElementById('images')
//--imagelist--//
const imageArray = [
    "/../img/iEleven.jpg",
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
let imageArrayRando = imageArray
///button funs

///////first button
showB.addEventListener('click', function () {
    clearBox("images")
    imageArray.forEach(element => {
  
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
/////////////kodel iskelus const newImg = document.createElement("img");
//nesikuria visas