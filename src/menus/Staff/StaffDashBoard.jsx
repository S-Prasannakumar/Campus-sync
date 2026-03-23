import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Badge, Table } from 'react-bootstrap';

export default function StaffDashboard() {
  const staffName = "Ramesh Kumar";
  const initial = staffName.charAt(0);
  const headerHeight = "80px";
  const sidebarWidth = "285px"; // Matching your header offset

  return (
    <Container fluid className="p-0 bg-light min-vh-100">
      
      {/* 1. FIXED TOP HEADER */}
      <div 
        className="d-flex justify-content-between align-items-center px-4 bg-white shadow-sm" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          right: 0, 
          left: sidebarWidth, 
          height: headerHeight, 
          zIndex: 1030 
        }}
      >
        <div>
          <h4 className="fw-bold mb-0">Welcome back, Dr. {staffName} 👋</h4>
          <small className="text-muted">Faculty Portal • Student Management</small>
        </div>
        
        <div 
          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold shadow-sm" 
          style={{ width: '45px', height: '45px' }}
        >
          {initial}
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div style={{ 
        paddingTop: `calc(${headerHeight} + 20px)`, 
        paddingLeft: '25px', 
        paddingRight: '25px' 
      }}>
        <Row className="g-4">
          
          {/* LEFT SIDE: Pending Requests (NOW WIDER - lg={7}) */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
              <Card.Header className="bg-white border-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-0 text-dark">Student Requests</h5>
                  <small className="text-muted">Review pending Leave and On-Duty applications</small>
                </div>
                <Badge bg="primary" className="bg-opacity-10 text-primary px-3 py-2">3 Pending</Badge>
              </Card.Header>

              <Card.Body className="px-0">
                <Table hover responsive align="middle" className="mb-0">
                  <thead className="bg-light text-muted small text-uppercase">
                    <tr>
                      <th className="ps-4 py-3">Student Details</th>
                      <th>Type</th>
                      <th>Reason</th>
                      <th>Date</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "9123...001", name: "Arun Kumar", type: "Leave", date: "Mar 25", reason: "Medical" },
                      { id: "9123...002", name: "Priya Sharma", type: "OD", date: "Mar 26", reason: "Conference" },
                      { id: "9123...005", name: "Suresh Raina", type: "Leave", date: "Mar 27", reason: "Family" }
                    ].map((req, i) => (
                      <tr key={i}>
                        <td className="ps-4 py-3">
                          <div className="fw-bold text-dark">{req.name}</div>
                          <div className="text-muted extra-small" style={{fontSize: '0.75rem'}}>{req.id}</div>
                        </td>
                        <td>
                          <Badge bg={req.type === 'OD' ? 'info' : 'warning'} className="bg-opacity-10 text-dark fw-normal">
                            {req.type}
                          </Badge>
                        </td>
                        <td className="small text-muted">{req.reason}</td>
                        <td className="small">{req.date}</td>
                        <td className="text-center">
                          <Button variant="success" size="sm" className="rounded-pill px-3 me-2 shadow-sm">Accept</Button>
                          <Button variant="outline-danger" size="sm" className="rounded-pill px-3">Decline</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="p-3 text-center border-top">
                  <Button variant="link" className="text-decoration-none small text-secondary">Show All</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT SIDE: Time Table & Announcements (NOW SMALLER - lg={5}) */}
          <Col lg={5}>
            {/* Time Table */}
            <Card className="border-0 shadow-sm mb-4 rounded-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold m-0 text-secondary">Today's Schedule</h6>
                  <Button variant="outline-primary" size="sm" className="px-3 rounded-pill border-0 bg-light">Edit</Button>
                </div>
                
                <ListGroup variant="flush">
                  {[
                    { time: "09:00 - 10:00", sub: "Data Structures", room: "Lab 1" },
                    { time: "10:15 - 11:15", sub: "Network Security", room: "Room 202" }
                  ].map((slot, i) => (
                    <ListGroup.Item key={i} className="border-0 px-0 mb-2">
                      <div className="p-3 rounded-3 bg-white border-start border-primary border-4 shadow-sm d-flex justify-content-between">
                        <div>
                          <div className="fw-bold small">{slot.sub}</div>
                          <small className="text-muted">{slot.time}</small>
                        </div>
                        <Badge bg="light" text="dark" className="border align-self-center">{slot.room}</Badge>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>

            {/* Announcements */}
            <Card className="border-0 shadow-sm rounded-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold m-0 text-secondary">Announcements</h6>
                  <Button variant="primary" size="sm" className="px-3 rounded-pill">Quick Post</Button>
                </div>
                
                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-light rounded-3 mb-2 border-0 p-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <p className="small mb-0 fw-medium">Assignment 3 Reminder: Deadline tomorrow 5PM.</p>
                      <i className="bi bi-three-dots-vertical text-muted cursor-pointer"></i>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-light rounded-3 border-0 p-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <p className="small mb-0 fw-medium">Lab Session for Sec-B moved to Hall 2.</p>
                      <i className="bi bi-three-dots-vertical text-muted cursor-pointer"></i>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </Container>
  );
}