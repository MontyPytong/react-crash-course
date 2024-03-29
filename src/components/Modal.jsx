/* eslint-disable react/prop-types */
import classes from './Modal.module.css';

function Modal({ children }) {
    return (
        <>
            <div className={classes.backdrop}>
                <dialog open className={classes.modal}>
                    {children}
                </dialog>
            </div>
        </>
    );
}

export default Modal;