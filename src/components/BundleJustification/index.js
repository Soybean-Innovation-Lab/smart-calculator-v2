import { useState } from 'react';
import { VegaLite } from 'react-vega';

import { BundleTable } from './table'
import spec from './Bar';

import { useRecommendedBundle, useAllBundleData } from '../Utils/calculator';
import './index.scss';

const GraphExplanation = () => {
    const [show, setShow] = useState(false);
    return <div className="container border border-3 mb-3">
	<div className="d-flex flex-row justify-content-between">
	<h5 className="m-3"> Graph Legend</h5>
	<label className="custom-collapse-button btn m-2 btn-primary">
	<input checked={show} className="d-none" type="checkbox" onChange={() => setShow(!show)}/>
	{show ? "Hide": "Show"}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
	</label>
	</div>
	<p className={`${show ? '' : 'd-none'}`}>
Total gross margin estimates for all bundles that fulfill both soil fertility and budget criteria. The “Farmer” treatment represents typical soybean farming practices in southern Africa. It is assumed that saved seed is used with no additional inputs, and that labor costs are absorbed by the household. Under these conditions it is estimated that a typical farmer will generate a gross margin of $182 USD and a yield of 0.82 MT per hectare laboring between 60 and 70 workdays in a season.

s: seed; i: rhizobium inoculant; p: phosphorus fertilizer; k: potassium fertilizer
	</p>
	</div>;
}
const TableExplanation = () => {
    const [show, setShow] = useState(false);
    return <div className="container border border-3 mb-3">
	<div className="d-flex flex-row justify-content-between">
	<h5 className="m-3"> Table Legend</h5>
	<label className="custom-collapse-button btn m-2 btn-primary">
	<input checked={show} className="d-none" type="checkbox" onChange={() => setShow(!show)}/>
	{show ? "Hide": "Show"}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down mx-1" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
	</label>
	</div>
	<table className={`table table-bordered ${show ? '' : 'd-none'}`}>
	   <tbody>
	<tr>
	<th scope="row">Bundle</th><td>
	<table className="table">
	<tbody>
	<tr>
	<th scope="row">
	s
	</th>
	<td>
	seed
	</td>
	</tr>
	<tr>
	<th scope="row">
	i
	</th>
	<td>
	rhizobium inoculant
	</td>
	</tr>
	<tr>
	<th scope="row">
	p
	</th>
	<td>
	phosphorus fertilizer
	</td>
	</tr>
	<tr>
	<th scope="row">
	k
	</th>
	<td>
	potassium fertilizer
	</td>
	</tr>
	<tr>
	<th scope="row">
	l
	</th>
	<td>
	lime
	</td>
	</tr>
	<tr>
	<th className="pe-2" scope="row">
	Farmer
	</th>
	<td>
Typical soybean farming costs and yields for a farmer in southern Africa. It is assumed that saved seed is used with no additional inputs, and that labor costs are absorbed by the household. Under these conditions it is estimated that a typical farmer will generate a gross margin of $182 USD and a yield of 0.89 MT per hectare laboring between 60 and 70 workdays in a season.
	</td>
	</tr>
	</tbody>
	</table>
	</td></tr>
	<tr>
	<th span="row">
	Cost of Bundle/ha
	</th>
	<td>
	the sum of all inputs from the ‘Input Budget and Costs’ page
	</td>
	</tr>
	<tr>
	<th span="row">
	Total cost/ha
	</th>
	<td>
	the sum of all inputs from the ‘Input Budget and Costs’ page
	</td>
	</tr>
	<tr>
	<th span="row">
	Yield Predictions
	</th>
	<td>
	obtained from SMART Farm location data
	</td>
	</tr>
	<tr>
	<th span="row">
Gross margins/ha
	</th>
	<td>
based off revenues (price of grain * yield/ha) minus the cost/ha (input + labor costs)
	</td>
	</tr>
	<tr>
	<th span="row">
Total gross margins 
	</th>
	<td>
	gross margins/ha * total plot size
	</td>
	</tr>
	<tr>
	<th span="row">
Return on Investment (ROI) 
	</th>
	<td>
	gross margins/ha divided by the cost of bundle/ha
	</td>
	</tr>
	<tr>
	<th scope="row">Required</th><td>
	<table className="table mb-0">
	<tbody>
	<tr>
	<th spane="row"><i className="bi bi-dash"></i></th>
	<td> soils sufficient and input not needed for soybean production. bundles are not considered for bundle recommendation</td>
	</tr>
	<tr>
	<th spane="row"><i className="bi bi-check2"></i></th>
	<td>
	soils insufficient and all inputs in bundle are needed to aid soybean production
    </td>
	</tr>
	</tbody>
	</table>
	</td>
	</tr>
	<tr>
	<th scope="row">Affordable</th><td>
	<table className="table mb-0">
	<tbody>
	<tr>
	<th spane="row"><i className="bi bi-dash"></i></th>
	<td> price of bundle exceeds your input budget. These bundles are not considered for bundle recommendation.</td>
	</tr>
	<tr>
	<th spane="row"><i className="bi bi-check2"></i></th>
	<td>
	price of bundle within your input budget
    </td>
	</tr>
	</tbody>
	</table>
	</td>
	</tr>
	   </tbody>
	   </table>
	</div>;
}
const BundleJustification = (props) => {
    const bundleData = useAllBundleData();
    const recBundle = useRecommendedBundle();
    return <div className="d-flex flex-column align-items-center">
	<BundleTable />
	<TableExplanation />
	<VegaLite
    width="800"
    height="500"
    spec={spec}
    data={{table: bundleData.filter((e) => e.required && e.affordable).map(e => {
	return {...e, rec: e.bundle == recBundle.bundle ? "Our Recommendation" : ""}
    })}} />
	<GraphExplanation />
	</div>;
};
export default BundleJustification;
