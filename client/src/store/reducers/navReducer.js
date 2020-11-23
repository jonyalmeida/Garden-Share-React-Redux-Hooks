import { VIEW_PAGE } from "../actions/navActions";

export default function navReducer(state = {}, action) {
    const stateCopy = state;

    switch (action.type) {
        case VIEW_PAGE:
            stateCopy.nav = action.viewPage;
            return {
                ...stateCopy,
            };
        default:
            return state;
    }
}
