/* eslint-disable */

import UpdateNote from './UpdateNote'
import React, { Component } from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class NoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        },
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.notify = this.notify.bind(this);

    }

    notify = () => {

        toast.configure({
            hideProgressBar: true,
           
        })
        toast.warn("Notes Deleted", setTimeout(() => window.location.reload(), 1000))



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

                    this.notify()

                    note = null;

                }
                else {
                    console.log("null value")
                }
            })
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

            <div className="card" style={{ marginBottom: "20px", position: "static" }}>{this.props.key}
                <div className="card-header" style={{ backgroundColor: "#dfdce6" }}>{this.props.date}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.content}</p>
                    <UpdateNote
                        show={this.state.show}
                        handleClose={this.hideModal}
                        date={this.props.date}
                        content={this.props.content}
                        title={this.props.title}
                        id={this.props.id}
                    />
                    <button type="button" className="btn btn-infobtn btn-success" onClick={this.showModal}>
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