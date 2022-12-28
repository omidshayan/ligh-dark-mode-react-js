import { useEffect, useState } from "react";

function App() {

  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  }

  const [dark, setDark] = useState(getMode());
  
  useEffect(()=>{
    localStorage.setItem("mode", JSON.stringify(dark))
  }, [dark])

  return (
    <div className={dark ? "app dark-mode" : "app"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
            <label className="switch">
              <input 
               type="checkbox"
               onChange={()=> setDark(!dark)}
               checked={dark}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
          <div className="container">
            <h1>{dark ? "Dark mode is activated" : "Light mode is activated"}</h1>
          </div>
          <div className="container">
            <div className="card">
              <div className="card-item">
                <img src="image/1.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/2.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/3.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/4.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
            </div>

            <div className="card">
              <div className="card-item">
                <img src="image/5.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/6.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/7.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
              <div className="card-item">
                <img src="image/8.jpg" alt="" />
                <h2>product</h2>
                <p>description</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
