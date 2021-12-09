import axios from "axios";
export const DATA = 'DATA';

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'f1bd7daa8a6086abd57f75b31e40db74';

export const getData = (cityName = 'Tel Aviv') => async (dispatch) => {

    try {
        const { data } = await axios.get(baseUrl + `q=${cityName}&appid=${apiKey}`)
        console.log("data", data);
        dispatch({
            type: DATA,
            payload: data
        });
    } catch (e) {
        throw new Error(e)
    }
}