import React from "react";

import "../../styles/linked-letter-puzzle-page/linked-letter-puzzle.scss";

enum KeyboardKey {
	ARROW_LEFT = "ArrowLeft",
	ARROW_RIGHT = "ArrowRight",
}

interface Props {
	inputWords: string[];
}

export const LinkedLetterPuzzle = ({ inputWords }: Props) => {
	const MAX_WORD_LENGTH = inputWords.reduce((currentMaxLength, word) => {
		return word.length > currentMaxLength ? word.length : currentMaxLength;
	}, 0);

	const GRID_HEIGHT = inputWords.length * 2 + 1;
	const GRID_WIDTH = MAX_WORD_LENGTH + 2;

	const SOLUTION = inputWords.join("");
	const TOTAL_WORD_LENGTH = inputWords.reduce((currentTotalLength, word) => {
		return currentTotalLength + word.length;
	}, 0);

	const [currentPuzzleInput, setCurrentPuzzleInput] = React.useState(" ".repeat(TOTAL_WORD_LENGTH));
	const refs = React.useRef<HTMLInputElement[]>([]);
	const usedRefs = Array(TOTAL_WORD_LENGTH).fill(false);

	const staticHeightArray = Array(GRID_HEIGHT).fill(0);
	const staticWidthArray = Array(GRID_WIDTH).fill(0);

	const mapWordLetterToRefIndex = (wordIndex: number, letterIndex: number): number => {
		const index = inputWords.reduce((refIndex, word, i) => {
			if (i > wordIndex) {
				return refIndex;
			}

			if (i === wordIndex) {
				return refIndex + letterIndex;
			}

			return refIndex + word.length;
		}, 0);

		return index;
	};

	const findPreviousRef = (refIndex: number): number => {
		return refIndex === 0 ? TOTAL_WORD_LENGTH - 1 : refIndex - 1;
	};

	const findNextRef = (refIndex: number): number => {
		return refIndex === TOTAL_WORD_LENGTH - 1 ? 0 : refIndex + 1;
	};

	const handleArrowKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, refIndex: number) => {
		const map = {
			[KeyboardKey.ARROW_LEFT]: findPreviousRef,
			[KeyboardKey.ARROW_RIGHT]: findNextRef,
		};

		if (!Object.values(KeyboardKey).includes(e.key as KeyboardKey)) {
			return;
		}

		const newRefIndex = map[e.key as KeyboardKey](refIndex);

		refs.current[newRefIndex].focus();
		refs.current[newRefIndex].select();
	};

	const handleOnKeyPress = ({ key }: React.KeyboardEvent<HTMLInputElement>, refIndex: number) => {
		handleNewCharInput(key.toUpperCase(), refIndex);
	};

	const handleNewCharInput = (input: string, refIndex: number) => {
		refs.current[refIndex].value = input;
		const newPuzzleInput = currentPuzzleInput.substr(0, refIndex) + input + currentPuzzleInput.substr(refIndex + 1);
		setCurrentPuzzleInput(newPuzzleInput);

		usedRefs[refIndex] = true;

		const findNextEmptyRef = () => {
			let loopingIndex = findNextRef(refIndex);

			while (loopingIndex !== refIndex) {
				if (!usedRefs[loopingIndex]) {
					break;
				}
				loopingIndex = findNextRef(loopingIndex);
			}

			if (loopingIndex === refIndex) {
				loopingIndex = findNextRef(loopingIndex);
			}

			return loopingIndex;
		};

		const nextRefIndex = findNextEmptyRef();
		refs.current[nextRefIndex].focus();
	};

	const isPuzzleSolved = (): boolean => {
		console.log(currentPuzzleInput.toLowerCase());
		console.log(SOLUTION.toLowerCase());
		return currentPuzzleInput.toLowerCase() === SOLUTION.toLowerCase();
	};

	const getGridCells = (rowIndex: number) => {
		return staticWidthArray.map((_, columnIndex) => {
			if (rowIndex % 2 === 1) {
				const wordIndex = (rowIndex - 1) / 2;
				const currentWord = inputWords[wordIndex];

				return (
					<td className='cell-background' key={columnIndex}>
						{columnIndex !== 0 && columnIndex <= currentWord.length && (
							<input
								className='cell-input'
								disabled={isPuzzleSolved()}
								key={mapWordLetterToRefIndex(wordIndex, columnIndex - 1)}
								maxLength={1}
								onKeyDown={(e) =>
									handleArrowKeyDown(e, mapWordLetterToRefIndex(wordIndex, columnIndex - 1))
								}
								onKeyPress={(e) =>
									handleOnKeyPress(e, mapWordLetterToRefIndex(wordIndex, columnIndex - 1))
								}
								ref={(el) => (refs.current = [...refs.current, el] as HTMLInputElement[])}
								type='text'
							/>
						)}
					</td>
				);
			}

			return <td className='cell-background' key={columnIndex}></td>;
		});
	};

	return (
		<table className='grid'>
			<tbody>
				{staticHeightArray.map((_, i) => (
					<tr key={i}>{getGridCells(i)}</tr>
				))}
			</tbody>
		</table>
	);
};
