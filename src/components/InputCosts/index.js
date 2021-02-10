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
	<MakeInput formatter={formatter} name="seedCost" state={seedCost} set={setSeedCost} units="/ha">
	Seed:
    </MakeInput>
	<MakeInput formatter={formatter} name="limeCost" state={limeCost} set={setLimeCost} units="/ha">
	Lime:
    </MakeInput>
	<MakeInput formatter={formatter} name="inoculumCost" state={inoculumCost} set={setInoculumCost} units="/ha">
	Inoculum:
    </MakeInput>
	<MakeInput formatter={formatter} name="phosphorusCost" state={phosphorusCost} set={setPhosphorusCost} units="/ha">
	Phosphorus:
    </MakeInput>
	<MakeInput formatter={formatter} name="potassiumCost" state={potassiumCost} set={setPotassiumCost} units="/ha">
	Potassium:
    </MakeInput>
    </div>;
}
export default InputCosts;
