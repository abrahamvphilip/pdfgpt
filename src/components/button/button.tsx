import Link from "next/link";
import "./button.scss";

interface IButtonProps {
	children: React.ReactNode;
	href: string;
	handleClick?: () => void;
	variant?: "header" | "primary";
	style?: React.CSSProperties;
}

function Button({ children, href, handleClick, variant, style }: IButtonProps) {
	const isLink = typeof href !== "undefined";
	const isExternal =
		isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(href || "");

	variant = variant || "primary";

	if (isExternal) {
		return (
			<a
				className={`button ${variant}`}
				target="_blank"
				rel="noopener noreferrer"
				href={href}
				style={style}
			>
				{children}
			</a>
		);
	}

	if (isLink) {
		return (
			<Link className={`button ${variant}`} href={href || "#"} style={style}>
				{children}
			</Link>
		);
	}

	return (
		<button className={`button ${variant}`} onClick={handleClick} style={style}>
			{children}
		</button>
	);
}

export default Button;
