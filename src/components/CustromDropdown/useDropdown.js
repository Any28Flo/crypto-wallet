import React , {useState} from "react";


import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";


const useDropdown = (label, defaultState, options) =>{
    const id= `dropdown-${label.replace(" ", "").toLocaleLowerCase()}`;

    const [state, setState] = useState(defaultState);

    const Dropdown = () =>(
        <TextField
            id={id}
            select
            label="Select"
            value={state}
            onChange={ e => setState(e.target.value)}
            onBlur={ e => setState(e.target.value)}
        >
            <MenuItem>All</MenuItem>
            {
                options.map((option) => (
                <MenuItem key={option.value} value={option.value}>

                    { `${option.label} ${option.value}` }
                </MenuItem>
            ))}
        </TextField>
    );

 return [state, Dropdown, setState];
};

export default useDropdown;