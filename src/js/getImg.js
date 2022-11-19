import axios from "axios";

class imgApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async getImage() {
    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: "31440578-d40e7eed5873a4f1028e16656",
                q: this.searchQuery,
                image_type: "photo",
                orientation: "horizontal",
                safesearch: true,
                per_page: 40,
                page: this.page,
            }
        })
        // console.log("-> response", response);
        return await response;
    } catch (error) {
        console.log(error);
    }
    }
    
    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    resetPage() {
        this.page = 1;
    }
}



export { imgApiService };