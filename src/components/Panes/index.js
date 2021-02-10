import React, { useMemo, useCallback, useEffect, useState } from 'react';
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
    let reverse = useMemo(() => {
	let reverse = {};
	for (let i = 0; i < children.length; i++) {
	    reverse[makeId(children[i])] = i;
	}
	return reverse;
    }, [children, makeId]);

    const [lastGoTo, setLastGoTo] = useState(-1000);
    for (let i = 0; i < children.length; i++) {
	let goToNext = undefined;
	let goToPrev = undefined;
	let prevName = undefined;
	let nextName = undefined;
	if (i !== 0) {
	    let prevId = makeId(children[i - 1]);
	    goToPrev = () => {
		setLastGoTo(performance.now());
		setHash(prevId);
	    };
	    prevName = children[i-1].props.name;
	}
	if (i !== children.length - 1) {
	    const nextId = makeId(children[i + 1]);
	    goToNext = () => {
		setLastGoTo(performance.now());
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

    // SUMMARY DON'T MESS WITH SCROLL. JUST SET OVERFLOW HIDDEN. I LEAVE THIS
    // HERE (at leastfor one commit) JUST FOR HISTORICAL REFERENCE

    /* Hijacking scroll is complicated and probably not worth it,
       Lets just tell people not to scroll...

    const [scroll, setScroll] = useState(window.scrollY);
    const [scrollTime, setScrollTime] = useState(0);
    useEffect(() => {
	const onScrollUp = (e) => {
	    if (reverse[hash] > 0) {
		setHash(makeId(children[reverse[hash] - 1]));
	    }
	};
	const onScrollDown = (e) => {
	    if (reverse[hash] < children.length - 1) {
		setHash(makeId(children[reverse[hash] + 1]));
	    }
	    console.log("DOWN");
	};
	const onScroll = (e) => {
	    if (performance.now() - scrollTime > 1000) {
		console.log(e);
		if (window.scrollY < scroll) {
		    onScrollUp(e);
		    setScrollTime(performance.now());
		}
		if (window.scrollY > scroll) {
		    onScrollDown(e);
		    setScrollTime(performance.now());
		}
	    }
	    setScroll(window.scrollY);
	    e.preventDefault();
	}
	window.onscroll = onScroll;
    }, [hash, setHash, makeId, children, reverse, scroll, scrollTime]);
    */


    /* This is probably better, but still have to figure out 
1. how to not have it fire on non user scrolls
2. how to disable scrolling
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
	window.onscroll = (e) => {
	    if (performance.now() - lastGoTo > 1000) {
		setShowScroll(true);
	    }
	    window.location.hash = hash;
	    setLastGoTo(performance.now());
	};
    }, [hash, lastGoTo]);
    useEffect(() => {
	if (showScroll) {
	    setTimeout(() => {
		console.log("HI");
		setShowScroll(false);
	    }, 2000);
	}
    }, [showScroll, setShowScroll])
    */
    
    return <div>
	       {/* TODO improve this */}
	       {/*<h1 className={showScroll ? "show" : "noshow"}
		   id="dont-scroll">
		   Hey, press buttons, don't scroll!
		   </h1> */}
	       {out}
	   </div>;
}
