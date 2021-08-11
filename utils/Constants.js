import { StatusBar, Platform } from 'react-native';

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const PLATFORM = Platform.OS === 'android' ? 'md' : 'ios';
export const APP_BACKGROUND_COLOR = '#071532';

export const CATEGORY_DATAS = [
    {
        id: 1,
        title: "Personnages",
        src: require("../assets/character.jpg"),
        url: 'https://swapi.dev/api/people/'
    },
    {
        id: 2,
        title: "Vaisseaux",
        src: require("../assets/starships.jpg"),
        url: 'https://swapi.dev/api/starships/'
    },
    {
        id: 3,
        title: "Planètes",
        src: require("../assets/planet.jpg"),
        url: 'https://swapi.dev/api/planets/'
    },
    {
        id: 4,
        title: "Véhicules",
        src: require("../assets/vehicule.jpg"),
        url: 'https://swapi.dev/api/vehicles/'
    }
];