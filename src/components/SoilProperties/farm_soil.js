import { useSelector } from "react-redux";
import { selectFarmSoilProperties } from "../../redux/data.js";
import { selectSelectedFarm } from "../../redux/soil_properties.js";

const FarmSoilProperties = (props) => {
    const farm = useSelector(selectSelectedFarm);
    const soilPrpos = useSelector(selectFarmSoilProperties(farm));

    return <div>
	<p> <em> Soil </em> {soilPrpos.Soil || "unkown"} </p>
	<p> <em> Texture </em> {soilPrpos.Texture || "unkown"} </p>
	<p> <em> pH </em> {soilPrpos.pH || "unkown"} </p>
	<p> <em> P </em> {soilPrpos.P || "unkown"} </p>
	<p> <em> K </em> {soilPrpos.K || "unkown"} </p>
	<p> <em> OM </em> {soilPrpos.OM || "unkown"} </p>
	</div>;
};

export default FarmSoilProperties;
