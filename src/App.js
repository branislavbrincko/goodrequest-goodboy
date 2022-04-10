import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Column, MainRow } from "./App.styled";
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
      <MainRow>
        <Column>
          <Form />
          <ActionButtons />
        </Column>
        <Column>
          <img src={dogImage} alt="dog image" />
        </Column>
      </MainRow>
    </Layout>
  );
}

export default App;
