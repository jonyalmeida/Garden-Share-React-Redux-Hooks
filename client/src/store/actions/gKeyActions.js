export const SET_KEY = "SET_KEY";

export const setKey = (gkey) => {
    return {
        type: SET_KEY,
        gkey,
    };
};
