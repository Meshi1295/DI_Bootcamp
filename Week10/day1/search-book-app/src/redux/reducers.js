import { BOOKS, SEARCH, SORT } from "./actions";

const initState = {
    books: [],
    search: '',
    sortBy: ''
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case BOOKS:
            return { ...state, books: action.payload }

        case SEARCH:
            return { ...state, search: action.payload }

        case SORT:
            return { ...state, books: action.payload }

        case "NEWEST":
            return { ...state, sortBy: "&orderBy=newest" };

        case "RELEVANCE":
            return { ...state, sortBy: "&orderBy=relevance" };
        case "NONE":
            return { ...state, sortBy: "" };


        default:
            return { ...state }
    }
}