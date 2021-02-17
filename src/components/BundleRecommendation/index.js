import { useSelector } from 'react-redux';

import { useAllBundleData } from '../Utils';

const BundleRecommendation = (props) => {
    const allBundleData = useSelector(useAllBundleData);

    const recBundle = [...allBundleData]
	  .filter((data) => data.affordable && data.required && !data.undef )
	  .sort((data1, data2) => data2.margins - data1.margins);
    if (recBundle.length === 0) {
	return <h1> No Recommended Bundle (Either nothing is required, or nothing is affordable)</h1>;
    }
	return <h1>
	    Bundle Recommendation: <em> {recBundle[0].bundle} </em>
	    </h1>;
};
export default BundleRecommendation;
