import React from "react";

import { BasicPage } from "../basic-page";

const SHOWS_DESCRIPTION = `last one for today, let's take it easy
we don't want to end up too sleepy
these may appear on our machines
or be hooked up to larger screens
now what if you are far away?
what will help you view the display?
there are 4 of yours and 4 of mine
hopefully you'll be able to see just fine`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowsPage = ({ activity, setCompleted }: Props) => {
	return <BasicPage activity={activity} description={SHOWS_DESCRIPTION} setCompleted={setCompleted} />;
};
