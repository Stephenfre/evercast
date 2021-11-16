import axios from "axios";

export const GET_ALLWEATHER_DATA = "GET_ALLWEATHER_DATA";
export const GET_ALLWEATHER_DATA_SUCCESS = "GET_ALLWEATHER_DATA_SUCCESS";
export const GET_ALLWEATHER_DATA_FAIL = "GET_ALLWEATHER_DATA_FAIL";

export function getWeatherData() {
    return (dispatch) => {
        dispatch({ type: GET_ALLWEATHER_DATA });

        return axios
            .get(
                "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-112.07&units=imperial&exclude=minutely&appid=7613dff2af161bb376b90a08f6c9d4df"
            )
            .then((res) => {
                dispatch({
                    type: GET_ALLWEATHER_DATA_SUCCESS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: GET_ALLWEATHER_DATA_FAIL,
                    payload: err,
                });
                console.log(err, "something is broken get weather actions");
            });
    };
}
