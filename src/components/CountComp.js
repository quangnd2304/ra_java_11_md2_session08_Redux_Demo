import React from 'react';
import { useSelector } from 'react-redux';
import { act_up, act_Down } from '../actions';
import { useDispatch } from 'react-redux';

export default function CountComp() {
    // Lấy dữ liệu state có tên là count về hiển thị
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Redux Demo 01</h2>
            <p>Current Value: {count}</p>
            <button onClick={() => dispatch(act_up(5))}>UP</button>
            <button onClick={() => dispatch(act_Down(3))}>DOWN</button>
        </div>
    )
}
