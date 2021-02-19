import { useSelector } from 'react-redux';

import { setInputsBudget,
	 selectInputsBudget,
	 setPlotSize,
	 selectPlotSize,
	 setPriceOfGrain,
	 selectPriceOfGrain
	 } from '../../redux/other_info';

import { MakeInput } from '../Utils';

const OtherInfo = (props) => {
    const inputsBudget = useSelector(selectInputsBudget);
    const plotSize = useSelector(selectPlotSize);
    const priceOfGrain = useSelector(selectPriceOfGrain);

    const formatter = (s) => '$' + s;
    return <div>
	<h1> Other Info </h1>
	<p>
	The final step in determining which bundle is right for you is to consider the gross margins of each bundle. This is tied to the price of grain at the time of sale. From the remaining choices, the bundle with the highest gross margin (revenue minus the cost of inputs) will be selected as your bundle recommendation. 
	</p>
	<MakeInput formatter={formatter} name="inputsBudget" state={inputsBudget} set={setInputsBudget} units="per hectare">
	Inputs Budget:
    </MakeInput>
	<MakeInput name="plotSize" state={plotSize} set={setPlotSize} units="hectare">
	Plot Size:
    </MakeInput>
	<MakeInput formatter={formatter} name="priceOfGrain" state={priceOfGrain} set={setPriceOfGrain} units="per MT">
	Price of Grain:
    </MakeInput>
    </div>;
}
export default OtherInfo;
