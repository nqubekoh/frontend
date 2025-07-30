import styles from "./basic-information.module.sass";
type Props = {
    onNext: () => void;
};
const BasicInformationComponent = ({ onNext }: Props) => {
const title = 'Basic Information';

// Add more logic, hooks, API calls, etc. here

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>Welcome to Loans and  credit card Module.</p>
        </div>

    );
};
export default BasicInformationComponent;
