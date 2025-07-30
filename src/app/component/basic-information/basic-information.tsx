import { useApplicationContext } from "../../context/ApplicationContext";
import { useState } from "react";
import { BasicInformation } from "../../model/basic-information";
import styles from "./basic-information.module.sass";
import { createFormChangeHandler } from "../../service/method";
import Input from "../../packages/ui-components/Input/Input"; // ✅ Import your component

type Props = {
    onNext: () => void;
};

const BasicInformationComponent = ({ onNext }: Props) => {
    const title = 'Retail CASA Banking';

    const { application, setApplication } = useApplicationContext();

    const [formData, setFormData] = useState<BasicInformation>(
        application.basicInformation || {
            idNumber: '',
            email: '',
            mobileNumber: '',
        }
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setApplication({
            ...application,
            basicInformation: formData,
        });
        onNext();
    };

    const handleChange = (key: keyof BasicInformation, value: string) =>
        createFormChangeHandler(setFormData)(key, value);

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="ID Number:"
                    name="idNumber"
                    type="number"
                    value={formData.idNumber}
                    placeholder="Enter ID Number"
                    onChange={(e) => handleChange('idNumber', e.target.value)}
                />

                <Input
                    label="Email address:"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter Email"
                    onChange={(e) => handleChange('email', e.target.value)}
                />

                <Input
                    label="Mobile number:"
                    name="mobileNumber"
                    type="number"
                    value={formData.mobileNumber}
                    placeholder="Enter Cellphone"
                    onChange={(e) => handleChange('mobileNumber', e.target.value)}
                />

                <div className={styles.buttonGroup}>
                    <button type="submit">Next</button>
                </div>
            </form>
        </div>
    );
};

export default BasicInformationComponent;
