import state from './initialState';
import InitialState from './initialState';
import * as Constant from '../Constant/constant'

const rootReducer = (State = InitialState, action) => {
    switch (action.type) {
        case Constant.PUT_TEST_DATA: return {
            ...state,
            name: action.payload
        }
        case Constant.LOAD_IMAGES: return {
            ...state,
            images: action.payload
        }
        default: return { ...State }

    }
}
export default rootReducer;