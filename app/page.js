import Background from "./Background/Background";
import Ejtemah from "./components/Ejtemah/Ejtemah";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Paragraph2 from "./components/Paragraph-2/Paragraph-2";
import Social from "./components/Social/Social";
import Majaleh from "./Majaleh/Majaleh";
import Paragraph1 from "./Paragraph-1/Paragraph-1";
import Picture1 from "./Picture-1/Picture-1";
import Picture2 from "./Picture-2/Picture-2";
import Picture3 from "./Picture-3/Picture-3";
import Video from "./Video/Video";

export default function Home() {
  return (
    <div>
      
      <Menu/>
      <Paragraph1/>
      <Paragraph2/>
      <Picture1/>
      <Picture2/>
      <Picture3/>
      <Background/>
      <Majaleh/>
      <Video/>
      <Social/>
      <Ejtemah/>
      <Footer/>

    </div>
  );
}

