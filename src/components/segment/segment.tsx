import Container from "../container/container";

import "./segment.scss";

interface ISegmentProps {
	children: React.ReactNode;
	container?: boolean;
}

function Segment({ children, container = true }: ISegmentProps) {
	const content = container ? <Container>{children}</Container> : children;

	return <section className="segment">{content}</section>;
}

export default Segment;
