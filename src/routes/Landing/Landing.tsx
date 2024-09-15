import styles from "./landing.module.scss";

import Navbar from "../../components/Landing/Navbar";

export default function Landing() {
  return (
    <main className={styles.landingWrapper}>
      <Navbar />
    </main>
  );
}
