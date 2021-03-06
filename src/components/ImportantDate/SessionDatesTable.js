import React, { useEffect, useState } from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import jsonData from "../../data/importantDatesByYearAndSession";

const SessionDatesTable = () => {
  const [importantDatesBySession, setImportantDatesBySession] = useState([]);
  useEffect(() => {
    setImportantDatesBySession([...jsonData]);
  }, []);

  return (
    <React.Fragment>
      <Tabs defaultActiveKey="autumn21" transition={false} id="ourtable">
        {importantDatesBySession.map((session, index) => {
          return (
            <Tab eventKey={session.eventKey} title={session.title} key={index}>
              <Table striped bordered hover variant="dark" className="table-responsive-sm">
                <thead>
                  <tr>
                    <th></th>
                    <th>Course Start Date</th>
                    <th>Official Result Release Date</th>
                    <th>Census Date</th>
                  </tr>
                  {session.calendars.map((dates, index) => {
                    return (
                      <tr key={index}>
                        <th>{dates.name}</th>
                        <td>{dates.startDate}</td>
                        <td>{dates.resultReleaseDate}</td>
                        <td>{dates.censusDate}</td>
                      </tr>
                    );
                  })}
                </thead>
              </Table>
            </Tab>
          );
        })}
      </Tabs>
    </React.Fragment>
  );
};

export default SessionDatesTable;
