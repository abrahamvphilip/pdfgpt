'use client';

import { gsap } from 'gsap';
import { Power2 } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';

import Link from 'next/link';
import './northButton.scss';

interface IButtonProps {
	children: React.ReactNode;
	href: string;
	handleClick?: () => void;
	icon?: React.FC;
	styleClass?: string;
}

function NorthButton({
	children,
	href,
	handleClick,
	icon: Icon,
	styleClass,
}: IButtonProps) {
	const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

	/**
	 * useEffect for GSAP Animation ->
	 */

	useEffect(() => {
		const menuRefs = buttonRef.current?.querySelectorAll(
			'.northButton-container'
		);

		menuRefs?.forEach((menuRef) => {
			const menuIconRef: HTMLElement | null =
				menuRef.querySelector('.northButton-icon');
			const menuBlockRef: HTMLElement | null = menuRef.querySelector(
				'.northButton-content__block'
			);
			const menuLinkRef: HTMLElement | null = menuRef.querySelector(
				'.northButton-content__menu'
			);

			// eslint-disable-next-line no-undef
			let mouseEnterTimeout: NodeJS.Timeout | null = null;
			let isMouseEnterTriggered = false;

			/**
			 * Handler functions for mouse events
			 */

			const handleMouseEnter = () => {
				if (!isMouseEnterTriggered) {
					mouseEnterTimeout = setTimeout(() => {
						gsap.to(menuLinkRef, {
							x: 24,
							ease: Power2.easeInOut,
							duration: 0.5,
							delay: 0.15,
						});
						gsap.to(menuIconRef, {
							x: -16,
							ease: Power2.easeInOut,
							duration: 0.5,
							delay: 0.15,
						});
						gsap.to(menuBlockRef, {
							x: '-30%',
							ease: Power2.easeInOut,
							duration: 0.5,
							delay: 0.15,
						});
						isMouseEnterTriggered = true;
					}, 20);
				}
			};

			const handleMouseLeave = () => {
				clearTimeout(mouseEnterTimeout!);
				if (isMouseEnterTriggered) {
					gsap.to(menuIconRef, {
						x: 0,
						ease: Power2.easeInOut,
						duration: 0.5,
						delay: 0.15,
					});
					gsap.to(menuLinkRef, {
						x: 0,
						ease: Power2.easeInOut,
						duration: 0.5,
						delay: 0.15,
					});
					gsap.to(menuBlockRef, {
						x: '103%',
						ease: Power2.easeInOut,
						duration: 0.5,
						delay: 0.15,
						onComplete: () => {
							gsap.set(menuBlockRef, { x: '-103%' });
							isMouseEnterTriggered = false;
						},
					});
				}
			};

			gsap.set(menuIconRef!, { x: 0 });

			/**
			 * Setting event listeners
			 */

			menuRef.addEventListener('mouseenter', handleMouseEnter);
			menuRef.addEventListener('mouseleave', handleMouseLeave);

			/**
			 * Cleanup event listeners
			 */

			return () => {
				menuRefs?.forEach((menuRef) => {
					menuRef.removeEventListener('mouseenter', handleMouseEnter);
					menuRef.removeEventListener('mouseleave', handleMouseLeave);
				});
			};
		});
	}, []);

	const isLink = typeof href !== 'undefined';
	const isExternal =
		isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || '');

	if (isExternal) {
		return (
			// fix this external for northButton
			// <a
			// 	className="northButton"
			// 	target="_blank"
			// 	rel="noopener noreferrer"
			// 	href={href}
			// >
			// 	{children}
			// </a>

			<Link
				className={`northButton ${styleClass}`}
				ref={buttonRef}
				href={href || '#'}
			>
				<div className="northButton-container">
					{Icon && (
						<span className="northButton-icon">
							<Icon />
						</span>
					)}
					<span className="northButton-content">
						<span className="northButton-content__block"></span>
						<span className="northButton-content__menu">{children}</span>
					</span>
				</div>
			</Link>
		);
	}

	if (isLink) {
		return (
			<Link
				className={`northButton ${styleClass}`}
				ref={buttonRef}
				href={href || '#'}
			>
				<div className="northButton-container">
					{Icon && (
						<span className="northButton-icon">
							<Icon />
						</span>
					)}
					<span className="northButton-content">
						<span className="northButton-content__block"></span>
						<span className="northButton-content__menu">{children}</span>
					</span>
				</div>
			</Link>
		);
	}
	return (
		<>
			<button className="northButton" ref={buttonRef} onClick={handleClick}>
				<div className="northButton-container">
					{Icon && (
						<span className="northButton-icon">
							<Icon />
						</span>
					)}
					<span className="northButton-content">
						<span className="northButton-content__block"></span>
						<span className="northButton-content__menu">{children}</span>
					</span>
				</div>
			</button>
		</>
	);
}

export default NorthButton;
