import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CustomModal from "../common/CustomModal";
import CustomTable from "../common/CustomTable";
import { useState } from "react";
import { api } from "../common/api";
import "./CoursesPage.css";
function CoursesPage() {
  const [courseName, setCourseName] = useState("");
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(SuccessModalContent);
	const [tableData, setTableData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (courseName === "") {
      setValidated(true);
    } else {
      setValidated(false);
      api
        .post("/api/courses/add", { courseName })
        .then((res) => {
					loadData();
          setModalContent(SuccessModalContent);
          setShowModal(true);
        })
        .catch((err) => {
          setModalContent(FailedModalContent);
          setShowModal(true);
        });
      clearForm();
    }
  };

  const clearForm = () => {
    setCourseName("");
  };

	const loadData = () => {
		api.get("/api/courses/all").then(res => {
			setTableData(res.data);
		})
	}

  return (
    <div className="page-content">
      <Form
        className="course-info-form"
        onSubmit={handleSubmit}
        validated={validated}
        noValidate
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="8">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Course name cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="button-container">
          <Button variant="success" onClick={loadData}>See All Courses</Button>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
      <CustomModal
        show={showModal}
        setShow={setShowModal}
        title={modalContent.title}
        body={modalContent.body}
      />
			<CustomTable 
				data={tableData}
				columnNames={columnNames}
				propertyNames={propertyNames}
			/>
    </div>
  );
}

const SuccessModalContent = {
  title: "Success!",
  body: "New course is added!",
};

const FailedModalContent = {
  title: "Failed!",
  body: "Something went wrong, new course is not saved!",
};

const columnNames = ["Course Name"];
const propertyNames = ["coursename"];

export default CoursesPage;
