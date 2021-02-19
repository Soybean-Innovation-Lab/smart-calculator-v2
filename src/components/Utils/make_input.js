import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const MakeInput = ({name, state, set, units, formatter, children}) => { 
    const dispatch = useDispatch();
    const [input, setInput] = useState(state);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
	let parsed = Number.parseFloat(input);
	if (!isNaN(parsed) && parsed && parsed !== state) {
	    dispatch(set(parsed));
	}
    }, [dispatch, state, set, input]);

    if (!formatter) {
	formatter = (a) => a;
    }

    return <div className="make-input">
	<label htmlFor={name}> {children} </label>
	<input name={name} value={focused ? input : formatter(input)} onBlur={(e) => setFocused(false)} onFocus={(e) => setFocused(true)} onChange={e => setInput(e.target.value)} />
	<span className="units"> {units} </span>
	</div>;
};
