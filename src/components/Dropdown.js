import React, { useState } from "react";


const Dropdown = props => {
    const [selectedValue, setSelectedValue] = useState('');

    const data = [
        {value: 1, name: 'Song 1'},
        {value: 2, name: 'Song 2'},
        {value: 3, name: 'Song 3'},
    ];
return (
    <div>
        <select>
        {props.options.map( (item, idx) => <option key={idx} value={item.value}> {item.name}</option>)}
        </select>
        <p>{selectedValue}</p>
    </div>
)

}


