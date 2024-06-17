import { Link } from "react-router-dom";
import { IPost } from "../interfaces/Post.interface";
import styles from "./css/Post.module.css";

function Post({ id, author, body }: IPost) {
	return (
		<li className={styles.post}>
			<Link to={id}>
				<p className={styles.author}>{author}</p>
				<p className={styles.text}>{body}</p>
			</Link>
		</li>
	);
}

export default Post;
