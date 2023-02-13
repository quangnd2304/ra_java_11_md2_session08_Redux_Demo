import * as types from "../constants/actionType";
const initialState = 0;
// reducer có tên là count, quản lý cập nhật state có tên là count
const count = (state = initialState, action) => {
    // Nhận action và state cũ ==> xử lý để cập nhật state ==> trả ra state mới
    switch (action.type) {
        case types.ACT_UP:
            state += action.payload;
            return state;
        case types.ACT_DOWN:
            state -= action.payload;
            return state;
        default:
            return state;
    }

}
export default count;