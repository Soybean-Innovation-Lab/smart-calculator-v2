/* State */
//================================================================================
export const otherInfoInitialState = {
    inputsBudget: 200,
    plotSize: .5,
    priceOfGrain: 400
};
/* Actions */
//================================================================================
const SET_INPUTS_BUDGET = "otherInfo/setInputsBudget";
const SET_PLOT_SIZE= "otherInfo/setPlotSize";
const SET_PRICE_OF_GRAIN = "otherInfo/setPriceOfGrain";

export function setInputsBudget(value) {
    return {
	type: SET_INPUTS_BUDGET,
	value: value
    };
}
export function setPlotSize(value) {
    return {
	type: SET_PLOT_SIZE,
	value: value
    };
}
export function setPriceOfGrain(value) {
    return {
	type: SET_PRICE_OF_GRAIN,
	value: value
    };
}
/* Selectors */
//================================================================================
export const selectInputsBudget = (s) => s.otherInfo.inputsBudget;
export const selectPlotSize = (s) => s.otherInfo.plotSize;
export const selectPriceOfGrain = (s) => s.otherInfo.priceOfGrain;

/* Reducer */
//================================================================================
export function otherInfoReducer(state = otherInfoInitialState, action) {
    switch (action.type) {
    case SET_INPUTS_BUDGET:
	state.inputsBudget = action.value;
	break;
    case SET_PLOT_SIZE:
	state.plotSize = action.value;
	break;
    case SET_PRICE_OF_GRAIN:
	state.priceOfGrain = action.value;
	break;
    default:
	break;
    }
    return state;
}
