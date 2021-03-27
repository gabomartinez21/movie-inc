import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import API from '../config/API';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar} from '@fortawesome/free-solid-svg-icons';
import Similars from '../components/Similares';

export default function Detail() {
    const { id } = useParams();
    const [info, setInfo] = useState({
        title:'',
        rating:'',
        time:'',
        date:'',
        description:'',
        image:'',
        genres:[]
    });
    const [cast, setCast]=useState([])

    const getData = () => {
        API('movie',id).then(res => {
            setInfo({
                title:res.title,
                rating:res.vote_average,
                time:res.runtime,
                date:res.release_date,
                description: res.overview,
                image:res.poster_path,
                genres:res.genres
            })
        })
    }


    const getCast = ()=>{
        API('credits', id).then(res=>{
            setCast(res.cast)
        
        })
    }

    useEffect(()=>{
        getData()
    },[id])

    useEffect(()=>{
        getCast()
        console.log(cast);
    }, [id])
    
    const vote = (rango)=>{
        console.log(rango)
    }
    return(
        <div className="container">
            <div className="details">
                <div className="row">
                    <div className="col-6">
                        <img src={`https://image.tmdb.org/t/p/original${info.image}`} alt=""/>
                    </div>
                    <div className="col-6">
                        <h2>{info.title}</h2>
                        <div className="rate-info">
                            <p><FontAwesomeIcon icon={faStar} /> {info.rating} rate</p>
                            
                            <ul className="rate">
                                <li>Vote</li>
                                <li><button onClick={vote} value="2"><FontAwesomeIcon icon={faStar} onClick={vote(2)}/></button></li>
                                <li><button onClick={vote} value="2"><FontAwesomeIcon icon={faStar} onClick={vote(4)}/></button></li>
                                <li><button onClick={vote} value="2"><FontAwesomeIcon icon={faStar} onClick={vote(6)}/></button></li>
                                <li><button onClick={vote} value="2"><FontAwesomeIcon icon={faStar} onClick={vote(8)}/></button></li>
                                <li><button onClick={vote} value="2"><FontAwesomeIcon icon={faStar} onClick={vote(10)}/></button></li>
                            </ul>
                        </div>
                        <div className="extra-info">
                            <p><FontAwesomeIcon icon={faCalendarAlt} /> {info.date}</p>
                            {/* <button className="btn">Favorites</button> */}

                        </div>
                        <ul className="genres">
                            <li>Géneros</li>
                            {info.genres.map(gen=>(
                                <li key={gen.id}>{gen.name}</li>
                            ))}
                        </ul>
                        <p>{info.description}</p>
                        
                        <h3>Cast</h3>
                        <ul className="cast">
                            {cast.map(person =>(
                                <li key={person.id}>{person.name} as <span>{person.character}</span></li>
                            ))}
                        </ul>

                        
                    </div>
                </div>

            </div>
            <Similars id={id}/>
        </div>
    );
}
