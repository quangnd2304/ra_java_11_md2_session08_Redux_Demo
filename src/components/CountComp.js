import React from 'react';
import { useSelector } from 'react-redux';

export default function CountComp() {
    // Lấy dữ liệu state có tên là count về hiển thị
    const count = useSelector(state => state.count);
    return (
        <div>
            <h2>Redux Demo 01</h2>
            <p>Current Value: {count}</p>
            <button>UP</button>
            <button>DOWN</button>
        </div>
    )
}
