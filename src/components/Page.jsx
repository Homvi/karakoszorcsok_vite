import PropTypes from "prop-types";
import React from "react";

const Page = React.forwardRef(function Page(props, ref) {

  //Photo by <a href="https://unsplash.com/@kiwihug?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kiwihug</a> on <a href="https://unsplash.com/photos/3gifzboyZk0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  return (
    <div className="bg-old-paper text-black font-ringBearer" ref={ref}>
      <div className="flex flex-col relative gap-5 justify-between h-full p-5">
        <div className="">
          <h1 className="bold text-2xl my-4">{props.header}</h1>
          <p className="md:text-xl">{props.description}</p>
        </div>
        <p className="text-center">{props.pageNumber}</p>
      </div>
    </div>
  );
});

Page.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Page;
