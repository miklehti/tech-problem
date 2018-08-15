//LinkStations, oletan että on 'pysyvämpi'
const linkStations = [[0, 0, 10],[20, 20, 5], [10, 0, 12]];

//nyt syote tälläin, voisi tulla jostain muualta, oletan että tämä vaihtelee useammin
const input = [[0, 0], [100, 100], [15,10], [18, 18]];

//lasketaaEtaisyys
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt( Math.pow( (x2 -x1), 2) + Math.pow( (y2 -y1), 2) );
};

//laske power
const calculatePower = (reach, distance) => {
  if(distance>reach){
    return 0;
  } else {
    return Math.pow((reach-distance),2);
  }
}

//laske power kun ei tiedetä etäisyyttä
const getPower = (reach, x1, y1, x2, y2) => {
  return   calculatePower(reach, calculateDistance(x1, y1, x2, y2));
}

//haetaan tulos ja tulostetaan
const printInput = (x, y) => {
  const result = linkStations
    .filter(station => {
      return   getPower(station[2], x, y, station[0], station[1]) > 0;
    })
    .reduce((prev, next) => {
       if (getPower(prev[2], x, y, prev[0], prev[1]) > getPower(next[2], x, y, next[0], next[1])){
         return prev;
       }
      return next;
    }, 0);

  console.log(result);
  if(result!==0) {
  //  return console.log(`Best link station for point ${x},${y} is ${result[0]},${result[1]} with power ${calculatePower(result[2], calculateDistance(x, y, result[0], result[1]))}`);
    return console.log(`Best link station for point ${x},${y} is ${result[0]},${result[1]} with power ${getPower(result[2],x, y, result[0], result[1])}`);
  } else {
    return console.log(`No link station within reach for point ${x},${y}`);
  }
};


//kutsutaan vuoorotellen jokaisella syötteellä tulostusta
input.map(coordinates => {
     return printInput(coordinates[0], coordinates[1]);
});
