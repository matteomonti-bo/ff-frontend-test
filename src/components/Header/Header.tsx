import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as LogoLarge } from '../../images/logo-large.svg';
import { ReactComponent as Bag } from '../../images/bag.svg';
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo className={styles.logo} />
        <LogoLarge className={styles.logoLarge} />
        <span className='visually-hidden'>Future Fashion Logo</span>
      </div>
      <div className={styles.infoWrapper}>
        <Link to={`/`} className={styles.link}>SHOP</Link>
        <Bag className={styles.bag} />
      </div>
    </header>
  )
}

export default Header;
