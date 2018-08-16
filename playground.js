/**********
/*Hahamotelmaa mitä tarvitaan
1. funktio joka laskee etäisyyden

function laskeEtaisyys(x1, y1, x2, y2) {
  return Math.sqrt( Math.pow( (x2 -x1), 2) + Math.pow( (y2 -y1), 2) );
}
//testataan
console.log(laskeEtaisyys(0, 0, 10, 10));
console.log(laskeEtaisyys(0, 0, 0, 10));

toimii kait

*/
/*
ges6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});

laskenta järjestys:
1. laskeEtaisyys
2. laske power
3.
*/


/* ehkä

/*
.filter(station => {
return   calculatePower(station[2], calculateDistance(x, y, station[0], station[1])) > 0;
})
*/
/* toimii varmasti
//laske power kun ei tiedetä etäisyyttä vielä
const getPower = (reach, x1, y1, x2, y2) => {
  return   calculatePower(reach, calculateDistance(x1, y1, x2, y2));
}

//lasketaaEtaisyys kahden koordinaatin välillä
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt( Math.pow( (x2 -x1), 2) + Math.pow( (y2 -y1), 2) );
};
*/
