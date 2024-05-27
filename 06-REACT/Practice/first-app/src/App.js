import "./App.css";
import Embedding from "./components/embeddinJSX";
import UserProfile from "./components/userProfileCard";
import Props from "./components/Props/Props";
import Product from "./components/Props/Products/Product";
import Clock from "./components/Props/Clock"
import DefaultProps from "./components/Props/DefaultProps/DefaultProps";
// import ExtractingComponents from './components/ExtractingComponents'

function Button() {
  return <button>I am button</button>;
}

function App() {
  return (
    <>
      <div className="app">
        <h1>Hello World</h1>

        {/* Button added */}
        <Button />
      </div>


      {/* embedding JSX */}
      <Embedding />

      {/* User Profile Card */}
      <UserProfile />

      {/* props */}
      <Props />

      {/* Extracting components */}
      {/* <ExtractingComponents author ={{ avatarUrl : "asdfgh", name : "asdfgh"}}/> */}


      {/* Rendering Product */}
      <Product />
      
      {/* Rendering Clock */}
      Clock <Clock />

{/* Rendering Default props */}
<DefaultProps/>

    </>

  );
}

export default App;
