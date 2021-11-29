import {
    GET_ALLWEATHER_DATA,
    GET_ALLWEATHER_DATA_SUCCESS,
    GET_ALLWEATHER_DATA_FAIL,
    SAVE_LOCATIONS,
    DELETE_LOCATIONS,
} from "./actions";

const initialState = {
    weatherData: [],
    fetchingWeatherData: null,
    fetchingWeatherDataFail: null,
    savedLocations: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
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
            // const location = action.payload;
            return {
                ...state,
                savedLocations: state.savedLocations.filter((location) => location.id === action.payload.id),
            };

        default:
            return state;
    }
};
