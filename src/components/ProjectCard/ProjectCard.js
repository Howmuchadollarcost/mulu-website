import React from 'react';
import { Col, Card } from "react-bootstrap";

export default function ProjectCard({ imgsrc, link, display,title}) {

	console.log(link)
	return (
		<Col md={6} xs={12} style={{ display: display, transition: '1s ease all', marginBottom: '20px' }}>
			<a href={link} rel="noopener noreferrer" target="_blank">
				<Card className="portfolio_card mb-4">
					<img src={imgsrc.default} alt="Reddit-posts" className="card-img" />
				</Card>
			</a>
			<a className="project_title" href={title} rel="noopener noreferrer" target="_blank">{title ? 'Github': ''}</a>
			<a className="project_title" href={link} rel="noopener noreferrer" target="_blank">Link</a>
		</Col>
	)
}

