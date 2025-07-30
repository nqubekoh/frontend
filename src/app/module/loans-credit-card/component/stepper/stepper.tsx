import { useState } from 'react';
import styles from './stepper.module.sass';
import BasicInformationComponent from "../basic-information/basic-information";
import PersonalInformationComponent from "../personal-information/personal-information";


const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { label: 'Basic Information', component: <BasicInformationComponent onNext={() => setCurrentStep(1)} /> },
        { label: 'Personal Information', component: <PersonalInformationComponent onNext={() => console.log('Submit')} onBack={() => setCurrentStep(0)} /> },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h3> Loans & Cards </h3>
                {steps.map((step, index) => {
                    const isActive = index === currentStep;
                    const isCompleted = index < currentStep;

                    return (
                        <div className={styles.stepWrapper} key={index}>
                            <div
                                className={styles.circle}
                                onClick={() => setCurrentStep(index)}
                                style={{
                                    backgroundColor: isActive ? '#007bff' : isCompleted ? '#28a745' : '#e0e0e0',
                                    color: isActive || isCompleted ? '#fff' : '#555',
                                }}
                            >
                                {index + 1}
                            </div>

                            <div className={styles.label}>{step.label}</div>

                            {index < steps.length - 1 && <div className={styles.verticalLine}></div>}
                        </div>
                    );
                })}
            </div>

            <div className={styles.content}>
                {steps[currentStep].component}
            </div>
        </div>
    );
};

export default Stepper;
