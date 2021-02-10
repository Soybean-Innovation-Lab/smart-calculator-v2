import SoilPropertiesInput from './soil_properties_input';
import FarmSoilProperties from './farm_soil';

const SoilProperties = (props) => {
    return <div>
	<SoilPropertiesInput />
	<FarmSoilProperties />
	</div>;
};

export default SoilProperties;
