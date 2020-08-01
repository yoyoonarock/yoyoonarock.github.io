import React from "react";

import { BasicPage } from "../basic-page";

const CAKE_DESCRIPTION = `unfortunately there's no puzzle on this one
more creative ideas? nope I had none
there's only so much I can do
so this one's a freebie for you`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CakePage = ({ activity, setCompleted }: Props) => {
	React.useEffect(() => {
		setCompleted(true);
	}, [setCompleted]);

	return <BasicPage activity={activity} description={CAKE_DESCRIPTION} />;
};
