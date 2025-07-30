// StepForm.tsx
import { useState } from 'react';
import BasicInformationComponent from '../basic-information/basic-information';
import PersonalInformationComponent from '../personal-information/personal-information';
import styles from './stepper.module.sass';

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        { label: '(1)  Basic Information', component: <BasicInformationComponent onNext={() => setCurrentStep(1)} /> },
        { label: '(2)  Personal Information', component: <PersonalInformationComponent onNext={() => console.log('Final submit')} onBack={() => setCurrentStep(0)} /> },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.stepper}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`${styles.step} ${currentStep === index ? styles.active : ''}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {step.label}
                    </div>
                ))}
            </div>
            <div className={styles.content}>
                {steps[currentStep].component}
            </div>
        </div>
    );
};

export default Stepper;