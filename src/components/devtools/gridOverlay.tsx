'use client';

import { useEffect, useRef } from 'react';

import { useKeyDown } from '../../hooks/useKeyDown';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './gridOverlay.scss';

const LOCAL_STORAGE_KEY_HORIZONTAL = '_northDevtoolsHorizontalGrid';
const LOCAL_STORAGE_KEY_VERTICAL = '_northDevtoolsVerticalGrid';

interface IGridOverlayProps {
	columns: number;
	baseline: number;
	button: boolean;
}

export const GridOverlay = ({
	columns = 12,
	baseline = 8,
	button = false,
}: IGridOverlayProps) => {
	const gridOverlayRef = useRef<HTMLDivElement>(null);
	const [isHorizontalVisible, setHorizontal] = useLocalStorage(
		LOCAL_STORAGE_KEY_HORIZONTAL,
		false
	);
	const [isVerticalVisible, setVertical] = useLocalStorage(
		LOCAL_STORAGE_KEY_VERTICAL,
		false
	);
	const keys = useKeyDown();

	const onToggleHorizontal = () => {
		setHorizontal(!isHorizontalVisible);
	};

	const onToggleVertical = () => {
		setVertical(!isVerticalVisible);
	};

	useEffect(() => {
		if (gridOverlayRef.current) {
			gridOverlayRef.current.style.setProperty(
				'--grid-column-count',
				String(columns)
			);
			gridOverlayRef.current.style.setProperty(
				'--grid-baseline',
				`${baseline}px`
			);
			gridOverlayRef.current.style.setProperty(
				'--grid-baseline-calc',
				String(baseline)
			);
		}
	}, [columns, baseline]);

	useEffect(() => {
		if (keys.includes(17) && keys.includes(76)) {
			onToggleVertical();
		}

		if (keys.includes(17) && keys.includes(77)) {
			onToggleHorizontal();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keys]);

	return (
		<div
			ref={gridOverlayRef}
			className={`grid ${
				isHorizontalVisible ? 'gridIsHorizontalIsVisible' : ''
			} ${isVerticalVisible ? 'isVerticalVisible' : ''}`}
		>
			<div className="grid__container">
				<div className="grid__row" data-columns={columns}>
					{Array(columns)
						.fill(0)
						.map((_, i) => (
							<div key={`grid_column_${i}`} className="grid__column">
								<div className="grid__visualize" />
							</div>
						))}
				</div>
			</div>

			{button ? (
				<>
					<button
						className={`grid__button ${isVerticalVisible ? 'vertical' : ''}`}
						onClick={onToggleVertical}
					>
						<svg
							className="grid__button__svg"
							width="14px"
							height="14px"
							viewBox="0 0 14 14"
						>
							<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
								<rect x="0" y="0" width="2" height="14" />
								<rect x="4" y="0" width="2" height="14" />
								<rect x="8" y="0" width="2" height="14" />
								<rect x="12" y="0" width="2" height="14" />
							</g>
						</svg>
					</button>

					<button
						className={`grid__button ${
							isHorizontalVisible ? 'horizontal' : ''
						}`}
						onClick={onToggleHorizontal}
					>
						<svg
							className="grid__button__svg"
							width="14px"
							height="14px"
							viewBox="0 0 14 14"
						>
							<g
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
								transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000)"
							>
								<rect x="0" y="0" width="2" height="14" />
								<rect x="4" y="0" width="2" height="14" />
								<rect x="8" y="0" width="2" height="14" />
								<rect x="12" y="0" width="2" height="14" />
							</g>
						</svg>
					</button>
				</>
			) : null}
		</div>
	);
};

// GridOverlay.defaultProps = {
// 	columns: 12,
// 	baseline: 20,
// 	button: false,
// };
