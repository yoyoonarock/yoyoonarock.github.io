import React from "react";

import "../styles/linked-letter-puzzle.scss";

interface Props {
	inputWords: string[];
}

export const LinkedLetterPuzzle = ({ inputWords }: Props) => {
	const maxWordLength = inputWords.reduce((currentMaxLength, word) => {
		return word.length > currentMaxLength ? word.length : currentMaxLength;
	}, 0);

	const GRID_HEIGHT = inputWords.length * 2 + 1;
	const gridWidth = maxWordLength + 2;

	const staticHeightArray = Array(GRID_HEIGHT).fill(0);
	const staticWidthArray = Array(gridWidth).fill(0);

	const getGridCells = (rowIndex: number) => {
		return staticWidthArray.map((_, columnIndex) => {
			if (rowIndex % 2 === 1) {
				const wordIndex = (rowIndex - 1) / 2;
				const currentWord = inputWords[wordIndex];

				return (
					<td className='cell-background'>
						{columnIndex !== 0 &&
							columnIndex <= currentWord.length && (
								<input
									className='cell-input'
									maxLength={1}
									type='text'
								/>
							)}
					</td>
				);
			}

			return <td className='cell-background'></td>;
		});
	};

	return (
		<table className='grid'>
			{staticHeightArray.map((_, i) => (
				<tr key={i}>{getGridCells(i)}</tr>
			))}
		</table>
	);
};
