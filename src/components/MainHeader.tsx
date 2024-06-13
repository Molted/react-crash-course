import { MdPostAdd, MdMessage } from "react-icons/md";

import styles from "./css/MainHeader.module.css";

function MainHeader({ onCreatePost }: any) {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<button className={styles.button} onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</button>
			</p>
		</header>
	);
}

export default MainHeader;