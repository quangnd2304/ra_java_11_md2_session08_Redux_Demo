import React from 'react';
import { useSelector } from 'react-redux';
import { act_random } from '../actions';
import { useDispatch } from 'react-redux';

export default function ListComp() {
    const list = useSelector(state => state.list);
    const dispath = useDispatch();
    return (
        <div>
            <h2>Redux Demo 02</h2>
            <p>Array: {list.toString()}</p>
            <button onClick={() => dispath(act_random())}>Random</button>
        </div>
    )
}
