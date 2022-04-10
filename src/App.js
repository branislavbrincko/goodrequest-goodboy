import i18n from "i18next";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Column, MainRow } from "./App.styled";
import ActionButtons from "./components/ActionButtons";
import Form from "./components/form/Form";
import dogImage from "./images/dog-image.png";
import Layout from "./layout/Layout";
import { getShelters } from "./redux/globalSlice";

function App() {
  const dispatch = useDispatch();
  const { currentLang } = useSelector((state) => state.global);

  // Fetch data from API
  useEffect(() => {
    dispatch(getShelters());
  }, [dispatch]);

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang]);

  return (
    <Suspense fallback="Loading... ">
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
    </Suspense>
  );
}

export default App;
