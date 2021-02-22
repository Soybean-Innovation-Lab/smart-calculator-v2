import { useSelector } from 'react-redux';
import { VegaLite } from 'react-vega'

import { BundleTable } from './table'
import spec from './Bar';

import { useAllBundleData } from '../Utils/calculator';

const BundleJustification = (props) => {
    const bundleData = useAllBundleData();
    return <div>
	<BundleTable />
	<VegaLite
    width="800"
    height="500"
    spec={spec}
    data={{table: bundleData.filter((e) => e.required && e.affordable)}} />

	</div>;
};
export default BundleJustification;
