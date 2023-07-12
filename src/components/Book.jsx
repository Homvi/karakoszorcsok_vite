import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import Page from "./Page";

const descriptions = [
  "Bevezetésül egy régi okmány Szörcsök mily régi község, bizonyítja a , Hazai okmánytár VI k. 445. és következő lapjain közlött okmány, mely 1299-ik évben kelt.-Ezen okmány tartalma szerint szörcsöki nemes Opurnak Zoda, Blásynak pedig Bors és Miklós nevü fiai kegyetlenül megverték Ágnes királynénak Arkybana-Zurchukon lakó László és Deés nevű jobbágyait, a királynénak Arkybána-Zurchuk nevü birtokát erőszakosan elfoglalták.",
  "A verekedők és erőszakos foglalók ellen Deés és László pört indítottak István alországbíró előtt.-E pör letárgyalását tartalmazza az említett okmány, mely eredetiben megvan a veszprémi káptalan levéltárában; hiteles másolatát pedig a karakószörcsöki nemes Deés család bírja. Minthogy Veszprém megyében Szörcsök nevü két község is van, mindkettő itt a Somlyó táján fekszik, különböztetésül az egyik Bor, másik Karakó előnévvel bír. Kérdés, melyik községre vonatkozik az említett régi okmány?",
  "Eddig nem ismerünk történelmi adatot mely eldöntené, melyikben volt a királynénak Arkybana-Zurchuk nevü birtoka; a Torna folyó, melyet az okmány említ mindakét községhatárát érinti: ebből tehát eligazodni nem lehet; így a helyi viszonyok tüzetes ismeretéből kell valami megközelítőt megállapítani.",
  "Az okmány a királyné jószágának határjárását leírván Bogdány nevü pusztát említ; Ez most a Borszörcsöktől északkeletre fekvő Bogdány pusztával azonos lehetne s így az okmány a mostani Bor —Szörcsökre vonatkoznék. Azonban Karakó- Szörcsök helyrajzi történelmének ismerete arra vezet, hogy az említett okmányt ide vonatkozónak vitatjuk mert Győr a Deés családot ,mint karakó-szörcsöki törzsbirtokost 1746- ban a nádor elismerI."
];

const pageContent = [
  {
    title: "Karakó-Szörcsök község polgári történelme",
    description: descriptions[0],
  },
  {
    title: "",
    description: descriptions[1],
  },
  {
    title: "",
    description: descriptions[2],
  },
  {
    title: "",
    description: descriptions[3],
  },
];

function Book() {
  const bookRef = useRef(null);

  return (
    <>
      <div className="pt-24 hidden md:block">
        <HTMLFlipBook width={450} height={600}>
          {pageContent.map((page, id) => (
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
          {pageContent.map((page, id) => (
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
