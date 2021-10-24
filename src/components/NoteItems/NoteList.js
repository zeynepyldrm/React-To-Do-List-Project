import React, { Component } from 'react'
import NoteCard from './NoteCard'
import AddNote from './AddNote'
import { notes } from './Modal';
class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = { notes: [], addNoteShow: false };
    }


    getNotes = () => {
        fetch('http://localhost:3333/notes')
            .then(r => r.json())
            .then(data => this.setState({ notes: data }))
    }

    componentDidMount() {
        this.getNotes()
    }

    showModal = () => {
        this.setState({ addNoteShow: true })
    }
    hideModal = () => {
        this.setState({ addNoteShow: false })
    }

    render() {
        return (
            <div className="container">
                <div class="row">
                    <div class="col-md-12">
                        <AddNote
                            id={notes.lenght}
                            show={this.state.addNoteShow}
                            handleClose={this.hideModal} >
                        </AddNote>
                        <button type="button" class="btn btn-warning pull-right" style={{ marginBottom: "10px", marginRight: "10px" }}
                            onClick={this.showModal}
                        >
                            <i class="fa fa-plus" aria-hidden="true"></i>  New Note
                        </button>
                    </div>
                </div>
                {
                    this.state.notes.map(note => (
                        <NoteCard title={note.title} date={note.date} content={note.content} key={note.id} id={note.id} />
                    ))
                }
            </div>

        )
    }
}
export default NoteList;