import React from 'react';

export default function StudentOd() {
  return (
    <section className=" min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <h2 className="fw-bold mb-4">Welcome back, Arun 👋</h2>

            {/* Apply for On-Duty Card */}
            <div className="card border-0 shadow-sm p-4 mb-4 rounded-4">
              <h2 className="h4 fw-bold mb-4">Apply for On-Duty</h2>

              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Event Type</label>
                    <select className="form-select">
                      <option>Select event type</option>
                      <option>Seminar</option>
                      <option>Workshop</option>
                      <option>Competition</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Date</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Event Details</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Describe the event..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4 py-2 fw-bold shadow-sm">
                  Submit Application
                </button>
              </form>
            </div>

            {/* OD History Card */}
            <div className="card border-0 shadow-sm p-4 rounded-4">
              <h3 className="h5 fw-bold mb-3">OD History</h3>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Event</th>
                      <th>Details</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-medium">Workshop</td>
                      <td>AI/ML Workshop at IIT Madras</td>
                      <td>03-03-2026</td>
                      <td>
                        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2">
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