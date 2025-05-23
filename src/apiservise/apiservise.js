import axios from 'axios';

const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    params: {
        maxResults: '50',
    },
    headers: {
        'x-rapidapi-key': '9420d763fcmsh4806e4cc4bb58c7p18ab48jsn4da796b8db02',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    }
};

export const ApiServise = {
    async fetching(url) {
        const response = await axios.get(`${base_url}/${url}`, options);
        return response.data;
    }
}
