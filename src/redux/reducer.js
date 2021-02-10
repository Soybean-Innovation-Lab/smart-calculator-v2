import { combineReducers } from 'redux';

import { soilPropertiesReducer } from './soil_properties';
import { dataReducer } from './data';
import { inputCostsReducer } from './input_costs';
import { otherInfoReducer } from './other_info';

const rootReducer = combineReducers({
    soilProperties: soilPropertiesReducer,
    data: dataReducer,
    inputCosts: inputCostsReducer,
    otherInfo: otherInfoReducer
});

export default rootReducer;
