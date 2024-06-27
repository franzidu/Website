import "./Home.module.scss"
import Navbar from "../../components/Navbar/Navbar.jsx"
import Footer from "../../components/Footer/Footer.jsx"
import Tile from "../../components/Tiles/Tiles.jsx"

function Home() {

  return (
    <div>
      <Navbar/>
      <h1>Test Header</h1>
      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </p>
      {/* <a href="http://youtube.de" target='_blank'>Youtube</a> */}
      <Tile/>
      <Tile/>
      <Footer/>
    </div>
  );
}

export default Home
