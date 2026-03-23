import React from 'react';
import { Container, Row, Col, Form, Button, Card, Table, Badge } from 'react-bootstrap';
// Make sure to import bootstrap icons in your index.js or App.js: 
// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function MarkAttendance() {
  return (
    <Container fluid className="bg-light min-vh-100 p-4">
   
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Welcome back, Dr. 👋</h4>
        <div 
          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" 
          style={{ width: '40px', height: '40px' }}
        >
          D
        </div>
      </div>

    
      <Card className="border-0 shadow-sm p-4 mb-4">
        <Card.Body className="p-0">
          <h5 className="fw-bold">Mark Attendance</h5>
          <p className="text-muted small">Mark absentees and OD for your class</p>

          <Row className="g-3 mb-4">
            <Col md={4}>
              <Form.Group>
                <Form.Label className="small text-muted">Date</Form.Label>
                <Form.Control type="date" defaultValue="2026-03-21" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label className="small text-muted">Section</Form.Label>
                <Form.Select>
                  <option>Section A</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={5}>
              <Form.Group>
                <Form.Label className="small text-muted">Search</Form.Label>
                <Form.Control type="text" placeholder="Search by name or reg no..." />
              </Form.Group>
            </Col>
          </Row>

         
          <Row className="g-3">
            <Col md={4}>
              <div className="p-3 border-start border-success border-4 bg-white shadow-sm rounded d-flex align-items-center">
                <i className="bi bi-people text-success fs-4 me-3"></i>
                <div><h4 className="mb-0 fw-bold">4</h4><small className="text-muted">Present</small></div>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 border-start border-danger border-4 bg-white shadow-sm rounded d-flex align-items-center">
                <i className="bi bi-person-x text-danger fs-4 me-3"></i>
                <div><h4 className="mb-0 fw-bold">0</h4><small className="text-muted">Absent</small></div>
              </div>
            </Col>
            <Col md={4}>
              <div className="p-3 border-start border-primary border-4 bg-white shadow-sm rounded d-flex align-items-center">
                <i className="bi bi-check-circle text-primary fs-4 me-3"></i>
                <div><h4 className="mb-0 fw-bold">0</h4><small className="text-muted">OD</small></div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

     
      <Card className="border-0 shadow-sm p-4">
        <h6 className="fw-bold mb-4">Students — Section A (4)</h6>
        <Table responsive hover align="middle" className="text-muted">
          <thead className="bg-light">
            <tr className="small">
              <th>#</th>
              <th>Student</th>
              <th>Reg No</th>
              <th>Attendance %</th>
              <th className="text-center">Absent</th>
              <th className="text-center">OD</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="small">
            <tr>
              <td>1</td>
              <td className="text-dark fw-medium">Arun Kumar</td>
              <td>CS2021001</td>
              <td>92%</td>
              <td className="text-center"><Form.Check type="radio" name="s1" /></td>
              <td className="text-center"><Form.Check type="radio" name="s1" /></td>
              <td>
                <Badge bg="success" className="bg-opacity-10 text-success fw-normal px-2 py-1">
                  Present
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>

      
        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="outline-secondary" size="sm">
            <i className="bi bi-copy me-1"></i> Copy Details
          </Button>
          <Button variant="outline-secondary" size="sm">Reset</Button>
          <Button variant="primary" size="sm" className="px-4">Submit Attendance</Button>
        </div>
      </Card>
    </Container>
  );
}