import React from "react";

import "../styles/prompt.scss";

interface Props {
	text: string;
}

export const Prompt = ({ text }: Props) => {
	return <p className='prompt'>{text}</p>;
};
