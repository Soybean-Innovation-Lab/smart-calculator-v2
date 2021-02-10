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
	<MakeInput formatter={formatter} name="inputsBudget" state={inputsBudget} set={setInputsBudget} units="/ha">
	Inputs Budget:
    </MakeInput>
	<MakeInput formatter={formatter} name="plotSize" state={plotSize} set={setPlotSize} units="/ha">
	Plot Size:
    </MakeInput>
	<MakeInput formatter={formatter} name="priceOfGrain" state={priceOfGrain} set={setPriceOfGrain} units="/ha">
	Price of Grain:
    </MakeInput>
    </div>;
}
export default OtherInfo;
