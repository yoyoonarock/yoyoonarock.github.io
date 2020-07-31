import React from "react";

import Input from "@material-ui/core/Input";

import { Color } from "../constants";

import "../styles/dual-input-answer.scss";

interface DualInputProps {
	answer: string;
	color: Color;
	completed: boolean;
	setCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DualInputAnswer = ({ answer, color, completed, setCompleted }: DualInputProps) => {
	const [firstInputValue, setFirstInputValue] = React.useState("");
	const [secondInputValue, setSecondInputValue] = React.useState("");

	const [firstHalfAnswer, secondHalfAnswer] = answer.split(" / ");

	const checkCompletion = (firstValue: string, secondValue: string) => {
		setCompleted && setCompleted(firstValue === firstHalfAnswer && secondValue === secondHalfAnswer);
	};

	const handleFirstInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setFirstInputValue(value);
		checkCompletion(value, secondInputValue);
	};

	const handleSecondInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setSecondInputValue(value);
		checkCompletion(firstInputValue, value);
	};

	return (
		<div className='final-answer' style={{ border: `4px ${color} solid` }}>
			{!completed &&
				(setCompleted ? (
					<>
						<Input value={firstInputValue} onChange={handleFirstInputChange} />
						<p className='rhyme-divider'>{" / "}</p>
						<Input value={secondInputValue} onChange={handleSecondInputChange} />
					</>
				) : (
					<p className='final-answer-label'>?</p>
				))}
			{completed && <p className='final-answer-label'>{answer}</p>}
		</div>
	);
};
