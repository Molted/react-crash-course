import { useState } from "react";
import styles from "../components/css/NewPost.module.css";
import { IPost } from "../interfaces/Post.interface";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }: any) {
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
	}

	return (
		<Modal>
			<form className={styles.form} onSubmit={submitHandler}>
				<p>
					<label htmlFor="body">Text</label>
					{
						<textarea
							id="body"
							required
							rows={3}
							onChange={bodyChangeHandler}
						/>
					}
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input
						type="text"
						id="name"
						required
						onChange={authorChangeHandler}
					/>
				</p>
				<p className={styles.actions}>
					<Link to=".." type="button">
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</form>
		</Modal>
	);
}

export default NewPost;