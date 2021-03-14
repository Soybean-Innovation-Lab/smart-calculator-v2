import { useSelector } from 'react-redux';

import { useRecommendedBundle, useSortedBundles } from '../Utils';

import './index.scss';
//import bag from './bag.png';

const Bag = ({count, selected}) => {
    return <svg className={`bag-${count} ${selected ? 'selected' : ''}`} style={{"gridArea": `i${count}`}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    viewBox="-50 -50 612 612" enableBackground="new 0 0 512 512"> {/* original viewbox 0-512*/}
	<path d="M336,111.797c8.844,0,16,7.156,16,16s-7.156,16-16,16H176c-8.844,0-16-7.156-16-16s7.156-16,16-16H336z M345.25,159.797
	H166.734C87.469,217.609,32,340.141,32,417.953c0,104.656,100.281,93.5,224,93.5s224,11.156,224-93.5
	C480,340.141,424.531,217.609,345.25,159.797z M166.734,95.797H345.25c0,0,70.75-61.719,38.75-88.719s-103,30-128,28
	c-25,2-96-55-128-28S166.734,95.797,166.734,95.797z"/>
	</svg>
}

let seedInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_f26de695289d47f28626edb854721c9a.pdf";
let innoculumInfo = "https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_2c0c8b735d164c928fafa927d983abaf.pdf";
let goodAgLink = `${process.env.PUBLIC_URL}/Soybean Prodcution primer for Input Calculator-compressed.pdf`;
let phosphorusLink = `${process.env.PUBLIC_URL}/Fertilizing Soybean UM extesnion -2020.pdf`;
let potassiumLink = `${process.env.PUBLIC_URL}/Fertilizing Soybean UM extesnion -2020.pdf`;
let limeLink = `${process.env.PUBLIC_URL}/Applying Lime to Raise Soil pH OSU-2013.pdf`;
const abbrevToFullIngredient = (b, link=false) => {
    //let classNames = "badge fs-3 mx-1 border border-2 border-primary bg-transparent text-reset"
    let classNames = "";
    let inner;
  switch (b) {
    case "s":
      inner = <> Seed </>;
      if (link) {
	  inner = <a target="_blank" href={seedInfo}> Seed </a>;
      }
      return (<span className={classNames} key="s"> {inner} </span>);
    case "i":
      inner = <> Inoculum </>;
      if (link) {
	  inner = <a target="_blank" href={innoculumInfo}> Inoculum </a>;
      }
      return (<span className={classNames} key="i"> {inner} </span>);
    case "l":
      inner = <> Lime </>;
      if (link) {
	  inner = <a target="_blank" href={limeLink}> Lime </a>;
      }
      return (<span className={classNames} key="l"> {inner} </span>);
    case "p":
      inner = <> Phosphorus </>;
      if (link) {
	  inner = <a target="_blank" href={phosphorusLink}> Phosphorus </a>;
      }
      return (<span className={classNames} key="p"> {inner} </span>);
    case "k":
      inner = <> Potassium </>
      if (link) {
	  inner = <a target="_blank" href={potassiumLink}> Potassium </a>;
      }
      return (<span className={classNames} key="k"> {inner} </span>);
    default:
      return;
  }
}
const MakeRecBundle = ({bundle}) => {
    return <p className="text-center">
	{bundle.map((b) => abbrevToFullIngredient(b))}
	</p>;
}

const Ingredient = ({children, bundle, grid}) => {
    return <div className={`ingredient-${bundle} m-2 shadow border border-2 border-dark`} style={grid && {"gridArea":grid}}>
	{children}
	</div>;
} 
const Bundle = ({count, selected, bundle}) => {
    const ingredients = [
	    <Ingredient bundle={count} key="gap" grid={`9 / ${count + 1}`}> <h4> Good Agronomic Practices</h4> </Ingredient>,
	    <Ingredient bundle={count} key="cs" grid={`8 / ${count + 1}`}> <h4> Certified Seed</h4> </Ingredient>,
	    <Ingredient bundle={count} key="1" grid={`7 / ${count + 1}`}> <h4> {abbrevToFullIngredient(bundle.bundle[1])}</h4> <h5>(+1 Input) </h5> </Ingredient>,
	    <Ingredient bundle={count} key="2" grid={`6 / ${count + 1}`}> <h4> {abbrevToFullIngredient(bundle.bundle[2])}</h4><h5> (+1 Input) </h5> </Ingredient>,
	    <Ingredient bundle={count} key="3" grid={`5 / ${count + 1}`}> <h4> {abbrevToFullIngredient(bundle.bundle[3])}</h4><h5> (+1 Input) </h5> </Ingredient>,
	    <Ingredient bundle={count} key="4" grid={`4 / ${count + 1}`}> <h4> {abbrevToFullIngredient(bundle.bundle[4])}</h4><h5> (+1 Input) </h5> </Ingredient>,
    ];
    return <>
	<div id={`bundle-${count}`} className={selected ? 'selected' : ''}>
	</div>
	{ ingredients.slice(0, count + 2)}
	<Bag count={count + 1} selected={selected}/>
	<div className={`border border-dark border-2 px-3 py-1 margin-${count}`} style={{"gridArea":`2/${count + 1}`}}>
	<h4> Margin: ${bundle.margins.toFixed(0)} </h4>
	</div>
	<div className={`border border-dark border-2 my-1 px-3 py-1 bundle-title-${count}`} style={{"gridArea":`1/${count + 1}`}}>
	<h4> {length2bundle[count + 1]} Bundle </h4>
	</div>
	</>;
}
const length2bundle = {
    1: "Red",
    2: "Yellow",
    3: "Blue",
    4: "Green",
    5: "Purple",
};
const BundleRecommendation = (props) => {
    const sortedBundles = useSortedBundles(false);
    const recBundle = useRecommendedBundle();

    if (recBundle === null) {
	return <h1> No Recommended Bundle (Either nothing is required, or nothing is affordable)</h1>;
    }
    const makeMarginFinder = (x) => sortedBundles.filter((e) => e.bundle.length == x)[0];
    return <div className="d-flex flex-column align-items-center">
	<div className="mx-auto my-2 p-2 shadow border border-3" style={{"width": "max-content"}}>
	<h3> We recommend the <span className={`b-${recBundle.bundle.length}`}> {length2bundle[recBundle.bundle.length]} Bundle </span> </h3>
	</div>
	<div id="bundle-rec">
	<Bundle count={0} bundle={makeMarginFinder(1)} selected={recBundle.bundle.length == 1}/>
	<Bundle bundle={makeMarginFinder(2)} count={1} selected={recBundle.bundle.length == 2}/>
	<Bundle bundle={makeMarginFinder(3)} count={2} selected={recBundle.bundle.length == 3}/>
	<Bundle bundle={makeMarginFinder(4)} count={3} selected={recBundle.bundle.length == 4}/>
	<Bundle bundle={makeMarginFinder(5)} count={4} selected={recBundle.bundle.length == 5}/>

    {/* The purpose of the hidden div is to make sure that row is of a comparable height */}
	<div style={{"gridArea": "3/1", "visibility": "hidden"}}> <h4> Test </h4><h5> Test </h5> </div>
	</div>
	<div> </div>
	<div id="lower-rec-text" className="mx-auto my-2 p-2 shadow border border-3">
	<h3>
	The &nbsp;
	<span className={`b-${recBundle.bundle.length}`}>
	{length2bundle[recBundle.bundle.length]} Bundle
    </span> 
	&nbsp;builds off of the &nbsp;
	<span className="b-1">
	Red Bundle
    </span>
	&nbsp; which includes &nbsp;
	<a target="_blank" href={goodAgLink} style={{"textDecoration":"underline"}}>
	Good Agronomic Practices
    </a>
	&nbsp;and &nbsp;
	<span style={{"textDecoration":"underline"}}>
	<a target="_blank" href={seedInfo}> Seed</a>
    </span>
	&nbsp;and adds {recBundle.bundle.length - 1} additional inputs
	</h3>
	</div>
	<div className="mx-auto my-2 p-2 shadow border border-3" style={{"width": "max-content"}}>
	<h3> Your additional inputs are </h3>
	<ul>
	{ recBundle.bundle.split('').filter((e) => e != 's').map((e) => <li key={e}> <h4>{abbrevToFullIngredient(e, true)} </h4></li>) }
	</ul>
	</div>
	</div>;
}
export default BundleRecommendation;
