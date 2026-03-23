import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample Data for Charts
const deptData = [
  { name: 'Computer Science', value: 120, color: '#0d6efd' },
  { name: 'Electronics', value: 95, color: '#198754' },
  { name: 'Mechanical', value: 110, color: '#ffc107' },
  { name: 'Civil', value: 80, color: '#dc3545' },
];

const leaveData = [
  { name: 'Sep', approved: 12, rejected: 3 },
  { name: 'Oct', approved: 18, rejected: 5 },
  { name: 'Nov', approved: 15, rejected: 4 },
  { name: 'Dec', approved: 22, rejected: 7 },
  { name: 'Jan', approved: 10, rejected: 2 },
  { name: 'Feb', approved: 14, rejected: 3 },
];

export default function HodDashboard() {
  return (
    <Container id='asdfghj' fluid className="p-4 bg-light min-vh-70">
      <h4 className="fw-bold mb-4">Welcome back, Dr. 👋</h4>

      {/* Top Stats Cards */}
      <Row className="g-3 mb-4">
        {[
          { title: 'Total Students', value: '405', bg: 'primary', icon: 'bi-people' },
          { title: 'Departments', value: '4', bg: 'white', icon: 'bi-mortarboard', textColor: 'dark' },
          { title: 'Total Leave Requests', value: '4', bg: 'white', icon: 'bi-file-text', textColor: 'dark' },
          { title: 'Pending Approvals', value: '2', bg: 'warning', icon: 'bi-bar-chart', textColor: 'white' },
        ].map((stat, idx) => (
          <Col key={idx} md={3}>
            <Card className={`border-0 shadow-sm h-100 bg-${stat.bg} text-${stat.textColor || 'white'}`}>
              <Card.Body className="d-flex justify-content-between align-items-start">
                <div>
                  <small className="opacity-75">{stat.title}</small>
                  <h3 className="fw-bold mb-0">{stat.value}</h3>
                </div>
                <div className="bg-white bg-opacity-25 rounded p-2">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Charts Row */}
      <Row className="g-4 mb-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <h6 className="fw-bold mb-4">Department-wise Students</h6>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={deptData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {deptData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow-sm p-4 h-100">
            <h6 className="fw-bold mb-4">Leave Trends</h6>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leaveData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="approved" fill="#198754" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="rejected" fill="#dc3545" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Table Section */}
      <Card className="border-0 shadow-sm p-4">
        <h6 className="fw-bold mb-4">Department Overview</h6>
        <Table responsive borderless className="align-middle text-muted">
          <thead className="bg-light text-secondary small text-uppercase">
            <tr>
              <th>Department</th>
              <th>Students</th>
              <th>Avg Attendance</th>
              <th>Avg CGPA</th>
            </tr>
          </thead>
          <tbody className="small">
            {deptData.map((dept, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #f8f9fa' }}>
                <td className="text-dark py-3">{dept.name}</td>
                <td>{dept.value}</td>
                <td>{80 + index}%</td>
                <td>{7.5 + (index * 0.2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}