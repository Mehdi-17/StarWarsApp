import { CATEGORY_DATAS, CHARACTERS_IMAGES } from '../utils/Constants';

export const getDataToDisplay = async (url, categoryId) => {
    const response = await getData(url);
    const returnObject = buildDataObject(response, categoryId);
    let datasToSave = returnObject.items;

    if (returnObject.next !== null) {
        await loadMoreApiDatasIf(returnObject.next, datasToSave, categoryId);
    }
    return datasToSave;
};

export const getData = async (url) => {
    return await fetch(url)
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

const loadMoreApiDatasIf = async (url, currentDatas, categoryId) => {
    let hasNext = true;
    while (hasNext) {
        const response = await getData(url);
        url = response.next
        hasNext = url !== null;
        currentDatas.push(...collectItems(response.results, categoryId));
    }
};

const buildDataObject = (data, categoryId) => {
    return {
        next: data.next,
        items: collectItems(data.results, categoryId)
    };
}

const collectItems = (results, categoryId) => {
    if (categoryId === 1) {
        return results.map(item => ({ id: item.url, title: item.name, src: getImages(item.url, categoryId), url: item.url, birth: item.birth_year, gender: item.gender, height: item.height, mass: item.mass, homeworld: item.homeworld }));
    }
    return results.map(item => ({ id: item.url, title: item.name, src: getImages(item.url, categoryId), url: item.url }));


}

//I only set the right images for the characters because the API doesn't give an image url for every object
//So to don't loose my time to search an other api or the differents images on the internet, 
//I chose to set the images only for characters
const getImages = (url, categoryId) => {
    if (categoryId == 1) {
        const id = url.match(/[0-9]+/g);
        return CHARACTERS_IMAGES.find(image => image.id == id).image;
    } else {
        return CATEGORY_DATAS.find(category => category.id === categoryId).imageForSearch;
    }

}