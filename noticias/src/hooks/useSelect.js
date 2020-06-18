import React, {useState} from 'react';

const useSelect = (initialState, options) => {

    // State del Custom Hook
    const [state, setState] = useState(initialState);

    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}
export default useSelect;