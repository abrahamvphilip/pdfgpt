import { Slot } from '@radix-ui/react-slot';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import './button.scss';

type ButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'secondary'
	| 'ghost'
	| 'link';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<ButtonVariant | any> {
	asChild?: boolean;
	variant?: ButtonVariant;
	size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'default',
			size = 'default',
			asChild = false,
			...props
		},
		ref
	) => {
		const Comp = asChild ? Slot : 'button';
		const variantClass = variant ? `button--${variant}` : '';
		const sizeClass = `button--${size}`;
		return (
			<Comp
				className={`button ${variantClass} ${sizeClass} ${className}`}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button };
