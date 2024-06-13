import { useState } from "react";
import styles from "./css/NewPost.module.css";
import { IPost } from "../interfaces/Post.interface";

function NewPost({ onCancel, onAddPost }: any) {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function bodyChangeHandler(event: any) {
		setEnteredBody(event.target.value);
	}

	function authorChangeHandler(event: any) {
		setEnteredAuthor(event.target.value);
	}

	function submitHandler(event: any) {
		event.preventDefault();
		const postData: IPost = {
			body: enteredBody,
			author: enteredAuthor,
		};
		onAddPost(postData);
		onCancel();
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<p>
				<label htmlFor="body">Text</label>
				{<textarea id="body" required rows={3} onChange={bodyChangeHandler} />}
			</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={authorChangeHandler} />
			</p>
			<p className={styles.actions}>
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button>Submit</button>
			</p>
		</form>
	);
}

export default NewPost;
