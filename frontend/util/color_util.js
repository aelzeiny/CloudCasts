

export const getLightestAndDarketFromPallet = (pallet, alpha = 1) => {
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
        let rgb = val.getRgb();
        maxHex[lightOrDarkIndex] = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
      }
    }
  }
  return maxHex;
}
