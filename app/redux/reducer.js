import {
    GET_ALLWEATHER_DATA,
    GET_ALLWEATHER_DATA_SUCCESS,
    GET_ALLWEATHER_DATA_FAIL,
    GET_MAP_DATA,
    GET_MAP_DATA_SUCCESS,
    GET_MAP_DATA_FAIL,
    SAVE_LOCATIONS,
    DELETE_LOCATIONS,
} from "./actions";

const initialState = {
    weatherData: [],
    fetchingWeatherData: null,
    fetchingWeatherDataFail: null,
    savedLocations: [],
    location: null,
    fetchingLocation: null,
    fetchingLocationFail: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MAP_DATA:
            return {
                ...state,
                fetchingLocation: true,
            };

        case GET_MAP_DATA_SUCCESS:
            return {
                ...state,
                location: action.payload,
                fetchingLocation: false,
            };

        case GET_MAP_DATA_FAIL:
            return {
                ...state,
                fetchingLocationFail: true,
                fetchingLocation: false,
            };

        case GET_ALLWEATHER_DATA:
            return {
                ...state,
                fetchingWeatherData: true,
            };
        case GET_ALLWEATHER_DATA_SUCCESS:
            return {
                ...state,
                weatherData: action.payload,
                fetchingWeatherData: false,
            };

        case GET_ALLWEATHER_DATA_FAIL:
            return {
                fetchingWeatherData: false,
                fetchingWeatherDataFail: action.payload,
            };

        case SAVE_LOCATIONS:
            // if id is already added don't add
            // save to async storage

            const location = action.payload;
            return {
                ...state,
                savedLocations: [...state.savedLocations, location],
            };

        case DELETE_LOCATIONS:
            state.savedLocations.splice(action.payload, 1);
            return {
                ...state,
                savedLocations: [...state.savedLocations],
            };

        default:
            return state;
    }
};

// if (action.type === REMOVE_ITEM) {
//     state.baskeitems.splice(action.payload, 1);
//     return { ...state, baskeitems: [...state.baskeitems] };
// }
