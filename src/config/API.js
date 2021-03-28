const api_key = 'd1ccf5c5be3ae317420330980f230032';

export default async function API(type, id, data, auth){
    
    let url = `https://api.themoviedb.org/3/`;
    if(type === 'rating'){
        url = `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${api_key}&guest_session_id=${auth}`;
        let req = await fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(data)
        });
        const poll = await req.json();

        return poll;
    }else if(type === 'discover'){
        url = url + `${type}/movie?api_key=${api_key}`;
    }else if(type === 'similar' || type === 'credits'){
        url = url + `movie/${id}/${type}?api_key=${api_key}`
    }else{
        url = url + `${type}/${id}?api_key=${api_key}`
    }


    let request = await fetch(url);
    
    const res = await request.json();

    return res;

}

