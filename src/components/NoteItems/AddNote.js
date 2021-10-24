import axios from "axios";
import  {Modal,notes } from "./Modal";

const AddNote = ({ handleClose, id,show}) => {


    const saveNewNote =() => {
        const baseURL = "http://localhost:3333/notes"
        axios.post(`${baseURL}/`,notes)
        alert("add note")
        window.location.reload();
    }
    return(
        <Modal 
        show={show}
        handleClose={handleClose}
        date={""}
        content={""}
        title={""}
        id={id}
        saveNote={saveNewNote}
        />
    )



}
export default AddNote;