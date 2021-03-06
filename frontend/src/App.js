import Header from "./components/header";
import Footer from "./components/footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";


const App = () => {
  return (
    <Router>
        <Header/>
        <main className={`py-3`}>
            <Container>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/product/:id' component={ProductScreen} />
            </Container>
        </main>
        <Footer/>
    </Router>
  );
}
export default App;
