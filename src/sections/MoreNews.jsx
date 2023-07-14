import New from "../components/New";
import news from "../news";


const sortByDate = (arr) => {
  let sorted = arr.slice().sort(function (a, b) {
    a = a.date.split("-").join("");
    b = b.date.split("-").join("");
    return a < b ? 1 : a > b ? -1 : 0;
  });
  return sorted;
};


const MoreNews = () => {
  return (
    <div className=" min-h-screen bg-base-300 p-5">
      <div className="flex flex-col gap-5 items-center">
        {sortByDate(news).map((item, id) => {
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
