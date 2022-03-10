import axios from 'axios';
axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
class YouTube {
    constructor(){

        this.getRequestOptions = {
            method: 'get',
            dataType: 'json',
            redirect: 'follow'
        }

    }
    

    mostPopular() {
        const params = {
            kind: 'videos',
            chart: 'mostPopular',
            regionCode: 'KR',
            maxResults: 25,
          }
        // return this.makeParams(params);
        const url = this.makeParams(params);
        return this.useAxios({url, ...this.getRequestOptions})
    }

    search(query) {
        const params = {    
            kind: 'search',
            maxResults: 25,
            type: 'video',
            q: query,
          }
        const url = this.makeParams(params);
        return this.useAxios({url, ...this.getRequestOptions})
    }

    detail(id) {
        const params = {
            kind: 'videos',
            part: 'statistics',
            id: id,
          }
        const url = this.makeParams(params);
        return this.useAxios({url, ...this.getRequestOptions})
    }

    comment(id) {
        const params = {
            kind: 'commentThreads',
            videoId: id,
          }
        const url = this.makeParams(params);
        return this.useAxios({url, ...this.getRequestOptions})
    }


    makeParams(params) {
        if(!params) return;
        let url = `/${params.kind}?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet` ;
        for (var key in params) {
            if(key !== 'kind') {
                url = `${url}&${key}=${params[key]}`
            }
        }
        console.log('url', url);
        return  url;
    }

    useAxios({ url, method, body = null, headers = null }) {
        if(url){
            return axios[method](url, JSON.parse(headers), JSON.parse(body))
        }
    }

}

export default YouTube;