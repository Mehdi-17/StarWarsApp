import { API_CHARACTERS_URL, API_PLANETS_URL, API_STARSHIPS_URL, API_VEHICLES_URL } from "../utils/Constants";

export const getDatasFromId = async (searchId) => {
    let apiUrl;
    switch (searchId) {
        case 1:
            apiUrl = API_CHARACTERS_URL;
            break;
        case 2:
            apiUrl = API_STARSHIPS_URL;
            break;
        case 3:
            apiUrl = API_PLANETS_URL;
            break;
        case 4:
            apiUrl = API_VEHICLES_URL;
            break;
        default:
            console.error("The Result is not found");
    };

    return await fetch(apiUrl)
        .then((response) => response.json())
        .catch((err) => console.error(err));
};