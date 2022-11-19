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
        if (data.totalHits > 0) {
            getEl('.gallery').insertAdjacentHTML('beforeend', renderImgInfo(data.hits));
            // lightbox.refresh();
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        } else {
            Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.');
        }
    }).catch(error => {
        console.log(error);
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    })
}


function onLoadMore() {
    imgApi.page += 1;
    imgApi.getImage();
}