export const SET_DATA = "data/setData";
const SET_ERROR = "data/setError";

/* State */
//================================================================================
const initialState = {
    loading: true,
    errorOccured: false,
    farmerCost: 173,
};
/* Actions */
//================================================================================
export function setData(data) {
    return {
	type: SET_DATA,
	value: data
    };
}
export function setError(error) {
    return {
	type: SET_ERROR,
	value: error
    };
}
/* Selectors */
//================================================================================
export const selectError = s => s.data.error;
export const selectErrorOccured = s => s.data.errorOccured;
export const selectLoading = s => s.data.loading;

export const selectLocations = s => Object.keys(s.data.data["yield"]);
export const selectBundlesForLocation = loc => s => Object.keys(s.data.data["yield"][loc]);
export const selectYield = (loc, bundle) => s => s.data.data["yield"][loc][bundle];
export const selectAllBundles = s => ["s", "si", "sl", "sp", "sk", "sil",
				      "sip", "sik", "slp", "slk", "spk", "silp",
				      "silk", "sipk", "slpk", "silpk"];
export const selectData = s => s.data.data["yield"];
export const selectFarmerCost = s => s.data.farmerCost;

export const selectFarmSoilProperties = loc => s => s.data.data.soil[loc];

/* Reducer */
//================================================================================
export function dataReducer(state=initialState, action) {
    switch (action.type) {
    case SET_DATA:
	state.data = action.value;
	state.loading = false;
	break;
    case SET_ERROR:
	state.errorOccured = true;
	state.error = action.value;
	state.loading = false;
	break;
    default:
	break;
    }
    return state;
}
