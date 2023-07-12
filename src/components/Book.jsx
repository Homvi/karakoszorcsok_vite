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
    title: "",
    description:
      "1876 év Január 6.-án Cuppon Imre nejével és 23 éves fiával szobájukban halva találtatott, 9 éves gyermeke pedig eszméleten kívüli állapotban volt, azonban rögtön gyógykezeltetvén, felgyógyulása után következőleg mondta el a szerencsétlen esetet. Január 5-én este este a nagy hideg miatt a szobát erősen befütötték , a család vacsora után lefeküdt aludni. Éjjel az atya anya és a nagyobbik fiú jajgatva , fejüket fájdítva felébredtek, friss levegő bebocsátása végett az ajtót felnyitották, de a hóvihar miatt hamar betették; még soká Jajgattak, reggelre halva voltak, a szobában volt a kutya, macska is elvesztek, egyedül a 9 éves fiú élt.",
  },
  {
    title: "",
    description:
      "A járási orvos mérgezést gyanított, a bíróság két gyanus egyént. A holttestek egyházilag eltemetvén, utóbb kétszer felásták, belszerveik kivetetvén, orvosi vizsgálatra Veszprémbe küldetett, hol legszigorúbb vegyelemzés után, mérgezést nem észlelvén, a befogottak szabadon bocsátattak. Orvosi vélemény szerint a tulságos fűtés által kifejtett veszélyes gőz okozta a halált. 1877-ben június 23-án a jégeső az egész határt elverte. A jeget másnap délben is lehetett lapátolni a templom mellett.",
  },
  {
    title: "Nemes családok",
    description:
      "1299-ik évi okmány Opur, Blásy, Zoda, Bors és Miklós nevű nemeseket említ Zurchukon. Ezen ősi nevek később mivé változtak kideríteni nem lehet. 1593-ban Chipán Hany, Mészelyi, Vaspöri családokat említetnek, ezek fiú ágon nem léteznek. Berzsenyi család. Kis Berzsenyből származik, hol 1593-ban Berzsenyi Bálint Noszlopy Dorottyát feleségül vette és ennek szörcsöki jószágára átköltözött.. Nemesi oklevele Vasmegyében élő ágnál van, kik ágostai vallásuak.",
  },
  {
    title: "",
    description:
      "A Szörcsöki Berzsenyi családból származott Berzsenyi László pálos szerzetes, kitől a szörcsöki templom egy műfaragványú fakeresztet bír, szerzetes neve András. Csete család.Göcsejből származott fel. Utolsó ivadéka Csete László Kis- komáromi plébános volt. Született 1825-ben; gyermekkorában mint szorgalmas tanuló Tóth Ignác plébánosnak figyelmét magára vonta, s itthon a latin nyelv elemeire megtanítván Csete Antal püspöki titkár Laszkalnor Antal kanonoknak pártfogásába ajánló kiknek jótékonysága alatt, Veszprémben a gimnáziumi katolikus osztályt kitűnő sikerrel elvégezé.",
  },
  {
    title: "",
    description:
      "Győrben ismét Tóth Ignác közvetítése folytán a bölcsézseti tanéveket folytatta. Minden tantárgyból első, kitűnő lévén, Gróf Zichy Domonkos püspökünk Csetét Rómába a Germanica — Hungaricum kollégiumba küldte 1845-ben honnan hat év múlva mint hittudor és áldozár tér vissza. Veszprémbe mint tanulmányi felügyelő és hittanár működött! 865-ig, ekkor Kis-Komáromba plébánossá neveztetett, hol 1870-ik év november 21-én meghalt. Végrendeletében összes vagyonának felét a kis- komáromi templomnak, felét pedig rokonainak hagyta. A szörcsöki templomnak mint tanár casulát, fehérneműt kézi keresztet, canon táblákat, a hitközséget templomuk.",
  },
  {
    title: "",
    description:
      "csinosítására buzdította, nagy harangra pénzt szerzett. Tudományos terén is felmutatta, a , 'Religio' heti lapban értekezéseket közlött , 'Garibaldi és társulata' két kötetű korrajzba leírta Rómában átélt éveit,valamint a titkos képzettségét az irodalom társulatok káros, vészes működéseit.Holta után Szörcsökön elvégzendő misére 100 forint alapítványt hagyott. Édesatyja Csete János életében 150 forint misealapítványt tett, és a szörcsöki templomnak 100 ft-ot adott. Így örökítette meg magát a Csete család.",
  },
  {
    title: "",
    description:
      "csinosítására buzdította, nagy harangra pénzt szerzett. Tudományos terén is felmutatta, a , 'Religio' heti lapban értekezéseket közlött , 'Garibaldi és társulata' két kötetű korrajzba leírta Rómában átélt éveit,valamint a titkos képzettségét az irodalom társulatok káros, vészes működéseit.Holta után Szörcsökön elvégzendő misére 100 forint alapítványt hagyott. Édesatyja Csete János életében 150 forint misealapítványt tett, és a szörcsöki templomnak 100 ft-ot adott. Így örökítette meg magát a Csete család.",
  },
  {
    title: "",
    description:
      "Cuppon család. Sopron megyei Völcséről származik.1731-ik évi ellenállók közt ketten jelen voltak. Ezen ágból származott Cuppon Ferenc Sármelléken volt plébános. Leés család . az 1299 évi okmány szerint a királynénak fegyveres jobbágyai valának. Nemességét 1324-ben Károly -Róbert királytól nyerte. Az ármális eredetije a veszprémi káptalannál van, onnan hiteles másolatot bírja a család. Forintos család Már 1593-ban említtetik. E családnak itteni ágából két tanult egyén emelkedett ki. Forintos János Kapornokon volt esperes plébános, ismét Forintos János, Pápán ügyvéd volt. Jakab család Nagy-Berzsenyből ered hol 1561-ben Nádasdy Tamás nádortól donátiót kapott.",
  },
  {
    title: "",
    description:
      "Kovacs család Nagy-Jenőből származik, hol a győri püspöknek szabadságolt jobbágyai valának. 1543-ik év után Nagy- Jenőben beállt pusztulási időszakot saját érdekökre jól felhasználták. Ugyanis 1592-ik évi leltár szerint Kovács Vince a győri püspökségnek kétkerekű malmát elfoglalta; féltelekre magát önhatalmilag szabadságolta; a pálosoknak Somlyón 40. kapás szőlőjét elfoglalta, semmi dézsmát fizetni nem akart.- Kovács János a győri székesegyházra 50ft adományozott, ezért és egyéb szolgálatáért 1610-ben Napragy püspöktől kapta az úgynevezett a bíró molnáját.- Fiai közül Péter Vázsonynál esett el1605-ben és holtteste hazahozatott.",
  },
  {
    title: "",
    description:
      "Andor Nagy Jenőben hadnagy a vázsonyi ütközetnél szintén jelen volt, honnan sok török fogollyal tért haza később a farkasok falták fel. Mihály szinte Nagy Jenőben hadnagy, Győr alatt Koronconál elesett.- Kovács János1635-ben II. Ferdinánd királytól nyert nemességet . Kovács Lőrincnek Márton fia Berzsenyi Borbálát feleségül vevén, ennek birtokára Szörcsökre áttelepedett. 1640-ben II. Draskovics György püspök Kovács családot nagy —jenői összes birtokából melyeket Napragytól kapottt kivetette: ezért Pálfy Pál nádornál a püspököt bepanaszolá, és 1649-ik év január 12-én kelt ítélet folytán Draskovics 400 ft bírság fizetésére ítéltetett.",
  },
  {
    title: "",
    description:
      "Kovácsnak pedig minden más javait a malommal együtt visszabocsájtani tartozott,de amint Nagy-Jenő történelmében láttuk a Kovács családnak az ítélet foganatosítása nem sikerült.Imre család :Sopron megye Pásztori helységből származott ide. E családnak tagja volt Imre László.Csokonyán asperes-plébános, ki a szörcsöki templom és iskolára 100 ft-ot adományozott. 1858-ban. Nagy, Kiss, Koppán, Szabó Nemes családokról mit sem tudok. Általában az evangélikus vallásuakról kevés tudomást szerezhettem, hozzáférhetetlennek mutatkoztak. kupovics, Persaics családok :Horvátországból keveredtek ide.",
  },
  {
    title: "",
    description:
      "A Persaics család most élő tagjai felsőbb iskolákat végeztek. Kristóf jelenleg segéd szolgabíró.",
  },
  {
    title: "A nép jellemzése",
    description:
      "E község lakói az elősorolt adatok szerint hajdan verekedésre hajlandók voltak.Képzelt vagy való dolgaikat erősen védték. A berzsenyiek irányában annyira menthetők, mert a régi okmányaikat a török hadjárat alatt elvesztvén senki sem tudta meddig terjed egyik másik határ, ezért tiltakozhattak ,pörlekedhettek ellenük. A folytonos pörlekedést fenntartja a pörös nevü dülő. Hogy mulatságkedvelők voltak, azt néhány családnak tönkrejutása bizonyítja, valamint azt is, hogy a közjövedelmet elmulatták, ",
  },
  {
    title: "",
    description:
      "például a katolikus rész a pap és mester aratáskor a kocsma jövedelemből oly áldomást csapott, ami a hitközségnek többe került, mint amit az összes terményért kaptak, de becsületükre válik, hogy midőn 1865-ben ezt nekik számokkal bebizonyítottam, más irányba tértek, azóta a kocsmajövedelemből iskolájukra sokat áldoztak, holott előbb folytonos adósság terhelte a hitközséget. -Mily harcias szellem volt köztük, , azt nemes társaik. Katonásan öltözködött aki tehette; kalpagosan, egész katonai díszben kísérték a halottat a temetőbe, hol sírba tételkor díszlövést adva búcsúztak el a halottól, a fejkereszten fekete zászló lengett",
  },
  {
    title: "",
    description:
      "Értelmiség tekintetében tiszta, egyenes észjárás, könnyű felfogásúak, írni, olvasni mindenki tud; ügyes szorgalmas tanítóikról is hálásan emlékeznek, hogy felsőbb iskolába is mentek, azt a családok történetéből is tudjuk. Mint érdekes adatot feljegyzem, hogy Lovász János ide való asztalos, később vasúti őr korábban gyermekei iskoláztatását valódi hősi feláldozással tette. Veszprémben Ferdinánd nevű fia a gimnázium negyedik osztályában jeles tanuló csupán a Jótevők kegyességéből tartja fenn magát; Ha sikerül iskoláit jó előmenetellel befejezni, hiszem a hozzáfűzött reményben nem csalódunk.",
  },
  {
    title: "",
    description:
      "Sajnos, hogy az iskolázás e községben is hanyatlik, mert nyáron át őrzés miatt a gyerekek az iskolát teljesen elhanyagolják. -Az is a nép jellemzésére szolgál, mit a múltból néhány legényről emlegetnek. A helybeli luthránusok templomának még e század elején nem volt tornya, harangjuk állványon függött a templom előtt .A pajkos fiatalok a harangkötélre friss csontokat vagy húsdarabokat, melynek szagát az ebek megérezvén , felugráltak, így a harangot mozgásba hozva, a kongásra a nép sokszor megrémült. Általában földműveléssel foglalkoznak, némelyek marhakereskedést űzve messze földet bejárták.",
  },
  {
    title: "",
    description:
      "A házak régente fából készültek, de mióta erdejüket kiirtották más anyagra szorultak. E század elején salétromfőzők jártak a helységekben, kik kormányfelhatalmazással a földes szobák talaját felásták és elhordták kifőzés végett ; a szörcsökiek, hogy ily alkalmatlanságtól jövőre magukat megmentsék, a kiásott föld helyett kavicsot hordtak, így nem akarva is szobájuk talaján segítettek.- A nép általában erőteljes, a fiatalságból sok beválik katonának. ",
  },
  {
    title: "",
    description:
      "A népesedés 1779-ik egyházlátogatáskor 302 gyónó, 114 kiskorú, összesen 416 katólikus, 165 evangélikus. 1870-ik évi összeíráskor, házszám 75, fi 336, nő 344, összesen 680. Ezek közt katolikus 487, evangélikus 183, zsidó 10.",
  },
  {
    title: "KOCSMAJOG",
    description:
      "Két kocsma van, egyik a katolikus, másik az evangélikus hitközségé; mindegyik fél a haszonbérletet vallása anyagi szükségleteinek födözésére használja; jövedelmet a hitközségi gondnok kezeli, és évenként számot ad. A katolikusok 1878-ban kocsmaházukat újraépítették, cseréppel födették. Az evangélikusoknak van takarék magtáruk, melyből lelkészök és mesterök fizetését adják, egyéb hitfelekezeti kiadásaikat födözik. A katolikusok is létesítettek ily magtárt, de néhány év múlva megszünt.",
  },
  {
    title: "Karakó- szörcsök egyházi történelme",
    description:
      "Feltéve, hogy az 1299-ik évi okmány , Karakó-Szörcsökre vonatkozik, aszerint már azon időben volt e községben templom, Szt. Tamás tiszteletére, mely a helység közepén állt, melyhez a királynénak felerészben joga volt. A mostani templomot a közbirtokosok 1747-ben építtették, és talán az ösrégi romjaira, mert ez is a helység közepén áll. Hogy melléke temetőül használtatott, bizonyítják ama emberi csontok, melyek a templom körüli ásás alkalmával előkerültek.",
  },
  {
    title: "",
    description:
      "Ez is a régi okmánynak e községre való vonatkozása mellett tanuskodik; mert az egyházi történelemből tudjuk, hogy hajdan a templom bekerített melléke, a hívek temetkezési helye. Mikor a mostani templom épült, a temetőre vonatkozó ősi szokás már megváltozott; az itten nyugvó holttestek egy régibb templom létezéséről tanuskodnak. 1794-ben a templomot nagyobbították, sekrestyét építettek. Az 1795. év július 59-én felszenteltetett; azóta a hívek gondozása közt fennáll. Az oltárkép sz.Andrást ábrázolja, állványával együtt csinos munka. Egyházi szerei és ruházata díszesek.",
  },
  {
    title: "",
    description:
      "Csete László hittanár szép casulát, álbát, canontáblákat kézi keresztet ajándékozott; Csete Antal kanonok pompás kiállítása mifsálet adott; a mostani monstrantiát Büky Karolina, György Mihály mester neje vette 1873-ban; Szt.András , ereklyéjét Csete László hozta Rómából, tartóját Berzsenyi András szerezte; a veszprémi oltáregylet cásulát, velumot, a hitközség is négy ministerruhát és ingeket vett, a rózsafűzér társulat pedig pompás oltárterítőt készíttetett.50 ft alaptőkéjét Imre László, volt csokonyai esperes-plébános hagyományozta. A kelyhet Imre Alajos újraaranyoztatta, a mostani nagyharangot a mostani hitközség 1858-ban csináltatta.",
  },
  {
    title: "Isteni szolgálat rendje",
    description:
      "Az 1779. évi egyházlátogatás K.Szörcsökön minden negyedik vasárnap és ünnepen isteni szolgálatot rendel; azonban a hívek Tóth Ignác plébánossal újhold vasárnapi sormisében egyeztek, mit 1864-ben az egyházmegyei hatóság megerősített. Ezenkívül karácsonykor éjféli mise, keresztjáró hét harmadik napján procefsio, május 30-án fogadalmi mise, Sz. András napján és rákövetkező vasárnap van a templom búcsúünnepe, újhold szombaton a rózsafüzér társulat miséztet.",
  },
  {
    title: "Hitéleti adatok",
    description:
      "A hitéletnek egyik nevezetes jele itt is, hogy a született katolikus az egyháztól el nem pártolt, hanem az anyakönyvek tanusága szerint az itteni evangélikusok közül 13-an visszatértek a katolikus hitre; ezek közül a Bartakovics László fiával együtt Ismét visszament a lutheranizmusba, jele, hogy nősüléskor a Jegyese kedvéért külszínből változtatta vallását. -Vegyes házasság ritkán köttetett, de még lehetséges vala, mindig a katolicizmus előnyére. -A helyben lakó evangélikusok alkalmasint donatio útján jöttek ide, vagy a reformáció terjedésekor elpártoltak maradványai.",
  },
  {
    title: "",
    description:
      "A hitélet virágai és gyümölcsei gyanánt megemlíthetjük, hogy a Szörcsökiek Isteni szolgálatra legbuzgóbban eljárnak, nemcsak helyben, de az anyatemplomba Is. Karácsonyra, húsvétra kevés kivétellel gyónnak; temetésre, báli időben számosan elmennek; az egyházi énektanulást itt leglelkesebben fogadták,24 tagból állott , dalárdájuk gyönyörűen énekelt 4 hangra.- A rózsafűzér társulat 1856 óta virágzik, a tagok minden hónapban miséztetnek, vasárnap és ünnep délután az olvasót nyilván imátkozzák a templomban, a templom díszítéséről gondoskodnak.",
  },
  {
    title: "",
    description:
      "Végre a község hitbuzgalmának jelei azon pénzáldozatok, melyekkel templomukat fenntartják, és katolikus jellegű és iskolájukat megmentették.",
  },
  {
    title: "Mise alapítványok, keresztek és temető",
    description:
      "Csete László kiszomáromi plébános végrendeletileg 100 ft. misealapítványt hagyott érette tartandó két misére. Csete János 1S5Oft. misealapítványt tett, magáért és nejéért tartandó három misére. Büki Karolina 100ft. misealapítványt tett magáért és családjáért tartandó három misére. A templom előtt régi idő óta egy fakereszt állt, melyet, 1867-ben a szél kitört, helyette a hívek adakozásából készült a mostani kőkereszt, mely 1868-ik év szeptember 14-én felszenteltett, fenntartja a hitközség.",
  },
  {
    title: "",
    description:
      "1870-ben a Berzsenyi András és neje Hangler Anna saját tagbirtokukon állíttattak kőkeresztet, mely azon évben felszenteltetett; alapítványa 15ft. 1872-ben Sipos Pál és neje Molnár Rozália a temető avult fakeresztje helyett kőből újat készíttettek, mely ugyanaz év október 19-én lett felszentelve; fenntartását a hitközség fogadta el.A temető a régmúltban a templom körül volt, amint az ott kiásott csontok bizonyítják. Utóbb a község délkeleti házsorának kertjei alatt volt a temető; a mostanit tagosításkor mérték ki, és 1852-ben felszenteltetvén, azóta használják.",
  },
  {
    title: "",
    description:
      "1870-ben a Berzsenyi András és neje Hangler Anna saját tagbirtokukon állíttattak kőkeresztet, mely azon évben felszenteltetett; alapítványa 15ft. 1872-ben Sipos Pál és neje Molnár Rozália a temető avult fakeresztje helyett kőből újat készíttettek, mely ugyanaz év október 19-én lett felszentelve; fenntartását a hitközség fogadta el.A temető a régmúltban a templom körül volt, amint az ott kiásott csontok bizonyítják. Utóbb a község délkeleti házsorának kertjei alatt volt a temető; a mostanit tagosításkor mérték ki, és 1852-ben felszenteltetvén, azóta használják.",
  },
  {
    title: "",
    description:
      "A régi temető Persaics János tagbirtokába esvén, két év múlva felszántotta.-Az evangélikusok temetője, elkülönítve van külön bejárattal.",
  },
  {
    title: "A plébános fizetése",
    description:
      "1779.évi egyházlátogatás szerint minden külön kenyéren élő házaspár fizet fél öregmérő rozsot, 25 dénárt;a hitközség tartozott a plébániaföldekből egy holdat munkálni, rét kaszálásra 5 napszámost küldeni; minden sormise alkalmából ebédváltságul 50 denár Jár. 1864-ben kötött szerződés szerint jár fél posonyi mérő rozs, 30 kr pár pénz; búcsu napján 4ft, újhold szombat és vasárnapi fuvarért 12.ft miseborért 5ft , a földmunka és a kaszás napszám megváltásáért IOft. Ezen 31 ft a hitközség pénztárából fizettetik. A stoláris fizetés az anyahellyel egyenlő.",
  },
  {
    title: "Iskola és kántortanítói állomás",
    description:
      "Legrégibb iskolaház a templom mögött állt, melyről az1779-ikegyházlátogatás írja: tából épült, egyetlen szobahelyiség, romladozó állapotban.Ez mutatja, hogy az iskola már a régi időben is volt, tanterem a mester szobája vala. Midőn e nyomorult helység lakhatatlanná lett, a hitközségi korcsmá-ban foglaltak el egy szobát, mely iskolául két évig szolgált. 1818-ban a csordás házát újra építették s ez lett a mesterlak és iskola ,de a templomtól távol esvén, Bolla Miklós és Antal testvéreknek a templom mellett lévő házával elcserélték 1819- ben.",
  },
  {
    title: "",
    description:
      "1850-ben a ház leégett, újrafelépítve1873-ig szolgált, de szűk belsősége a törvény szabványának meg nem felelt, a hitközség megvette 3000 ft-ért. Nagy Dántel házát, melyben a hátsó részt tanteremmé alakítatta. E tetemes pénzösszeg előteremtéséhez eladták a régi házat, ezentúl minden házaspár 8ft. fizetett, miből 2000ft kikerült, a hátralévő 1000ft. a veszprémi káptalan 10évi törlesztésre kölcsönözte.",
  },
  {
    title: "",
    description:
      "A tanító fizetése 1779-ben, minden marhás gazdától fél mérő rozs, a marhátlanoktól negyed mérő, átlagos párpénz Sft, temetéskor24 hirdetőért 1 lés fél denár, harangozásért minden gazdától egy kenyér, tandíj minden egyes gyerektől 3lés fél dénár, tüzifa minden pár igás marha után egy szekérrel; ezenkívül 4 hold szántóföld melyet a község művelt. Jelenlegi fizetése 7 hold föld, melyből négyet a hívek munkálnak, 1-et trágyáztak, a temető fűtermése; a pár; gabona maradt a régi, tandíj és párpénz helyett a hitközség pénztárából 37ft 50 kr. és öt öl tüzifa.",
  },
  {
    title: "",
    description:
      "A mesterek közül Jordanics Gábor híressé lett azon búcsuztatóról, melyet] 829-ben Tornán véletlenül agyonlótt Kiló Ferkó nevü cigány temetésére szerkesztett és énekelt. A cigány észjárásnak mintaszerű leírása a szerző leleményességét bizonyítja, a vidéken máig el van terjedve; mit ritkaságot én is beírtam a plébánia történelmi könyvébe. Chapó Móric,1863-71-ig. Fő tanító, fáradhatatlan éneklész, a népet nemcsak egyházi énekekre tanította, de 24 tagból álló dalárdát több műénekre Is sikeresen oktatta. György Mihály nejével együtt a templomnak monstrantiát vett 1872-ben. ",
  },
  {
    title: "",
    description:
      "Borsódi Ferenc 1874 óta. Ágostoni hitfelekezetüek Az ágostoni hitfelekezetüeknek itt temloma és iskolája lévén, ezek történetét is feljegyzem. Bizonytalan vajon ősi lakosok-é, kik vallási reformációkor váltak el, vagy később települtek ide; annyi bizonyos, hogy 1861-ben már számosan voltak mert Perlaky nevü mesterük a kisberzsenyi ellenállók közt jelen volt, És Polyondy László kanonok agyonlövését meggátolta. Templomuk 1790 év körül épült, eleinte náddal volt födve, tornya nem volt , mostani alakját 1844-ben nyerte. A két vallású lakosok békésen élnek egymással.",
  },
  {
    title: "",
    description:
      "Hajdan az evangélikusok a mi ünnepeinken a külső munkától tartózkodtak, viszonzásul a katolikusok nagy pénteken, mint azoknak ünnepnapján szintén nem dolgoztak. 1867-ben e szép egyetértés felbomlott, mikor sz. Péter és Pál ünnepén a lutránusok tüntetésből külső dologra mentek, mit a katolikusok gátolván, emiatt Psareka István azon időbeli főbíró a katolikusokat megbüntetendő vizsgálatot kért. A vizsgálat igen részrehajlón folyt, mi ellen a katólikusok tiltakozván, más vizsgálatokat kértek, 1868-ban az ügyet békésen kiegyenlítették. Egyházközségileg a kertai lelkészséghez tartoznak. ",
  },
  {
    title: "",
    description:
      "Különösen jómodú gazdák; korcsmájuk és takarékmagtárjuk jövedelmét hitfelekezeti költségeik födözésére fordítják, faiskolájuk szépen tenyészik .Összesen 183-an vannak. ",
  },
  {
    title: "Vége",
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
