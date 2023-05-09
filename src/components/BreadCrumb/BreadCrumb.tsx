import styles from "./BreadCrumb.module.scss";

type BreadCrumbProps = {
  category: string;
  title: string;
};

const BreadCrumb = ({ category, title }: BreadCrumbProps) => {
  return <nav className={styles.breadcrumb}>
    <ul>
      <li>CATEGORIA</li>
      <li>{category}</li>
      <li>{title}</li>
    </ul>
  </nav>;
};

export default BreadCrumb;
