import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import Page from "./Page";
import descriptions from "../book";

function Book() {
  const bookRef = useRef(null);

  return (
    <>
      <div className="pt-24 hidden md:block">
        <HTMLFlipBook width={460} height={620}>
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
