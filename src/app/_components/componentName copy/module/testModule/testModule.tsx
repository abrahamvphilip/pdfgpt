import './testModule.scss';

interface ITestModuleProps {
	children: React.ReactNode;
}

function TestModule({ children }: ITestModuleProps) {
	return <div className="">{children}</div>;
}
export default TestModule;
