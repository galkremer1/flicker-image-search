export function getData(searchTerm) {
	const promiseData = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&format=json&nojsoncallback=1&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&content_type=1&is_getty=1&text='+searchTerm)
		.then(response => response.text())
        .then((data) => {
            return JSON.parse(data);
        });
    return promiseData;
}

export function parseImageData(data) {
// This function will build a url from the fetched data
// Example: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return data.map((photoData)=>{
        const {farm, server, id, secret, title} = photoData;
        return {
            url: 'https://farm'+farm +'.staticflickr.com/'+server+'/'+id+'_'+secret+'.jpg',
            title,
            id: ''+secret+id
        };
    })
}
