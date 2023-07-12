const Gallery = () => {
  const images = [
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357478281_281826264506835_6848537578995092688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DY9B_vs86tgAX9pyf4J&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDaj8i7AOmhwj-uKXDnb4PjxV_pLFWrg9E6lodPbYVlHg&oe=64B181DB",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358470559_281825684506893_7069909253414932492_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rf2UMajrGm4AX-al7-4&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDxq13WmvJ_ouMtNK5UCvFzvZ85ZjsxF4Ny2qtFrOUmQQ&oe=64B2F546",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358410015_281821454507316_525263802385808858_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_s_KIKH-r1UAX8DL7io&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAePsOt1IB1MdPpLJ95Fj27N3_gVPRp_C-YjiFBQtU2_w&oe=64B24891",
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
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358097001_281824011173727_2801488330057729697_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MPqeN9EJwKAAX_2Fcfo&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfC5tIJEN8-kEXVSVLnBr9otl0-59US5qEa-pt0QBT-Hsw&oe=64B27766",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358084171_281823941173734_5388391362686101350_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KjRkIy3TiP4AX_J3A7o&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBkEqZQ6pKpO41pdsZ6gd6d3MIkacFk5FG8catBvj6cPQ&oe=64B38E01",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357580785_281823824507079_1051993195253668748_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O9auBy_msqcAX97wXUG&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCuk_ztutWT434s-8e6oxfOH1SBzPdSEGgGVFtUVpJdQQ&oe=64B2CBF7",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357705221_281823767840418_5501918335240296005_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mBMMOwuLcfQAX-4X__6&_nc_oc=AQmsXD9HttNIo4Hp5uUFCFpEyFxsjW0_ZJUQwLgA5et9UwGHBACZkk4Pie3u0JkzMbo&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAg2Chei7W80FMHEy6-U1iVop6O-DuaKwQN0BCdc3SU2g&oe=64B4253A",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/358078154_281823694507092_4410573052689829173_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=w5WKVfqwzgYAX_3jlEJ&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDWY0GnSYgyJWtVEP3Bd_veLZVZFUCzBsgbh2Dxr9fOlA&oe=64B28ED5",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/318106035_184087987613997_4651737303390897778_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=DW6wTwecdSEAX9W5jRW&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDScWNnwnqqsqft7NEhiFULnfpU_B-AGMApFGCO2p8xFA&oe=64B3EBB8",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/317996321_184087240947405_3896216343457765356_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=S9wqnGQYwJUAX8GBi2m&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDDRJBh8rT23_qJjH5OR8xgJq2wLEIL75pj6_IY2EeAHw&oe=64B3BBDB",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/318187279_184086077614188_1574990574614877360_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=kzI_4-CbLREAX9d643I&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCVqL-1l4zUWPgH08uYXf1L7VdLFdwJfbZfQ7nZ4MJEXA&oe=64B3621C",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/315677246_178401554849307_5277191959688967340_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=9QmeVttRVxUAX-LMKg2&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDGx9fNxgzmNhqgk98D2-ksNFpDsAew8nOuDw8AiJvWmQ&oe=64B3E52E",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/314972881_178396338183162_7000499567064521424_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=IC4QGbAZh3oAX-x4KyK&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAHpgqKEO5xfq49HBy6WnxQINEzsFdFvOPnxzEkccPDSA&oe=64B3B3ED",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/315300209_178396304849832_6593208021944162369_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=FxkBIqicA40AX8dx3tp&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfD7Nx7vILQEIkRuSIQQnHYXHqz6s5mr4oD98Uj9m38uFA&oe=64B43CA1",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/314750591_178396098183186_5206395353170328686_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=-lF_gtof6F0AX8Squ48&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBxM02FHMqc6DBfMKksCU3INI2EX2EJju41Ujn3MB9lxA&oe=64B3D1DB",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/314834448_178396074849855_226942652383504626_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=5MhICGbFqxEAX_5PSMJ&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCHg9nGK7YQStXeJc8Y0T-LcwqbCB48zuapbRebK72j7w&oe=64B35F97",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/314864135_178395831516546_2824254400320939862_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=68PjuIJJoXIAX-cnv10&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCmFT7zjaWCozfcdzQMZkCM2Ti3S9FGixc22a72Lghdkw&oe=64B44B0C",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/315402429_178332874856175_2818309120721215491_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=6jBkGiUx6DwAX9vmgs6&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfD_ZTxoopkd9i_oM7o1tVZ266O1P3-FAQ-rahf1ZYi6hg&oe=64B293DE",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/306359509_709376580770331_5133655889163118571_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=YT4dGo_0spQAX8poMzu&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBZCNp0RKI_DnIFewW1XyyI1pfRt8WJWKB4f20882ITBQ&oe=64B3160F",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/306547087_709376217437034_6318255324053409460_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=5gvyIODD-SkAX9BvABH&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAGIvbGhvg5U4l_uYOIxBijBcpOR1ovsIywLOh2SB1pgg&oe=64B453E7",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/292248780_663209322053724_8160447566743211604_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=p8I6IO0SwEMAX-Uwz5D&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDvhMG2FEhcOICjgjrRs0783GzTrxB0Ajb0aK778MJCPw&oe=64B3DA05",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/292243665_663192015388788_4610376456339247011_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=OpDbzZTmPU4AX9hAzQi&_nc_oc=AQlgJ0N-Esd9Fm5iA20_1gakfvaN9cl5yPOmQ-JQHXL-Gip60TpQFv1M2Xn0PHh__h4&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDEEzEOY99cXXK_dcjESypSSR2HyJEOyFc5oTkiGqUOrQ&oe=64B44DD0",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/291477716_663191365388853_7642474619473030555_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=RP5wc7NXiFQAX-HMr17&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDE4EYiIOMMz-XA_wq3RQDhJgBcRc9sRRd_MQu8EuQ7Fw&oe=64B313A4",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/291467601_663190115388978_9091371633772006917_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=cdRzWufad7EAX_8AWtA&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBwx8nHc_j9VoD2Nfc0uy-DFgrq8ydCbj23VMbvfCdBGg&oe=64B3E24E",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/291236046_663179195390070_513772053101719952_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=8WUMN4gG2KMAX9s-gjT&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCV4-l1u40vZ4jDJK4RYRLEuh1__vSyDhDKFFw2rNQfog&oe=64B3E5CE",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/291041470_663178398723483_4969474952349835305_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=rVVBXSA58RIAX_DNOnx&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfBa87rKrJtKz6El3qV0IW9g_vbI5KYl_c5OQDjDkIbFFA&oe=64B3C875",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/291119195_663178302056826_1219509457300953896_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ik6sSxbA7ZsAX_jcwTA&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfCaJQ9u65cnmHLFgkRTS7sLuYzQcyhKV6lLpZtYnNCDcg&oe=64B2B311",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/292088450_663177692056887_1051611789294547071_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=m0n2CZrVwN4AX9sV-qP&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfAgBtprXwTENwH5PT9XJ_6gYtoDKM2fLPgFH-a5gQhvyw&oe=64B343EC",
    "https://scontent.fbcn13-1.fna.fbcdn.net/v/t39.30808-6/357578537_281822811173847_7464697726172110798_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1r498kSs0KwAX9HDEi8&_nc_ht=scontent.fbcn13-1.fna&oh=00_AfDevW14TzTmCYdmt0QJZf9file8PU_QB3VJoi_Ifp4Nqw&oe=64B3683D",
  ];

  let uniqueImages = [];
  images.forEach((element) => {
    if (!uniqueImages.includes(element)) {
      uniqueImages.push(element);
    }
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-3">
      <div className=" w-full"></div>
      <h1 className="mt-24 mb-5 text-3xl">Galéria</h1>
      <div className="gap-3 columns-1 md:columns-2 lg:columns-3">
        {uniqueImages.map((image, id) => {
          return (
            <img
              onClick={() => console.log(image)}
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
