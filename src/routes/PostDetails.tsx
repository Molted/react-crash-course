import { useLoaderData, Link } from "react-router-dom";

import Modal from "../components/Modal";
import styles from "../components/css/PostDetails.module.css";
import { IPost } from "../interfaces/Post.interface";

function PostDetails() {
	const post = useLoaderData() as IPost;

	if (!post) {
		return (
			<Modal>
				<main className={styles.details}>
					<h1>Could not find post</h1>
					<p>Unfortunately, the requested post could not be found.</p>
					<p>
						<Link to=".." className={styles.btn}>
							Okay
						</Link>
					</p>
				</main>
			</Modal>
		);
	}
	return (
		<Modal>
			<main className={styles.details}>
				<p className={styles.author}>{post.author}</p>
				<p className={styles.text}>{post.body}</p>
			</main>
		</Modal>
	);
}

export default PostDetails;

export async function loader({ params }: any) {
	const response = await fetch(`http://localhost:8080/posts/${params.id}`);
	const resData = await response.json();
	return resData.post;
}
