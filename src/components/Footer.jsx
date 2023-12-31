import nmi from "../assets/support/nmi.webp";
import eem from "../assets/support/EEM.png";
import ekmk from "../assets/support/EKMK.webp";
import magyarfalu from "../assets/support/magyarfaluprogramlogo.png";
import nka from "../assets/support/nka.webp";
import SMBleader from "../assets/support/SMBleader.webp";

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row md:justify-between items-center justify-center p-4 bg-neutral text-neutral-content">
      <div className="flex flex-col items-center">
        <p>Copyright Adakin © 2023 - All right reserved</p>
        <div className="flex">
          <a
            aria-label="Visit our youtube page"
            className="m-3"
            href="https://www.youtube.com/@karakoszorcsok8001"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            aria-label="Visit our facebook page"
            className="m-3"
            href="https://www.facebook.com/konyvtarkarakoszorcsok"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className=" flex flex-wrap justify-evenly gap-5">
        {/* NMI */}
        <img
          loading="lazy"
          alt="nemzeti művelődési intézet"
          className="h-16"
          src={nmi}
        ></img>
        {/* SMBleader */}
        <img
          loading="lazy"
          alt="Leader akciócsoport"
          className="h-16"
          src={SMBleader}
        ></img>
        {/* nka */}
        <img
          loading="lazy"
          alt="Nemzeti kultúrális alap"
          className=" h-16"
          src={nka}
        ></img>
        {/* magyarfalu */}
        <img
          loading="lazy"
          alt="Magyar falu program"
          className=" h-16"
          src={magyarfalu}
        ></img>
        {/* ekmk */}
        <img
          loading="lazy"
          alt="Eötvös Károly Megyei Könyvtár"
          className=" h-16"
          src={ekmk}
        ></img>
        {/* EEM */}
        <img
          loading="lazy"
          alt="emberi erőforrások minisztériuma"
          className=" h-16"
          src={eem}
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
