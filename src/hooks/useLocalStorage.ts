'use client';

import { useEffect, useState } from 'react';

type TValue = string | boolean | object;

/**
 * Custom hooks to get and set item in localstorage. You don't have
 * to set a state and set a value in the localstorage. useLocalStorage
 * return a value and a setter that is sync with localstorage.
 */
export const useLocalStorage = (key: string, initialValue?: TValue) => {
	let isWindowUndefined = typeof window === 'undefined';
	let local: string | null;

	if (!isWindowUndefined) {
		try {
			local = localStorage.getItem(key);
		} catch {
			// Noop
		}
	}

	const [state, setState] = useState(() => {
		if (isWindowUndefined) {
			return initialValue;
		}

		if (typeof local !== 'string') {
			try {
				localStorage.setItem(key, JSON.stringify(initialValue));
			} catch {
				// Noop
			}

			return initialValue;
		} else {
			return JSON.parse(local);
		}
	});

	useEffect(() => {
		if (!isWindowUndefined) {
			try {
				localStorage.setItem(key, JSON.stringify(state));
			} catch {
				// Noop
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state, isWindowUndefined]);

	return [state, setState];
};
