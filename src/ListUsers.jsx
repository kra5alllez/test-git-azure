import React from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { setUser } from './redux/userReduser'
import { removeUser} from './redux/userReduser'
import { useDispatch } from 'react-redux'

export const ListUser = (props) => {
    
    const dispatch = useDispatch()

    const users = useSelector(setUser)

    const onDelete = (u) => {
        dispatch(removeUser(u))
    }

    const chngeTheTime = (seconds) => {
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        s = s < 10 ? '0' + s : s
        return(
            <div>
                {m+':'+s}
            </div>
        )
    }
    
    const listUsers = () => {
        return(
            <div className='box'>
        {users.filter(u => u.competitionId === props.id).map(e => {
            return(
                <div className='card'>
                <div>{e.id}</div>
                    <div>{e.firstName}</div>
                    <div>{e.lastName}</div>
                    {chngeTheTime(e.time)}
                    <button onClick={ () => {onDelete(e)}}>Delete</button>
                </div>)
                })}
        </div>
        )
    }

    return (
        <div className='pa'>
                        {props.id === undefined ? <div>Select Competition</div> : listUsers() }
        </div>
    )
}