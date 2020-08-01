import React from "react";

import { BasicPage } from "../basic-page";

const ABOUT_DESCRIPTION = `happy birthday saloni! it's your special day
let's hang out, what do you say?
but as you know my memory is poor
all I know is that you're turning 24
there was an agenda, a detailed list
but everything I had planned now fails to exist
solve the puzzles, look through the clues
cause I don't remember what we were gonna do!`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AboutPage = ({ activity, setCompleted }: Props) => {
	React.useEffect(() => {
		setCompleted(true);
	}, [setCompleted]);

	return <BasicPage activity={activity} description={ABOUT_DESCRIPTION} />;
};
