import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  children: JSX.Element | string;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <div className={styles.errorMessage}>{children}</div>;
};

export default ErrorMessage;
