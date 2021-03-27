import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faStar} from '@fortawesome/free-solid-svg-icons'

const Movie = ({info}) => {

    return (
        <>
            <div className="card">
                <Link to={`/detail/${info.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original${info.image}`} className="img-card" alt=""/>
                    <div className="card-body">
                        <h3>{info.title}</h3>
                        <p className="info-peli"><span><FontAwesomeIcon icon={faCalendarAlt} /> {info.date}</span><span><FontAwesomeIcon icon={faStar} /> {info.vote_average}</span></p>

                    </div>
                </Link>

            </div>
        </>
    );
}

export default Movie;