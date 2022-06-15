import React, { useState } from 'react'
import '../App.css'
import Users from '../Users'
import {ListUser} from '../ListUsers'
import Competitions from './Competitions/Competitions';
import CreateCompetitions from './Competitions/CreateCompetitions';
import SelectCompetition from './Competitions/SelectCompetition';
import { useParams } from 'react-router-dom'
import SetWinner from './Winner/SetWinner';

function Site() {

  const [create, setCreate] = useState(false)
  const [select, setSelect] = useState(false)
  const params = useParams()
  const id = params.id

  return (
    
    <div className='hui'>
        <SetWinner id={id} />
      <Users competitionId={id} />
      <Competitions id={id} setCreate={setCreate} setSelect={setSelect} />
      {create ? <CreateCompetitions setCreate={setCreate}/> : <></>}
      {select ? <SelectCompetition setSelect={setSelect}/> : <></>}
        <ListUser id={id} />
    </div>
  );
}

export default Site;
