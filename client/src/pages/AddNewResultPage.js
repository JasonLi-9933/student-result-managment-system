import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { api } from "../common/api";
import CustomModal from "../common/CustomModal";
import CustomTable from "../common/CustomTable";
import "./AddNewResultPage.css";

function AddNewResultPage() {
  const [validated, setValidated] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedScore, setSelectedScore] = useState("A");
  const [courseNames, setCourseNames] = useState([]);
  const [studentNames, setStudentNames] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(SuccessModalContent);
	const [tableData, setTableData] = useState([]);
  useEffect(() => {
    api
      .get("/api/courses/all")
      .then((res) => {
        let courses = res.data.map((d) => d.coursename);
        api.get("/api/students/names").then((res) => {
          setCourseNames(courses);
          setSelectedCourse(courses.length > 0 ? courses[0] : "");
          const fullnames = res.data.map((d) => d.fullname);
          setStudentNames(fullnames);
          setSelectedName(fullnames.length > 0 ? fullnames[0] : "");
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
    const noEmptyFields =
      selectedCourse !== "" && selectedName !== "" && selectedScore !== "";
    if (noEmptyFields) {
      setValidated(false);
      api
        .post("/api/results/add", {
          courseName: selectedCourse,
          studentName: selectedName,
          score: selectedScore,
        })
        .then((res) => {
          setModalContent(SuccessModalContent);
					loadData();
        })
        .catch((err) => {
          setModalContent(FailedModalContent);
          console.log(err);
        });
    } else {
      setModalContent(FailedModalContent);
      setValidated(true);
    }
  };

	const loadData = () => {
		api.get("/api/results/all").then(res => {
			setTableData(res.data);
		})
	}

  return (
    <div className="page-content">
      <Form
        className="new-result-info-form"
        validated={validated}
        noValidate
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Course Name</Form.Label>
            <Form.Select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              isInvalid={validated && selectedCourse === ""}
            >
              {courseNames.map((courseName, i) => (
                <option key={i}>{courseName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Course name cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Student Name</Form.Label>
            <Form.Select
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              isInvalid={validated && selectedName === ""}
            >
              {studentNames.map((studentName, i) => (
                <option key={i}>{studentName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Student name cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Score</Form.Label>
            <Form.Select
              value={selectedScore}
              onChange={(e) => setSelectedScore(e.target.value)}
              isInvalid={validated && selectedScore === ""}
            >
              {scores.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Score cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="button-container">
          <Button variant="success" onClick={loadData}>See All Results</Button>
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

const scores = ["A", "B", "C", "D", "E", "F"];

const SuccessModalContent = {
  title: "Success!",
  body: "New result is saved!",
};

const FailedModalContent = {
  title: "Failed!",
  body: "Something went wrong, new result is not saved!",
};

const columnNames = ["Course Name", "Student Name", "Score"];
const propertyNames = ["coursename", "fullname", "score"];

export default AddNewResultPage;
