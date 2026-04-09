import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { HiSpeakerphone } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import './Staffff.css';

export default function StaffAnnouncement() {
  return (
    <Container fluid className="px-4">
     
      <header className="welcome d-flex justify-content-between align-items-center py-3 border-bottom">
        <h4 className="mb-0">Welcome back Mr. Balaji</h4>
        <div className="profile-circle">B</div>
      </header>

      
      <Row className=" mt-5">
        <Col md={8} lg={6}>
          <div className="Anunocesec">
            <h1 className="mb-4">Announcements</h1>
            
            <Card className="p-4 shadow-sm border-primary-custom">
              <Form>
                <h5 className="mb-4 d-flex align-items-center gap-2">
                  <HiSpeakerphone className="text-primary-custom" size={22} /> 
                  Announcement
                </h5>

                <Form.Group className="mb-3">
                  <Form.Label className="text-primary-custom fw-bold">Title:</Form.Label>
                  <Form.Control type="text" placeholder="Announcement title" className="bg-light-custom" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="text-primary-custom fw-bold">Content:</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Write Your Announcement"
                    style={{ height: '100px' }}
                    className="bg-light-custom"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="text-primary-custom fw-bold">Add File:</Form.Label>
                  <Form.Control type="file" className="bg-light-custom" />
                </Form.Group>

                <Button variant="primary" className="btn-primary-custom d-flex align-items-center gap-2">
                  <IoIosSend /> Post
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}