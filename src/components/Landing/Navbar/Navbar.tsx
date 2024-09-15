import styles from "./navbar.module.scss";
import cillageLogo from "../../../assets/CillageLogo_Text.svg";
import DonateBtn from "../DonateBtn/DonateBtn";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={cillageLogo} alt="cillage logo" className={styles.logo} />
      <DonateBtn />
    </nav>
  );
}
