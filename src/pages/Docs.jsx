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

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Beszámoló</td>
                <td className="p-4">
                  <a
                    className="underline"
                    href="/assets/documents/Beszámoló.pdf"
                    download="Beszámoló"
                  >
                    letöltés
                  </a>{" "}
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Házirend</td>
                <td className="p-4">
                  <a
                    className="underline"
                    href="/assets/documents/Házirend_aláírt.pdf"
                    download="Házirend_aláírt"
                  >
                    letöltés
                  </a>{" "}
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Szolgálati terv 2023</td>
                <td className="p-4">
                  <a
                    className="underline"
                    href="/assets/documents/Szolg_terv2023határozatszámos.pdf"
                    download="Szolg_terv2023határozatszámos"
                  >
                    letöltés
                  </a>{" "}
                </td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Szolgálati terv 2022</td>
                <td className="p-4">
                  <a
                    className="underline"
                    href="/assets/documents/Szolg22határozatszámos.pdf"
                    download="Szolg22határozatszámos"
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
