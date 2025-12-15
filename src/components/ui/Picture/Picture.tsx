'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styles from './Picture.module.css';

interface PictureProps {
	fileName: string;
	alt: string;
	width?: number;
	height?: number;
}

export default function Picture(props: PictureProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Image
				src={`/images/${props.fileName}.png`}
				alt={props.alt}
				className={styles.modalImage}
				width={'1920'}
				height={'1080'}
				quality={70}
				onClick={() => setIsOpen(true)}
			/>

			{isOpen && (
				<div className={styles.modalOverlay}>
					<div className={styles.modalContent}>
						<Image
							src={`/images/${props.fileName}.png`}
							alt={props.alt}
							className={styles.modalImage}
							width={props.width || 1920}
							height={props.height || 1080}
							unoptimized={true}
						/>
						<button
							onClick={() => setIsOpen(false)}
							className={styles.closeButton}
						>
							✕
						</button>
					</div>
				</div>
			)}
		</>
	);
}
