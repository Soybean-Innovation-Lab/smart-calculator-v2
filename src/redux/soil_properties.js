// TODO: maybe give this a directory and split stuff up

/* State */
//================================================================================
export const soilPropertiesInitialState = {
    ph: 2,
    phThreshold: 6,
    potassium: 0,
    potassiumThreshold: 110,
    phosphorus: 0,
    phosphorusThreshold: 30,
    selectedFarm: null,
}

/* Actions */
//================================================================================
const SET_PH = "soilProperties/setPH";
const SET_POTASSIUM = "soilProperties/setPotassium";
const SET_PHOSPHORUS = "soilProperties/setPhosphorus";
const SET_SELECTED_FARM = "soilProperties/setSelectedFarm";

export function setPH(value) {
    return {
	type: SET_PH,
	value: value
    };
}
export function setPotassium(value) {
    return {
	type: SET_POTASSIUM,
	value: value
    };
}
export function setPhosphorus(value) {
    return {
	type: SET_PHOSPHORUS,
	value: value
    };
}
export function setSelectedFarm(value) {
    return {
	type: SET_SELECTED_FARM,
	value: value
    };
}

/* Selectors */
//================================================================================
export const selectPH = (s) => s.soilProperties.ph;
export const selectPHThreshold = (s) => s.soilProperties.phThreshold;
export const selectPHSufficient = (s) => s.soilProperties.ph >= s.soilProperties.phThreshold;

export const selectPotassium = (s) => s.soilProperties.potassium;
export const selectPotassiumThreshold = (s) => s.soilProperties.potassiumThreshold;
export const selectPotassiumSufficient = (s) => s.soilProperties.potassium >= s.soilProperties.potassiumThreshold;

export const selectPhosphorus = (s) => s.soilProperties.phosphorus;
export const selectPhosphorusThreshold = (s) => s.soilProperties.phosphorusThreshold;
export const selectPhosphorusSufficient = (s) => s.soilProperties.phosphorus >= s.soilProperties.phosphorusThreshold;

export const selectSelectedFarm = (s) => s.soilProperties.selectedFarm;
/* Reducer */
//================================================================================
export function soilPropertiesReducer(state = soilPropertiesInitialState, action) {
    switch (action.type) {
    case SET_PH:
	state.ph = action.value;
	break;
    case SET_PHOSPHORUS:
	state.phosphorus = action.value;
	break;
    case SET_POTASSIUM:
	state.potassium = action.value;
	break;
    case SET_SELECTED_FARM:
	state.selectedFarm = action.value;
	break;
    default:
	break;
    }
    return state;
}
