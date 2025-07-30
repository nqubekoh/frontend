import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stepper from "./app/component/stepper/stepper";
import {ApplicationProvider} from "./app/context/ApplicationContext";
import FooterComponent from "./app/component/footer/footer";

function App() {
    return (
        <ApplicationProvider>
            <main>
                <Router>
                    <Routes>
                        <Route path="/casa" element={<Stepper />} />
                    </Routes>
                </Router>
            </main>
           <footer>
               <FooterComponent />
           </footer>

        </ApplicationProvider>
    );
}

export default App;
