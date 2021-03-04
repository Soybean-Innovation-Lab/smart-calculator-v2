import { useSelector } from 'react-redux';

import { setPriceOfGrain,
	selectPriceOfGrain,
       } from '../../redux/other_info';

import { MakeInput } from '../Utils';

const OtherInfo = (props) => {
    const priceOfGrain = useSelector(selectPriceOfGrain);

    const formatter = (s) => '$' + s;
    return <div className="d-flex flex-column justify-content-center">
	<h1> Price of Grain</h1>
	<p className="fs-5">
	The final step in determining which bundle is right for you is to consider the gross margins of each bundle. This is tied to the price of grain at the time of sale. From the remaining choices, the bundle with the highest gross margin (revenue minus the cost of inputs) will be selected as your bundle recommendation. 
	</p>
    <form className="border border-3 shadow p-2 mb-2 me-4 align-self-center" style={{"width": "max-content"}}>
	<div className="row mb-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="priceOfGrain" state={priceOfGrain} set={setPriceOfGrain} units="per MT">
	Price of Grain:
    </MakeInput>
	</div>
	</form>
    </div>;
}
export default OtherInfo;
