import React from "react";
import "./App.css";
 
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
{process.env.PUBLIC_URL + '/ATLconnect.png'} alt="Logo"
                        />
                    </div>
                    <li>
                        <a href="#courses">Couses</a>
                    </li>
                    <li>
                        <a href="#tutorials">Tutoials</a>
                    </li>
                    <li>
                        <a href="#jobs">Jbs</a>
                    </li>
                    <li>
                        <a href="#student">Stdent</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            blank title
                        </h1>
                        <p class="text-small">
                            blank blank blank
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            blank title
                        </h1>
                        <p class="text-small">
                            blank
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            blank title
                        </h1>
                        <p class="text-small">
                            blank blank blank
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            blank title
                        </h1>
                        <p class="text-small">
                            blank blank blank
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Contact: blank@gmail.com
                </p>
            </footer>
        </div>
    );
}
 
export default App;
