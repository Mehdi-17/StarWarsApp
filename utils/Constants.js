import React from 'react';
import { StatusBar, Platform } from 'react-native';

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const PLATFORM = Platform.OS === 'android' ? 'md' : 'ios';
export const APP_BACKGROUND_COLOR = '#071532';


export const CATEGORY_DATAS = [
    {
        id: 1,
        title: "Personnages",
        src: require("../assets/character.jpg"),
    },
    {
        id: 2,
        title: "Vaisseaux",
        src: require("../assets/starships.jpg"),
    },
    {
        id: 3,
        title: "Planètes",
        src: require("../assets/planet.jpg"),
    },
    {
        id: 4,
        title: "Véhicules",
        src: require("../assets/vehicule.jpg"),
    }
];