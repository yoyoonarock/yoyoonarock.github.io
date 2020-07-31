import React from "react";

import { DualInputAnswer } from "../dual-input-answer";
import { Prompt } from "../prompt";

const ABOUT_DESCRIPTION = `idk`;

interface Props {
	activity: Activity;
}

export const AboutPage = ({ activity }: Props) => {
	console.log(activity);
	return (
		<div className='basic-page'>
			<Prompt text={ABOUT_DESCRIPTION} />
			<DualInputAnswer {...activity} />
		</div>
	);
};
