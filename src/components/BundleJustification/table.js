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


const FarmerRow = (props) => {
    const data = useSelector(selectData);
    const location = useSelector(selectSelectedFarm);
    const priceOfSoybean = useSelector(selectPriceOfGrain);
    const farmerCost = useSelector(selectFarmerCost);
    const plotSize = useSelector(selectPlotSize);

    const bundleData = data[location]["Farmer"];
    const margins = bundleData.Yield * priceOfSoybean - farmerCost;
    return (<tr className="farmer">
	    <td>Farmer{/*Bundle */}</td> 
	    <td>N/A{/*Cost of bundle */}</td> 
	    <td>${ farmerCost.toFixed(2) }{/*Total cost */}</td> 
	    <td>{ bundleData.Yield }{/*prediction */}</td> 
	    <td>${margins.toFixed(2)}{/*margins */}</td> 
	    <td>${(margins * plotSize).toFixed(2)}{/*total margins */}</td> 
	    <td>N/A{/*roi */}</td> 
	    <td>N/A{/* required */}</td> 
	    <td>N/A{/* aff */}</td> 
	</tr>
    );
}
const calcBundleData = ({ budget,
			  bundle,
			  data,
			  location,
			  priceOfSoybean,
			  farmerCost,
			  plotSize,
			  seedCost,
			  inoculumCost,
			  phSufficient,
			  phosphorusSufficient,
			  limeCost,
			  phosphorusCost,
			  potassiumCost,
			  potassiumSufficient}) => {
    const bundleData = data[location][bundle];
    // no data for bundle at location
    if (!bundleData) {
	return {
	    undef: false,
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
	undef: false,
	bundleSize: bundle.length,
	bundleCost: bundleCost,
	margins: margins,
	totalMargins: plotSize * margins,
	roi: margins/bundleCost,
	bundleYield: bundleData.Yield,
	required: soilRequiresBundle,
	affordable: affordable,
    };

}
const BundleRow = ({ bundle }) => {
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

    const { undef,
	    bundleSize,
	    bundleCost,
	    margins,
	    totalMargins,
	    roi,
	    bundleYield,
	    required,
	    affordable } = calcBundleData({
		bundle,
		data,
		location,
		priceOfSoybean,
		farmerCost,
		plotSize,
		seedCost,
		budget,
		phSufficient,
		phosphorusSufficient,
		potassiumSufficient,
		limeCost,
		inoculumCost,
		phosphorusCost,
		potassiumCost
	    });

    if (undef) {
	return (<tr id={bundle} className="undefined">
		<td> {bundle} {/*Bundle */}</td>
		<td> N/A{/*Cost of bundle */}</td>
		<td> N/A {/*Total cost per (Ha)*/}</td>
		<td> N/A {/*prediction */}</td>
		<td> N/A {/*margins */}</td>
		<td> N/A {/*total margins */}</td>
		<td> N/A {/*roi */}</td>
		<td> N/A {/* req */}</td>
		<td> N/A {/* affordable */}</td>
		</tr>);
    }
    let className = [required ? "bundle-required" : "not-bundle-required",
		     affordable ? "affordable" : "not-affordable",
		     `bundle-${bundle.length}-item`,
		    ];
    let req = required ? "&#10003;": "&#x2717;";
    let aff = affordable ? "&#10003;": "&#x2717;";
    return (<tr id={bundle} className={className.join(" ")}>
	    <td> {bundle} {/*Bundle */}</td> 
	    <td> ${bundleCost.toFixed(2)}{/*Cost of bundle */}</td> 
	    <td> ${ (bundleCost + farmerCost).toFixed(2)} {/*Total cost per (Ha)*/}</td> 
	    <td> { bundleYield.toFixed(2) } {/*prediction */}</td> 
	    <td> ${ margins.toFixed(2) }{/*margins */}</td> 
	    <td> ${totalMargins.toFixed(2)}{/*total margins */}</td> 
	    <td> {roi.toFixed(2)}{/*roi */}</td> 
	    <td dangerouslySetInnerHTML={{__html: req} /*req*/} /> 
	    <td dangerouslySetInnerHTML={{__html: aff} /*affordable */} /> 
	    </tr>
	   );
}
export const BundleTable = (props) => {
    const bundles = useSelector(selectAllBundles);
    return(<table className="bundles-table">
	   <thead>
	   <tr>
	   <th> Bundle </th>
	   <th> Cost of Bundle </th>
	   <th> Total Cost (per Ha) </th>
	   <th> Yield Prediction </th>
	   <th> Margins (per Ha) </th>
	   <th> Total Gross Margins </th>
	   <th> Return on Investment </th>
	   <th> Required </th>
	   <th> Affordable </th>
	   </tr>
	   </thead>
	   <tbody>
	   <FarmerRow />
	   { bundles.map((e) => <BundleRow key={e} bundle={e} />) }
	   </tbody>
	   </table>);
}

