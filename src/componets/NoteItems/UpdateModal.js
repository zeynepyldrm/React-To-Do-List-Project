import "bootstrap/dist/css/bootstrap.min.css";

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


const UpdateModal = ({ handleClose, show, children ,date,content,title}) => {

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
                                <input type="text" className="form-control" id="recipient-name" value={title}></input>
                            </div>
                            <div className="form-group">
                                <label for="recipient-name" className="col-form-label">Date:</label>
                                <input type="text" className="form-control" id="recipient-name" value={date} />
                            </div>
                            <div className="form-group">
                                <label for="message-text" className="col-form-label">Content:</label>
                                <textarea className="form-control" id="message-text" value={content}></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </section>
        </div>
    )


}
export default UpdateModal;