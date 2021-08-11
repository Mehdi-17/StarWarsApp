import { LUKE_FOR_DEBUG } from '../utils/Constants';

export const getDataToDisplay = async (url) => {
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

//TODO: find a way to display the good image from each characters
const collectItems = (results) => {
    return results.map(item => ({ id: item.url, title: item.name, src: LUKE_FOR_DEBUG, url: item.url }));
}