//LinkStations, from instructions, could be also from a server...
const linkStations = [[0, 0, 10],[20, 20, 5], [10, 0, 12]];
//testejä
//const linkStations = [[20, 20, 5], [0, 0, 10], [10, 0, 12]];
//const linkStations = [[10, 0, 12], [20, 20, 5], [0, 0, 10]];
//const linkStations = [[0, 0, 10],[20, 20, 5], [10, 0, 12], [5, 5, 18]];
//const linkStations = [[5, 5, 18], [0, 0, 10],[20, 20, 5], [10, 0, 12]];

//input from instructions,  could be also from a server...
const input = [[0, 0], [100, 100], [15,10], [18, 18]];
//testejä
//const input = [[5, 5], [100, 100], [15,10], [18, 18]];
//const input = [[4, 0], [100, 100], [15,10], [18, 18]];
//const input = [[0, 0], [100, 100], [15,10], [18, 18], [3, 3] ];

//distance betveen two points
const calculateDistance = (coordinates) => {
  return Math.sqrt( Math.pow( (coordinates[2] - coordinates[0]), 2) + Math.pow( ( coordinates[3] - coordinates[1] ), 2) );
};

//calculate power according to instructions
const calculatePower = (reach, distance) => {
  if(distance>reach){
    return 0;
  } else {
    return Math.pow((reach-distance),2);
  }
}

//calculate power when distance not known
const getPower = (reach, ...coordinates) => {
  return   calculatePower(reach, calculateDistance(coordinates));
}

// return the station that has the most power
(getStation = () => {
  console.log('Hello');
  return linkStations
      // remove stations that are out of reach.
      .filter(station => {
        return getPower(station[2], x, y, station[0], station[1]) > 0;
      })
      // compare which of the remaining stations has the most power. Probably the most risky part, hope it works like I planned it.
      .reduce((prev, next) => {
         if (getPower(prev[2], x, y, prev[0], prev[1]) > getPower(next[2], x, y, next[0], next[1])){
           return prev;
         }
        return next;
      }, 0);
})()

//1. starting point, for each cordinate get the station and print output.
/*
input.map(coordinates => {
  const result = getStation(coordinates[0], coordinates[1]);
  if(result!==0) {
    return console.log(`Best link station for point ${coordinates[0]},${coordinates[1]} is ${result[0]},${result[1]} with power ${getPower(result[2],coordinates[0], coordinates[1], result[0], result[1])}`);
  } else {
    return console.log(`No link station within reach for point ${coordinates[0]},${coordinates[1]}`);
  }


});
*/
