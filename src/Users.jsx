import './App.css'
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux'
import { addUser} from './redux/userReduser'

const Users = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [time, setTime] = useState('')

    const [firstNameDirty, setFirstDirty] = useState(false)
    const [lastNameDirty, setLastNameDirty] = useState(false)
    const [timeDirty, setTimeDirty] = useState(false)

    const [firstNameError, setFirstError] = useState('null')
    const [lastNameError, setLastNameError] = useState('null')
    const [timeError, setTimeError] = useState('null')

    const [velidSave, setVelidSave] = useState(false)

    useEffect(() => {
        if(firstNameError || lastNameError || timeError){
            setVelidSave(false)
        }
        else{
            setVelidSave(true)
        }
    }, [firstNameError , lastNameError , timeError])

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === 'lastName')
        {
            validation(e, setLastNameError, setLastNameDirty)
            setLastName(e.target.value)
        }
        if(e.target.name === 'name')
        {
            validation(e, setFirstError, setFirstDirty)
            setFirstName(e.target.value)
        }
        if(e.target.name === 'time')
        {
            const re = /^[0-9]+$/;
            if(re.test(String(e.target.value).toLowerCase()) && e.target.value.length > 0){
                setTimeError('')
            }
            else if(e.target.value.length > 0){
                setTimeError('not valid time')
                setTimeDirty(true)
            }
            else{
                setTimeError('null')
                setTimeDirty(false)
            }
            setTime(e.target.value)
        }
    }

    const validation = (e, Error, Dirty) => {
        const re = /^[A-Za-z ]+$/;
        if(re.test(String(e.target.value).toLowerCase()) && e.target.value.length > 1 && e.target.value.length < 15){
            Error('')
        }
        else if(e.target.value.length > 0){
            Error('not valid name')
            Dirty(true)
        }
        else{
            Error('null')
            Dirty(false)
        }
    }

    const blureHandle = (e) => {
        if(e.target.name === 'lastName') setLastNameDirty(true)
        if(e.target.name === 'time') setTimeDirty(true)
        if(e.target.name === 'name') setFirstDirty(true)
    }

    const handleSubmit = (e) => {


        dispatch(addUser({
            firstName: firstName, 
            lastName: lastName,
            time: time,
            competitionId: props.competitionId
        }))
        e.preventDefault();
        setLastName('')
        setTime('')
        setFirstName('')
        setTimeError('null')
        setFirstError('null')
        setLastNameError('null')
        setFirstDirty(false)
        setLastNameDirty(false)
        setTimeDirty(false)
    }
    
    return (
        <div className='m1'>
            <div>Add participent</div>
            <form onSubmit={handleSubmit}>
            <div>
                {(firstNameDirty && firstNameError) && <div style={{color: 'red'}}>{firstNameError}</div> } 
                FirstName    
                <input onBlur={blureHandle} type='text' name="name" value={firstName} onChange={handleChange}/>
            </div>
            <div>
            {(lastNameDirty && lastNameError) && <div style={{color: 'red'}}>{lastNameError}</div> } 
                LastName    
                <input onBlur={blureHandle} type='text' name='lastName' value={lastName} onChange={handleChange}/>
            </div>
            <div>
            {(timeDirty && timeError) && <div style={{color: 'red'}}>{timeError}</div> } 
                Time
                <input onBlur={blureHandle}  type='text' name='time' value={time} placeholder='in seconds' onChange={handleChange}/>
            </div>
              <input disabled={!velidSave} type='submit' value='Send'/>
            </form>
        </div>
      )  
  }

  export default Users;