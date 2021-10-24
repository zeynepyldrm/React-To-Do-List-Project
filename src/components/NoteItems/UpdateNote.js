import axios from "axios";
import { Modal, notes } from "./Modal";

const UpdateModal = ({ handleClose, show, children, date, content, title, id }) => {


    const saveUpdateNote = () => {
        const baseURL = "http://localhost:3333/notes"
        axios.put(`${baseURL}/${id}`, notes)

    }


    return (
        <Modal
            show={show}
            handleClose={handleClose}
            date={date}
            content={content}
            title={title}
            id={id}
            saveNote={saveUpdateNote}
            titleModal="Update Note"
        />
    )

}
export default UpdateModal;