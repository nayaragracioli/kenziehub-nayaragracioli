import { useContext } from "react";
import { DefaultTemplate, Loading } from "./components";
import { RouterMain } from "./routes/RouterMain";
import "./style/index.scss";
import { UserContext } from "./providers/UserContext";


function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <DefaultTemplate>
        {loading ? <Loading/> : <RouterMain /> }
      </DefaultTemplate>
    </>
  )
}

export default App
