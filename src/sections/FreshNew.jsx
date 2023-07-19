import erzsebet from "../assets/img/erzsebet.jpg";

const freshNew = {
  title: "Erzsébet Tábor Plusz 2023",
  img: erzsebet,
  description: "(Erzsébet Tábor-Tábordal)",
  quote:
    '"Gyere el, kérünk, légy a vendégünk! S lesz egy szép, közösemlékünk..."',
  link: "https://www.facebook.com/konyvtarkarakoszorcsok/posts/pfbid0BEJZnrcbX82Qijvyf3Tj8WkkhvtZ5DWPAZeMKUZfzPJ28Njts1wMfUViJzV82nUZl",
  date: "2023-07-06",
};

const FreshNew = () => {
  return (
    <div id="news" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt={freshNew.title}
          src={freshNew.img}
          className="max-w-screen  rounded-lg shadow-2xl"
        />
        <div>
          <div className="text-slate-600">{freshNew.date}</div>
          <h1 className="text-5xl font-bold">{freshNew.title}</h1>
          <p className="py-6 prose prose-stone  ">
            {freshNew.quote && (
              <>
                <span className="italic">{freshNew.quote}</span>
                <br />
              </>
            )}
            {freshNew.description}
          </p>
          <a href={freshNew.link} target="_blank" rel="noreferrer">
            <button className="btn btn-primary">További képek</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreshNew;
