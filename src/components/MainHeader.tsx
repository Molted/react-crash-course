import { MdPostAdd, MdMessage } from "react-icons/md";

import styles from "./css/MainHeader.module.css";
import { Link } from "react-router-dom";

function MainHeader() {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<Link to="/posts" className={styles.button}>
					<MdPostAdd size={18} />
					New Post
				</Link>
			</p>
		</header>
	);
}

export default MainHeader;
