import { 
    LIST_LAUNCHPADS_REQUEST, 
    LIST_LAUNCHPADS_SUCCESS,
    LIST_LAUNCHPADS_FAILURE,
    LIST_LAUNCHES_REQUEST, 
    LIST_LAUNCHES_SUCCESS,
    LIST_LAUNCHES_FAILURE,
} from '../constants';

const initialState = {
    isBrowsingLaunchpads: false,
    launchpads: [],
    isBrowsingLaunches: false,
    launches: [],
    errorMessage: null,
};

export default function request(state = initialState, action) {
    switch(action.type) {
        case LIST_LAUNCHPADS_REQUEST:
            return {
                ...state,
                isBrowsingLaunchpads: false,
            };
        case LIST_LAUNCHPADS_SUCCESS:
            return {
                ...state,
                isBrowsingLaunchpads: true,
                launchpads: action.response.data,
            };
        case LIST_LAUNCHPADS_FAILURE:
            return {
                ...state,
                isBrowsingLaunchpads: false,
            };
        case LIST_LAUNCHES_REQUEST:
            return {
                ...state,
                isBrowsingLaunches: false,
            };
        case LIST_LAUNCHES_SUCCESS:
            return {
                ...state,
                isBrowsingLaunches: true,
                launches: action.response.data,
            };
        case LIST_LAUNCHES_FAILURE:
            return {
                ...state,
                isBrowsingLaunches: false,
            };
        default:
            return state;
    }
}