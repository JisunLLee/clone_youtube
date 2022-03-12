
class YouTube {
    constructor(httpClient){
        this.youtube = httpClient;
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
}

export default YouTube;