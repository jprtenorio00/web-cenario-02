import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">
          <img
            alt=""
            src="spotify-logo-2.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Spotify
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to="/faq"><Nav.Link href="/Faq">FAQ</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Img />
      <Footer />
    </div>
  );
}

function Img() {
  return (
    <div id="container-uziel">
      <img src="spotify-theme.png" class="image-theme" />
      <div class="image-text">
        <p>Escutar muda sua vida, deixa ela mais triste.</p>
        <Button variant="success" id="uziel-lindo"><strong>Baixar Agora</strong></Button>{' '}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <MDBFooter color="black" className="font-small py-3 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <img src="spotify-logo-22.png" id="image-footer" />
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">EMPRESA</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#">Sobre</a>
              </li>
              <li className="list-unstyled">
                <a href="#">Empregos</a>
              </li>
              <li className="list-unstyled">
                <a href="#">For the Record</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">COMUNIDADES</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Para Artistas</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Desenvolvedores</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Publicidade</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Investidores</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Fornecedores</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">LINKS ÚTEIS</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Suporte</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Player da Web</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Aplicativo móvel grátis</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-4">
        <MDBContainer fluid>
          &copy; {new Date().toISOString().slice(0,10)} Copyright: <a href="https://www.bacongeekstore.com" target="_blank"> BaconGeekStore.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default App;