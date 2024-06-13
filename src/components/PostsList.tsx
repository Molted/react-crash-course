import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./css/PostsList.module.css";
import Modal from "./Modal";

function PostsList() {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	function changeBodyHandler(event: any) {
		setEnteredBody(event.target.value);
	}

	function changeAuthorHandler(event: any) {
		setEnteredAuthor(event.target.value);
	}

	return (
		<>
			<Modal>
				<NewPost
					onBodyChange={changeBodyHandler}
					onAuthorChange={changeAuthorHandler}
				/>
			</Modal>
			<ul className={styles.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Testing Again" body="Check out the full course!" />
			</ul>
		</>
	);
}

export default PostsList;
