import styles from "./ErrorMessage.module.scss";

type ErrorMessagePropos = {
  children: JSX.Element | string;
};

const ErrorMessage = ({ children }: ErrorMessagePropos) => {
  return <div className={styles.errorMessage}>{children}</div>;
};

export default ErrorMessage;
