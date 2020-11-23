export const VIEW_PAGE = "VIEW_PAGE";

export const setPage = (viewPage) => {
    return {
        type: VIEW_PAGE,
        viewPage,
    };
};
