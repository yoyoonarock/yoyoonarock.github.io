import React from "react";

import Alert from "@material-ui/lab/Alert";

import { DualInputAnswer } from "../dual-input-answer";
import { Prompt } from "../prompt";

const SHOWS_DESCRIPTION = `last one for today, let's take it easy
we don't want to end up too sleepy
these may appear on our machines
or be hooked up to larger screens
now what if you are far away?
what will help you view the display?
4 of yours and 4 of mine
hopefully you can see just fine`;

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
