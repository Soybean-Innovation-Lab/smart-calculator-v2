import { useSelector } from 'react-redux';

import { setSeedCost,
	 selectSeedCost,
	 setLimeCost,
	 selectLimeCost,
	 setInoculumCost,
	 selectInoculumCost,
	 setPhosphorusCost,
	 selectPhosphorusCost,
	 setPotassiumCost,
	 selectPotassiumCost } from '../../redux/input_costs';
import { setInputsBudget,
	 selectInputsBudget,
	 setPriceOfGrain,
	 selectPriceOfGrain} from '../../redux/other_info';

import { MakeInput } from '../Utils';

const InputCosts = (props) => {
    const seedCost = useSelector(selectSeedCost);
    const limeCost = useSelector(selectLimeCost);
    const inoculumCost = useSelector(selectInoculumCost);
    const phosphorusCost = useSelector(selectPhosphorusCost);
    const potassiumCost = useSelector(selectPotassiumCost);
    const inputsBudget = useSelector(selectInputsBudget);
    const priceOfGrain = useSelector(selectPriceOfGrain);

    const formatter = (s) => '$' + s;
    return <div className="d-flex flex-column justify-content-center">
	<h1> Input Costs </h1>
	<p>
	A farmer’s budget can make some inputs, or bundles of inputs, financially impractical. The SMART Farms use a stepwise bundling approach that considers your cost of inputs and budget to determine bundle recommendations for your unique situation. This stepwise approach balances the risk of incorporating new technologies into current farming practices. You will put in your starting input budget (USD), plot size (hectares), and the cost of the four inputs considered (USD). Any bundles that cost more than your allotted budget will not be considered for recommendation.

    For help converting local currency to USD please use <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noreferrer">this currency converter</a>. 
	</p>
    <form className="border border-3 shadow p-2 mb-2 me-4 align-self-center" style={{"width": "max-content"}}>
	<div className="row mb-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="seedCost" state={seedCost} set={setSeedCost} units="per hectare">
	Seed:
    </MakeInput>
	</div>
	<div className="row my-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="limeCost" state={limeCost} set={setLimeCost} units="per hectare">
	Lime:
    </MakeInput>
	</div>
	<div className="row my-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="inoculumCost" state={inoculumCost} set={setInoculumCost} units="per hectare">
	Inoculum:
    </MakeInput>
	</div>
	<div className="row my-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="phosphorusCost" state={phosphorusCost} set={setPhosphorusCost} units="per hectare">
	Phosphorus:
    </MakeInput>
	</div>
	<div className="row my-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="potassiumCost" state={potassiumCost} set={setPotassiumCost} units="per hectare">
	Potassium:
    </MakeInput>
	</div>
	<div className="row my-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="inputsBudget" state={inputsBudget} set={setInputsBudget} units="per hectare">
	Inputs Budget:
    </MakeInput>
	</div>
	<div className="row mt-3">
	<MakeInput labelClassNames="col" inputClassNames="col" formatter={formatter} name="priceOfGrain" state={priceOfGrain} set={setPriceOfGrain} units="per MT">
	Price of Grain:
    </MakeInput>
	</div>
	</form>
    </div>;
}
export default InputCosts;
