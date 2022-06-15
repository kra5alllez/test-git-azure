import React from "react";
import '../../App.css'
import { useSelector } from 'react-redux'
import { getCompetitions } from "../../redux/competitionRedux";

const Competitions = (props) => {

const competitions = useSelector(getCompetitions)

    const name = competitions.find(i => i.id === props.id)
    const onChangeState = () => {
        props.setCreate(true)
    }

    return(
        <div className="m2">
            <button onClick={onChangeState}>Create</button>

            <div>{`Your selected : ${name} competitions`}</div>

            <button onClick={() => {props.setSelect(true)}} >Select competitions</button>
        </div>
    )
}

export default Competitions