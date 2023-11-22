import { DefaultTemplate } from "./components";
import { RouterMain } from "./routes/RouterMain";
import "./style/index.scss";


function App() {


  return (
    <>
      <DefaultTemplate>
        <RouterMain />
      </DefaultTemplate>
    </>
  )
}

export default App
