import React, { Component } from 'react'

import axios from "axios";
import { Link } from 'react-router-dom';
class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedNoteId: ""
        }

    }
    DelNote = (id) => {

        console.log("function çalıştı");
        const baseURL = "http://localhost:3333/notes"
        let note = null
        axios.get(`${baseURL}/${id}`)
            .then((response) => { 
                note = response.data 
                if (note != null) {
                    axios.delete(`${baseURL}/${id}`)
                        .then(() => {
                            alert("Note deleted!");
                            window.location.reload();
                            note = null
                        }
                        )
                }
                else{
                    console.log("null value")
                }
            })
        
        

    }

    render() {
        return (

            <div className="card" style={{ marginBottom: "20px" }}>{ this.props.key}
                <div className="card-header">{this.props.date}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                    <a href="#" className="btn btn-primary">Edit</a>
                    <button className="btn btn-danger" type="button" onClick={() => {

                        this.DelNote(this.props.id)
                    }}><i className="fa fa-trash"></i></button>

                </div>
            </div>

        )
    }

}
export default NoteCard;