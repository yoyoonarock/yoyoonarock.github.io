import React from "react";

import Input from "@material-ui/core/Input";
import Alert from "@material-ui/lab/Alert";

import { Prompt } from "../prompt";

import "../../styles/workout/workout.scss";

const WORKOUT_DESCRIPTION = `eyesight may not be your strength
but this one will test your height and length
we could be jocks instead of being nerds
search for a total of 6 words
every day we skip we seem to regret
look for things you have while you sweat
you might be sore there's no escape
come on go find them let's get in shape`;

const FIRST_HALF_ANSWER = "morning with babs";
const SECOND_HALF_ANSWER = "get those abs";
const WORKOUT_ANSWER = FIRST_HALF_ANSWER + " / " + SECOND_HALF_ANSWER;

interface Props {
	completed: boolean;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkoutPage = ({ completed, setCompleted }: Props) => {
	const [firstInputValue, setFirstInputValue] = React.useState("");
	const [secondInputValue, setSecondInputValue] = React.useState("");

	const checkCompletion = (firstValue: string, secondValue: string) => {
		setCompleted(firstValue === FIRST_HALF_ANSWER && secondValue === SECOND_HALF_ANSWER);
	};

	const handleFirstInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setFirstInputValue(value);
		checkCompletion(value, secondInputValue);
	};

	const handleSecondInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
		setSecondInputValue(value);
		checkCompletion(firstInputValue, value);
	};

	const getInputSection = () => {
		if (completed) {
			return (
				<div className='workout-answer'>
					<p className='workout-answer-label'>{WORKOUT_ANSWER}</p>
				</div>
			);
		}

		return (
			<div className='workout-answer'>
				<Input value={firstInputValue} onChange={handleFirstInputChange} />
				<p className='rhyme-divider'>{" / "}</p>
				<Input value={secondInputValue} onChange={handleSecondInputChange} />
			</div>
		);
	};

	return (
		<div className='workout-page'>
			<Prompt text={WORKOUT_DESCRIPTION} />
			{getInputSection()}
			{completed && <Alert severity='success'>Well done!</Alert>}
		</div>
	);
};
