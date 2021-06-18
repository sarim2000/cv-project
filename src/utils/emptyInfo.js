import { v4 as uuidv4 } from "uuid";
const emptyInfo = {
	personalInfo: {
		fName: "Sarim",
		sName: "Ahmed",
		phoneNo: "8582883122",
		email: "sarimbleedblue@gmail.com",
		linkedIn: "https://www.linkedin.com/in/sarim2000/",
		github: "https://www.github.com/sarim2000",
	},
	education: [
		{
			id: uuidv4(),
			universityName: "Sri Sairam College of Engineering",
			city: "Bangalore",
			degree: "BE CSE",
			from: "Aug. 2019",
			to: "May. 2023",
		},
		{
			id: uuidv4(),
			universityName: "Ling Liang High School",
			city: "Kolkata",
			degree: "ISC",
			from: "2006",
			to: "2018",
		},
	],
	experience: [
		{
			id: uuidv4(),
			companyName: "",
			jobDescript: "",
			jobFrom: "",
			jobTo: "",
		},
	],
	achievements: [
		{
			id: uuidv4(),
			what: "",
		},
	],
	skills: [
		{
			id: uuidv4(),
			skill: "",
		},
	],
};

export default emptyInfo;
