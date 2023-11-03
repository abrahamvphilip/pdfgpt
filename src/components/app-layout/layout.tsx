'use client';

// import { useRef } from "react";
import './layout.scss';
// import useLocomotiveScroll from "../../hooks/useLocomotiveScroll";

import { Lenis as ReactLenis } from '@studio-freight/react-lenis';

interface ILayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.075,
				smoothWheel: true,
				// smoothTouch: true,
				// touchSync: true,
				touchLerp: 1,
				// touchMulitplier: 0.05,
			}}
		>
			<div className="layout">{children}</div>
		</ReactLenis>
	);
}

export default Layout;
