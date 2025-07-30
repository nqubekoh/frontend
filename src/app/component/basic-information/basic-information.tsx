import {useNavigate} from "react-router-dom";
import {useApplicationContext} from "../../context/ApplicationContext";
import {useState} from "react";
import {BasicInformation} from "../../model/basic-information";
import styles from "./basic-information.module.sass";
import {createFormChangeHandler} from "../../service/method";
type Props = {
    onNext: () => void;
};
const BasicInformationComponent= ({ onNext }: Props) => {
const title = 'Retail CASA Banking';

    const { application, setApplication } = useApplicationContext();

    // Initialize formData with existing context data (if any)
    const [formData, setFormData] = useState<BasicInformation>(
        application.basicInformation || {
            idNumber: '',
            email: '',
            cellphone: '',
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setApplication({
            ...application,
            basicInformation: formData,
        });
        onNext(); // Navigate to personal info
    };

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>ID Number:</label>
                    <input
                        type="number"
                        value={formData.idNumber}
                        placeholder="Enter ID Number"
                        onChange={(e) => createFormChangeHandler(setFormData)('idNumber', e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Email adress:</label>
                    <input
                        type="email"
                        value={formData.email}
                        placeholder="Enter Email"
                        onChange={(e) => createFormChangeHandler(setFormData)('email', e.target.value)}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Mobile number:</label>
                    <input
                        type="number"
                        value={formData.mobileNumber}
                        placeholder="Enter Cellphone"
                        onChange={(e) => createFormChangeHandler(setFormData)('mobileNumber', e.target.value)}
                    />
                </div>

                <div className={styles.buttonGroup}>
                <button type="submit">Next</button>
                </div>

            </form>
        </div>
    );
};

export default BasicInformationComponent;
