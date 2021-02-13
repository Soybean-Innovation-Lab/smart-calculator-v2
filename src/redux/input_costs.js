/* State */
//================================================================================
export const inputCostsInitialState = {
    seedCost: 44.8,
    limeCost: 37.25,
    inoculumCost: 14.14,
    phosphorusCost: 109.93,
    potassiumCost: 58.15,
};
/* Actions */
//================================================================================
const SET_SEED_COST = "inputCosts/setSeedCost";
const SET_LIME_COST = "inputCosts/setLimeCost";
const SET_INOCULUM_COST = "inputCosts/setInoculumCost";
const SET_PHOSPHORUS_COST = "inputCosts/setPhosphorusCost";
const SET_POTASSIUM_COST = "inputCosts/setPotassiumCost";

export function setSeedCost(value) {
    return {
	type: SET_SEED_COST,
	value: value
    };
}
export function setLimeCost(value) {
    return {
	type: SET_LIME_COST,
	value: value
    };
}
export function setInoculumCost(value) {
    return {
	type: SET_INOCULUM_COST,
	value: value
    };
}
export function setPhosphorusCost(value) {
    return {
	type: SET_PHOSPHORUS_COST,
	value: value
    };
}
export function setPotassiumCost(value) {
    return {
	type: SET_POTASSIUM_COST,
	value: value
    };
}
/* Selectors */
//================================================================================
export const selectSeedCost = (s) => s.inputCosts.seedCost;
export const selectLimeCost = (s) => s.inputCosts.limeCost;
export const selectInoculumCost = (s) => s.inputCosts.inoculumCost;
export const selectPhosphorusCost = (s) => s.inputCosts.phosphorusCost;
export const selectPotassiumCost = (s) => s.inputCosts.potassiumCost;

/* Reducer */
//================================================================================
export function inputCostsReducer(state = inputCostsInitialState, action) {
    switch (action.type) {
    case SET_SEED_COST:
	state.seedCost = action.value;
	break;
    case SET_LIME_COST:
	state.limeCost = action.value;
	break;
    case SET_INOCULUM_COST:
	state.inoculumCost = action.value;
	break;
    case SET_PHOSPHORUS_COST:
	state.phosphorusCost = action.value;
	break;
    case SET_POTASSIUM_COST:
	state.potassiumCost = action.value;
	break;
    default:
	break;
    }
    return state;
}
