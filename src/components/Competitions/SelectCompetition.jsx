import React from "react";
import './SelectCompetition.css'
import { useSelector } from "react-redux";
import { getCompetitions } from "../../redux/competitionRedux";
import { NavLink } from "react-router-dom";

const SelectCompetition = (props) => {

    const competitions = useSelector(getCompetitions)

    return(
        <div className="modal">
            <div className="submodal">
                {competitions.map(c => <NavLink to={`/${c.id}`}><div>{c.name}</div></NavLink>)}
                <button onClick={() => {props.setSelect(false)}}>Cansel</button>
            </div>
        </div>
    )
}

export default SelectCompetition