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

import './App.scss';

function App() {
    const dispatch = useDispatch();

    const errorOccured = useSelector(selectErrorOccured);
    const error = useSelector(selectError);
    const loading = useSelector(selectLoading);

    // maybe one day use redux-thunk, but not right now.
    const DATA_URL = "/data.json";
    useEffect(() => {
	fetch(DATA_URL)
	    .then((data) => data.json())
	    .then((data) => dispatch(setData(data)))
	    .catch((error) => {
		console.error(error);
		dispatch(setError(error))
	    });
    }, [dispatch]);
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
	<Pane name="Intro" navId="intro"> <h1> Welcome </h1>  </Pane>
	<Pane name="Soil Properties" navId="soil-properties"> <SoilProperties />  </Pane>
	<Pane name="Input Costs" navId="input-costs"> <InputCosts />  </Pane>
	<Pane name="Other Info" navId="other-info"> <OtherInfo />  </Pane>
	<Pane name="Bundle Recommendation" navId="bundle-rec"> <BundleRecommendation/>  </Pane>
	<Pane name="Bundle Justification" navId="bundle-just"> <BundleJustification/>  </Pane>
    </PanesContainer>;
}

export default App;
