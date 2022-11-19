import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import { getImg } from "./js/getImg";
import { renderImgInfo } from "./js/renderHTML";

let getEl = selector => document.querySelector(selector);

async function getImg(search) {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: "31440578-d40e7eed5873a4f1028e16656",
                q: search,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 40,
                page: 1,
            }
        })
        return await responce;
    } catch (error) {
        console.log(error);
    }
}

console.log(await getImg(god));
