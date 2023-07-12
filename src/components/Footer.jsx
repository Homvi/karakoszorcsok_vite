import nmi from "../assets/support/nmi.webp";
import eem from "../assets/support/EEM.png";
import ekmk from "../assets/support/EKMK.webp";
import magyarfalu from "../assets/support/magyarfaluprogramlogo.png";
import nka from "../assets/support/nka.webp";
import SMBleader from "../assets/support/SMBleader.webp";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row md:justify-between items-center justify-center p-4 bg-neutral text-neutral-content">
      <div className="items-center">
        <p>Copyright Adakin © 2023 - All right reserved</p>
      </div>
      <div className="flex">
        {/* youtube */}
        <a
          href="https://www.youtube.com/@karakoszorcsok8001"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        {/* youtube */}
        {/* facebook */}
        <a
          href="https://www.facebook.com/konyvtarkarakoszorcsok"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        {/* facebook */}
      </div>
      <div className=" flex flex-wrap justify-evenly gap-5">
        {/* NMI */}
        <img loading="lazy" className="h-16" src={nmi}></img>
        {/* NMI */}
        {/* SMBleader */}
        <img loading="lazy" className="h-16" src={SMBleader}></img>
        {/* SMBleader */}
        {/* nka */}
        <img loading="lazy" className=" h-16" src={nka}></img>
        {/* nka */}
        {/* magyarfalu */}
        <img loading="lazy" className=" h-16" src={magyarfalu}></img>
        {/* magyarfalu */}
        {/* ekmk */}
        <img loading="lazy" className=" h-16" src={ekmk}></img>
        {/* ekmk */}
        {/* EEM */}
        <img loading="lazy" className=" h-16" src={eem}></img>
        {/* EEM */}
      </div>
    </footer>
  );
};

export default Footer;
