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

const CountrySelect = (props) => {
    const dispatch = useDispatch();
    const countries = useSelector(selectLocations);
    const selected = useSelector(selectSelectedFarm);
    return <div className="row">
	<label className="col" htmlFor="location"> Nearest SMART Farm: </label>
	<select className="col form-select me-5"
    style={{"width": "min-content"}}
    name="location"
    value={selected}
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

    return <form className="border border-3 shadow p-2 mb-2 me-4" style={{"width": "max-content"}}>
	<div className="row">
	<MakeInput labelClassNames="col" inputClassNames="col" name="ph" state={ph} set={setPH}>
	pH (threshold: {phThreshold})
	<span className={`badge ms-1 ${phSufficient ? 'bg-success' : 'bg-danger'}`}> {phSufficient ? 'Sufficient' : 'Insufficient' } </span>
    </MakeInput>
	</div>
	<div className="row">
	<MakeInput labelClassNames="col-6" inputClassNames="col" name="potassium" state={potassium} set={setPotassium} units="mg/kg">
	potassium (threshold: {potassiumThreshold})
	<span className={`badge ms-1 ${potassiumSufficient ? 'bg-success' : 'bg-danger'}`}> {potassiumSufficient ? 'Sufficient' : 'Insufficient' } </span>
	</MakeInput>
	</div>
	<div className="row">
	<MakeInput labelClassNames="col" inputClassNames="col" name="phosphorus" state={phosphorus} set={setPhosphorus} units="mg/kg">
	phosphorus (threshold: {phosphorusThreshold})
	<span className={`badge ms-1 ${phosphorusSufficient ? 'bg-success' : 'bg-danger'}`}> {phosphorusSufficient ? 'Sufficient' : 'Insufficient' } </span>
	</MakeInput>
	</div>
	<CountrySelect />
	</form>;
}

export default SoilPropertiesInput;
