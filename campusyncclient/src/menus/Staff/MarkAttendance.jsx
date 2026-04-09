import React from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Badge, ProgressBar, InputGroup } from 'react-bootstrap';

export default function NarkAttendance() {
  // 1. Demo Data: 10 Students
  const initialStudents = [
    { id: 1, regNo: '9123128001', name: 'Arun Kumar', attendance: 91, status: 'Present' },
    { id: 2, regNo: '9123128002', name: 'Brinda Ravi', attendance: 95, status: 'Present' },
    { id: 3, regNo: '9123128003', name: 'Chakravarthy S', attendance: 78, status: 'Present' },
    { id: 4, regNo: '9123128004', name: 'Divya Priya', attendance: 88, status: 'Present' },
    { id: 5, regNo: '9123128005', name: 'Eswaran K', attendance: 74, status: 'Absent' },
    { id: 6, regNo: '9123128006', name: 'Fatima Banu', attendance: 82, status: 'Present' },
    { id: 7, regNo: '9123128007', name: 'Ganesh M', attendance: 90, status: 'Present' },
    { id: 8, regNo: '9123128008', name: 'Harini R', attendance: 85, status: 'Present' },
    { id: 9, regNo: '9123128009', name: 'Ishaan V', attendance: 65, status: 'Absent' },
    { id: 10, regNo: '9123128010', name: 'Janani K', attendance: 92, status: 'Present' },
  ];

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      {/* Top Header */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <h3 className="fw-bold m-0">Daily Attendance</h3>
        <Button variant="primary" className="px-4 fw-bold" style={{ backgroundColor: '#1e40af' }}>Save & Submit</Button>
      </div>
      <p className="text-muted small mb-4">Mark and manage student attendance for your classes</p>

      {/* Filter Card */}
      <Card className="border-0 shadow-sm p-4 mb-4 rounded-3">
        <Row className="g-3">
          <Col md={3}>
            <Form.Label className="small text-muted fw-bold">CLASS / SECTION</Form.Label>
            <Form.Select className="bg-light border-0 py-2">
              <option>CSE - Section A (III Year)</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label className="small text-muted fw-bold">SUBJECT</Form.Label>
            <Form.Select className="bg-light border-0 py-2">
              <option>Data Structures (CS301)</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label className="small text-muted fw-bold">DATE</Form.Label>
            <Form.Control type="date" defaultValue="2026-03-21" className="bg-light border-0 py-2" />
          </Col>
          <Col md={3}>
            <Form.Label className="small text-muted fw-bold">PERIOD</Form.Label>
            <Form.Select className="bg-light border-0 py-2">
              <option>1st (09:00 - 10:00)</option>
            </Form.Select>
          </Col>
        </Row>
        <div className="mt-3 d-flex gap-2">
          <Button variant="success" size="sm" className="px-3">All Present</Button>
          <Button variant="danger" size="sm" className="px-3" style={{ backgroundColor: '#991b1b' }}>All Absent</Button>
        </div>
      </Card>

      {/* Summary Stats Boxes */}
      <div className="d-flex gap-3 mb-4">
        <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2 border border-primary border-opacity-25 fw-normal">Total: <span className="fw-bold">31</span></Badge>
        <Badge bg="success" className="bg-opacity-10 text-success px-3 py-2 border border-success border-opacity-25 fw-normal">Present: <span className="fw-bold">10</span></Badge>
        <Badge bg="danger" className="bg-opacity-10 text-danger px-3 py-2 border border-danger border-opacity-25 fw-normal">Absent: <span className="fw-bold">0</span></Badge>
        <Badge bg="secondary" className="bg-opacity-10 text-dark px-3 py-2 border border-secondary border-opacity-25 fw-normal">Attendance: <span className="fw-bold">100%</span></Badge>
      </div>

      {/* Student List Card */}
      <Card className="border-0 shadow-sm rounded-3">
        <Card.Header className="bg-white border-0 py-3 d-flex justify-content-between align-items-center">
          <h6 className="fw-bold m-0">Student List — CSE Section A (III Year)</h6>
          <InputGroup style={{ width: '250px' }} className="border rounded">
            <InputGroup.Text className="bg-white border-0"><i className="bi bi-search text-muted"></i></InputGroup.Text>
            <Form.Control placeholder="Search student..." className="border-0 shadow-none ps-0" />
          </InputGroup>
        </Card.Header>

        <Table hover responsive className="mb-0 align-middle">
          <thead className="bg-light text-muted small text-uppercase">
            <tr>
              <th className="ps-4">#</th>
              <th>Register Number</th>
              <th>Student Name</th>
              <th style={{ width: '250px' }}>Cumulative Att%</th>
              <th className="text-center">Today</th>
            </tr>
          </thead>
          <tbody>
            {initialStudents.map((student, index) => (
              <tr key={student.id}>
                <td className="ps-4 text-muted fw-bold">{index + 1}</td>
                <td className="text-muted">{student.regNo}</td>
                <td className="fw-bold">{student.name}</td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <ProgressBar 
                        now={student.attendance} 
                        style={{ height: '6px', flexGrow: 1 }} 
                        variant={student.attendance > 75 ? 'primary' : 'danger'} 
                    />
                    <span className="small fw-bold text-primary">{student.attendance}%</span>
                  </div>
                </td>
                <td className="text-center">
                  <div className="d-inline-flex border rounded overflow-hidden">
                    <Button 
                      variant={student.status === 'Present' ? 'success' : 'white'} 
                      size="sm" 
                      className={`px-3 border-0 rounded-0 ${student.status === 'Present' ? 'bg-opacity-10 text-success' : 'text-muted'}`}
                    >
                      Present
                    </Button>
                    <div className="border-end"></div>
                    <Button 
                      variant={student.status === 'Absent' ? 'danger' : 'white'} 
                      size="sm" 
                      className={`px-3 border-0 rounded-0 ${student.status === 'Absent' ? 'bg-opacity-10 text-danger' : 'text-muted'}`}
                    >
                      Absent
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}