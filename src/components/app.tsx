import React from "react";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

import { WordPuzzlePage } from "./word-puzzle/word-puzzle-page";
import { WorkoutPage } from "./workout/workout-page";

const WORD_PUZZLE_WORDS = ["almond", "pine nut", "pecan", "cashew", "hazelnut", "walnut", "brazil nut"];
const TOTAL_WORD_LENGTH = WORD_PUZZLE_WORDS.reduce((currentTotalLength, word) => {
	return currentTotalLength + word.length;
}, 0);

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
};

export const App = () => {
	const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);

	const [workoutTaskCompleted, setWorkoutTaskCompleted] = React.useState(false);
	const [wordPuzzleCompleted, setWordPuzzleCompleted] = React.useState(false);
	const [wordPuzzleInput, setWordPuzzleInput] = React.useState(" ".repeat(TOTAL_WORD_LENGTH));

	const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
		setSelectedTabIndex(newIndex);
	};

	return (
		<div>
			<Paper square>
				<Tabs
					value={selectedTabIndex}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					centered
				>
					<Tab label='about' />
					<Tab label='olute' />
					<Tab label='idk' />
					<Tab label='idk' />
					<Tab label='idk' />
					<Tab label='idk' />
					<Tab label='pea' />
					<Tab label='schedule' />
				</Tabs>
			</Paper>
			<TabPanel value={selectedTabIndex} index={1}>
				<WorkoutPage completed={workoutTaskCompleted} setCompleted={setWorkoutTaskCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={6}>
				<WordPuzzlePage
					completed={wordPuzzleCompleted}
					currentPuzzleInput={wordPuzzleInput}
					inputWords={WORD_PUZZLE_WORDS}
					totalWordLength={TOTAL_WORD_LENGTH}
					setCompleted={setWordPuzzleCompleted}
					setCurrentPuzzleInput={setWordPuzzleInput}
				/>
			</TabPanel>
		</div>
	);
};
