import Post from "./Post";
import styles from "./css/PostsList.module.css";

function PostsList() {
	return (
		<ul className={styles.posts}>
			<Post author="Testing" body="React.js is Awesome" />
			<Post author="Testing Again" body="Check out the full course!" />
		</ul>
	);
}

export default PostsList;
