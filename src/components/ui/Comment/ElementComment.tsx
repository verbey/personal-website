import styles from './ElementComment.module.css';

interface ElementCommentProps {
	children: React.ReactNode;
	comment: string;
}

export default function ElementComment(props: ElementCommentProps) {
	return (
		<div className={styles.commentContainer}>
			{props.children}
			<p className={styles.comment}>{props.comment}</p>
		</div>
	);
}
