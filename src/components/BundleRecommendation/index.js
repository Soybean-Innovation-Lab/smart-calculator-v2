import { useSelector } from 'react-redux';

import { useRecommendedBundle } from '../Utils';

let seedInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_f26de695289d47f28626edb854721c9a.pdf";
let innoculumInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_2c0c8b735d164c928fafa927d983abaf.pdf";
const abbrevToFullIngredient = (b) => {
    let classNames = "badge fs-3 mx-1 border border-2 border-primary bg-transparent text-reset"
  switch (b) {
    case "s":
      return (<span className={classNames} key="s"> <a href={seedInfo}>Seed</a> </span>);
    case "i":
      return (<span className={classNames} key="i"> <a href={innoculumInfo}>Inoculum</a> </span>);
    case "l":
      return (<span className={classNames} key="l"> Lime </span>);
    case "p":
      return (<span className={classNames} key="p"> Phosphorus </span>);
    case "k":
      return (<span className={classNames} key="k"> Potassium </span>);
    default:
      return;
  }
}
const MakeRecBundle = ({bundle}) => {
    return <p className="text-center">
	{bundle.map((b) => abbrevToFullIngredient(b))}
	</p>;
}

const BundleRecommendation = (props) => {
    const recBundle = useRecommendedBundle();

    if (recBundle === null) {
	return <h1> No Recommended Bundle (Either nothing is required, or nothing is affordable)</h1>;
    }
    return <div className="mx-auto mt-5 p-5 shadow border border-success border-3" style={{"width": "max-content"}}>
	<div>
	<h1>Recomended Bundle:</h1>
	<MakeRecBundle bundle={recBundle.bundle.split('')} />
	</div>
	</div>;
}
export default BundleRecommendation;
