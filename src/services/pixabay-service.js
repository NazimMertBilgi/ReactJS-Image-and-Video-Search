import * as axios from 'axios';
import { pixabayConstants } from '../constants/pixabay.constants';

export default class PixabayService {

    getSearchResult = async (term, type, page) => {
        page = page === undefined || page === null || page === '' ? 1 : page;
        type = type === 'videos' ? type + '/' : '';
        const url = pixabayConstants.api_url
            + '/' + type
            + '/?key=' + pixabayConstants.api_key
            + '&q=' + term
            + '&per_page=' + pixabayConstants.item_count_per_page
            + '&page=' + page;

        const response = await axios.get(url);

        return response.data
    };

}