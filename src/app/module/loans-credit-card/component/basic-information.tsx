import styles from "./basic-information-style.module.sass";

const BasicInformationComponent = () => {
const title = 'Loans and Credit Card';

// Add more logic, hooks, API calls, etc. here

    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>Welcome to Loans and  credit card Module.</p>
        </div>

    );
};
export default BasicInformationComponent;
