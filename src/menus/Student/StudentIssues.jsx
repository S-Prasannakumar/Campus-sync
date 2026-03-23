export default function StudentIssues() {
  return (
    <section className=" min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            
            <h2 className="fw-bold mb-4 text-dark">Welcome back, Arun 👋</h2>

            {/* Report Issue Form Card */}
            <div className="card border-0 shadow-sm p-4 mb-5 rounded-4">
              <h2 className="h4 fw-bold mb-4">Report Issues</h2>

              <form>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Category</label>
                    <select className="form-select">
                      <option>Select category</option>
                      <option>Classroom</option>
                      <option>Academic</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Title</label>
                    <input type="text" className="form-control" placeholder="Issue title" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    placeholder="Describe the issue in detail..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary px-4 py-2 fw-bold shadow-sm">
                  Submit Report
                </button>
              </form>
            </div>

            {/* My Issues Section */}
            <div className="mt-5">
              <h2 className="h4 fw-bold mb-4">My Issues</h2>

              {/* Issue Item 1 */}
              <div className="card border-0 shadow-sm p-4 mb-3 rounded-4 hover-shadow transition-all">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="issue-content">
                    <h3 className="h5 fw-bold mb-2">Projector not working in Room 301</h3>
                    <p className="text-muted mb-3">
                      The projector in Room 301 has been malfunctioning for the past week.
                    </p>
                    <small className="text-secondary opacity-75 fw-medium">
                      Classroom • 2026-02-27
                    </small>
                  </div>
                  <span className="badge bg-danger-subtle text-danger px-3 py-2 border border-danger-subtle">
                    Open
                  </span>
                </div>
              </div>

              {/* Issue Item 2 */}
              <div className="card border-0 shadow-sm p-4 mb-3 rounded-4 hover-shadow transition-all">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="issue-content">
                    <h3 className="h5 fw-bold mb-2">Incorrect marks in DBMS</h3>
                    <p className="text-muted mb-3">
                      My internal marks for DBMS seem incorrect. I scored 45 but it shows 35.
                    </p>
                    <small className="text-secondary opacity-75 fw-medium">
                      Academic • 2026-02-25
                    </small>
                  </div>
                  <span className="badge bg-warning-subtle text-warning-emphasis px-3 py-2 border border-warning-subtle">
                    In Progress
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}