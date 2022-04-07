import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./components/form/Form";
import dogImage from "./images/dog-image.png";
import Layout from "./layout/Layout";
import { getShelters } from "./store";

function App() {
  const dispatch = useDispatch();

  // Fetch data from API
  useEffect(() => {
    dispatch(getShelters());
  }, [dispatch]);

  // Component
  return (
    <Layout>
      <main className="row">
        <div className="column">
          <Form />
        </div>
        <div className="column">
          <img src={dogImage} alt="dog image" />
        </div>
      </main>
    </Layout>
  );
}

export default App;
