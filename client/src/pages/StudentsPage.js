import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { olderThanAge } from "../common/utils";
import { api } from "../common/api";
import CustomModal from "../common/CustomModal";
import CustomTable from "../common/CustomTable";
import "./StudentsPage.css";

function StudentsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [validated, setValidated] = useState(false);
  const [birthDateIsInvalid, setBirthDateIsInvalid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(SuccessModalContent);
  const [tableData, setTableData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const ageValid = olderThanAge(10, birthDate);
    const noEmptyFields =
      firstName !== "" && lastName !== "" && birthDate !== "";
    if (noEmptyFields) {
      setValidated(false);
      if (ageValid) {
        api
          .post("/api/students/add", { firstName, lastName, birthDate })
          .then((res) => {
            console.log(res);
            setShowModal(true);
            setModalContent(SuccessModalContent);
            loadData()
          })
          .catch((err) => {
            setShowModal(true);
            setModalContent(FailedModalContent);
          });
        clearForm();
      }
    } else {
      setValidated(true);
    }
  };

  const clearForm = () => {
    setBirthDate("");
    setFirstName("");
    setLastName("");
  };

  const loadData = () => {
            api.get("/api/students/all").then((res) => {
              res.data.forEach(
                (d) => (d.birthdate = d.birthdate.split("T")[0])
              );
              setTableData(res.data);
            });
  }
  return (
    <div className="page-content">
      <Form
        className="students-info-form"
        onSubmit={handleSubmit}
        validated={validated}
        noValidate
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Student First Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              First name cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Student Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              Last name cannot be empty!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required
              type="date"
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
                setBirthDateIsInvalid(!olderThanAge(10, birthDate));
              }}
              isInvalid={birthDateIsInvalid}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {birthDate === ""
                ? "Birth date cannot be empty!"
                : "Student's age has to be at least 10"}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="button-container">
          <Button variant="success" onClick={loadData}>See All Students</Button>
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
  body: "Student's info is saved!",
};

const FailedModalContent = {
  title: "Failed!",
  body: "Something went wrong, student's info is not saved!",
};

const columnNames = ["First Name", "Last Name", "Full Name", "Birth Date"];
const propertyNames = ["firstname", "lastname", "fullname", "birthdate"];

export default StudentsPage;
