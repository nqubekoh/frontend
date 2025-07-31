import { useApplicationContext } from "../../context/ApplicationContext";
import { useState } from "react";
import { BasicInformation } from "../../model/basic-information";
import styles from "./basic-information.module.sass";
import { createFormChangeHandler } from "../../service/method";
import Input from "../../packages/ui-components/Input/Input";
import {Button} from "../../packages/ui-components/Button";
import {useTranslation} from "react-i18next"; // ✅ Import your component

type Props = {
    onNext: () => void;
};

const BasicInformationComponent = ({ onNext }: Props) => {
    const title = 'Basic Information';

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
    const { t } = useTranslation();
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label={t('idNumber')}
                    name="idNumber"
                    type="number"
                    value={formData.idNumber}
                    placeholder="Enter ID Number"
                    onChange={(e) => handleChange('idNumber', e.target.value)}
                />

                <Input
                    label={t('email')}
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter Email"
                    onChange={(e) => handleChange('email', e.target.value)}
                />

                <Input
                    label={t('mobileNumber')}
                    name="mobileNumber"
                    type="number"
                    value={formData.mobileNumber}
                    placeholder="Enter Cellphone"
                    onChange={(e) => handleChange('mobileNumber', e.target.value)}
                />

                <div className={styles.buttonGroup}>
                    <Button type="submit">Next</Button>
                </div>
            </form>
        </div>
    );
};

export default BasicInformationComponent;
