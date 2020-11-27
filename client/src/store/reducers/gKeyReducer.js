import { SET_KEY } from "../actions/gKeyActions";

export default function gKeyReducer(state = "", action) {
    switch (action.type) {
        case SET_KEY:
            return action.gkey;
        default:
            return state;
    }
}
