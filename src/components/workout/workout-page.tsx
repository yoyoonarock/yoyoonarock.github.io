import React from "react";

import { BasicPage } from "../basic-page";

const WORKOUT_DESCRIPTION = `eyesight may not be your strength
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

export const WorkoutPage = ({ activity, setCompleted }: Props) => {
	return <BasicPage activity={activity} description={WORKOUT_DESCRIPTION} setCompleted={setCompleted} />;
};
