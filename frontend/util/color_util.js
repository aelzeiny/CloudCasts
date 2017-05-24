

export const getLightestAndDarketFromPallet = (pallet) => {
  const keys = Object.keys(pallet);
  let maxPop = [0,0];
  let maxHex = ['gray', 'black'];
  for(let i=0;i<keys.length;i++){
    const key = keys[i];
    const val = pallet[key];
    if(val) {
      const lightOrDarkIndex = (key.includes("Light") || key === "Vibrant") ? 0 : 1;
      if(maxPop[lightOrDarkIndex] < val._population)
      {
        maxPop[lightOrDarkIndex] = val._population;
        maxHex[lightOrDarkIndex] = val.getHex();
      }
    }
  }
  return maxHex;
}
