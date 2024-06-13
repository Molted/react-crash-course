import styles from "./css/Modal.module.css";

function Modal(props: any) {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onClose} />
			<dialog open className={styles.modal}>
				{props.children}
			</dialog>
		</>
	);
}

export default Modal;
