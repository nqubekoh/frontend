import styles from './Input.module.sass';

type InputProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

const Input = ({ label, name, type = 'text', value, placeholder, onChange, error }: InputProps) => {
  return (
      <div className={styles['input-wrapper']}>
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
        {error && <div className="error">{error}</div>}
      </div>
  );
};

export default Input;
