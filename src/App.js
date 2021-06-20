import { useState, useRef } from "react";
import * as React from "react";
import ProShow from "./components/project/project.component";
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
import ShowProj from "./components/result/projectsShow";
import ShowSk from "./components/result/showSk";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import "./App.css";

function App() {
	const [resume, setResume] = useState(emptyInfo);
	const componentRef = useRef();
	// const pdfExportComponent = React.useRef(null);
	// const container = React.useRef(null);
	// const exportPDFWithMethod = () => {
	// 	let element = container.current || document.body;
	// 	savePDF(element, {
	// 		paperSize: "A4",
	// 		margin: 0,
	// 		fileName: `Report for ${new Date().getFullYear()}`,
	// 	});
	// };

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
			const newEdu = resume.education.filter((eduInfo) => {
				if (eduInfo.id !== id) {
					return eduInfo;
				}
			});

			return { ...resume, education: newEdu };
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
			const newEdu = resume.experience.filter((eduInfo) => {
				if (eduInfo.id !== id) {
					return eduInfo;
				}
			});

			return { ...resume, experience: newEdu };
		});
	};

	//skills
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
			const newEdu = resume.skills.filter((eduInfo) => {
				if (eduInfo.id !== id) {
					return eduInfo;
				}
			});
			console.log(newEdu);
			return { ...resume, skills: newEdu };
		});
	};
	//achievements
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
			const newEdu = resume.achievements.filter((eduInfo) => {
				if (eduInfo.id !== id) {
					return eduInfo;
				}
			});

			return { ...resume, achievements: newEdu };
		});
	};

	//projects
	const handleChangePro = (e, id) => {
		const { name, value } = e.target;
		console.log(id);
		console.log(name, value);
		setResume((resume) => {
			if (name === "poi") {
				const newEdu = resume.projects.map((eduInfo) => {
					const y = eduInfo.points.map((x) => {
						if (x.id === id) {
							return { ...x, [name]: value };
						}
						return x;
					});
					console.log(eduInfo.points);
					return { ...eduInfo, points: [...y] };
				});
				console.log(newEdu);
				return { ...resume, projects: [...newEdu] };
			} else {
				console.log("hesllo");
				const newEdu = resume.projects.map((eduInfo) => {
					if (eduInfo.id === id) {
						console.log(value);
						return { ...eduInfo, [name]: value };
					}
					return eduInfo;
				});
				return { ...resume, projects: [...newEdu] };
			}
		});
	};
	const AddButtonPro = () => {
		const edx = {
			id: uuidv4(),
			title: "",
			tech: "",
			points: [
				{ id: uuidv4(), poi: "" },
				{ id: uuidv4(), poi: "" },
			],
			link: "",
		};

		setResume((resume) => {
			const x = resume.projects.concat(edx);
			return { ...resume, projects: [...x] };
		});
	};
	const DeleteProjectButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.projects.filter((eduInfo) => {
				if (eduInfo.id !== id) {
					return eduInfo;
				}
			});

			return { ...resume, projects: newEdu };
		});
	};
	const DeleteProjectsPointButton = (id) => {
		console.log(id);
		setResume((resume) => {
			// eslint-disable-next-line array-callback-return
			const newEdu = resume.projects.map((eduInfo) => {
				const y = eduInfo.points.filter((x) => {
					return x.id !== id;
				});
				console.log(eduInfo);
				console.log(y);
				return { ...eduInfo, points: y };
			});
			console.log(newEdu);
			return { ...resume, projects: newEdu };
		});
	};
	const AddProjectsPointButton = (id) => {
		const edx = {
			id: uuidv4(),
			poi: "",
		};

		setResume((resume) => {
			let y = [];
			const newEdu = resume.projects.map((eduInfo) => {
				if (eduInfo.id === id) {
					// console.log(eduInfo);
					y = eduInfo.points;
					console.log(y);
					const x = y.concat(edx);
					console.log(x);
					return { ...eduInfo, points: x };
				}
			});

			return { ...resume, projects: newEdu };
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
						<h3>Projects Info</h3>
						<button onClick={AddButtonPro}>Add</button>
					</Container>

					{resume.projects.map((exp) => {
						return (
							<ProShow
								pro={exp}
								key={exp.id}
								onDelete={DeleteProjectButton}
								onChange={handleChangePro}
								onPointDelete={DeleteProjectsPointButton}
								onPointAdd={AddProjectsPointButton}
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
					<ReactToPrint
						trigger={() => (
							<Button style={{ backgroundColor: "#343A40" }} size="lg" block>
								Print PDF
							</Button>
						)}
						content={() => componentRef.current}
					/>
				</Container>
			</Card>

			<Container
				className="result justify-content-md-between mt-3"
				ref={componentRef}
			>
				<Row>
					<Result {...resume.personalInfo} />
					<Container className="mt-2">
						{resume.education.length !== 0 ? (
							<h3 className="sep">Education</h3>
						) : null}
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
						{resume.projects.length !== 0 ? (
							<h3 className="sep">Projects</h3>
						) : null}
						{resume.projects.map((x) => {
							return (
								<ShowProj
									link={x.link}
									key={x.id}
									title={x.title}
									tech={x.tech}
									points={x.points}
								/>
							);
						})}
					</Container>
					<Container className="mt-2">
						{resume.experience.length !== 0 ? (
							<h3 className="sep">Experience</h3>
						) : null}
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
						{resume.achievements.length !== 0 ? (
							<h3 className="sep">Achievements</h3>
						) : null}
						{resume.achievements.map((x) => {
							return <ShowAchievements key={x.id} x={x} />;
						})}
					</Container>
					<Container className="mt-2">
						{resume.skills.length !== 0 ? (
							<h3 className="sep">Skills</h3>
						) : null}
						{resume.skills.map((x) => {
							return <ShowSk key={x.id} x={x} />;
						})}
					</Container>
				</Row>
			</Container>
		</div>
	);
}

export default App;
