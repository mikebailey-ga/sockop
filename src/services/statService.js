
function calcNeed(drops){

  const peopleByDistrict = [
    162,
    171,
    341,
    34,
    350,
    3659,
    168,
    370,
    649,
    1863,
    99
  ];
  
  const colorArray = [
  'rgba(0, 255, 0, 0.5)',
  'rgba(142, 255, 0, 0.5)',
  'rgba(255, 255, 0, 0.5)',
  'rgba(255, 170, 0, 0.5)',
  'rgba(171, 80, 0, 0.5)',
  'rgba(255, 0, 0, 0.5)'
  ];
  
  let need = [];
  let socks = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,    
  };
  let percentage = 0;

  drops.forEach(drop => {
    socks[drop.district] += drop.pairs;
  });


  for(let i=0; i<peopleByDistrict.length; i++){
    percentage = socks[i+1] / peopleByDistrict[i];
    if(percentage >= 0) { need[i] = colorArray[5] }
    if(percentage > .1) { need[i] = colorArray[4] }
    if(percentage > .2) { need[i] = colorArray[3] }
    if(percentage > .3) { need[i] = colorArray[2] }
    if(percentage > .4) { need[i] = colorArray[1] }
    if(percentage > .5) { need[i] = colorArray[0] }

  }
  return need;
}

export default calcNeed;