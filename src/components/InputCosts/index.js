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

import { MakeInput } from '../Utils';

const InputCosts = (props) => {
    const seedCost = useSelector(selectSeedCost);
    const limeCost = useSelector(selectLimeCost);
    const inoculumCost = useSelector(selectInoculumCost);
    const phosphorusCost = useSelector(selectPhosphorusCost);
    const potassiumCost = useSelector(selectPotassiumCost);

    const formatter = (s) => '$' + s;
    return <div>
	<h1> Input Costs </h1>
	<p>
	A farmer’s budget can make some inputs, or bundles of inputs, financially impractical. The SMART Farms use a stepwise bundling approach that considers your cost of inputs and budget to determine bundle recommendations for your unique situation. This stepwise approach balances the risk of incorporating new technologies into current farming practices. You will put in your starting input budget (USD), plot size (hectares), and the cost of the four inputs considered (USD). Any bundles that cost more than your allotted budget will not be considered for recommendation.

    For help converting local currency to USD please use <a href="https://www.xe.com/currencyconverter/"> this </a> currency converter. 
	</p>
	<MakeInput formatter={formatter} name="seedCost" state={seedCost} set={setSeedCost} units="per hectare">
	Seed:
    </MakeInput>
	<MakeInput formatter={formatter} name="limeCost" state={limeCost} set={setLimeCost} units="per hectare">
	Lime:
    </MakeInput>
	<MakeInput formatter={formatter} name="inoculumCost" state={inoculumCost} set={setInoculumCost} units="per hectare">
	Inoculum:
    </MakeInput>
	<MakeInput formatter={formatter} name="phosphorusCost" state={phosphorusCost} set={setPhosphorusCost} units="per hectare">
	Phosphorus:
    </MakeInput>
	<MakeInput formatter={formatter} name="potassiumCost" state={potassiumCost} set={setPotassiumCost} units="per hectare">
	Potassium:
    </MakeInput>
    </div>;
}
export default InputCosts;
