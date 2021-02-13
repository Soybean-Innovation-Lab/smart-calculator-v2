import React, { useCallback, useEffect, useState } from 'react';
import './panes.scss';

// TODO add a canAdvnace arg to panes which is a function which determines
// whether the nextButton should be enabled or disabled
const InternalPane = ({children,
		       navId,
		       goToNext,
		       goToPrev,
		       nextName,
		       prevName}) => {
    return <div id={navId} className="pane">
	       {children}
	       {prevName && <button onClick={goToPrev}> {prevName} </button>}
	       {nextName && <button onClick={goToNext}> {nextName} </button>}
	   </div>;
}
export const Pane = ({children}) => children;

export const PanesContainer = ({ children }) => {
    const [idPrefix, setIdPrefix] = useState(Math.random().toString(36).substring(7));
    const makeId = useCallback((x) => `${idPrefix}-${x.props.navId}`, [idPrefix]);

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
			       navId={id}
			       goToNext={goToNext}
			       nextName={nextName}
			       goToPrev={goToPrev}
			       prevName={prevName}>
		     {children[i]}
		 </InternalPane>);
    }

    const [hash, setHash] = useState(makeId(children[0]));

    useEffect(() => {
	window.location.hash = hash;
    }, [hash]);
    
    return <div>
	       {/* TODO improve this */}
	       {/*<h1 className={showScroll ? "show" : "noshow"}
		   id="dont-scroll">
		   Hey, press buttons, don't scroll!
		   </h1> */}
	       {out}
	   </div>;
}
