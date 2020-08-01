import React from "react";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";

import { AboutPage } from "./about/about-page";
import { CakePage } from "./cake/cake-page";
import { DancePage } from "./dance/dance-page";
import { FoodPage } from "./food/food-page";
import { SchedulePage } from "./schedule/schedule-page";
import { ShowsPage } from "./shows/shows-page";
import { WordPuzzlePage } from "./word-puzzle/word-puzzle-page";
import { WorkoutPage } from "./workout/workout-page";
import { Color } from "../constants";

import "../styles/app.scss";

const ABOUT_RHYME = `hope you like rhymes / it's puzzle time`;
const CAKE_RHYME = `take a break / make a cake`;
const DANCE_RHYME = `what is the chance / learn a tiktok dance`;
const FOOD_RHYME = `what's cookin' / good lookin'`;
const SHOWS_RHYME = `leave it to the pros / watch some shows`;
const WORKOUT_RHYME = "morning with babs / get those abs";
const WORD_PUZZLE_RHYME = `can't get thinner / let's eat dinner`;

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

	const [aboutActivityCompleted, setAboutActivityCompleted] = React.useState(false);
	const [cakeActivityCompleted, setCakeActivityCompleted] = React.useState(false);
	const [danceActivityCompleted, setDanceActivityCompleted] = React.useState(false);
	const [foodActivityCompleted, setFoodActivityCompleted] = React.useState(false);
	const [showsActivityCompleted, setShowsActivityCompleted] = React.useState(false);
	const [workoutActivityCompleted, setWorkoutActivityCompleted] = React.useState(false);
	const [wordPuzzleCompleted, setWordPuzzleCompleted] = React.useState(false);
	const [wordPuzzleInput, setWordPuzzleInput] = React.useState(" ".repeat(TOTAL_WORD_LENGTH));

	const [scheduleArray, setScheduleArray] = React.useState<Activity[]>([]);
	const [everythingCompleted, setEverythingCompleted] = React.useState(false);

	React.useEffect(() => {
		const updatedSchedule: Activity[] = [
			{
				answer: ABOUT_RHYME,
				color: Color.RED,
				completed: aboutActivityCompleted,
			},
			{
				answer: WORKOUT_RHYME,
				color: Color.ORANGE,
				completed: workoutActivityCompleted,
			},
			{
				answer: FOOD_RHYME,
				color: Color.YELLOW,
				completed: foodActivityCompleted,
			},
			{
				answer: DANCE_RHYME,
				color: Color.GREEN,
				completed: danceActivityCompleted,
			},
			{
				answer: CAKE_RHYME,
				color: Color.BLUE,
				completed: cakeActivityCompleted,
			},
			{
				answer: WORD_PUZZLE_RHYME,
				color: Color.PURPLE,
				completed: wordPuzzleCompleted,
			},
			{
				answer: SHOWS_RHYME,
				color: Color.MAGENTA,
				completed: showsActivityCompleted,
			},
		];

		setScheduleArray(updatedSchedule);

		setEverythingCompleted(
			aboutActivityCompleted &&
				foodActivityCompleted &&
				workoutActivityCompleted &&
				wordPuzzleCompleted &&
				showsActivityCompleted &&
				danceActivityCompleted &&
				cakeActivityCompleted
		);
	}, [
		aboutActivityCompleted,
		foodActivityCompleted,
		workoutActivityCompleted,
		wordPuzzleCompleted,
		showsActivityCompleted,
		danceActivityCompleted,
		cakeActivityCompleted,
	]);

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
					<Tab label='schedule' />
					<Tab label='about' />
					<Tab label='happy' />
					<Tab label='birthday' />
					<Tab label='to' />
					<Tab label='you' />
					<Tab label='cha' />
					<Tab label='cha cha' />
				</Tabs>
			</Paper>
			<TabPanel value={selectedTabIndex} index={0}>
				<SchedulePage scheduleArray={scheduleArray} everythingCompleted={everythingCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={1}>
				<AboutPage activity={scheduleArray[0]} setCompleted={setAboutActivityCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={2}>
				<WorkoutPage activity={scheduleArray[1]} setCompleted={setWorkoutActivityCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={3}>
				<FoodPage activity={scheduleArray[2]} setCompleted={setFoodActivityCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={4}>
				<DancePage activity={scheduleArray[3]} setCompleted={setDanceActivityCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={5}>
				<CakePage activity={scheduleArray[4]} setCompleted={setCakeActivityCompleted} />
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={6}>
				<WordPuzzlePage
					activity={scheduleArray[5]}
					currentPuzzleInput={wordPuzzleInput}
					inputWords={WORD_PUZZLE_WORDS}
					totalWordLength={TOTAL_WORD_LENGTH}
					setCompleted={setWordPuzzleCompleted}
					setCurrentPuzzleInput={setWordPuzzleInput}
				/>
			</TabPanel>
			<TabPanel value={selectedTabIndex} index={7}>
				<ShowsPage activity={scheduleArray[6]} setCompleted={setShowsActivityCompleted} />
			</TabPanel>
		</div>
	);
};
