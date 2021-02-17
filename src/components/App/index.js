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
import './intro.scss';

const Intro = () => {
    return <div className="intro">
	<h1>
	Welcome
    </h1>
	<p> 


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros nunc, ornare in mattis ut, condimentum a nisl. Donec id est quis tellus fringilla congue. Morbi laoreet et mauris quis iaculis. Nulla cursus ante at turpis euismod rhoncus. Duis vel lacus iaculis, mollis justo eget, suscipit augue. Etiam ullamcorper sapien eget tortor imperdiet, ut eleifend ex lacinia. Quisque varius mauris et bibendum molestie. Proin a lacus nisi. Etiam ullamcorper placerat augue in lacinia. Etiam nunc velit, sagittis a diam sed, accumsan pretium est. Cras eu tellus varius, scelerisque eros sed, dictum massa. Morbi lacus dui, varius quis ex sit amet, tincidunt gravida elit. Phasellus sapien elit, viverra in arcu eget, vulputate scelerisque ex. Curabitur posuere pulvinar dui non sollicitudin. Suspendisse vestibulum eleifend neque dictum interdum. <br/>

Etiam sapien ipsum, cursus non imperdiet eu, viverra et erat. Aliquam laoreet massa suscipit, tempus ipsum vel, dapibus diam. Sed quis nisl non nisl finibus suscipit. Ut sed malesuada nibh, at tempor ex. Cras nec enim id tortor eleifend rutrum ac vel nunc. Quisque metus mauris, ultrices quis enim vitae, pharetra accumsan libero. Mauris nec eleifend justo, ac dapibus risus. Donec vehicula vitae nulla eget pretium. Phasellus at lorem lacus. Aliquam eget metus erat. Aliquam erat volutpat. Pellentesque sit amet nisi sapien. Fusce tincidunt ut leo sit amet mollis. 
	</p>
	</div>;
}

const App = () => {
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
	<Pane name="Intro" navId="intro"> <Intro /> </Pane>
	<Pane name="Soil Properties" navId="soil-properties"> <SoilProperties />  </Pane>
	<Pane name="Input Costs" navId="input-costs"> <InputCosts />  </Pane>
	<Pane name="Other Info" navId="other-info"> <OtherInfo />  </Pane>
	<Pane name="Bundle Recommendation" navId="bundle-rec"> <BundleRecommendation/>  </Pane>
	<Pane name="Bundle Justification" navId="bundle-just"> <BundleJustification/>  </Pane>
    </PanesContainer>;
}

export default App;
