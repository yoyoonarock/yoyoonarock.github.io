import React from "react";

import { LinkedLetterPuzzle } from "../linked-letter-puzzle";

export const App = () => {
	const inputWords = ["apple", "banana", "kiwi"];

	return <LinkedLetterPuzzle inputWords={inputWords} />;
};
