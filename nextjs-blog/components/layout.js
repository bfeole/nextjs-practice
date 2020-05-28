import styles from './layout.module.css';
// the css module auto generates unique class names to avoid collisions

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
