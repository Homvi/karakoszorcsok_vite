import falunap from "./assets/img/falunap.jpg";
import buvos from "./assets/img/buvos.jpg";
import anyak from "./assets/img/anyak.jpg";
import butor from "./assets/img/butor.jpg";
import petofi from "./assets/img/petofi.jpg";
import husvet from "./assets/img/husvet.jpg";
import pustul from "./assets/img/pustul.jpg";
import sudri from "./assets/img/sudri.jpg";

const news = [
  {
    title: "Falunap 2023",
    img: falunap,
    description:
      "Egy kis segítség a nyári szabadnapok tervezéséhez 🥘🍢🍲🍺🍷Várjuk családi, baráti társaságok jelentkezését egy nagyon hangulatos főzőversenyre.⚽🏆A focira is fel lehet iratkozni, idén meglepetés vendéggel is készülünk. A részletes programmal hamarosan jelentkezünk. 😉",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0ZoQTUEd3tJyvq1oZMKTR5sT1ybet1X6mgETppJNHhB2Ef591TrdyyYe7WdCiDyHLl",
    date: "2023-08-12",
  },
  {
    title: "Bűvös Bábos Fesztivál",
    img: buvos,
    description:
      "A tavasz utolsó hónapja is izgalmasan telt. Május első vasárnapján az édesanyákat, nagymamákat örvendeztettük meg egy ünnepi műsor keretében, melyre minden résztvevő gyermek izgatottan készült.Május 11- 14. között Veszprémbe utaztunk a Hunyorgók Bábcsoporttal a Bűvös Bábos Fesztiválra, ahol bemutattuk legújabb darabunkat is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-11",
  },
  {
    title: "Anyák napi műsor",
    img: anyak,
    description:
      "A tavasz utolsó hónapja is izgalmasan telt. Május első vasárnapján az édesanyákat, nagymamákat örvendeztettük meg egy ünnepi műsor keretében, melyre minden résztvevő gyermek izgatottan készült.Május 11- 14. között Veszprémbe utaztunk a Hunyorgók Bábcsoporttal a Bűvös Bábos Fesztiválra, ahol bemutattuk legújabb darabunkat is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-07",
  },
  {
    title: "Bútorfestő és papírfonó szakkör",
    img: butor,
    description:
      "Bútorfestő és papírfonó szakköreink lezárására készültünk a szakköri tagokkal. A hónapok óta tartó munka eredményét egy kiállítás keretében mutattuk be a Faluházban",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-23",
  },
  {
    title: "Velünk élő Petőfi",
    img: petofi,
    description:
      "A szavalóverseny után kézműveskedésre és mozizásra is volt lehetőség a könyvtárban, majd kihirdetésre kerültek a rajzverseny, versíró verseny, novellaíró versenyek eredményei is.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0TSVaMd8MrYmJNaar23bh6zwwQjR7TTkVZRDRDJC2SyTgbpD4sCGwHXnBpu3YPEzbl",
    date: "2023-05-26",
  },
  {
    title: "Húsvéti tojásfestés",
    img: husvet,
    description:
      "Húsvéti tojásfestést tartottunk a Faluházban, ahol az egyik hagyományos, természetes festési technikát, a berzselést próbálhatták ki az érdeklődők. A program az Eötvös Károly Megyei Könyvtár támogatásával valósult meg.",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid02bHTjeiTJ1VUMj3PeLSzmEPfCvrm9Pcz3S53BFixKXMxJSnwzJShR2cdmqNzMVcuul",
    date: "2023-04-05",
  },
  {
    title: "Pustol a hó, avagy Könnyű neked, Szarvas Józsi....",
    img: pustul,
    description:
      "Szarvas József Kossuth- és Jászai Mari- díjas színművész Pustol a hó, avagy Könnyű neked, Szarvas Józsi.... című előadása. ",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid02vTL5z5QmjyEM3D2YmfhfSrR7x7f49FnRwpMDnQsG35wSpVdT7EHbsm8s737m4hfnl",
    date: "2023-03-22",
  },
  {
    title: "Sudri Társulat",
    img: sudri,
    description:
      "Nagy nap volt a Sudri Társulat életében a tegnapi, hiszen a tavalyi első és rendkívül sikeresnek bizonyult év után  megkezdtük egy új, az eddigieknél nagyobb lélegzetvételű darab próbáit. Mindannyiunk örömére sok taggal bővültünk, egyre többen várjuk hétről hétre a nagyon vidám hangulatú próbákat. Pintér Zoltán művészeti vezető, hangulatfelelős irányításával a darabbal a Társulat emléket kíván állítani Petőfi Sándor születésének 200. évfordulójára. ",
    link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0rxJtpYFuLCrYasiNbLQaQn9t1Ntj8omw3MC11iJSfutBQpLuiatGifUHYcmyrHRSl",
    date: "2023-01-17",
  },
];

export default news;
