import { useState } from "react";
import * as React from "react";
// import * as ReactDOM from "react-dom";
import Intro from "./components/introduction/introduction.component";
import emptyInfo from "./utils/emptyInfo";
import { Row, Card, Container, Button } from "react-bootstrap";
import Result from "./components/result/result.component";
import EduShow from "./components/educate/eduShow";
import { v4 as uuidv4 } from "uuid";
import ShowEducation from "./components/result/showEducation.component";
import ShowExperience from "./components/result/showExp";
import ExpShow from "./components/experience/expShow.component";
import AchieveShow from "./components/achievements/achieveShow.component";
import ShowAchievements from "./components/result/showAchievements";
import SkillShow from "./components/skills/skill.component";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import ShowSk from "./components/result/showSk";
import "./App.css";

function App() {
	const [resume, setResume] = useState(emptyInfo);
	const pdfExportComponent = React.useRef(null);
	const exportPDFWithComponent = () => {
		if (pdfExportComponent.current) {
			pdfExportComponent.current.save();
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(name, value);
		setResume((resume) => ({
			...resume,
			personalInfo: {
				...resume.personalInfo,
				[name]: value,
			},
		}));
	};

	//education section
	const handleAddEductaion = (e, id) => {
		const { name, value } = e.target;
		setResume((resume) => {
			const newEdu = resume.education.map((eduInfo) => {
				if (eduInfo.id === id) {
					console.log("hello");
					return { ...eduInfo, [name]: value };
				}
				return eduInfo;
			});
			return { ...resume, education: [...newEdu] };
		});
	};

	const AddButtonEdu = () => {
		const edx = {
			id: uuidv4(),
			universityName: "",
			city: "",
			degree: "",
			from: "",
			to: "",
		};

		setResume((resume) => {
			const x = resume.education.concat(edx);
			return { ...resume, education: [...x] };
		});
	};
	const DeleteEduButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.education.map((eduInfo) => {
				if (eduInfo.id === id) {
					return eduInfo;
				}
			});
			const idx = resume.education.indexOf(newEdu);
			console.log(resume.education);
			return { ...resume, education: resume.education.splice(idx, 1) };
		});
	};

	//experience section
	const handleAddExperience = (e, id) => {
		const { name, value } = e.target;
		setResume((resume) => {
			const newEdu = resume.experience.map((eduInfo) => {
				if (eduInfo.id === id) {
					console.log("hello");
					return { ...eduInfo, [name]: value };
				}
				return eduInfo;
			});
			return { ...resume, experience: [...newEdu] };
		});
	};
	const AddButtonExp = () => {
		const edx = {
			id: uuidv4(),
			companyName: "",
			jobDescript: "",
			jobFrom: "",
			jobTo: "",
		};

		setResume((resume) => {
			const x = resume.experience.concat(edx);
			return { ...resume, experience: [...x] };
		});
	};
	const DeleteExpButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.experience.map((eduInfo) => {
				if (eduInfo.id === id) {
					return eduInfo;
				}
			});
			const idx = resume.experience.indexOf(newEdu);
			console.log(resume.experience);
			return { ...resume, experience: resume.experience.splice(idx, 1) };
		});
	};

	//achievements
	const handleSkills = (e, id) => {
		const { name, value } = e.target;
		setResume((resume) => {
			const newEdu = resume.skills.map((eduInfo) => {
				if (eduInfo.id === id) {
					console.log("hello");
					return { ...eduInfo, [name]: value };
				}
				return eduInfo;
			});
			return { ...resume, skills: [...newEdu] };
		});
	};
	const AddButtonSkills = () => {
		const edx = {
			id: uuidv4(),
			skill: "",
		};

		setResume((resume) => {
			const x = resume.skills.concat(edx);
			return { ...resume, skills: [...x] };
		});
	};
	const DeleteSkillButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.skills.map((eduInfo) => {
				if (eduInfo.id === id) {
					return eduInfo;
				}
			});
			const idx = resume.skills.indexOf(newEdu);
			console.log(resume.skills);
			return { ...resume, skills: resume.skills.splice(idx, 1) };
		});
	};
	//skills
	const handleAchievements = (e, id) => {
		const { name, value } = e.target;
		setResume((resume) => {
			const newEdu = resume.achievements.map((eduInfo) => {
				if (eduInfo.id === id) {
					console.log("hello");
					return { ...eduInfo, [name]: value };
				}
				return eduInfo;
			});
			return { ...resume, achievements: [...newEdu] };
		});
	};
	const AddButtonAchievement = () => {
		const edx = {
			id: uuidv4(),
			what: "",
		};

		setResume((resume) => {
			const x = resume.achievements.concat(edx);
			return { ...resume, achievements: [...x] };
		});
	};
	const DeleteAchievementButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.achievements.map((eduInfo) => {
				if (eduInfo.id === id) {
					return eduInfo;
				}
			});
			const idx = resume.achievements.indexOf(newEdu);
			console.log(resume.experience);
			return { ...resume, achievements: resume.achievements.splice(idx, 1) };
		});
	};
	return (
		<div className="App">
			<Card>
				<Row>
					<Intro handleChange={handleChange} />
				</Row>
				<Row>
					<Container>
						<h3>Education Info</h3>
						<button onClick={AddButtonEdu}>Add</button>
					</Container>

					{resume.education.map((edu) => {
						return (
							<EduShow
								edu={edu}
								key={edu.id}
								onChange={handleAddEductaion}
								onDelete={DeleteEduButton}
							/>
						);
					})}
				</Row>
				<Row>
					<Container>
						<h3>Experience Info</h3>
						<button onClick={AddButtonExp}>Add</button>
					</Container>

					{resume.experience.map((exp) => {
						return (
							<ExpShow
								exp={exp}
								key={exp.id}
								onChange={handleAddExperience}
								onDelete={DeleteExpButton}
							/>
						);
					})}
				</Row>
				<Row>
					<Container>
						<h3>Achievements Info</h3>
						<button onClick={AddButtonAchievement}>Add</button>
					</Container>

					{resume.achievements.map((exp) => {
						return (
							<AchieveShow
								ach={exp}
								key={exp.id}
								onChange={handleAchievements}
								onDelete={DeleteAchievementButton}
							/>
						);
					})}
				</Row>
				<Row>
					<Container>
						<h3>Skills Info</h3>
						<button onClick={AddButtonSkills}>Add</button>
					</Container>

					{resume.skills.map((exp) => {
						return (
							<SkillShow
								ski={exp}
								key={exp.id}
								onChange={handleSkills}
								onDelete={DeleteSkillButton}
							/>
						);
					})}
				</Row>
				<Container>
					<Button
						variant="primary"
						size="lg"
						block
						onClick={exportPDFWithComponent}
					>
						Generate PDF
					</Button>
				</Container>
			</Card>
			<PDFExport ref={pdfExportComponent} paperSize="A4" margin="0cm">
				<Container className="result justify-content-md-between">
					<Row>
						<Result {...resume.personalInfo} />
						<Container className="mt-2">
							{resume.education.length !== 0 ? <h3>Education</h3> : null}
							{resume.education.map((x) => {
								return (
									<ShowEducation
										key={x.id}
										universityName={x.universityName}
										degree={x.degree}
										city={x.city}
										from={x.from}
										to={x.to}
									/>
								);
							})}
						</Container>
						<Container className="mt-2">
							{resume.experience.length !== 0 ? <h3>Experience</h3> : null}
							{resume.experience.map((x) => {
								return (
									<ShowExperience
										key={x.id}
										companyName={x.companyName}
										jobDescript={x.jobDescript}
										jobFrom={x.jobFrom}
										jobTo={x.jobTo}
									/>
								);
							})}
						</Container>
						<Container className="mt-2">
							{resume.achievements.length !== 0 ? <h3>Achievements</h3> : null}
							{resume.achievements.map((x) => {
								return <ShowAchievements key={x.id} x={x} />;
							})}
						</Container>
						<Container className="mt-2">
							{resume.skills.length !== 0 ? <h3>Skills</h3> : null}
							{resume.skills.map((x) => {
								return <ShowSk key={x.id} x={x} />;
							})}
						</Container>
					</Row>
				</Container>
			</PDFExport>
		</div>
	);
}

export default App;
