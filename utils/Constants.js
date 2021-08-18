import { StatusBar, Platform } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const PLATFORM = Platform.OS === 'android' ? 'md' : 'ios';
export const APP_BACKGROUND_COLOR = '#071532';
export const SECONDARY_APP_COLOR = '#12294d';
export const LUKE_FOR_DEBUG = require("../assets/character.jpg");

export const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: APP_BACKGROUND_COLOR
    }
};

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
        url: "https://swapi.dev/api/starships/",
        imageForSearch: "https://cafans.b-cdn.net/images/Category_13911/subcat_27614/5qBTj0jL_2704202055441sbpi.jpg"
    },
    {
        id: 3,
        title: "Planètes",
        src: require("../assets/planet.jpg"),
        url: 'https://swapi.dev/api/planets/',
        imageForSearch:"https://media.firerank.com/upload/dli/13312/3a66838774_500.jpg"
    },
    {
        id: 4,
        title: "Véhicules",
        src: require("../assets/vehicule.jpg"),
        url: 'https://swapi.dev/api/vehicles/',
        imageForSearch: "http://pm1.narvii.com/6997/f1d7fd2f297bbedc880fdd8ef8b0ae7d0339944dr1-594-598v2_uhq.jpg"
    }
];

export const CHARACTERS_IMAGES = [
    { id: 1, image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/clean_190.jpg" },
    { id: 2, image: "https://i.pinimg.com/originals/a2/21/8e/a2218e051fcd0232d8907d116f945517.jpg" },
    { id: 3, image: "https://i.pinimg.com/originals/ab/10/1f/ab101fe0d578470dd53cc42a1adb2166.jpg" },
    { id: 4, image: "https://pbs.twimg.com/media/DbEvNqEX0AAPQ-_.jpg" },
    { id: 5, image: "https://i.pinimg.com/originals/de/49/4c/de494c718156266a16312055a9fe9ae1.jpg" },
    { id: 6, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/62795/5012547-star%20wars.jpg" },
    { id: 7, image: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png" },
    { id: 8, image: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png" },
    { id: 9, image: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png" },
    { id: 10, image: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg" },
    { id: 11, image: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png" },
    { id: 12, image: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg" },
    { id: 13, image: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png" },
    { id: 14, image: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png" },
    { id: 15, image: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg" },
    { id: 16, image: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png" },
    { id: 18, image: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg" },
    { id: 19, image: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png" },
    { id: 20, image: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png" },
    { id: 21, image: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png" },
    { id: 22, image: "https://vignette.wikia.nocookie.net/starwars/images/7/79/Boba_Fett_HS_Fathead.png" },
    { id: 23, image: "https://vignette.wikia.nocookie.net/starwars/images/f/f2/IG-88.png" },
    { id: 24, image: "https://vignette.wikia.nocookie.net/starwars/images/1/1d/Bossk.png" },
    { id: 25, image: "https://vignette.wikia.nocookie.net/starwars/images/8/8f/Lando_ROTJ.png" },
    { id: 26, image: "https://vignette.wikia.nocookie.net/starwars/images/9/96/SWE_Lobot.jpg" },
    { id: 27, image: "https://vignette.wikia.nocookie.net/starwars/images/2/29/Admiral_Ackbar_RH.png" },
    { id: 28, image: "https://vignette.wikia.nocookie.net/starwars/images/b/b7/MP-MonMothma.png" },
    { id: 29, image: "https://vignette.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg" },
    { id: 30, image: "https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png" },
    { id: 31, image: "https://vignette.wikia.nocookie.net/starwars/images/1/14/Old_nien_nunb_-_profile.png" },
    { id: 32, image: "https://vignette.wikia.nocookie.net/starwars/images/f/f6/Qui-Gon_Jinn_Headshot_TPM.jpg" },
    { id: 33, image: "https://vignette.wikia.nocookie.net/starwars/images/f/fd/Nute_Gunray_SWE.png" },
    { id: 34, image: "https://vignette.wikia.nocookie.net/starwars/images/5/51/ValorumPortrait-SWE.png" },
    { id: 35, image: "https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg" },
    { id: 36, image: "https://vignette.wikia.nocookie.net/starwars/images/d/d2/Jar_Jar_aotc.jpg" },
    { id: 37, image: "https://vignette.wikia.nocookie.net/starwars/images/c/ca/TarpalsHS.jpg" },
    { id: 38, image: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Bossnass.jpg" },
    { id: 39, image: "https://vignette.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png" },
    { id: 40, image: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/WattoHS.jpg" },
    { id: 41, image: "https://vignette.wikia.nocookie.net/starwars/images/1/14/Sebulba_Headshot_Closeup.png" },
    { id: 42, image: "https://vignette.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png" },
    { id: 43, image: "https://vignette.wikia.nocookie.net/starwars/images/a/ad/ShmiSkywalkerDatabank_%28Repurposed%29.jpeg" },
    { id: 44, image: "https://vignette.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png" },
    { id: 45, image: "https://vignette.wikia.nocookie.net/starwars/images/3/33/BibFortunaHS-ROTJ.png" },
    { id: 46, image: "https://vignette.wikia.nocookie.net/starwars/images/f/f9/Aayla.jpg" },
    { id: 47, image: "https://vignette.wikia.nocookie.net/starwars/images/6/68/RattsHS.jpg" },
    { id: 48, image: "https://vignette.wikia.nocookie.net/starwars/images/7/73/Dud_Bolt_Podracer_Cockpit.png" },
    { id: 49, image: "https://vignette.wikia.nocookie.net/starwars/images/5/57/GasganoHS-SWE.jpg" },
    { id: 50, image: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Cropped_Quadinaros.png" },
    { id: 51, image: "https://vignette.wikia.nocookie.net/starwars/images/5/58/Mace_ROTS.png" },
    { id: 52, image: "https://vignette.wikia.nocookie.net/starwars/images/9/9e/KiAdiMundi.jpg" },
    { id: 53, image: "https://vignette.wikia.nocookie.net/starwars/images/4/4c/Kit_Fisto_Card_Trader.png" },
    { id: 54, image: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/EethKothCardTrader.png" },
    { id: 55, image: "https://vignette.wikia.nocookie.net/starwars/images/b/ba/AdiGallia.jpg" },
    { id: 56, image: "https://vignette.wikia.nocookie.net/starwars/images/6/68/Saesee_Tiin_Card_Trader.jpg" },
    { id: 57, image: "https://vignette.wikia.nocookie.net/starwars/images/6/66/Yarael_Poof_Canon.jpeg" },
    { id: 58, image: "https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png" },
    { id: 59, image: "https://vignette.wikia.nocookie.net/starwars/images/3/37/Mas_Amedda_SWCT.png" },
    { id: 60, image: "https://vignette.wikia.nocookie.net/starwars/images/5/52/Gregar_Typho.jpg" },
    { id: 61, image: "https://vignette.wikia.nocookie.net/starwars/images/b/b6/Cord%C3%A9_-_SW_Card_Trader.png" },
    { id: 62, image: "https://vignette.wikia.nocookie.net/starwars/images/3/36/ClieggLarsHS-SWE.jpg" },
    { id: 63, image: "https://vignette.wikia.nocookie.net/starwars/images/9/93/Poggle_the_lesser_-_sw_card_trader.png" },
    { id: 64, image: "https://vignette.wikia.nocookie.net/starwars/images/2/21/LuminaraHS-SWE_%28new%29.png" },
    { id: 65, image: "https://vignette.wikia.nocookie.net/starwars/images/3/37/Barrisprofile2.jpg" },
    { id: 66, image: "https://vignette.wikia.nocookie.net/starwars/images/1/18/Dormesenate.jpg" },
    { id: 67, image: "https://vignette.wikia.nocookie.net/starwars/images/b/b8/Dooku_Headshot.jpg" },
    { id: 68, image: "https://vignette.wikia.nocookie.net/starwars/images/5/50/Bail_Organa_Mug.jpg" },
    { id: 69, image: "https://vignette.wikia.nocookie.net/starwars/images/5/56/JangoInfobox.png" },
    { id: 70, image: "https://vignette.wikia.nocookie.net/starwars/images/7/7d/Clawdite.jpg" },
    { id: 71, image: "https://vignette.wikia.nocookie.net/starwars/images/6/6c/DexterHS-SWE.jpg" },
    { id: 72, image: "https://vignette.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg" },
    { id: 73, image: "https://vignette.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg" },
    { id: 74, image: "https://vignette.wikia.nocookie.net/starwars/images/1/15/Jocasta_Nu_SWE.png" },
    { id: 75, image: "https://vignette.wikia.nocookie.net/starwars/images/6/6b/R4-P17.jpg" },
    { id: 76, image: "https://vignette.wikia.nocookie.net/starwars/images/a/a5/Wat_Tambor.png" },
    { id: 77, image: "https://static.wikia.nocookie.net/frstarwars/images/2/2e/San_Hill.png/revision/latest?cb=20200731071109" },
    { id: 78, image: "https://vignette.wikia.nocookie.net/starwars/images/2/20/Shaak_Ti_closeup-SWE.png" },
    { id: 79, image: "https://vignette.wikia.nocookie.net/starwars/images/d/de/Grievoushead.jpg" },
    { id: 80, image: "https://vignette.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png" },
    { id: 81, image: "https://vignette.wikia.nocookie.net/starwars/images/8/80/Raymus_card_trader.png" },
    { id: 82, image: "https://vignette.wikia.nocookie.net/starwars/images/e/ec/SlyMooreIsWatchingYouPoop-OfficialPix.jpg" },
    { id: 83, image: "https://vignette.wikia.nocookie.net/starwars/images/4/43/Tion_Medon.jpg" },
    { id: 84, image: "https://vignette.wikia.nocookie.net/starwars/images/a/af/Finn_TLJ_Collector%27s_Edition.png" },
    { id: 85, image: "https://vignette.wikia.nocookie.net/starwars/images/f/f8/ReyTLJEntertainmentWeeklyNovember.png" },
    { id: 86, image: "https://vignette.wikia.nocookie.net/starwars/images/7/79/Poe_Dameron_TLJ.png" },
    { id: 87, image: "https://vignette.wikia.nocookie.net/starwars/images/6/68/BB8-Fathead.png" },
    { id: 88, image: "https://vignette.wikia.nocookie.net/starwars/images/0/02/Phasma.png" }
];