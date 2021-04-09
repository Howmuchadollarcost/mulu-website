import React from 'react';
import { Col, Card } from "react-bootstrap";

export default function ProjectCard({ imgsrc, link, display }) {
	return (
		<Col md={6} xs={12} style={{ display: display, transition: '1s ease all' }}>
			<a href={link} rel="noopener noreferrer" target="_blank">
				<Card className="portfolio_card mb-4">
					<img src={imgsrc} alt="Reddit-posts" className="card-img" />
				</Card>
			</a>
		</Col>
	)
}

