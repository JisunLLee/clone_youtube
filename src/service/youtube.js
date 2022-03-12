import axios from 'axios';
class YouTube {
    constructor(){
        this.youtube = axios.create({
            baseURL:'https://www.googleapis.com/youtube/v3',
            params: {
                key: process.env.REACT_APP_YOUTUBE_API_KEY
            }
        })
        this.getRequestOptions = {
            method: 'get',
            dataType: 'json',
            redirect: 'follow'
        }

    }
    

    async mostPopular() {
        const params = {
            part: 'snippet',
            chart: 'mostPopular',
            regionCode: 'KR',
            maxResults: 25,
          }
        const response = await this.youtube.get('videos', {params});
        return response.data;
    }

    async search(query) {
        const params = {    
            maxResults: 25,
            type: 'video',
            part: 'snippet',
            q: query,
          }
          const response = await this.youtube.get('search', {params});
          console.log("search", response);
          return response.data;
    }

    async detail(id) {
        const params = {
            part: 'statistics',
            id: id,
          }
          const response = await this.youtube.get('videos', {params});
          console.log("detail", response);
          return response.data;
    }

    async comment(id) {
        const params = {
            part: 'snippet',
            videoId: id,
          }
          const response = await this.youtube.get('commentThreads', {params});
          console.log("comment", response);
          return response.data;
    }


    async makeParams(params) {
        if(!params) return;
        let url = `/${params.kind}?&part=snippet` ;
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