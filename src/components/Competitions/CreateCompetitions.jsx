import React, { useState } from "react";
import "./CreateCompetitions.css"
import { useDispatch } from "react-redux";
import { addCompetitions } from "../../redux/competitionRedux";

const CreateCompetitions = (props) => {

    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const onSave = () => {
        props.setCreate(false)
        dispatch(addCompetitions({
            name: name
        }))
        setName("")
    }

    const onCansel = () => {
        props.setCreate(false)
    }

    const onChangeName = (e) => {
        setName(e.target.value)
        e.preventDefault();
    }

    return(
        <div className="modal">
            <div className="submodal">
            <form>
                <input value={name} onChange={onChangeName}></input>
                <button onClick={onSave}>Save</button>
                <button onClick={onCansel}>Cansel</button>
            </form>
            </div>
        </div>
    )
}

export default CreateCompetitions;