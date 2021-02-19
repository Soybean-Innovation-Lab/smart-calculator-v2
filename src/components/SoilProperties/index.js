import SoilPropertiesInput from './soil_properties_input';
import FarmSoilProperties from './farm_soil';

const SoilProperties = (props) => {
    return <div>
	<h1> Soil Properties </h1>
	<p>
	Soil health is critical for soybean production as insufficient amounts of nutrients in the soils can restrict plant growth and yields. Knowing soil nutrient concentrations is important in deciding which inputs to invest in to maximize yields.
	<br />
	In this section, you will put in your field’s soil pH, P, and K levels into the boxes below and select your location to get comparable yield responses. Thresholds are based off Mehlich-3 values for phosphorus and potassium. If your soil P test was performed using Bray-P for phosphorus, multiple your values by 1.35 to convert to Mehlich-3 values. If your soil K test was performed using ammonium acetate, multiply your values by 1.14 to convert to Mehlich-3 values. Any values that are above the soil response threshold are considered ‘sufficient’ and bundles with those inputs will not be considered for recommendation. 
	</p>
	<SoilPropertiesInput />
	<FarmSoilProperties />
	</div>;
};

export default SoilProperties;
