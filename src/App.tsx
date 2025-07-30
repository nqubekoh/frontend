import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {ApplicationProvider} from "./app/context/ApplicationContext";
import FooterComponent from "./app/component/footer/footer";
import CasaStepper from "./app/component/stepper/stepper";
import LoansStepper from "./app/module/loans-credit-card/component/stepper/stepper";


function App() {
    return (
        <ApplicationProvider>
            <main>
                <Router>
                    <Routes>
                        <Route path="/casa" element={<CasaStepper />} />
                        <Route path="/loans" element={<LoansStepper />} />
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
