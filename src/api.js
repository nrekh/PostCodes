import axios from 'axios';

const POST_URL = "https://api.postcodes.io/postcodes";

//get postcodes near the searched postcode
export const getNearestApi = async (postcode) => {
    const urlPostcode = encodeURIComponent(postcode);
    const url = `${POST_URL}/${urlPostcode}/nearest`;
    const response = await axios.get(url).then((response) => response.data);
    return response;
}

//get postcode data for the searched postcode
export const getPostCodeDataApi = async (postcode) => {
        const urlPostcode = encodeURIComponent(postcode);
        const url = `${POST_URL}/${urlPostcode}`;
        const response = await axios.get(url).then((response) => response.data);
        return response;
}