import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./StudentsPage.css";

function StudentsPage() {
  const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [validated, setValidated] = useState(false);
	const handleSubmit = e => {
		const form = e.currentTarget;
		e.preventDefault();
		e.stopPropagation();
		console.log(firstName, lastName, birthDate);
		if (form.checkValidity()) clearForm();
		setValidated(true);
	}

	const clearForm = () => {
		setBirthDate("");
		setFirstName("");
		setLastName("");
	}
  return (
    <div className="page-content">
      <Form className="students-info-form" onSubmit={handleSubmit} validated={validated} noValidate>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Student First Name</Form.Label>
            <Form.Control
							required
              type="text"
							value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
						<Form.Control.Feedback type="invalid">First name cannot be empty!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Student Last Name</Form.Label>
            <Form.Control
							required
              type="text"
							value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
						<Form.Control.Feedback type="invalid">Last name cannot be empty!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
							required
              type="date"
							value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Row>
				<Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default StudentsPage;
