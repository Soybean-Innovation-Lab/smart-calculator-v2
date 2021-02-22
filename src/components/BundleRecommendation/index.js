import { useSelector } from 'react-redux';

import { useAllBundleData } from '../Utils';

let seedInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_f26de695289d47f28626edb854721c9a.pdf";
let innoculumInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_2c0c8b735d164c928fafa927d983abaf.pdf";
const abbrevToFullIngredient = (b) => {
  switch (b) {
    case "s":
      return (<span key="s"> <a href={seedInfo}>Seed</a> </span>);
    case "i":
      return (<span key="i"> <a href={innoculumInfo}>Inoculum</a> </span>);
    case "l":
      return (<span key="l"> Lime </span>);
    case "p":
      return (<span key="p"> Phosphorus </span>);
    case "k":
      return (<span key="k"> Potassium </span>);
    default:
      return;
  }
}
const MakeRecBundle = ({bundle}) => {
    return <ul className="fs-4">
	{bundle.map((b) => <li key={b}> {abbrevToFullIngredient(b)} </li>)}
	</ul>;
}

const BundleRecommendation = (props) => {
    const allBundleData = useSelector(useAllBundleData);

    const recBundle = [...allBundleData]
	  .filter((data) => data.affordable && data.required && !data.undef )
	  .sort((data1, data2) => data2.margins - data1.margins);
    if (recBundle.length === 0) {
	return <h1> No Recommended Bundle (Either nothing is required, or nothing is affordable)</h1>;
    }
    return <div>
	<h1>Recomended Bundle:</h1>
	<MakeRecBundle bundle={recBundle[0].bundle.split('')} />
	</div>;
}
export default BundleRecommendation;
