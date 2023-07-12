const Gallery = () => {
  const images = [
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357478281_281826264506835_6848537578995092688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DY9B_vs86tgAX9pyf4J&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDaj8i7AOmhwj-uKXDnb4PjxV_pLFWrg9E6lodPbYVlHg&oe=64B181DB",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358470559_281825684506893_7069909253414932492_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rf2UMajrGm4AX-al7-4&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDxq13WmvJ_ouMtNK5UCvFzvZ85ZjsxF4Ny2qtFrOUmQQ&oe=64B2F546",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358470559_281825684506893_7069909253414932492_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rf2UMajrGm4AX-al7-4&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDxq13WmvJ_ouMtNK5UCvFzvZ85ZjsxF4Ny2qtFrOUmQQ&oe=64B2F546",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358410015_281821454507316_525263802385808858_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_s_KIKH-r1UAX8DL7io&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAePsOt1IB1MdPpLJ95Fj27N3_gVPRp_C-YjiFBQtU2_w&oe=64B24891",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358410015_281821454507316_525263802385808858_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_s_KIKH-r1UAX8DL7io&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAePsOt1IB1MdPpLJ95Fj27N3_gVPRp_C-YjiFBQtU2_w&oe=64B24891",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357478281_281826264506835_6848537578995092688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DY9B_vs86tgAX9pyf4J&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDaj8i7AOmhwj-uKXDnb4PjxV_pLFWrg9E6lodPbYVlHg&oe=64B181DB",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357750264_281826631173465_7387830317502761548_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=or9-uWUJDvQAX8Wm_4C&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfASPkpzStINKxiQBNrm7Arxtvxfaz4s-CqxavBMlDtJbw&oe=64B2DDC8",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357743164_281826837840111_5687560556736137015_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ImIeexvQTpwAX99anHR&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBBrcDPjZzjHFJRooLodVPYicEqbNxVicD-vVsh9TQEDg&oe=64B28049",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358556939_281821531173975_7338571670821166490_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-usXz8T56pMAX8xjZWP&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfC6vB5HU051bCUqt5amkLHil0AoRe7LS8XT7vjYuKjVPA&oe=64B32D0F",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/358056211_281821707840624_743923427820832461_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DG4iv293UhYAX_YoA14&_nc_ht=scontent-bcn1-1.xx&oh=00_AfDHaOf4XlgYDRusq-9XRCXsypG3s1Mjr4TBLhr-TKbw1g&oe=64B342BB",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357720423_281824464507015_1326374252255170447_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o74MplFFZuEAX-ZZsw2&_nc_ht=scontent-bcn1-1.xx&oh=00_AfAvJwUYcN45YzaekGoScdgj7v8GHN8ct7oReOsw3QhYHA&oe=64B1E850",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357713898_281824261173702_2070180610000683720_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cuHypT5CxRcAX-ckmLI&_nc_ht=scontent-bcn1-1.xx&oh=00_AfDRsPTE2o738OuFAKC0P5fOMSULSKneFwwXwf2xEZQ19w&oe=64B1DAF7",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357716440_281824181173710_8312154970930446378_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=v2be8pQOY4wAX-JefL9&_nc_ht=scontent-bcn1-1.xx&oh=00_AfDGIHBjhMPoZUK-BQDNvPSL1ZE4w8zDna2eoNVoms9kLg&oe=64B2C870",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/357750289_281824114507050_8013606975797697589_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=a4lNldAHh4cAX8ISNxe&_nc_ht=scontent-bcn1-1.xx&oh=00_AfCTGCKtZKqPZKMmEt_BuNzqS1eOs3T-whuOhSOM1fWIxA&oe=64B28D85",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/340820920_540640564807395_2321480866172246000_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-syGDwGqiQAAX8FXDtu&_nc_ht=scontent-bcn1-1.xx&oh=00_AfAj_IZ-NkQ-P8r64tjOaxfbEUqgiRbY02Afh-mIxZwDtg&oe=64B2851A",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/339918357_205876532079354_8260899619082350831_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=h9WSOcEmErUAX_6C0Zq&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCYB_CkT0Nn1PYEyJuisywmWEET0YEzpiGiKtbruWDlMg&oe=64B26BAA",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/339117530_3363195940597787_3239871591136635653_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2vbynopdQJIAX_ps0Al&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfC2scO_6eFIK4hU8htFNKWFabnbQH1hqqlqVFaxcbQF_g&oe=64B31994",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/337510665_158543943775062_3772405412658937068_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ab7Xgdzx_sMAX9qmjEy&_nc_ht=scontent-bcn1-1.xx&oh=00_AfAf8FHBq0FmDfMMkUXK2jwthzwAsnyd39txdBNGshtouw&oe=64B33227",
    "https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/336808452_1214354605879896_915474872531334346_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=X7iatjZgEA8AX9lO8d5&_nc_ht=scontent-bcn1-1.xx&oh=00_AfDKEEAXYgtaUnrAkbmocJhEejTjhCDhnR2i-BbCUlNjGA&oe=64B28D45",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/335405890_114785264895871_3093632420056020498_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XIl5332P6dYAX82nK32&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBPYH0kvNjTB88KRDrb91Yao4Ate3AZ-Qld3kk-FUHDQg&oe=64B1AACC",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/330391977_142608381773584_5837910458775998578_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=lGNXo7Ssa_MAX-W3xqc&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAwJ_FVXYxPkRwd8SsxrYgoyzv3TQqVCCvzNlsYYwvXXA&oe=64B1B184",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/330392100_167140939454605_4574641712808452334_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=U0udBmR2JAEAX9AF1kA&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBaFQt-4jaHHLKLjzO1RBdS6NmL288n_69aH-YG8L_1Mg&oe=64B1F714",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-3">
      <div className=" w-full"></div>
      <h1 className="mt-24 mb-5 text-3xl">Galéria</h1>
      <div className="gap-3 columns-1 md:columns-2 lg:columns-3">
        {images.map((image, id) => {
          return (
            <img
              loading="lazy"
              key={id}
              src={image}
              alt=""
              className="w-full shadow-xl mb-3"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
