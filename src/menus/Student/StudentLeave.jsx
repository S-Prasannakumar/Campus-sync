
import React from 'react';

export default function StudentLeave(){
  return (
    <section className=" min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <h2 className="fw-bold mb-4">Welcome back, Arun 👋</h2>

            {/* Apply Leave Card */}
            <div className="card border-0 shadow-sm p-4 mb-4 rounded-4">
              <h2 className="h4 fw-bold">Apply for Leave</h2>
              <p className="text-muted mb-4">
                Remaining leaves: <span className="badge bg-primary rounded-pill">8</span>
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Leave Type</label>
                  <select className="form-select w-50">
                    <option>Select type</option>
                    <option>Sick Leave</option>
                    <option>Emergency Leave</option>
                  </select>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Start Date</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">End Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Reason</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Explain your reason for leave..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4 py-2 fw-bold">
                  Submit Application
                </button>
              </form>
            </div>

            {/* Leave History Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4">
              <h3 className="h5 fw-bold mb-3">Leave History</h3>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Type</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Reason</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sick</td>
                      <td>01-03-2026</td>
                      <td>03-03-2026</td>
                      <td>Fever</td>
                      <td>
                        <span className="badge bg-success-subtle text-success border border-success-subtle">
                          Approved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}