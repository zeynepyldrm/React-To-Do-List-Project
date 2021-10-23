import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const modalStyle = {
    modal: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#000000",
        opacity: "1"
    },

    displayblock: {
        display: 'block'
    },

    displaynone: {
        display: 'none'
    },
    modalMain: {
        position: 'fixed',
        background: 'white',
        width: '80%',
        height: 'auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
}



const UpdateModal = ({ handleClose, show, children, date, content, title, id }) => {

    var [date, setDate] = useState(date);
    var [content, setContent] = useState(content);
    var [title, setTitle] = useState(title);

    var notes={
        date:date,
        content:content,
        title:title
    }

    const saveUpdateNote =() => {
        const baseURL = "http://localhost:3333/notes"
        axios.put(`${baseURL}/${id}`,notes)
        alert("updated notes")
        notes=null
        window.location.reload();


    }


    let showHideClassName = show ? 'displayblock' : 'displaynone';
    if (showHideClassName == 'displayblock') showHideClassName = modalStyle.displayblock
    else if (showHideClassName == 'displaynone') showHideClassName = modalStyle.displaynone


    // <div className={`${Object.keys(showHideClassName)[0]}` + `${Object.values(showHideClassName)[0]}`}>
    console.log("modala geldi" + showHideClassName);
    let concatModalCss = Object.assign({}, modalStyle.modal, showHideClassName);
    return (
        <div style={concatModalCss}>
            <section style={modalStyle.modalMain}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Title:</label>
                                <input type="text" className="form-control" id="recipient-name"
                                    value={notes.title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Date:</label>
                                <input type="text" className="form-control" id="recipient-name"
                                    value={notes.date} onChange={e => setDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="message-text" className="col-form-label">Content:</label>
                                <textarea className="form-control" id="message-text"
                                    value={notes.content}
                                    onChange={e => setContent(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                    <button type="button" class="btn btn-primary" onClick={saveUpdateNote}>Save</button>
                </div>
            </section>
        </div>
    )


}
export default UpdateModal;