import PropTypes from "prop-types";

const New = ({ img, description, title, link, date }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="container md:w-60">
        <figure>
          <img
            className="float-left w-[600px] h-[250px] object-cover "
            src={img}
            alt={title}
          />
        </figure>
      </div>
      <div className="card-body">
        <div className="text-slate-400">{date}</div>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end">
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <button className="btn btn-primary">Tovább</button>
            </a>
          ) : (
            <button className="btn disabled">Tovább</button>
          )}
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  date: PropTypes.string.isRequired,
};

export default New;
