import "./App.css";
import Header from "./components/Header";
import Description from "./components/Main/Description/Description";
import Skills from "./components/Main/Skills/Skills";
import Works from "./components/Main/Works/Works";
import RemoteWork from "./components/Main/RemoteWork/RemoteWorkcomponent";
import Contacts from "./components/Main/Contacts/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Description />
        <Skills />
        <Works />
        <RemoteWork />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
