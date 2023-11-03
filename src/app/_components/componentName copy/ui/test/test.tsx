import './test.scss';

interface ITestProps {
	children: React.ReactNode;
}

function Test({ children }: ITestProps) {
	return <div className="">{children}</div>;
}
export default Test;
