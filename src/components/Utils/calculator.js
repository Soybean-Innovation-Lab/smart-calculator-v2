import { useSelector } from 'react-redux';

import { selectPHSufficient,
	 selectPotassiumSufficient,
	 selectPhosphorusSufficient, } from  '../../redux/soil_properties';
import { selectSeedCost,
	 selectLimeCost,
	 selectPhosphorusCost,
	 selectPotassiumCost,
	 selectInoculumCost } from '../../redux/input_costs';
import { selectFarmerCost, selectAllBundles, selectData } from '../../redux/data';
import { selectSelectedFarm } from '../../redux/soil_properties';
import { selectPlotSize,
	 selectInputsBudget,
	 selectPriceOfGrain } from '../../redux/other_info';


const bundleColorMap = {
    "s" : "#ff0000a0",
    "si": "#ffff40",
    "sl": "#ffff40",
    "sp": "#ffff30",
    "sk": "#ffff30",
    "sil": "#0000ffa0",
    "sip": "#0000ffa0",
    "sik": "#0000ffa0",
    "slp": "#0000ffa0",
    "slk": "#0000ffa0",
    "spk": "#0000ffa0",
    "silp": "#00ff00a0",
    "silk": "#00ff00a0",
    "sipk": "#00ff00a0",
    "slpk": "#00ff00a0",
    "silpk": "#ff00ffa0"
}
// this is ugly but whatever...
const calcBundleData = ({ bundle, data, location, priceOfSoybean, farmerCost, budget, plotSize, phSufficient, phosphorusSufficient, limeCost, phosphorusCost, potassiumCost, potassiumSufficient, inoculumCost, seedCost, bundleData}) => {
    // no data for bundle at location
    if (!bundleData) {
	return {
	    undef: true,
	};
    }

    let bundleCost = 0;
    let soilRequiresBundle = true;
    for (let c of bundle) {
	switch (c) {
	case "s":
	    bundleCost += seedCost;
	    break;
	case "i":
	    bundleCost += inoculumCost;
	    break;
	case "l":
	    if (phSufficient) {
		soilRequiresBundle = false;
	    }
	    bundleCost += limeCost;
	    break;
	case "p":
	    if (phosphorusSufficient) {
		soilRequiresBundle = false;
	    }
	    bundleCost += phosphorusCost;
	    break;
	case "k":
	    if (potassiumSufficient) {
		soilRequiresBundle = false;
	    }
	    bundleCost += potassiumCost;
	    break;
	default:
	    break;
	    //throw "Unknown character in bundle";
	}
    }
    const margins = bundleData.Yield * priceOfSoybean - bundleCost - farmerCost;
    const affordable = bundleCost * plotSize < budget;
    return {
	bundle: bundle,
	undef: false,
	bundleSize: bundle.length,
	bundleCost: bundleCost,
	margins: margins,
	totalMargins: plotSize * margins,
	roi: margins/bundleCost,
	bundleYield: bundleData.Yield,
	required: soilRequiresBundle,
	affordable: affordable,
	totalCost: bundleCost + farmerCost,
	color: bundleColorMap[bundle]
    };
};

export const useAllBundleData = () => {
    const bundles = useSelector(selectAllBundles);
    const data = useSelector(selectData);
    const location = useSelector(selectSelectedFarm);
    const priceOfSoybean = useSelector(selectPriceOfGrain);
    const farmerCost = useSelector(selectFarmerCost);
    const budget = useSelector(selectInputsBudget);
    const plotSize = useSelector(selectPlotSize);
    const phSufficient = useSelector(selectPHSufficient);
    const phosphorusSufficient = useSelector(selectPhosphorusSufficient);
    const limeCost = useSelector(selectLimeCost);
    const phosphorusCost = useSelector(selectPhosphorusCost);
    const potassiumCost = useSelector(selectPotassiumCost);
    const potassiumSufficient = useSelector(selectPotassiumSufficient);
    const inoculumCost = useSelector(selectInoculumCost);
    const seedCost = useSelector(selectSeedCost);

    return bundles.map((bundle) => calcBundleData({ bundle,
						    data,
						    location,
						    priceOfSoybean,
						    farmerCost,
						    budget,
						    plotSize,
						    phSufficient,
						    phosphorusSufficient,
						    limeCost,
						    phosphorusCost,
						    potassiumCost,
						    potassiumSufficient,
						    inoculumCost,
						    seedCost,
						    bundleData: data[location][bundle] }));
};
export const useBundleData = (bundle) => {
    const data = useSelector(selectData);
    const location = useSelector(selectSelectedFarm);
    const priceOfSoybean = useSelector(selectPriceOfGrain);
    const farmerCost = useSelector(selectFarmerCost);
    const budget = useSelector(selectInputsBudget);
    const plotSize = useSelector(selectPlotSize);
    const phSufficient = useSelector(selectPHSufficient);
    const phosphorusSufficient = useSelector(selectPhosphorusSufficient);
    const limeCost = useSelector(selectLimeCost);
    const phosphorusCost = useSelector(selectPhosphorusCost);
    const potassiumCost = useSelector(selectPotassiumCost);
    const potassiumSufficient = useSelector(selectPotassiumSufficient);
    const inoculumCost = useSelector(selectInoculumCost);
    const seedCost = useSelector(selectSeedCost);
    const bundleData = data[location][bundle];

    return calcBundleData({ bundle,
			    data,
			    location,
			    priceOfSoybean,
			    farmerCost,
			    budget,
			    plotSize,
			    phSufficient,
			    phosphorusSufficient,
			    limeCost,
			    phosphorusCost,
			    potassiumCost,
			    potassiumSufficient,
			    inoculumCost,
			    seedCost,
			    bundleData });
}
