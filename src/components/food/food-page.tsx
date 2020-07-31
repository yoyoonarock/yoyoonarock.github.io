import React from "react";

import Alert from "@material-ui/lab/Alert";

import { DualInputAnswer } from "../dual-input-answer";
import { FoodPictureList } from "./food-picture-list";
import { Prompt } from "../prompt";

import "../../styles/food/food.scss";

const LETTER_CLUES = `D9 A3 H5 H1 ' C1
B6 D8 D8 H3 G8 E3 '
 / 
E4 F4 F4 C9
H10 D8 D8 H3 G8 E3 '`;

interface Props {
	activity: Activity;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FoodPage = ({ activity, setCompleted }: Props) => {
	const { completed } = activity;

	const [identifiedPictures, setIdentifiedPictures] = React.useState(true);

	return (
		<div className='food-page'>
			<FoodPictureList identifiedPictures={identifiedPictures} setIdentifiedPictures={setIdentifiedPictures} />
			<span className='description'>
				<Prompt text={identifiedPictures ? LETTER_CLUES : ""} />
				<DualInputAnswer {...activity} setCompleted={setCompleted} />
				{completed && <Alert severity='success'>well done!</Alert>}
			</span>
		</div>
	);
};
