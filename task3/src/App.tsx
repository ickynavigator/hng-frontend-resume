import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Screens
import ProjectScreen from "./screens/ProjectScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import CertificateScreen from "./screens/CertificateScreen";

// 404
import NotFound from "./screens/NotFoundScreen";

library.add(fab, fas);

const App: React.FC = () => {
  return (
    <Router>
      <Container className="d-flex align-items-center">
        <Container>
          <Header />
          <hr />
          <main>
            <Switch>
              {/* About Screen */}
              <Route path="/projects" component={ProjectScreen} exact />

              {/* About Screen */}
              <Route path="/about" component={AboutScreen} exact />

              {/* Contact Screen */}
              <Route path="/contact" component={ContactScreen} exact />

              {/* Certificates Screen */}
              <Route path="/certificates" component={CertificateScreen} exact />

              {/* Home Screen */}
              <Route path="/" component={HomeScreen} exact />

              {/* 404 page */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <hr />
          <Footer />
        </Container>
      </Container>
    </Router>
  );
};

export default App;
