import { useSelector } from 'react-redux';

import { selectFarmerCost, selectAllBundles, selectData } from '../../redux/data';
import { selectSelectedFarm } from '../../redux/soil_properties';
import { selectPlotSize,
	 selectPriceOfGrain } from '../../redux/other_info';

import { useRecommendedBundle, useBundleData } from '../Utils';

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
const BundleRow = ({ bundle }) => {
    const { undef,
	    bundleCost,
	    margins,
	    totalMargins,
	    roi,
	    bundleYield,
	    required,
	    affordable,
	    totalCost } = useBundleData(bundle);
    const recBundle = useRecommendedBundle();

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
		     `table-bundle-${bundle.length}${recBundle.bundle !== bundle ? '-non-rec' : ''}`,
		    ];
    if (recBundle.bundle === bundle) {
	//className.push("border border-5 border-success shadow");
    }
    let req = required ? <i className="bi bi-check2"></i>: <i className="bi bi-dash"></i>;
    let aff = affordable ? <i className="bi bi-check2"></i>: <i className="bi bi-dash"></i>;
    return (<tr id={bundle} className={className.join(" ")}>
	    <td className="position-relative">
	    {recBundle.bundle === bundle && <span className="position-absolute translate-middle" style={{"top": "50%", "left": "-1rem"}}><i className="bi bi-arrow-right-circle"></i></span>}
	    {bundle} {/*Bundle */}</td> 
	    <td> ${bundleCost.toFixed(2)}{/*Cost of bundle */}</td> 
	    <td> ${ (totalCost).toFixed(2)} {/*Total cost per (Ha)*/}</td> 
	    <td> { bundleYield.toFixed(2) } {/*prediction */}</td> 
	    <td> ${ margins.toFixed(2) }{/*margins */}</td> 
	    <td> ${totalMargins.toFixed(2)}{/*total margins */}</td> 
	    <td> {roi.toFixed(2)}{/*roi */}</td> 
	    <td> {req /*affordable */} </td>
	    <td className="position-relative"> {aff /*affordable */}
	    {recBundle.bundle === bundle && <span className="position-absolute translate-middle" style={{"top": "50%", "right": "-2rem"}}><i className="bi bi-arrow-left-circle"></i></span>}
	    </td>
	    </tr>
	   );
}
export const BundleTable = (props) => {
    const bundles = useSelector(selectAllBundles);
    return(<table className="table table-bordered border border-3">
	   <thead>
	   <tr>
	   <th scope="col"> Bundle </th>
	   <th scope="col"> Cost of Bundle </th>
	   <th scope="col"> Total Cost (per Ha) </th>
	   <th scope="col"> Yield Prediction </th>
	   <th scope="col"> Margins (per Ha) </th>
	   <th scope="col"> Total Gross Margins </th>
	   <th scope="col"> Return on Investment </th>
	   <th scope="col"> Required </th>
	   <th scope="col"> Affordable </th>
	   </tr>
	   </thead>
	   <tbody>
	   <FarmerRow />
	   { bundles.map((e) => <BundleRow key={e} bundle={e} />) }
	   </tbody>
	   </table>);
}

