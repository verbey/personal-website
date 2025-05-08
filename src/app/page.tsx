import styles from './page.module.css';
import layoutStyles from './layout.module.css';

import Picture from './components/Picture/Picture';

export default function Home() {
	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Home</h1>
			<p className={styles.textBlock}>
				Hi there! I&#39;m Victor Cherkashyn, welcome to my personal
				website!
			</p>
			<p className={styles.textBlock}>
				You could check out my blog or the projects I&#39;m working on
				using the navigation menu above. There is also an about me page
				where you can learn more about me, my interests and skills.
			</p>
			<p className={styles.textBlock}>
				This domain is also home to my email adress -{' '}
				<a
					href='mailto:victor@cherkashyn.me'
					className={layoutStyles.link}
				>
					victor@cherkashyn.me
				</a>
				. feel free to drop by and tell me you&#39;ve been here.
			</p>
			<Picture
				fileName='crosses'
				alt='A pattern consisting of black and white crosses. One of them is red.'
			/>
		</div>
	);
}
