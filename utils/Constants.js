import React from 'react';
import { StatusBar, Platform } from 'react-native';

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const PLATFORM = Platform.OS === 'android' ? 'md' : 'ios';
export const APP_BACKGROUND_COLOR = '#071532';


export const CATEGORY_DATAS = [
    {
        id: 1,
        title: "Personnages",
        src: "../assets/imgPerso.jpg",
    },
    {
        id: 2,
        title: "Planètes",
        src: "../assets/movieCarousel/CaptainAmericaPoster.jfif",
    }, 
    {
        id: 3,
        title: "Vaisseaux",
        src: "../assets/movieCarousel/badBatchPoster.jfif",
    },
    {
        id: 4,
        title: "Véhicules",
        src: "../assets/movieCarousel/badBatchPoster.jfif",
    }
];