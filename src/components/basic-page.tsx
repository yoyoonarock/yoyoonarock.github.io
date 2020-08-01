import React from "react";

import Alert from "@material-ui/lab/Alert";

import { DualInputAnswer } from "./dual-input-answer";
import { Prompt } from "./prompt";

interface Props {
	activity: Activity;
	description: string;
	setCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BasicPage = ({ activity, description, setCompleted }: Props) => {
	const { completed } = activity;

	return (
		<div className='basic-page'>
			<Prompt text={description} />
			<DualInputAnswer {...activity} setCompleted={setCompleted} />
			{setCompleted && completed && <Alert severity='success'>well done!</Alert>}
		</div>
	);
};
