const strivers = [
    "Emanuele Furlani",
    "Piotr Blazejak",
    "Azizbek Tokhirjonov",
    "Lia Maccapani",
    "Hajnal Áron",
    "Edward Tunkl",
    "Kristine Zegnere",
    "Dovile Tumaite",
    "Justas Petrauskas",
    "Marco Saccarola",
    "Manish Elaganti",
    "Vishakha Vashisht",
  ];
 
  function shuffle(arr) {
    let currentIndex = arr.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    return arr;
  }
  
  function generator() {
    shuffle(strivers);
    document.getElementById("0").innerHTML = strivers[0];
    document.getElementById("1").innerHTML = strivers[1];
    document.getElementById("2").innerHTML = strivers[2];
    document.getElementById("3").innerHTML = strivers[3];
    document.getElementById("4").innerHTML = strivers[4];
    document.getElementById("5").innerHTML = strivers[5];
    document.getElementById("6").innerHTML = strivers[6];
    document.getElementById("7").innerHTML = strivers[7];
    document.getElementById("8").innerHTML = strivers[8];
    document.getElementById("9").innerHTML = strivers[9];
    document.getElementById("10").innerHTML = strivers[10];
    document.getElementById("11").innerHTML = strivers[11];

  }
  
  document.getElementById("random").addEventListener("click", generator);
  