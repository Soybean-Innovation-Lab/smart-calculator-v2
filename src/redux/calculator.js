export const selectCostOfBundle = (loc, b) => s => {
    let bundleCost = 0;
    for (let c of b) {
	switch (c) {
	case "s":
	    bundleCost += selectSeedCost(s);
	    break;
	case "i":
	    bundleCost += selectInoculumCost(s);
	    break;
	case "l":
	    bundleCost += selectLimeCost(s);
	    break;
	case "p":
	    bundleCost += selectPhosphorusCost(s);
	    break;
	case "k":
	    bundleCost += selectPotassiumCost(s);
	    break;
	default:
	    //throw "Unknown character in bundle";
	    break;
	}
    }
    return bundleCost;
};
export const selectYield = (loc, b) => s => s.data[loc][b].Yield;
export const selectMargins = (loc, b) => s => {
    return selectYield(loc, b)(s)*selectPriceOfGrain(s)
	- selectCostOfBundle(loc, b)(s) - selectFarmerCost(s);
}
export const selectFarmerCost = s => s.farmerCost;
