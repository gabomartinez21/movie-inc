const api_key = 'd1ccf5c5be3ae317420330980f230032';

export default async function API(type, id){
    
    let url = `https://api.themoviedb.org/3/`;
    if(type === 'discover'){
        url = url + `${type}/movie?api_key=${api_key}`
    }else if(type === 'similar' || type === 'credits'){
        
        url = url + `movie/${id}/${type}?api_key=${api_key}`

    }else{
        url = url + `${type}/${id}?api_key=${api_key}`

    }

    const request = await fetch(url);
    const res = await request.json();

    return res

}