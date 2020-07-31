import React from "react";

import { DualInputAnswer } from "../dual-input-answer";

import "../../styles/schedule/schedule.scss";

const FINAL_RHYME = `you did it! what can I say
you saved this saturday
hopefully you can see
the past week I was super busy
there was a lot of pressure
but now let's go on an adventure!
since we're both free
will you go on a date with me?`;

interface Props {
	scheduleArray: Activity[];
	everythingCompleted: boolean;
}

export const SchedulePage = ({ scheduleArray, everythingCompleted }: Props) => {
	return (
		<div className='schedule-page'>
			<div className='schedule'>
				{scheduleArray.map((schedule) => (
					<DualInputAnswer {...schedule} />
				))}
			</div>
			{everythingCompleted && (
				<div className='final-rhyme'>
					<p>{FINAL_RHYME}</p>
				</div>
			)}
		</div>
	);
};
