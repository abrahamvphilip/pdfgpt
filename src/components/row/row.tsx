import "./row.scss";

interface IRowProps {
	children: React.ReactNode;
}

function Row({ children }: IRowProps) {
	return <div className="row">{children}</div>;
}

export default Row;
