//https://www.youtube.com/watch?v=14Nb3qPDtBQ&t=249s
import AuthForm from "./components/AuthForm/AuthForm";
import Home from "./pages/Home/Home"
import { Container } from "react-bootstrap";
import { useUserContext } from "./context/userContext";

function App() {
  const { loading, error, user } = useUserContext();

  return (
    <Container style={{ width: "50%" }}>
      {/* {user ? <Home /> : <AuthForm />}
	   */}
	   {error && <p className="error">{error}</p>}
	   {loading ? <h2>Loading...</h2> : <> {user ? <Home /> : <AuthForm />} </>}
    </Container>
  );
}

export default App;
