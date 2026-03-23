
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for the Attendance Trend
const data = [
  { name: 'Sep', attendance: 95 },
  { name: 'Oct', attendance: 90 },
  { name: 'Nov', attendance: 88 },
  { name: 'Dec', attendance: 85 },
  { name: 'Jan', attendance: 92 },
  { name: 'Feb', attendance: 89 },
];

const StudentDashboard = () => {
  return (
    <div className="container-fluid p-4 bg-light" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Welcome back, Arun 👋</h2>
        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>A</div>
      </div>

      {/* Top Stats Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-white bg-primary p-3">
            <small>Attendance</small>
            <h3 className="fw-bold">92%</h3>
            <small className="opacity-75">↑ 2% from last month</small>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <small className="text-muted">CGPA</small>
            <h3 className="fw-bold text-dark">8.7</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <small className="text-muted">Leaves Left</small>
            <h3 className="fw-bold text-dark">8</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm text-white bg-success p-3">
            <small>Performance</small>
            <h3 className="fw-bold">Good</h3>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-4">
        <button className="btn btn-primary me-2 px-4 shadow-sm">Apply Leave</button>
        <button className="btn btn-outline-secondary me-2 px-4 shadow-sm">Apply OD</button>
        <button className="btn btn-outline-danger px-4 shadow-sm">Report Issue</button>
      </div>

      {/* Bottom Row: Chart and Announcements */}
      <div className="row g-4">
        {/* Attendance Trend Chart */}
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="mb-4">Attendance Trend</h5>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="attendance" stroke="#0d6efd" fill="#e7f0ff" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Announcements Section */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="mb-4">Announcements</h5>
            <div className="list-group list-group-flush">
              <div className="list-group-item border-0 px-0 mb-3 bg-light rounded p-3">
                <h6 className="fw-bold mb-1">Mid-Semester Exam Schedule Released</h6>
                <small className="text-muted d-block mb-1">Dr. Ramesh Kumar • 2026-02-28</small>
                <p className="small mb-0 text-secondary">The mid-semester examination schedule for March 2026 has been published.</p>
              </div>
              <div className="list-group-item border-0 px-0 mb-3 bg-light rounded p-3">
                <h6 className="fw-bold mb-1">Assignment 3 - Data Structures</h6>
                <small className="text-muted d-block mb-1">Prof. Lakshmi Iyer • 2026-02-27</small>
                <p className="small mb-0 text-secondary">Submit your Assignment 3 on Binary Trees by March 5th.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default StudentDashboard;