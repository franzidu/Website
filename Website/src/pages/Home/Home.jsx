import "./Home.module.scss";
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FotoMe from "../../assets/images/FotoMe.png";

function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <div className={styles.ContentContainer}>
        <div className={styles.TextContainer}>
          <h1>hi!</h1>
          <div className={styles.flexRow}>
          <p>(\_/)<br/>
          ( ·_·)<br/> /> ❤️</p>
          <p>
            Ich bin Franzi, 24 Jahre jung und studiere Informatik mit
            Schwerpunkt auf Kommunikation und Medien.<br/><br/>

            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
   
          </div>
        </div>
        <img className={styles.Foto} src={FotoMe} alt=""></img>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
