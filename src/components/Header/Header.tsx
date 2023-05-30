import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as LogoLarge } from "../../images/logo-large.svg";
import { ReactComponent as Bag } from "../../images/bag.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const { itemsCount } = useContext(CartContext)

  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to={`/`} className={styles.logoLink}>
          <Logo className={styles.logo} />
          <LogoLarge className={styles.logoLarge} />
          <span className="visually-hidden">Future Fashion Logo</span>
        </Link>
      </div>
      <div className={styles.infoWrapper}>
        <Link to={`/`} className={styles.link}>
          SHOP
        </Link>
        <div className={styles.bag}>
          <Bag />
          <span className={styles.counter}>{itemsCount}</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
