import styles from "./personal-information.module.sass";
type Props = {
    onNext: () => void;
    onBack: () => void;
};
const PersonalInformationComponent = ({ onNext, onBack }: Props) => {
    const title = 'Personal information';

// Add more logic, hooks, API calls, etc. here

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>Welcome to Loans and  credit card Module.</p>
        </div>

    );
};
export default PersonalInformationComponent;
