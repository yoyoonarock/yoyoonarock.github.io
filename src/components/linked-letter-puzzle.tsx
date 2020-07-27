import React from "react";

import "../styles/linked-letter-puzzle.scss";

interface Props {
	inputWords: string[];
}

export const LinkedLetterPuzzle = ({ inputWords }: Props) => {
	const MAX_WORD_LENGTH = inputWords.reduce((currentMaxLength, word) => {
		return word.length > currentMaxLength ? word.length : currentMaxLength;
	}, 0);

	const GRID_HEIGHT = inputWords.length * 2 + 1;
	const GRID_WIDTH = MAX_WORD_LENGTH + 2;

	const TOTAL_WORD_LENGTH = inputWords.reduce((currentTotalLength, word) => {
		return currentTotalLength + word.length;
	}, 0);

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

	const handleInput = (refIndex: number) => {
		usedRefs[refIndex] = true;

		const findNextEmptyRef = () => {
			let loopingIndex = refIndex === TOTAL_WORD_LENGTH - 1 ? 0 : refIndex + 1;

			while (loopingIndex !== refIndex) {
				if (!usedRefs[loopingIndex]) {
					break;
				}
				loopingIndex = loopingIndex === TOTAL_WORD_LENGTH - 1 ? 0 : loopingIndex + 1;
			}

			return loopingIndex;
		};

		const nextRef = findNextEmptyRef();
		refs.current[nextRef].focus();
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
								key={mapWordLetterToRefIndex(wordIndex, columnIndex - 1)}
								className='cell-input'
								maxLength={1}
								onChange={() => handleInput(mapWordLetterToRefIndex(wordIndex, columnIndex - 1))}
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
