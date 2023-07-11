import New from "./New";

const news = [
  {
    title: "Falunap 2023",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/352517785_265497162806412_3587930654824983323_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IvJJmQH0XhUAX9mx-CP&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfB3alohkrMiPPUBkKFY-_Qus2-2EH__k74H1P7ugICcLg&oe=64B2AAFF",
    description:
      "Egy kis segítség a nyári szabadnapok tervezéséhez 🥘🍢🍲🍺🍷Várjuk családi, baráti társaságok jelentkezését egy nagyon hangulatos főzőversenyre.⚽🏆A focira is fel lehet iratkozni, idén meglepetés vendéggel is készülünk. A részletes programmal hamarosan jelentkezünk. 😉",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0ZoQTUEd3tJyvq1oZMKTR5sT1ybet1X6mgETppJNHhB2Ef591TrdyyYe7WdCiDyHLl",
    date: "2023-08-12",
  },
  {
    title: "Bűvös Bábos Fesztivál",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/351159057_1030227545018006_1160174954747150119_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=NLsilH7kgvsAX_lKqL3&_nc_oc=AQkS1AntKqs_ZmOmVlUhzECHyOraERs-wZwqFO5bgdWeNxEDhFt_DS-t7dInec_z7Gs&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCAfMfw4HPDUTeK_PEJJuMMOaSBbXdX-iUiTRiihF5lyA&oe=64B1D3B8",
    description:
      "A tavasz utolsó hónapja is izgalmasan telt. Május első vasárnapján az édesanyákat, nagymamákat örvendeztettük meg egy ünnepi műsor keretében, melyre minden résztvevő gyermek izgatottan készült.Május 11- 14. között Veszprémbe utaztunk a Hunyorgók Bábcsoporttal a Bűvös Bábos Fesztiválra, ahol bemutattuk legújabb darabunkat is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-11",
  },
  {
    title: "Anyák napi műsor",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/351180547_1016708409708600_2098205171450106965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=s_-JLmJ88tgAX_W6KPX&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfA59HPFgVrW-h7y6jvoIwzoyKREnkxfUeyU76caMXprPw&oe=64B1B040",
    description:
      "A tavasz utolsó hónapja is izgalmasan telt. Május első vasárnapján az édesanyákat, nagymamákat örvendeztettük meg egy ünnepi műsor keretében, melyre minden résztvevő gyermek izgatottan készült.Május 11- 14. között Veszprémbe utaztunk a Hunyorgók Bábcsoporttal a Bűvös Bábos Fesztiválra, ahol bemutattuk legújabb darabunkat is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-07",
  },
  {
    title: "Bútorfestő és papírfonó szakkör",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/351457028_1798812303853635_6017635005850542869_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=bc2YrxH1DYsAX_3IlRI&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfD9AY9bu1W-wfUcLsd8lzr1ujxJuQuXipQHK0mFO9psQA&oe=64B216A8",
    description:
      "Bútorfestő és papírfonó szakköreink lezárására készültünk a szakköri tagokkal. A hónapok óta tartó munka eredményét egy kiállítás keretében mutattuk be a Faluházban",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-23",
  },
  {
    title: "Velünk élő Petőfi",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/351309013_599654198636009_8647848153090808845_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=G1NmuZSfgDsAX8lPJ59&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAb-w63jLj1FTU_iafH62c4JvK4ZQCaIM-v0_fRcJlVbg&oe=64B1CD31",
    description:
      "A szavalóverseny után kézműveskedésre és mozizásra is volt lehetőség a könyvtárban, majd kihirdetésre kerültek a rajzverseny, versíró verseny, novellaíró versenyek eredményei is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-26",
  },
  {
    title: "Húsvéti tojásfestés",
    img: "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/339891732_889875682313107_3372236149838189721_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=H6DAOcACoAcAX8-Rw5r&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCnGrDtySuMMphRrSSaT0y0uhCBl1FCKr7rrUoTRroDoA&oe=64B1BD93",
    description:
      "Húsvéti tojásfestést tartottunk a Faluházban, ahol az egyik hagyományos, természetes festési technikát, a berzselést próbálhatták ki az érdeklődők. A program az Eötvös Károly Megyei Könyvtár támogatásával valósult meg.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid02bHTjeiTJ1VUMj3PeLSzmEPfCvrm9Pcz3S53BFixKXMxJSnwzJShR2cdmqNzMVcuul",
    date: "2023-04-05",
  },
];

const MoreNews = () => {
  return (
    <div className=" min-h-screen bg-base-300 p-5">
      <div className="flex flex-col gap-5 items-center">
        {news.map((item, id) => {
          return (
            <New
              key={id}
              title={item.title}
              description={item.description}
              img={item.img}
              link={item.link}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MoreNews;
