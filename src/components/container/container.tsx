import "./container.scss";

interface IContainerProps {
	children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
	return <section className="container">{children}</section>;
}

export default Container;
