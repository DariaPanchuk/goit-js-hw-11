import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import { imgApiService } from "./js/getImg";
import { renderImgInfo } from "./js/renderHTML";

let getEl = selector => document.querySelector(selector);

getEl('.search-form').addEventListener('submit', onSearch);

getEl('.load-more').addEventListener('click', onLoadMore);

const imgApi = new imgApiService();
console.log(imgApi);

function onSearch(e) {
    e.preventDefault();
    imgApi.query = e.currentTarget.elements.searchQuery.value;
    imgApi.resetPage();
    imgApi.getImage();
    renderGallery();
}

function onLoadMore() {
    imgApi.page += 1;
    imgApi.getImage();
}

function renderGallery(data) {
    const promise = imgApi.getImage();
    promise.then(data => data.hits);
    .then(data.hits => data.hits.array);

    // getEl('.gallery').innerHTML = renderImgInfo(data.hits);
}