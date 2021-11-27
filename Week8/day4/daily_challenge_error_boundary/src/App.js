import './App.css';
import RightColumn from './components/RightColumn';
import LeftColumn from './components/LeftColumn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import './components/LeftColumn.css'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>Error boundaries in react</Navbar.Brand>
    </Container>
  </Navbar>

    <Container fluid>
    <Row >
      <Col xs lg="3" bg="primary" className="colLeft" >
        <LeftColumn />
      </Col>


      <ErrorBoundary>
      <Col className="colRight">
        <RightColumn />
      </Col>
      </ErrorBoundary>
    </Row>
  </Container>
  </>
  );
}

export default App;
