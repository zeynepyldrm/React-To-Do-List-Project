import React, { Component } from 'react'
import NoteCard from './NoteCard'
class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
    }


    getNotes = () => {
        fetch('http://localhost:3333/notes')
            .then(r => r.json())
            .then(data => this.setState({ notes: data }))
    }

    componentDidMount() {
        this.getNotes()
    }

    render() {
        return (
            <div className="container">{
                this.state.notes.map(note => (
                <NoteCard title={note.title} date={note.date} content={note.content} key={note.id} id={note.id} />
            ))
            }
            </div>

        )
    }
}
export default NoteList;