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
  'rgba(0, 255, 0, 0.3)',
  'rgba(60, 174, 0, 0.3)',
  'rgba(99, 130, 0, 0.3)',
  'rgba(125, 97, 0, 0.3)',
  'rgba(171, 66, 0, 0.3)',
  'rgba(255, 0, 0, 0.3)'
  ];
  
  let socks = {
    asdf: 'asdf'
  };
  console.log(socks);
  drops.forEach(drop => {
    if(socks[drop.district]){
      socks[drop.district] += drop.pairs;
    } else {
      socks[drop.district] = drop.pairs;
    }
  });
  console.log(socks);
  return socks;
}