import { Component, JSXElement, mergeProps } from 'solid-js';

interface CalcButtonProps {
	children: JSXElement;
	background?: string;
	foreground?: string;
	fontWeight?: string;
	height?: string;
	width?: string;
	onClick?: () => void;
}

const CalcButton: Component<CalcButtonProps> = (props) => {
	const merged = mergeProps(
		{
			background: 'bg-bg',
			foreground: 'text-gruv-purple',
			fontWeight: 'font-bold',
			height: 'h-full',
			width: 'w-full',
		},
		props
	);

	return (
		<button
			class={`${merged.background} ${merged.foreground} ${merged.height} ${merged.width} ${merged.fontWeight} text-xl transition transform ease-in-out duration-100 active:opacity-50`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default CalcButton;
