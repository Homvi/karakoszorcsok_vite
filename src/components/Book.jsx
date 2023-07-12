import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import Page from "./Page";

const descriptions = [
  {
    title: "Karakó-Szörcsök község polgári történelme",
    description:
      "Bevezetésül egy régi okmány Szörcsök mily régi község, bizonyítja a , Hazai okmánytár VI k. 445. és következő lapjain közlött okmány, mely 1299-ik évben kelt.-Ezen okmány tartalma szerint szörcsöki nemes Opurnak Zoda, Blásynak pedig Bors és Miklós nevü fiai kegyetlenül megverték Ágnes királynénak Arkybana-Zurchukon lakó László és Deés nevű jobbágyait, a királynénak Arkybána-Zurchuk nevü birtokát erőszakosan elfoglalták. A verekedők és erőszakos foglalók ellen Deés és László pört indítottak István alországbíró előtt.",
  },
  {
    title: "",
    description:
      "E pör letárgyalását tartalmazza az említett okmány, mely eredetiben megvan a veszprémi káptalan levéltárában; hiteles másolatát pedig a karakószörcsöki nemes Deés család bírja. Minthogy Veszprém megyében Szörcsök nevü két község is van, mindkettő itt a Somlyó táján fekszik, különböztetésül az egyik Bor, másik Karakó előnévvel bír. Kérdés, melyik községre vonatkozik az említett régi okmány? Eddig nem ismerünk történelmi adatot mely eldöntené, melyikben volt a királynénak Arkybana-Zurchuk nevü birtoka; a Torna folyó, melyet az okmány említ mindakét községhatárát érinti: ebből tehát eligazodni nem lehet; így a helyi viszonyok tüzetes ismeretéből kell valami megközelítőt megállapítani.",
  },
  {
    title: "",
    description:
      "Az okmány a királyné jószágának határjárását leírván Bogdány nevü pusztát említ; Ez most a Borszörcsöktől északkeletre fekvő Bogdány pusztával azonos lehetne s így az okmány a mostani Bor —Szörcsökre vonatkoznék. Azonban Karakó- Szörcsök helyrajzi történelmének ismerete arra vezet, hogy az említett okmányt ide vonatkozónak vitatjuk mert Győr a Deés családot ,mint karakó-szörcsöki törzsbirtokost 1746- ban a nádor elismerI. Hazánk köztörténelméből tudjuk, hogy a török uralom alatt sok nemes család kihalt, vagy birtokából kiesett jószágaik idegen, jogtalan birtoklók kezébe jutottak.",
  },
  {
    title: "",
    description:
      "A török uralom megszünte után királyaink felállították az úgynevezett Neoaguistica commifsiot, melynek feladata volt a nemesek ármálisai és jószág birtokaira vonatkozó okmányaiknak megvizsgálása, kiknek ha írott bizonyítványai nem voltak, élő tanúk által kellett magukat igazolniuk. Karakó- Szörcsökön lakó Deés család élő tanuk által bizonyította, hogy ember emlékezetet túlhaladó idő előtt, mint itteni birtokos ismertetett, csakhogy az országot pusztító belvillongások közt minden levelei elvesztek. Már pedig az okmány a királynénak az Arkybána-Zurchukon megvert jobbágyai között van Deés.",
  },
  {
    title: "",
    description:
      "Karakó-Szörcsök habár egy határra szorított közbirtokossági község volt, mégis oly élesen elkülönítő határvonal létezett abban, hogy aki azt megsértené, vagy megszüntetni próbálkozott: keményen lakolt érte , mint ezt alább Persaics Lászlónak halálesetéből látni fogjuk. — A község utcája keletről a katolikus templomig Szeg- Szörcsök, a nyugati pedig Karakó-Szörcsöknek neveztetett. két utcabeli birtokosok az elkülönítést oly szigorúan és szívósan megtartották: hogy 1850-ig külön csordást, kanászt tartottak, az erdőben volt bizonyos határvonal, melyen túl, a karakó, vagy szeg- szörcsöki tulajdonos legeltetni vagy fáért sem mehetett.",
  },
  {
    title: "",
    description:
      "És ezen éles különválás évszázadokon keresztül tartott az 1850. évi tagosításig, mikor az újabb kor eszméi azt megszüntették.- E sajátságos elkülönüléshez való szívós ragaszkodás ugyanegy minőségű helységben mással nem magyarázható minthogy a régmúltban a lakosok közt polgári megkülönböztetés volt,és hagyományszerüleg ivadékról ivadékra átszállt. Ily polgári különböztetést — pedig az 1299-ik évi okmány említ, mert nemesekről és a királyné fegyveres jobbágyairól szól. E szerint ,nem lehetett-é a SZzeg-Szörcsök nevü rész a hajdani Arkybana-Zurchuk nevi királyné birtoka?",
  },
  {
    title: "",
    description:
      "Azt pedig tudjuk hogy a nemesítés jószág adományozással járt. Mármost olvasva a Deés családnak az ármális levelét melyben Károly király említi, hogy a Deéseknek Chon Miklós nevű vérrokona, őneki sokféle hű szolgálatot tett érette a szerencse kétes változásai közt magát veszélynek kitette és ezen érdemei tekintetéből a Deéseket mint Chon Miklósnak vérrokonait országos nemességre emelte.Ha tehát Chon a király előtt ily kegyelt egyén és udvari jegyző is volt; nem-é több mint valószínű, hogy a királyné az Arkybana-Zurchuk nevü jószággal egykori fegyveres jobbágyait a Deéseket megajándékozta?",
  },
  {
    title: "",
    description:
      "Amint az 1299-ik évi okmányaiból kitűnik, a királyné joszága a határ szélére kinyúlott, kiszögelt: Nem-é a kiszögelés vagy szeglet szóból ered-é a Szeg —Szörcsök elnevezés, mely az Arkybána nevet felváltotta? Ezekből kitűnvén az, hogy a Deés család Karakó-Szörcsökön ősbirtokos; tudva azt is , hogy mily éles elkülönítés létezett egykor a község lakói közt; átgondolva azt is hogy a nemességre emelt Deésék földbirtok adományozást nyerhettek: ezen okokon alapuló véleményt, míg más adatok meg nem döntik az 1299-ik évi okmányt Karakó —Szörcsökre vonatkozó adatnak tekinthetjük.",
  },
  {
    title: "Karakó-szörcsök név eredete",
    description:
      "Az 1299-ik évi okmányban a község neve egyszerűen Zurchuk, a királyné Jószága Arkybana-Zurchuknak iratik. Próbáljuk meg a régi írás szerinti szónak értelmét kikeresni. Zurchuk vagy valamely vagy valamely előttünk már ismeretlenné lett értelmű szó szerben szeriben egymást felváltva szolgáló szereseket jelent. Ezen értelmezésre alapul szolgál a pálosok zárdatörténelmében 1383-ból közölt adat melyben Szörcsök Szerecheknek iratik, ebből pedig könnyen kijön a szeresek.",
  },
  {
    title: "",
    description:
      "Talán a sok egyhangú- e miként máig Somogyban ő-vel ejtetvén ki, keletkezett a régi írás szerint Zurchuk, inkább Szörcsök, minthogy az őslakók szeriben egymást felváltva szolgáltak. A királyné jószága Arkybana —Zurchuknak iratik. Ez az arhi görög és bona latin szavakból könnyen kiadja a főjószág vagy felsőbbnek birtoka. Arkybana- Zurchuk tehát:Felséges királyné jószágán szeriben szolgáló fegyveres jobbágyok.Későbbi iratokban Karakó és Szeg-Szörcsök néven fordul elő.Karakó elő névvel a nyugati utága hivatik",
  },
  {
    title: "",
    description:
      "'Századok' című folyóiratban be van bizonyítva, hogy egykor létezett Karakó vármegye, melyhez tartozhatott Szörcsök ,ezért megjelölésül annak nevét felvette.-Karakó helység Vas megyében Szörcsöktől egy mérföldnyi távolságba fekszik. A katólikus templomtól keletre dűlő utca Szeg -Szörcsöknek neveztetik.",
  },
  {
    title: "Időrendi események",
    description:
      "Az első esemény melyet a község régmúltjából ismerünk, nem valami dícséretes adat, mert nagy verekedés, jószágfoglalás és saját mentségökre az első bírók elleni nyílt hamis vádaskodás; de mind a három bűnért keményen lakoltak Lássuk az 1299-ik évben kelt okmány tartalmának kivonatát. Zoda, Bors és Miklós Szörcsöki nemesek kegyetlenül megverték Ágnes királynénak itteni jószágán élő Deés és László fegyveres jobbágyait, a királyné jószágát pedig hatalmaskodva elfoglalták.",
  },
  {
    title: "",
    description:
      "A megverettek Lőrinc veszprémi főispánhoz panaszra mentek, ki az ügy megvizsgálására a káptalant küldé, mely után Ursi Mátyás, Putosi Heym, Gelián és Donát bírák a verekedőket elitélté. István alországbíró előtt ellen mondtak, sőt a főispánt Ursi Mátyást, Putasi, Heym bírákat, irataikkal együtt meghazudtolták, hamis okmány kiállításáról vádolták. István alországbíró ezekután mindannyit maga élé idéztette és az ország főbb rendjei közül választott bírák előtt a tényálladékot megvizsgáltatván kiderült: Hogy nemcsak a vérengző verekedés, jószágfoglalás való,",
  },
  {
    title: "",
    description:
      "hanem Zoda, Bors és Miklósnak a veszprémi főispán és bírák elleni vádja mintha azok hamis okmányt állítottak volna ki, alaptalan; hanem megfordítva ők gyártottak maguk részére hamis okmányokat, hogy a felsőbb bíróságot tévútra vezessék.-E hármas büntény miatt Zoda, Bors és Miklós összes Jószágaik elvesztésére és tűzhalálra ítéltettek, mit végre is hajtottak. Bíróilag lefoglalt javaik a törvény szerint kétharmad részben a bíráké, egyharmada pedig a felpörös királynéjé lett, ki a bírák részét 40 márkáért megvette.",
  },
  {
    title: "",
    description:
      "1383-ban Nemes Benedeknek Miklós nevű fia oly alapítványt tett a pálosok jenői zárdája Javára, mely szerint örökösei évenként tartoznak az ő somlyói szőlejének terméséből száz csöbör bort adni, csöbrét három pintjével számítani. Ez idő óta közel kétszáz évig mit sem tudunk a község múltjáról. Oka ennek a vidéket pusztító török hadjárat. Azon kívül pusztították e tájt a tatárok 1543-ban.Istvánfi történelmi munkájában olvasható 1603-ik év amikor a törökök e tájon Kemenesaljáig , Tápáig kalandoztak.",
  },
  {
    title: "",
    description:
      "Nemcsak raboltak, pusztítottak, de temérdek magyart rabszíjra fűzve elhurcoltak. E vonalba esik K.szörcsök is. E szomorú történeti adat megfejti okát annak miként haltak ki egyes családok, vesztek el ősi okmányai.E körülményben vélem gyökerezni okát mindazon viszályoknak, melyeket a szörcsökiek előidéztek, valahányszor a szomszédos Kis-Berzseny egyeseknek adományoztatott, asszörcsökiekmindannyiszor nemcsak tiltakoztak, de tetlegességre is vetemültek, merthozzá Jogot tartottak.",
  },
  {
    title: "",
    description:
      "1593-ban Fehérkövy István nyitrai püspök Kis-Berzsenyt tíz egyénnek adományozván, midőn az illetőket a vasvári káptalan birtokba vezette, K.Szörcsökről tiltakoztak Berzsenyi Ferenc, Forintos Miklós, Hany András, Chipán Mihály, Vaspöry Mihály, Messlényi Mihály. 1619-ben Forgách Zsigmond nádor a fiúágon kihalt Noszlopy család három leányának Katalin, Ilona, Dorottyának adományozta. 1628 és 56 —ik évben a kisberzsenyiekkel erdő, legelő miatt határvillongás volt. 1731-ben Kis —Berzseny adományozásakor Szörcsökről 30-an mentek ellenállni a birtokba vezetésnek ekkor volt a Kis-Berzseny történetében megírt esemény Potyondi László kanonokkal.",
  },
  {
    title: "",
    description:
      "A támadók közt voltak Deések, Berzsenyiek, Bendék, Czupponok, Csiték, Nemesek, Kovácsok, sőt Kovács Piroska nevü nő valóságos fúria gyanánt viselte magát a kanonok iránt. 1757-ik év május 22-én a szörcsökiek éjjel kimentek a berzsenyi földekre, hol ezeknek minden tavaszi veteményeit részint kézzel kitépték, részint marháikkal lepazaroltatták( letapostatták), miből heves pör támadt.",
  },
  {
    title: "",
    description:
      "Valóban viszás e két község határának felosztása; mert egyfelöl a berzsenyiek földje felnyúlik a Szörcsökiek kertje alá, sőt erdejök Kertával határos, másfelöl a szörcsökiek földje ledül a Berzsenyieknek csaknem háza végéig; igy mint egymás mellé helyezett két hosszú földnyelv pörlekedjenek. 1786-ban Persaics László helybeli lakost agyonverték. Története ez: a község határa Karakó és Szeg- Szörcsök néven elkülönítve lévén, a határvonalon túlterjeszkedni tilos volt. Az erdőben a többek közt egy görbefa volt a határjel.",
  },
  {
    title: "",
    description:
      "November 12-én, az edőbe gyülekezettek között versengés támadt az elkülönítő vonal megértése miatt, utóbb a versengésből verekedéssé fejlődött; e közben Persaics László engedni nem akarván, a határvonalt jelző görbefa alatt agyonveretett. A haláleset és az egész pörlekedés a vármegye elé került, hol ítéletileg a gyászos emlékű görbefa határpontnak kijelöltetett. 1809-ben a francia hadjárat hullámai a községet is érintették.",
  },
  {
    title: "",
    description:
      "Majd egész délben egy magyar huszár Karakó felöl sebes vágtatva jött Szörcsökre, oldalában egy darab eltört francia kard volt szúrva, minek történetét így mondá el. A huszár mint előörs franciákkal találkozván megverekedett. Vívás közben a francia kardját ellenfele oldalába szúrta; de a huszár ügyes vágással, a franciát legyőzte, kardját eltörte és a testében maradt résszel Szörcsökre menekült, hol a kardot kihuzatván, a huszár tovább nyargalt. Délután a franciák Szörcsököt megszállták, itt igen garázdák voltak. ",
  },
  {
    title: "",
    description:
      "800 emberre követeltek enni, innivalót s mivel a nép rögtön elő nem állította, dulakodtak , a szobákba berontva a ruhanemüket szaggaták; a házak udvarán tüzet raktak; a korcsmáros borát részint ingyen elhordták részint kifolyatták a templomot felnyitván, az egyházi ruhákat magukra öltvén, az oltárról leszedett gyertyákat meggyújtják és este mint a komédiások a nép botrányára az utcán Jártak keltek. Másnap Pápa fele távozván a poggyászaikat vívő szekeret lovastól együtt visszatartották, a károsult csak ostorát hozta haza.",
  },
  {
    title: "",
    description:
      "1833-ik év dec. 27-én Szabó Ádámot verték agyon a korcsmában. Szabó állítólag Király Péter nejét szerette és vele tilos viszonyban élni gyanusíttatott. A csalódott férj magában zárkózva alkamat várta a bosszúállásra mire a Szent János áldomás ivása szolgált. A korcsmában gyűltek közt volt Szabó is, hol a bortól felhevülve, egymást biztatva addig ingerkedtek Szabóval, míg verekedésbe ereszkedett, miközben agyonütötték. Az agyonütő három év múlva a veszprémi börtönben meghalt.",
  },
  {
    title: "",
    description:
      "1850-ben volt a tagosítás, ekkor minden közös földet erdőt birtokarányban felosztottak, Azóta az erdő nagy része kiirtatott. 1853.ik év május 30-án reggel a villám egy házat felgyújtott, melyről 33.lakhely és minden gazdasági épület leégett. 1855-ben a kolera erősen pusztított. 1866-ban a májusi fagy minden őszi gabonát megsemmisített. 1872 óta a nyugati vaspálya a határt átszeli, a földnek négyszögölét 26 kr. adták.",
  },
  {
    title: "Folytatása következik...",
    description: "",
  },
];

function Book() {
  const bookRef = useRef(null);

  return (
    <>
      <div className="pt-24 hidden md:block">
        <HTMLFlipBook width={450} height={600}>
          {descriptions.map((page, id) => (
            <Page
              key={id}
              ref={bookRef}
              pageNumber={id + 1}
              header={page.title}
              description={page.description}
            />
          ))}
        </HTMLFlipBook>
      </div>
      <div className="pt-14 relative top-0 block md:hidden">
        <HTMLFlipBook width={340} height={560}>
          {descriptions.map((page, id) => (
            <Page
              key={id}
              ref={bookRef}
              pageNumber={id + 1}
              header={page.title}
              description={page.description}
            />
          ))}
        </HTMLFlipBook>
      </div>
    </>
  );
}

export default Book;
