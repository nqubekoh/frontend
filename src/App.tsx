import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApplicationProvider } from "./app/context/ApplicationContext";
import FooterComponent from "./app/footer/footer";
import CasaStepper from "./app/component/stepper/stepper";
import LoansStepper from "./app/module/loans-credit-card/component/stepper/stepper";

function App() {
    return (
        <ApplicationProvider>
            <div className="page-container">
                <main className="main-content">
                    <Router>
                        <Routes>
                            <Route path="/casa" element={<CasaStepper />} />
                            <Route path="/loans" element={<LoansStepper />} />
                        </Routes>
                    </Router>
                </main>
                <FooterComponent />
            </div>
        </ApplicationProvider>
    );
}


export default App;
