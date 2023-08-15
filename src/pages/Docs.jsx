const Docs = () => {
  return (
    <div className="min-h-screen pt-16 relative">
      <h1 className="font-semibold text-center  text-xl my-10">
        Nyilvános dokumentumok
      </h1>
      <div className="bg-white">
        <div className="overflow-x-auto border-x border-t">
          <table className="table-auto w-full">
            <thead className="border-b ">
              <tr className="bg-gray-100">
                <th className=" text-left p-4 font-medium">Megnevezés</th>
                <th className=" text-left p-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Meghívók, plakátok 2022</td>
                <td className="p-4">
                  <a
                    className="underline"
                    href="/assets/documents/Meghívók_plakátok_2022.pdf"
                    download="Meghívók_plakátok_2022"
                  >
                    letöltés
                  </a>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Docs;
