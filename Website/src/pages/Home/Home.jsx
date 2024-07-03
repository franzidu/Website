import "./Home.module.scss";
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.TextContainer}>
        <h1>Test h1</h1>
        <p>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet
        </p>
        <p>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
