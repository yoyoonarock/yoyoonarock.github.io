const map = {
	D: 'cauliflowerrice',
	A: 'dahitoast',
	E: 'mangorus',
	B: 'papdichaat',
	G: 'pavbhaji',
	F: 'samosa',
	C: 'shrikhand',
	H: 'tikkamasala',
};

const newMap = {};

Object.keys(map).reduce((newMap, upperCaseLetter) => {
	const food = map[upperCaseLetter];

	for (let i = 0; i < food.length; i++) {
		const foodLetter = food[i];

		if (!newMap[foodLetter]) {
			newMap[foodLetter] = [];
		}

		newMap[foodLetter].push(`${upperCaseLetter}${i+1}`)
	}

	return newMap;
}, newMap);

console.log(JSON.stringify(newMap));

//{"c":["D1","D14","B6"],"a":["D2","A2","A7","E2","B2","B8","B9","G2","G6","F2","F6","C7","H5","H7","H9","H11"],"u":["D3","E7"],"l":["D4","D7","H10"],"i":["D5","D13","A4","B5","G8","C4","H2"],"f":["D6"],"o":["D8","A6","E5","F4"],"w":["D9"],"e":["D10","D15"],"r":["D11","D12","E6","C3"],"d":["A1","B4","C9"],"h":["A3","B7","G5","C2","C6"],"t":["A5","A9","B10","H1"],"s":["A8","E8","F1","F5","C1","H8"],"m":["E1","F3","H6"],"n":["E3","C8"],"g":["E4"],"p":["B1","B3","G1"],"v":["G3"],"b":["G4"],"j":["G7"],"k":["C5","H3","H4"]}