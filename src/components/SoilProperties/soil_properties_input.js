import { useDispatch, useSelector } from 'react-redux';

import { selectSelectedFarm,
	 setSelectedFarm,
	 selectPH,
	 selectPHThreshold,
	 selectPHSufficient,
	 setPH,
	 selectPotassium,
	 selectPotassiumThreshold,
	 selectPotassiumSufficient,
	 setPotassium,
	 selectPhosphorus,
	 selectPhosphorusThreshold,
	 selectPhosphorusSufficient,
	 setPhosphorus } from '../../redux/soil_properties';
import { selectLocations } from '../../redux/data';


import { MakeInput } from '../Utils';

import './soil_properties.scss';

const CountrySelect = (props) => {
    const dispatch = useDispatch();
    const countries = useSelector(selectLocations);
    const selected = useSelector(selectSelectedFarm);
    return <div>
	<label htmlFor="location"> Nearest SMART Farm: </label> <select
    name="location"
    value={selected || ""}
    onChange={(e) => dispatch(setSelectedFarm(e.target.value))}
	>
	{countries.map((c) => <option key={c} value={c}> {c} </option>)}
    </select>
	</div>;
}

const SoilPropertiesInput = (props) => {
    const ph = useSelector(selectPH);
    const phThreshold = useSelector(selectPHThreshold);
    const phSufficient = useSelector(selectPHSufficient);
    const potassium = useSelector(selectPotassium);
    const potassiumThreshold = useSelector(selectPotassiumThreshold);
    const potassiumSufficient = useSelector(selectPotassiumSufficient);
    const phosphorus = useSelector(selectPhosphorus);
    const phosphorusThreshold = useSelector(selectPhosphorusThreshold);
    const phosphorusSufficient = useSelector(selectPhosphorusSufficient);

    return <div>
	<MakeInput name="ph" state={ph} set={setPH}>
	pH (threshold: {phThreshold})
	</MakeInput>
	<MakeInput name="potassium" state={potassium} set={setPotassium} units="mg/kg">
	potassium (threshold: {potassiumThreshold})
	</MakeInput>
	<MakeInput name="phosphorus" state={phosphorus} set={setPhosphorus} units="mg/kg">
	phosphorus (threshold: {phosphorusThreshold})
	</MakeInput>
	<CountrySelect />
	</div>;
}

export default SoilPropertiesInput;
