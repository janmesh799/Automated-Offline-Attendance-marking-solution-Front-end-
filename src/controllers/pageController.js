import { setState } from "../store/pageSlice.js"

export function setpage(page) {
    return function (dispatch) {

        dispatch(setState(
            {
                activePage: page
            }
        ))
    }
}