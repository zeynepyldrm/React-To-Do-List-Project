/* eslint-disable */

import UpdateModal from '../UpdateModal'
import React, { Component } from 'react'

import axios from "axios";
import { Link } from 'react-router-dom';
class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        },
            this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

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
                else {
                    console.log("null value")
                }
            })



    }

    UpdateNotes = () => {
        return (
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => this.setState({ show: false })}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }

    showModal = () => {
        this.setState({ show: true })
    }
    hideModal = () => {
        this.setState({ show: false })
    }



    render() {
        //const sendUpdateNote;
        return (

            <div className="card" style={{ marginBottom: "20px" }}>{this.props.key}
                <div className="card-header">{this.props.date}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                    <UpdateModal
                        show={this.state.show}
                        handleClose={this.hideModal}
                        date={this.props.date}
                        content={this.props.content}
                        title={this.props.title}
                        id={this.props.id}
                    />
                    <button type="button" className="btn btn-info btn-md" onClick={this.showModal}>
                        <i class="fa fa-edit"></i>
                    </button>


                    <button className="btn btn-danger" type="button" onClick={() => {
                        this.DelNote(this.props.id)
                    }}><i className="fa fa-trash"></i></button>

                </div>
            </div>

        )
    }

}
export default NoteCard;