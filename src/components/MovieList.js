import React, { useState, useEffect } from 'react';
import API from '../config/API';
import Movie from './Movie';

const MovieList = () => {

    const [listaMovie, setListaMovie] = useState([])
    
    const getData = () =>{
        API('discover').then(data => {
            const newPelis = []
            data.results.forEach(res => {
                newPelis.push({
                        id:res.id,
                        title:res.title,
                        vote_average:res.vote_average,
                        date:res.release_date,
                        image:res.poster_path
                    })
                
            })
            setListaMovie(newPelis)
        })
    }

    useEffect(()=>{
        getData()
    }, [])

    return (  
        <div className="row">
            
            {listaMovie.map(peli => {
                return(
                    <div className="col-3" key={peli.id}>
                        <Movie
                            info={peli}
                        />
                    </div>

                )

            })}
            

        </div>
    );
}

export default MovieList;