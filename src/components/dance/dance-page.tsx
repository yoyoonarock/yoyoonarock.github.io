import React from "react";
import CircleType from "circletype";

import { BasicPage } from "../basic-page";

import "../../styles/dance/dance.scss";

const DANCE_DESCRIPTION = `now that there's been a wall restore
you may have seen these shapes before
the screen looks a little different though
it was so hard to code just so you know
there's a couple colors, let's start with your fave
then use the shade of the person that you crave
finally choose circles but only every fourth gold
with all this you will see the entire phrase unfold`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const FILLER = "XXXXXXXXXXXX";

const BOTTOM_CIRCLE_LETTERS = "jwoxhbfapxtweil";
const UPPER_LEFT_LETTERS = FILLER + "agscrbtenkhi";
const UPPER_RIGHT_LETTERS = "adentucriehd" + FILLER;
const LOWER_LEFT_LETTERS = FILLER + "badkcnytvcno";
const LOWER_RIGHT_LETTERS = "weekvlgdeebai" + FILLER;

export const DancePage = ({ activity, setCompleted }: Props) => {
	React.useEffect(() => {
		new CircleType(document.getElementById("bottom-circle-letters")).radius(120).dir(-1);
		new CircleType(document.getElementById("upper-left-letters")).radius(250).dir(-1);
		new CircleType(document.getElementById("upper-right-letters")).radius(250).dir(-1);
		new CircleType(document.getElementById("lower-left-letters")).radius(175).dir(-1);
		new CircleType(document.getElementById("lower-right-letters")).radius(175).dir(-1);
	}, []);

	return (
		<div className='dance-page'>
			<span className='curved-text-clues'>
				<p id='bottom-circle-letters'>{BOTTOM_CIRCLE_LETTERS}</p>
				<span>
					<p id='upper-left-letters'>{UPPER_LEFT_LETTERS}</p>
					<p id='upper-right-letters'>{UPPER_RIGHT_LETTERS}</p>
				</span>
				<span>
					<p id='lower-left-letters'>{LOWER_LEFT_LETTERS}</p>
					<p id='lower-right-letters'>{LOWER_RIGHT_LETTERS}</p>
				</span>
			</span>
			<BasicPage activity={activity} description={DANCE_DESCRIPTION} setCompleted={setCompleted} />
		</div>
	);
};
