import { useNavigate } from "react-router-dom";
import styles from "./css/Modal.module.css";

function Modal(props: any) {
	const navigate = useNavigate();

	function closeHandler() {
		navigate("..");
	}

	return (
		<>
			<div className={styles.backdrop} onClick={closeHandler} />
			<dialog open className={styles.modal}>
				{props.children}
			</dialog>
		</>
	);
}

export default Modal;
