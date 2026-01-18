import styles from './IconLink.module.css';

interface IconLinkProps {
	iconSrc: string;
    href: string;
}

export default function IconLink(props: IconLinkProps) {
	const iconPath = props.iconSrc.startsWith('/icons/')
		? props.iconSrc
		: `/icons/${props.iconSrc}`;

	const readableLabel = iconPath
		.split('/')
		.pop()
		?.replace(/\.svg$/i, '')
		.replace(/[-_]+/g, ' ')
		.trim() ?? 'icon';

	return (
		<a className={styles.link} href={props.href}>
			<span
				className={styles.icon}
				role="img"
				aria-label={readableLabel}
				style={{
					maskImage: `url(${iconPath})`,
				}}
			/>
		</a>
	);
}
