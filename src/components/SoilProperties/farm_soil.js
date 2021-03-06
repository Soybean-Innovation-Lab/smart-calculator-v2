import { useSelector } from "react-redux";
import { selectFarmSoilProperties } from "../../redux/data.js";
import { selectSelectedFarm } from "../../redux/soil_properties.js";

const FarmSoilProperties = (props) => {
    const farm = useSelector(selectSelectedFarm);
    const soilPrpos = useSelector(selectFarmSoilProperties(farm));

    return <div className="border border-3 shadow">
	<h4 className="m-3 text-decoration-underline">Measured Soil Properties for sample farm in {farm}</h4>
	<table className="align-middle table table-bordered fs-5 mx-auto" style={{"width": "max-content"}}>
	<tbody>
	<tr><th scope="row">Soil</th><td>{soilPrpos.Soil || "unkown"}</td></tr>
	<tr><th scope="row">Texture</th><td> {soilPrpos.Texture || "unkown"}</td></tr>
	<tr><th scope="row">pH</th><td>{soilPrpos.pH || "unkown"}</td></tr>
	<tr><th scope="row">K</th><td>{soilPrpos.K || "unkown"} </td></tr>
	<tr><th scope="row">OM</th><td>{soilPrpos.OM || "unkown"}</td></tr>
	</tbody>
	</table>
	</div>;
};

export default FarmSoilProperties;
