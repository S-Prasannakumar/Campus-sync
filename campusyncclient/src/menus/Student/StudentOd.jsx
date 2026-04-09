import React, { useState } from 'react';
import axios from 'axios';

export default function StudentOd() {
  // Initialize state with empty strings
  const [odType, setOdType] = useState({
    odtype: "",
    oddate: "",
    odreason: ""
  });

  // Handle input changes for all fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOdType({ ...odType, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!odType.odtype || !odType.oddate || !odType.odreason) {
      alert("Please fill in all fields.");
      return;
    }
      else{
      console.log(odType);
      alert("On-Duty application submitted successfully!"); 
    }

  try{
      await axios.post("http://localhost:5000/OD", odType);
      alert("On-Duty application submitted successfully! db updated");
    }  catch(error){
      console.error("Error submitting on-duty application:", error);
      alert("Failed to submit on-duty application. Please try again.");
    }
  };

  return (
    <section className="min-vh-100 py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <h2 className="fw-bold mb-4">Welcome back, Arun 👋</h2>

            {/* Apply for On-Duty Card */}
            <div className="card border-0 shadow-sm p-4 mb-4 rounded-4">
              <h2 className="h4 fw-bold mb-4">Apply for On-Duty</h2>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Event Type</label>
                    <select 
                      name="odtype" 
                      className="form-select" 
                      onChange={handleChange} 
                      value={odType.odtype}
                    >
                      <option value="">Select event type</option>
                      <option value="Seminar">Seminar</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Competition">Competition</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Date</label>
                    <input 
                      type="date" 
                      name="oddate" 
                      className="form-control" 
                      onChange={handleChange} 
                      value={odType.oddate} 
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Event Details</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Describe the event (e.g., location, objective)..."
                    name="odreason"
                    onChange={handleChange}
                    value={odType.odreason}
                  />
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
                    {/* This would eventually be mapped from an array of previous applications */}
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