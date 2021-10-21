import React, { Component } from 'react'
import NoteCard from './NoteCard'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Table } from 'reactstrap';
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
                <NoteCard title={note.title} date={note.date} content={note.content} key={note.id} />
            ))
            }
            </div>

        )
    }
}
export default NoteList;