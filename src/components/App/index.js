import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setError,
	 selectErrorOccured,
	 selectError,
	 selectLoading,
	 setData } from '../../redux/data';

import SoilProperties from '../SoilProperties';
import InputCosts from '../InputCosts';
import OtherInfo from '../OtherInfo';
import BundleRecommendation from '../BundleRecommendation';
import BundleJustification from '../BundleJustification';
import { PanesContainer, Pane } from '../Panes';

const Intro = () => {
    return <div className="intro">
	<h1>
	SMART Farm Input Recommendation Calculator 
    </h1>
	<p className="fs-5"> 
Soybean production requires agricultural inputs such as lime, phosphorus and potassium fertilizer, and rhizobium inoculant to ensure a profitable crop. However, soil conditions along with a farmer’s limited budget can make some inputs unnecessary or financially impractical. The Soybean Innovation Lab (SIL) conducts input omission trials, or <a href="https://7b7dcda8-7264-4c41-b9a2-b2e845d0c5d1.usrfiles.com/ugd/7b7dcd_738bcfbf8bbc4ee78d1a0ec4f806ec5f.pdf">SMART Farms</a>, in several locations throughout Africa to address unique, location-specific constraints to recommend input bundles that will maximize yields. Using the data acquired from these SMART Farms, SIL has developed an input bundle recommendation calculator in order to give the same evidence-based, cost-effective bundle recommendations to a broader audience that may not have the means to conduct their own SMART Farm trials. This calculator considers each user’s unique situation including location, soil properties, and budget to generate the input bundle recommendation that results in the highest Return on Investment (ROI) for the grower.  
	</p>
	<h2> Instructions </h2>
	<p className="fs-5">Proceed through each section and input appropriate values for soil properties and location, input budget and costs, and price of grain in your area. The recommended bundle will be the bundle that produces the highest gross margins and addresses your soil fertility needs and budget constraints. This calculator also creates a graph and table showing the gross margins of all possible bundles and which criteria (budget or soil fertility) they fulfill to provide a better understanding of how your recommended input bundle was selected. 
	</p>

	</div>;
}

const App = () => {
    const dispatch = useDispatch();

    const errorOccured = useSelector(selectErrorOccured);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    // maybe one day use redux-thunk, but not right now.
    const DATA_URL = `${process.env.PUBLIC_URL}/data.json`;
    useEffect(() => {
	fetch(DATA_URL)
	    .then((data) => data.json())
	    .then((data) => dispatch(setData(data)))
	    .catch((error) => {
		console.error(error);
		dispatch(setError(error))
	    });
    }, [dispatch, DATA_URL]);
    if (errorOccured) {
	return <div>
	    <h1> error!</h1>
	    <pre> {JSON.stringify(error)}</pre>
	    </div>;
    }
    if (loading) {
	return <h1> loading </h1>;
    }
    return <PanesContainer>
	<Pane name="Intro" navId="intro"> <Intro /> </Pane>
	<Pane name="Soil Properties" navId="soil-properties"> <SoilProperties />  </Pane>
	<Pane name="Input Costs" navId="input-costs"> <InputCosts />  </Pane>
	<Pane name="Other Info" navId="other-info"> <OtherInfo />  </Pane>
	<Pane name="Bundle Recommendation" navId="bundle-rec"> <BundleRecommendation/>  </Pane>
	<Pane buttonsBefore={true} name="Bundle Justification" navId="bundle-just"> <BundleJustification/>  </Pane>
    </PanesContainer>;
}

export default App;
