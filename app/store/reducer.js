import {
    GET_ALLWEATHER_DATA,
    GET_ALLWEATHER_DATA_SUCCESS,
    GET_ALLWEATHER_DATA_FAIL,
    SAVE_LOCATIONS,
    // SEARCHWEATHER_DATA,
    // SEARCHWEATHER_DATA_SUCCESS,
    // SEARCHWEATHER_DATA_FAIL,
} from "./actions";

const initialState = {
    weatherData: [],
    fetchingWeatherData: null,
    fetchingWeatherDataFail: null,
    searchingWeatherData: [],
    searchingWeatherDataFail: null,
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

        // case SEARCHWEATHER_DATA:
        //     return {};

        // case SEARCHWEATHER_DATA_FAIL:
        //     return {};

        default:
            return state;
    }
};
