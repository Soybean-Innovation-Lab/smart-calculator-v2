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
	<MakeInput formatter={formatter} name="inputsBudget" state={inputsBudget} set={setInputsBudget} units="per hectare">
	Inputs Budget:
    </MakeInput>
	<MakeInput formatter={formatter} name="plotSize" state={plotSize} set={setPlotSize} units="per hectare">
	Plot Size:
    </MakeInput>
	<MakeInput formatter={formatter} name="priceOfGrain" state={priceOfGrain} set={setPriceOfGrain} units="per MT">
	Price of Grain:
    </MakeInput>
    </div>;
}
export default OtherInfo;
