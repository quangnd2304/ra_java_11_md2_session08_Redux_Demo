import { ACT_RANDOM } from "../constants/actionType";
// Giá trị khởi tạo của state list
const initialState = [3, 5, 7];
// reducer có tên là list để quản lý và cập nhật state có tên là list
const list = (state = initialState, action) => {
    switch (action.type) {
        case ACT_RANDOM:
            state = [...state, parseInt(Math.random() * 10)];
            return state;
        default:
            return state;
    }

}
export default list;