import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from '../../assets/data/projects'


export default function Portfolio() {
	const [show, setShow] = useState(false);
	return (
		<section className="portfolio" id="portfolio">
			<Container fluid>
				<Row>
					<Col>
						<div className="text-center mb-5">
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="laptop"
								className="svg-inline--fa fa-laptop fa-w-20 portfolio-icon mb-1"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
							>
								<path
									fill="currentColor"
									d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
								></path>
							</svg>
							<h3 className="portfolio-title">Recent works</h3>
							<p className="portfolio-desc">Watch some projects I have made</p>
						</div>
					</Col>
				</Row>
				<Row>
					<ProjectCard key={projects[0].key} imgsrc={projects[0].imgsrc} link={projects[0].link} />
					<ProjectCard key={projects[1].key} imgsrc={projects[1].imgsrc} link={projects[1].link} />
					<ProjectCard display={show ? 'block' : 'none'} key={projects[2].key} imgsrc={projects[2].imgsrc} link={projects[2].link} />
					<ProjectCard display={show ? 'block' : 'none'} key={projects[3].key} imgsrc={projects[3].imgsrc} link={projects[3].link} />
				</Row>
				<Row>
					<Col className="mt-5 text-center">
						<button className="see_more" onClick={() => setShow(!show)}>{show ? 'See less' : 'See more'}</button>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
