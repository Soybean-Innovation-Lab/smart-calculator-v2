import React, { useCallback, useEffect, useState } from 'react';

// TODO add a canAdvnace arg to panes which is a function which determines
// whether the nextButton should be enabled or disabled
const InternalPane = ({children,
		       hash,
		       navId,
		       goToNext,
		       goToPrev,
		       nextName,
		       prevName}) => {
    return <div id={navId} className={`vh-100 overflow-visible vw-100 ${hash == navId ? "" : "d-none"}`}>
	       <div className="d-flex h-100 justify-content-between flex-column container-md">
		   <div className="row">
		       <div className="col">
			   {children}
		       </div>
		   </div>
		   <div className={`d-flex mb-1 mb-md-5 ${prevName ? "justify-content-between" : "justify-content-end"}`}>
		       <button type="button" className={`btn btn-primary me-1 ${prevName ? "" : "d-none"}`}
			       onClick={goToPrev}
		       >
			   <i class="bi-arrow-left" style={{"font-size": "1.5rem"}}></i>
			   &nbsp; {prevName}
		       </button>
		       <button type="button" className={`btn btn-primary ${nextName ? "" : "d-none"}`}
			       onClick={goToNext}
		       >
			   {nextName} &nbsp;
			   <i class="bi-arrow-right" style={{"font-size": "1.5rem"}}></i>
		       </button>
		   </div>
	       </div>
	   </div>;
}
export const Pane = ({children}) => children;

export const PanesContainer = ({ children }) => {
    const [idPrefix, setIdPrefix] = useState(Math.random().toString(36).substring(7));
    const makeId = useCallback((x) => `${idPrefix}-${x.props.navId}`, [idPrefix]);
    const [hash, setHash] = useState(makeId(children[0]));
    const [timeout, saveTimeout] = useState(undefined);


    let out = []
    for (let i = 0; i < children.length; i++) {
	let goToNext = undefined;
	let goToPrev = undefined;
	let prevName = undefined;
	let nextName = undefined;
	if (i !== 0) {
	    let prevId = makeId(children[i - 1]);
	    goToPrev = () => {
		setHash(prevId);
	    };
	    prevName = children[i-1].props.name;
	}
	if (i !== children.length - 1) {
	    const nextId = makeId(children[i + 1]);
	    goToNext = () => {
		setHash(nextId);
	    };
	    nextName = children[i+1].props.name;
	}
	const id = makeId(children[i]);
	out.push(<InternalPane key={id}
			       hash={hash}
			       navId={id}
			       goToNext={goToNext}
			       nextName={nextName}
			       goToPrev={goToPrev}
			       prevName={prevName}>
		     {children[i]}
		 </InternalPane>);
    }

    useEffect(() => {
	window.location.hash = hash;
	}, [hash]);
    useEffect(() => {
	window.onresize = () => {
	    if (timeout) {
		clearTimeout(timeout);
	    }
	    saveTimeout(setTimeout(() => {
		window.location.hash = hash
		saveTimeout(undefined);
	    }, 500));
	};
    }, [timeout]);

    return <div className="d-flex" style={{"width": "min-content"}}>
	       {/* TODO improve this */}
	       {/*<h1 className={showScroll ? "show" : "noshow"}
		   id="dont-scroll">
		   Hey, press buttons, don't scroll!
		   </h1> */}
	       {out}
	   </div>;
}
