'use client';

import { useEffect } from 'react';

import { useKeyDown } from '../../hooks/useKeyDown';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import { GridOverlay } from './gridOverlay';

const LOCAL_STORAGE_KEY_VISIBLE = '_northDevtoolsVisible';

export const Devtools = () => {
	const [isVisible, setVisible] = useLocalStorage(
		LOCAL_STORAGE_KEY_VISIBLE,
		false
	);
	const keys = useKeyDown();

	useEffect(() => {
		if (keys.includes(17) && keys.includes(75)) {
			setVisible(!isVisible);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keys]);

	return (
		<>
			<GridOverlay button={isVisible} columns={12} baseline={8} />
		</>
	);
};
