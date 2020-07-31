import React from "react";

import Alert from "@material-ui/lab/Alert";

import { WordPuzzleBase } from "./word-puzzle-base";
import { Prompt } from "../prompt";

import "../../styles/word-puzzle/word-puzzle.scss";

const WORD_PUZZLE_DESCRIPTION = `for this challenge think of a category
we'll have them in hand when telling a story
in general they are extremely versatile
but we'll typically just munch on them for a while
we usually use bowls but they fit in cups
when we're feeling lazy they're the backups
make sure to look inside a familiar container
with that clue, solving this is a no brainer`;

const MESSAGE_DIGITS = [
	[20, 42, 5, `'`, 14],
	[40, 10],
	[33, 23, 8, 47, 9, 16, 41],
	["/"],
	[2, 24, 39, `'`, 22],
	[29, 18, 49],
	[6, 44, 12, 19, 24, 41],
];

interface Props {
	activity: Activity;
	currentPuzzleInput: string;
	inputWords: string[];
	totalWordLength: number;
	setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
	setCurrentPuzzleInput: React.Dispatch<React.SetStateAction<string>>;
}

export const WordPuzzlePage = ({
	activity,
	currentPuzzleInput,
	inputWords,
	totalWordLength,
	setCompleted,
	setCurrentPuzzleInput,
}: Props) => {
	const { color, completed } = activity;

	const getMessage = () => {
		let message = "";
		for (let i = 0; i < MESSAGE_DIGITS.length; i++) {
			for (let j = 0; j < MESSAGE_DIGITS[i].length; j++) {
				if (typeof MESSAGE_DIGITS[i][j] === "string") {
					message += MESSAGE_DIGITS[i][j];
				} else {
					const letter = currentPuzzleInput[(MESSAGE_DIGITS[i][j] as number) - 1];
					message += (letter === " " ? "_" : letter).toLowerCase();
				}
			}
			message += " ";
		}
		return message;
	};

	return (
		<div className='word-puzzle-page'>
			<WordPuzzleBase
				inputWords={inputWords}
				totalWordLength={totalWordLength}
				currentPuzzleInput={currentPuzzleInput}
				setCompleted={setCompleted}
				setCurrentPuzzleInput={setCurrentPuzzleInput}
			/>
			<span className='description'>
				<Prompt text={WORD_PUZZLE_DESCRIPTION} />
				<p className='word-puzzle-answer' style={{ border: `4px ${color} solid` }}>
					{getMessage()}
				</p>
				{completed && <Alert severity='success'>well done!</Alert>}
			</span>
		</div>
	);
};
