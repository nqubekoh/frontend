import { useState } from 'react';
import styles from './personal-information.module.sass';
import { useApplicationContext } from '../../context/ApplicationContext';
import {PersonalInformation} from "../../model/personal-information";
import {createFormChangeHandler} from "../../service/method";

type Props = {
    onNext: () => void;
    onBack: () => void;
};
export const PersonalInformationComponent = ({ onBack, onNext }: Props) => {
    const { application, setApplication } = useApplicationContext();

    // const [name, setName] = useState(''); // set only a specific field
    // Initialize formData with existing context data (if any)
    const [formData, setFormData] = useState<PersonalInformation>(
        application.personalInformation || {
            name: '',
            surname: '',
            dateOfBirth: '',
        }
    );
    const handleBack = () => {
        onBack();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const updatedApplication = {
            ...application,
            personalInformation: formData,
        };

        setApplication(updatedApplication);

        try {
            const response = await fetch('http://localhost:8081/api/v1/application/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedApplication),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            const result = await response.json();
            console.log('Submitted successfully:', result);
            alert('Application submitted successfully.');
            onNext(); // You can redirect or show confirmation
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong during submission.');
        }
    };

    return (
        <div className={styles.wrapper}>
            <h2>Personal Information</h2>

            <p><strong>Email:</strong> {application.basicInformation.email}</p>
            <p><strong>ID Number:</strong> {application.basicInformation.idNumber}</p>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={formData.Name}
                        placeholder="Enter Name"
                        onChange={(e) => createFormChangeHandler(setFormData)('Name', e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Surname:</label>
                    <input
                        type="text"
                        value={formData.surname}
                        placeholder="Enter Surname"
                        onChange={(e) => createFormChangeHandler(setFormData)('surname', e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={formData.dateOfBirth}
                        placeholder="YYYY-MM-DD"
                        onChange={(e) => createFormChangeHandler(setFormData)('dateOfBirth', e.target.value)}
                    />
                </div>

                <div className={styles.buttonGroup}>
                    <button type="button" onClick={handleBack}>Back</button>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default PersonalInformationComponent;
