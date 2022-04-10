import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ActionButtons from "./components/ActionButtons";
import Form from "./components/form/Form";
import dogImage from "./images/dog-image.png";
import Layout from "./layout/Layout";
import { getShelters } from "./redux/globalSlice";

function App() {
  const dispatch = useDispatch();

  // Fetch data from API
  useEffect(() => {
    dispatch(getShelters());
  }, [dispatch]);

  return (
    <Layout>
      <main className="row">
        <div className="column">
          <Form />
          <ActionButtons />
        </div>
        <div className="column">
          <img src={dogImage} alt="dog image" />
        </div>
      </main>
    </Layout>
  );
}

export default App;
