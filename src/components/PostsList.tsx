import Post from "./Post";
import styles from "./css/PostsList.module.css";
import { IPost } from "../interfaces/Post.interface";
import { useLoaderData } from "react-router-dom";

function PostsList() {
	const posts = useLoaderData() as IPost[];

	return (
		<>
			{posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post
							key={post.id}
							id={post.id}
							author={post.author}
							body={post.body}
						/>
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
}

export default PostsList;
