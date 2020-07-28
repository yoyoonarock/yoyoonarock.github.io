import React from "react";

import { LinkedLetterPuzzle } from "../linked-letter-puzzle";

export const App = () => {
	const linkedLetterPuzzleWords = ["almond", "pine nut", "pecan", "cashew", "hazelnut", "walnut", "brazil nut"];

	return <LinkedLetterPuzzle inputWords={linkedLetterPuzzleWords} />;
};
