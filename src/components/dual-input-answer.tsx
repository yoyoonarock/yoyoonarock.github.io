import React from "react";

import Input from "@material-ui/core/Input";

import "../styles/dual-input-answer.scss";

interface Props {
	completed: boolean;
	finalAnswer: string;
	firstInputValue: string;
	secondInputValue: string;
	handleFirstInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSecondInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DualInputAnswer = ({
	completed,
	finalAnswer,
	firstInputValue,
	secondInputValue,
	handleFirstInputChange,
	handleSecondInputChange,
}: Props) => {
	return (
		<div className='final-answer'>
			{!completed && (
				<>
					<Input value={firstInputValue} onChange={handleFirstInputChange} />
					<p className='rhyme-divider'>{" / "}</p>
					<Input value={secondInputValue} onChange={handleSecondInputChange} />
				</>
			)}
			{completed && <p className='final-answer-label'>{finalAnswer}</p>}
		</div>
	);
};
