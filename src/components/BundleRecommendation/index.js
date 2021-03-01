import { useSelector } from 'react-redux';

import { useRecommendedBundle } from '../Utils';

import './index.scss';

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

const Ingredient = ({children, grid}) => {
    return <div className="bundle m-2 shadow" style={grid && {"grid-area":grid}}>
	{children}
	</div>;
} 
const Bundle = ({count}) => {
    const ingredients = [
	    <Ingredient key="gap" grid={`7 / ${count + 1}`}> <h4> Good Agronomic Practice</h4> </Ingredient>,
	    <Ingredient key="cs" grid={`6 / ${count + 1}`}> <h4> Certified Seed</h4> </Ingredient>,
	    <Ingredient key="cs" grid={`5 / ${count + 1}`}> <h4> +1 Input </h4> </Ingredient>,
	    <Ingredient key="cs" grid={`4 / ${count + 1}`}> <h4> +1 Input </h4> </Ingredient>,
	    <Ingredient key="cs" grid={`3 / ${count + 1}`}> <h4> +1 Input </h4> </Ingredient>,
	    <Ingredient key="cs" grid={`2 / ${count + 1}`}> <h4> +1 Input </h4> </Ingredient>,
    ];
    return <>
	<div id={`bundle-${count}`}>
	</div>
	{ ingredients.slice(0, count + 2)}
	</>;
}
const BundleRecommendation = (props) => {
    const recBundle = useRecommendedBundle();

    if (recBundle === null) {
	return <h1> No Recommended Bundle (Either nothing is required, or nothing is affordable)</h1>;
    }
    return <div id="bundle-rec">
	<Bundle count={0} />
	<Bundle count={1} />
	<Bundle count={2} />
	<Bundle count={3} />
	<Bundle count={4} />
	</div>;
}
export default BundleRecommendation;
