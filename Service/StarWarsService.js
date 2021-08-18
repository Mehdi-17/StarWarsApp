import { CHARACTERS_IMAGES } from '../utils/Constants';

export const getDataToDisplay = async (url, categoryId) => {
    const response = await getData(url);
    const returnObject = buildDataObject(response);
    let datasToSave = returnObject.items;

    if (returnObject.next !== null) {
        await loadMoreApiDatasIf(returnObject.next, datasToSave);
    }
    return datasToSave;
};

const getData = async (url) => {
    return await fetch(url)
        .then((response) => response.json())
        .catch((err) => console.error(err));
};

const loadMoreApiDatasIf = async (url, currentDatas) => {
    let hasNext = true;
    while (hasNext) {
        const response = await getData(url);
        url = response.next
        hasNext = url !== null;
        currentDatas.push(...collectItems(response.results));
    }
};

const buildDataObject = (data) => {
    return {
        next: data.next,
        items: collectItems(data.results)
    };
}

const collectItems = (results) => {
    return results.map(item => ({ id: item.url, title: item.name, src: getImages(item.url), url: item.url }));
}

//TODO: GET IMAGE FOR OTHER CATEGORY
const getImages = (url) => {
    const id = url.match(/[0-9]+/g);
    return CHARACTERS_IMAGES.find(image =>image.id == id).image;
}