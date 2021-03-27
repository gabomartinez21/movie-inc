import React, {useState, useEffect} from 'react';
import API from '../config/API';
import Movie from './Movie'

const Similars = ({id}) => {
    

    const [similars, setSimilars] = useState([])

    const getSimilars = () => {
        API('similar',id).then(res=>{
            const newPelis = []
            res.results.map(movie => {
                newPelis.push({
                        id:movie.id,
                        title:movie.title,
                        vote_average:movie.vote_average,
                        date:movie.release_date,
                        image:movie.poster_path
                    })
                
            })
            setSimilars(newPelis)
        })
    }

    useEffect(()=>{
        getSimilars()
    }, [id])

    return ( 
        <>
            <h2>Similar movies</h2>

            <div className="row">
                
                {similars.map(peli => {
                    return(
                        <div className="col-3" key={peli.id}>
                            <Movie
                                info={peli}
                            />
                        </div>

                    )

                })}
                

            </div>
        </>
    );
}

export default Similars;