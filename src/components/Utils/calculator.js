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
import {bundle1coloR} from '../../vars.scss';
console.log(bundle1coloR);

const bundleColors = ["rgb(255, 46, 23)",
		      "rgb(255, 215, 80)",
		      "rgb(0, 185, 242)",
		      "rgb(21, 166, 85)",
		      "rgb(145, 105, 172)"];
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
	color: bundleColors[bundle.length - 1]
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
export const useSortedBundles = (filter = true) => {
    const allBundleData = useAllBundleData();

    return [...allBundleData]
	  .filter((data) => !filter || data.affordable && data.required && !data.undef )
	  .sort((data1, data2) => data2.margins - data1.margins);
}
export const useRecommendedBundle = () => {
    const recBundle = useSortedBundles();
    if (recBundle.length === 0) {
	return null;
    }
    return recBundle[0];
};
