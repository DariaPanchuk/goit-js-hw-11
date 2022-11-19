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
    imgApi.getImage().then(data => {
        const cards = data.data.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
        <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
            <p class="info-item">
            <b>Likes</b>
            ${likes}
            </p>
            <p class="info-item">
            <b>Views</b>
            ${views}
            </p>
            <p class="info-item">
            <b>Comments</b>
            ${comments}
            </p>
            <p class="info-item">
            <b>Downloads</b>
            ${downloads}
            </p>
        </div>
        </div>
        `
        }).join('')
        getEl('.gallery').insertAdjacentHTML('beforeend', cards)
    })
}

function onLoadMore() {
    imgApi.page += 1;
    imgApi.getImage();
}

function renderGallery() {
    
}