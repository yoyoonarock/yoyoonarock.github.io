import React from "react";

import Alert from "@material-ui/lab/Alert";

import { DualInputAnswer } from "../dual-input-answer";
import { Prompt } from "../prompt";

import "../../styles/workout/workout.scss";

const SHOWS_DESCRIPTION = `eyesight may not be your strength
but this one will test your height and length
we could be jocks instead of being nerds
search for a total of 6 words
every day we skip we seem to regret
look for things you have while you sweat
you might be sore there's no escape
come on go find them let's get in shape`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowsPage = ({ activity, setCompleted }: Props) => {
	const { completed } = activity;

	return (
		<div className='basic-page'>
			<Prompt text={SHOWS_DESCRIPTION} />
			<DualInputAnswer {...activity} setCompleted={setCompleted} />
			{completed && <Alert severity='success'>well done!</Alert>}
		</div>
	);
};
