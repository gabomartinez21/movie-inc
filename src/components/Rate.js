import React, {useState, useEffect} from 'react';
import API from '../config/API';
import Auth from '../config/Auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Rate = ({id}) => {
    const [newRate, setNewRate ] = useState(0)
    const [user, setUser] = useState('')
    const userRate = (e) => {
        e.preventDefault();
        Auth().then(resp => {
            setUser(resp.guest_session_id)
            subirRate()
        })
    }
    const subirRate = ()=>{
        const data = {value:newRate}
        API('rating',id,data,user).then(res=>{
            if(res.success){
                for(let i=2; i<=newRate; i+=2){
                    document.querySelectorAll('.rate li').forEach(lista => {
                        
                        if(lista.getAttribute('id') == i){
                            lista.classList.add('rate-color')
                        }
                    })
                }

            }
        })
    }
    const refreshClass = ()=>{
        document.querySelectorAll('.rate li').forEach(lista => {
                            
                lista.classList.remove('rate-color')
            
        })
    }

    useEffect(()=>{
        refreshClass()
    },[id])
    
    const botones = [2,4,6,8,10]

    return (
            <form onSubmit={userRate}>
                <p>Vote</p>
                <ul className="rate">
                        
                        
                    {botones.map(valor => (
                        <li key={valor} id={valor}>
                            <button type="submit" onClick={()=>setNewRate(valor)}>
                                <FontAwesomeIcon icon={faStar}/>

                            </button>
                        </li>

                    ))}
                </ul>

            </form>
        
    );
}

export default Rate;