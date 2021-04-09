import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as Logo } from './Test.svg';

export default function index() {
	return (
		<footer className="footer" id="footer">
			<Container fluid>
				<Row>
					<Col className="text-center">
						<Logo />
						<h6 className="made_by">Muluberhan Yonas Gidey</h6>
						<h6 className="copyright">All rights reserved ©</h6>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}
