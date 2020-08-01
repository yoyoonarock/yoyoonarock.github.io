import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import bobe from "../../assets/bobe.gif";

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
	const [open, setOpen] = React.useState(false);

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
					<Button variant='contained' color='primary' onClick={() => setOpen(true)}>
						yea
					</Button>
					<Button variant='contained' color='primary' disabled>
						nah
					</Button>

					<Dialog fullScreen open={open}>
						<DialogContent>
							<img src={bobe} alt='' />
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color='primary' autoFocus>
								YAY
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			)}
		</div>
	);
};
