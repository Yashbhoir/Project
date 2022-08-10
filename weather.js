export default class WeatherWrap {
			constructor(url){
				this.url = url;
			}

			get(){
				return fetch(this.url).then(resolve=>resolve.json()).then(data=>data)
			}
}

