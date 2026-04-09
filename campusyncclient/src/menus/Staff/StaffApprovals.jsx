import React from 'react';
import { Container, Tabs, Tab, Table, Badge, Button, Card } from 'react-bootstrap';

export default function StaffApprovals() {
  // Demo Data
  const requests = [
    { id: 1, name: "Arun Kumar", reg: "9123...001", type: "Leave", date: "Mar 25", reason: "Medical", attendance: 92, cgpa: 8.5, status: "Pending" },
    { id: 2, name: "Priya Sharma", reg: "9123...002", type: "OD", date: "Mar 26", reason: "Symposium", attendance: 74, cgpa: 7.2, status: "Pending" },
    { id: 3, name: "Suresh Raina", reg: "9123...005", type: "Leave", date: "Mar 27", reason: "Personal", attendance: 88, cgpa: 6.9, status: "Approved" }
  ];

  // Helper function to render the table rows based on tab
  const renderTable = (filterType) => (
    <Table responsive hover align="middle" className="mt-3">
      <thead className="bg-light small text-muted">
        <tr>
          <th>STUDENT DETAILS</th>
          <th>METRICS (ATT% / CGPA)</th>
          <th>DURATION & REASON</th>
          <th className="text-center">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {requests
          .filter(r => filterType === 'Approved' ? r.status === 'Approved' : r.type === filterType && r.status === 'Pending')
          .map((req) => (
            <tr key={req.id}>
              <td>
                <div className="fw-bold">{req.name}</div>
                <small className="text-muted">{req.reg}</small>
              </td>
              <td>
                <div className="d-flex gap-2">
                  <Badge bg={req.attendance < 75 ? 'danger' : 'success'} className="bg-opacity-10 text-dark fw-normal border">
                    Att: {req.attendance}%
                  </Badge>
                  <Badge bg="primary" className="bg-opacity-10 text-primary fw-normal border">
                    CGPA: {req.cgpa}
                  </Badge>
                </div>
              </td>
              <td>
                <div className="small fw-bold">{req.date}</div>
                <div className="extra-small text-muted" style={{fontSize: '0.8rem'}}>{req.reason}</div>
              </td>
              <td className="text-center">
                {req.status === 'Pending' ? (
                  <>
                    <Button variant="success" size="sm" className="rounded-pill px-3 me-2">Approve</Button>
                    <Button variant="outline-danger" size="sm" className="rounded-pill px-3">Reject</Button>
                  </>
                ) : (
                  <Badge bg="success" className="px-3 py-2">Approved</Badge>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <div className="mb-4">
        <h3 className="fw-bold">Request Approvals</h3>
        <p className="text-muted small">Manage student Leave and OD applications with academic insights.</p>
      </div>

      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-4">
          <Tabs defaultActiveKey="Leave" id="approval-tabs" className="custom-tabs mb-3 border-0">
            <Tab eventKey="Leave" title="Leave Requests">
              {renderTable('Leave')}
            </Tab>
            <Tab eventKey="OD" title="OD Requests">
              {renderTable('OD')}
            </Tab>
            <Tab eventKey="Approved" title="Approval History">
              {renderTable('Approved')}
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
}