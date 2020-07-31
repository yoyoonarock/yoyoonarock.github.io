import React from "react";

import Input from "@material-ui/core/Input";

import cauliRiceTikkaMasala from "../../assets/food-pictures/cauliflower-rice-and-tikka-masala.jpg";
import dahiToast from "../../assets/food-pictures/dahi-toast.jpg";
import mangoRus from "../../assets/food-pictures/mango-rus.jpg";
import papdiChaat from "../../assets/food-pictures/papdi-chaat.jpg";
import pavBhaji from "../../assets/food-pictures/pav-bhaji.jpg";
import samosa from "../../assets/food-pictures/samosa.jpg";
import shrikhand from "../../assets/food-pictures/shrikhand.jpg";

enum Food {
	CAULI_RICE = "cauliflower rice",
	DAHI_TOAST = "dahi toast",
	MANGO_RUS = "mango rus",
	PAPDI_CHAAT = "papdi chaat",
	PAV_BHAJI = "pav bhaji",
	SAMOSA = "samosa",
	SHRIKHAND = "shrikhand",
	TIKKA_MASALA = "tikka masala",
}

enum ImageSide {
	LEFT = "left",
	RIGHT = "right",
}

interface DualAnswerContainerProps {
	leftFood: Food;
	rightFood: Food;
}

interface FoodInputProps {
	answer: string;
	completed: boolean;
	label: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FoodPictureListProps {
	identifiedPictures: boolean;
	setIdentifiedPictures: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ImageContainerProps {
	food: Food;
	imageSide: ImageSide;
}

export const FoodPictureList = ({ identifiedPictures, setIdentifiedPictures }: FoodPictureListProps) => {
	const [cauliRiceCompleted, setCauliRiceCompleted] = React.useState(false);
	const [dahiToastCompleted, setDahiToastCompleted] = React.useState(false);
	const [mangoRusCompleted, setMangoRusCompleted] = React.useState(false);
	const [papdiChaatCompleted, setPapdiChaatCompleted] = React.useState(false);
	const [pavBhajiCompleted, setPavBhajiCompleted] = React.useState(false);
	const [samosaCompleted, setSamosaCompleted] = React.useState(false);
	const [shrikhandCompleted, setShrikhandCompleted] = React.useState(false);
	const [tikkaMasalaCompleted, setTikkaMasalaCompleted] = React.useState(false);

	const foodMap = {
		[Food.CAULI_RICE]: {
			answer: "cauliflower rice",
			completed: cauliRiceCompleted,
			label: "D) ",
			source: cauliRiceTikkaMasala,
			setCompleted: setCauliRiceCompleted,
		},
		[Food.DAHI_TOAST]: {
			answer: "dahi toast",
			completed: dahiToastCompleted,
			label: "A) ",
			source: dahiToast,
			setCompleted: setDahiToastCompleted,
		},
		[Food.MANGO_RUS]: {
			answer: "mango rus",
			completed: mangoRusCompleted,
			label: "E) ",
			source: mangoRus,
			setCompleted: setMangoRusCompleted,
		},
		[Food.PAPDI_CHAAT]: {
			answer: "papdi chaat",
			completed: papdiChaatCompleted,
			label: "B) ",
			source: papdiChaat,
			setCompleted: setPapdiChaatCompleted,
		},
		[Food.PAV_BHAJI]: {
			answer: "pav bhaji",
			completed: pavBhajiCompleted,
			label: "G) ",
			source: pavBhaji,
			setCompleted: setPavBhajiCompleted,
		},
		[Food.SAMOSA]: {
			answer: "samosa",
			completed: samosaCompleted,
			label: "F) ",
			source: samosa,
			setCompleted: setSamosaCompleted,
		},
		[Food.SHRIKHAND]: {
			answer: "shrikhand",
			completed: shrikhandCompleted,
			label: "C) ",
			source: shrikhand,
			setCompleted: setShrikhandCompleted,
		},
		[Food.TIKKA_MASALA]: {
			answer: "tikka masala",
			completed: tikkaMasalaCompleted,
			label: "H) ",
			source: cauliRiceTikkaMasala,
			setCompleted: setTikkaMasalaCompleted,
		},
	};

	React.useEffect(() => {
		const checkIdentified = () => {
			const identified =
				cauliRiceCompleted &&
				dahiToastCompleted &&
				mangoRusCompleted &&
				papdiChaatCompleted &&
				pavBhajiCompleted &&
				samosaCompleted &&
				shrikhandCompleted &&
				tikkaMasalaCompleted;

			setIdentifiedPictures(identified);
		};

		checkIdentified();
	}, [
		cauliRiceCompleted,
		dahiToastCompleted,
		mangoRusCompleted,
		papdiChaatCompleted,
		pavBhajiCompleted,
		samosaCompleted,
		shrikhandCompleted,
		tikkaMasalaCompleted,
		setIdentifiedPictures,
	]);

	const FoodInput = ({ answer, completed, label, value, onChange }: FoodInputProps) => {
		return (
			<div className='food-input-container'>
				<p className='food-letter'>{label}</p>
				{!completed && <Input value={value} onChange={onChange} />}
				{completed && <p className='food-answer'>{answer}</p>}
			</div>
		);
	};

	const ImageContainer = ({ food, imageSide }: ImageContainerProps) => {
		const { answer, completed, label, source, setCompleted } = foodMap[food];

		const [inputValue, setInputValue] = React.useState("");

		const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			setInputValue(value.toLowerCase());

			if (value.toLowerCase() === answer) {
				setCompleted(true);
			}
		};

		return (
			<div className='image-container'>
				{imageSide === ImageSide.LEFT && <img className='image' src={source} alt='' />}
				<FoodInput
					answer={answer}
					completed={completed}
					label={label}
					onChange={handleChange}
					value={inputValue}
				/>
				{imageSide === ImageSide.RIGHT && <img className='image' src={source} alt='' />}
			</div>
		);
	};

	const DualAnswerContainer = ({ leftFood, rightFood }: DualAnswerContainerProps) => {
		const {
			answer: leftAnswer,
			completed: leftCompleted,
			label: leftLabel,
			source: leftSource,
			setCompleted: setLeftCompleted,
		} = foodMap[leftFood];
		const {
			answer: rightAnswer,
			completed: rightCompleted,
			label: rightLabel,
			setCompleted: setRightCompleted,
		} = foodMap[rightFood];

		const [leftInputValue, setLeftInputValue] = React.useState("");
		const [rightInputValue, setRightInputValue] = React.useState("");

		const handleLeftChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			setLeftInputValue(value.toLowerCase());

			if (value.toLowerCase() === leftAnswer) {
				setLeftCompleted(true);
			}
		};

		const handleRightChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
			setRightInputValue(value.toLowerCase());

			if (value.toLowerCase() === rightAnswer) {
				setRightCompleted(true);
			}
		};

		return (
			<div className='image-container'>
				<FoodInput
					answer={leftAnswer}
					completed={leftCompleted}
					label={leftLabel}
					onChange={handleLeftChange}
					value={leftInputValue}
				/>
				<img className='image' src={leftSource} alt='' />
				<FoodInput
					answer={rightAnswer}
					completed={rightCompleted}
					label={rightLabel}
					onChange={handleRightChange}
					value={rightInputValue}
				/>
			</div>
		);
	};

	return (
		<div className='food-picture-list'>
			<div className='food-picture-row'>
				<ImageContainer food={Food.DAHI_TOAST} imageSide={ImageSide.RIGHT} />
				<ImageContainer food={Food.MANGO_RUS} imageSide={ImageSide.LEFT} />
			</div>
			<div className='food-picture-row'>
				<ImageContainer food={Food.PAPDI_CHAAT} imageSide={ImageSide.RIGHT} />
				<ImageContainer food={Food.SAMOSA} imageSide={ImageSide.LEFT} />
			</div>
			<div className='food-picture-row'>
				<ImageContainer food={Food.SHRIKHAND} imageSide={ImageSide.RIGHT} />
				<ImageContainer food={Food.PAV_BHAJI} imageSide={ImageSide.LEFT} />
			</div>
			<div className='food-picture-row last-row'>
				<DualAnswerContainer leftFood={Food.CAULI_RICE} rightFood={Food.TIKKA_MASALA} />
			</div>
		</div>
	);
};
