import React from 'react';
import { useSelector } from 'react-redux';

export default function ListComp() {
    const list = useSelector(state => state.list);
    return (
        <div>
            <h2>Redux Demo 02</h2>
            <p>Array: {list.toString()}</p>
            <button>Random</button>
        </div>
    )
}
