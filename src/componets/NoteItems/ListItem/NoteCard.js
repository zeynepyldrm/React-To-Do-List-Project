import React, { Component } from 'react'

class NoteCard extends Component {

    render(){
    return (

        <div class="card" style={{marginBottom:"20px"}}>{this.props.key}
            <div class="card-header">{this.props.date}
            </div>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">{this.props.content}</p>
                <a href="#" class="btn btn-primary">Clicked</a>
            </div>
        </div>

    )
}

}
export default NoteCard;