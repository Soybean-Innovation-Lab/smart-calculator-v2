
export default {
    width: "container",
    height: "container",
    padding: { left: 5, right: 5, top: 5, bottom: 5 },

    data: {name: 'table',},
    mark: 'bar',
    encoding: {
	x: {
	    title: 'Bundle ID',
	    field: 'bundle',
	    type: 'ordinal',
	    axis: {
		labelFontSize: 20,
		titleFontSize: 20,
	    },
	    sort: null,
	},
	y: {
	    title: 'Gross Margins',
	    field: 'margins',
	    type: 'quantitative',
	    axis: {
		labelFontSize: 20,
		titleFontSize: 20,
	    }
	},
	color: {
	    field: 'color',
	    type: 'nominal',
	    "scale": null
	}
    }
};
