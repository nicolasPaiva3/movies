// api = https://sujeitoprogramador.com/r-api/?api=filmes
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Router from "./router";
function App() {
  return (
    <>
      <div className="app">
        <Router />
        <ToastContainer autoClose={1000}/>
      </div>
    </>
  );
}

export default App;
