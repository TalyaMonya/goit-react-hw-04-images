import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '39194024-d2c9e16ae0d1fd1b9e47dba55';

export const perPage = 12;

export const getImages = async (query, page) => {
    const response = await axios.get(`?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
    return response.data;
};

export const normalizedImages = imagesArray =>
    imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
        return { id, tags, webformatURL, largeImageURL };
    });