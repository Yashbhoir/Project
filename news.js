export default class FetchWrapper{
    constructor(url){
            this.url = url;
    }

    async getData (){
        
        const resolve = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=b36a1807722f446d942a366abe598fd4")
        const data = await resolve.json() 
        return data.articles

    }
    

 
}

