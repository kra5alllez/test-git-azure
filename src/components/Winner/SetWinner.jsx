import React from "react";
import '../../App.css'
import { useSelector } from 'react-redux'
import { setUser } from '../../redux/userReduser'

const SetWinner = (props) => {

    const users = useSelector(setUser);

    const arrayMin = (arr) => {
        return arr.reduce((i, ac) => {
          return ( parseInt(i.time, 10) < parseInt(ac.time, 10) ? i : ac );
        });
      }

    const findWinner = () => { 
        const winner1 = users.filter(u => u.competitionId === props.id)
        const winner2 = arrayMin(winner1)
        alert(winner2.firstName)
    }

    return(
        <div className='he'>
            <div>
                <button onClick={findWinner}>Find winner</button>
            </div>
        </div>
    )
} 

export default SetWinner;