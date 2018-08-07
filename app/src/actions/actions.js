import axios from 'axios';
import { 
    LIST_LAUNCHPADS_REQUEST, 
    LIST_LAUNCHPADS_SUCCESS,
    LIST_LAUNCHPADS_FAILURE,
    LIST_LAUNCHES_REQUEST, 
    LIST_LAUNCHES_SUCCESS,
    LIST_LAUNCHES_FAILURE,
} from '../constants';

export function browseLaunchpads() {
    return {
        types: [
            LIST_LAUNCHPADS_REQUEST, 
            LIST_LAUNCHPADS_SUCCESS,
            LIST_LAUNCHPADS_FAILURE,
        ],
        callAPI: () => axios.get(
            `http://localhost:8001/launchpads`,
        ),
        payload: {},
    }
}

export function browseLaunches() {
    return {
        types: [
            LIST_LAUNCHES_REQUEST, 
            LIST_LAUNCHES_SUCCESS,
            LIST_LAUNCHES_FAILURE,
        ],
        callAPI: () => axios.get(
            `http://localhost:8001/launches`,
        ),
        payload: {},
    }
}