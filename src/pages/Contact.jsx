const Contact = () => {
  return (
    <div className="min-h-screen pt-16 relative">
      <h1 className="font-semibold text-center  text-xl my-10">
        Kapcsolat
      </h1>
      <div className="flex justify-center my-5">
        8491 Karakószörcsök, Kossuth u. 1.
      </div>
      <div className="bg-white">
        <div className="overflow-x-auto border-x border-t">
          <table className="table-auto w-full">
            <thead className="border-b ">
              <tr className="bg-gray-100">
                <th className=" text-left p-4 font-medium">Név</th>
                <th className=" text-left p-4 font-medium">Telefon</th>
                <th className=" text-left p-4 font-medium">Tisztség</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Honvédő Szandra</td>
                <td className="p-4">+36706311114</td>
                <td className="p-4">Polgármester</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Farkasné Tóth Bettina</td>
                <td className="p-4">+36205134705</td>
                <td className="p-4">Kulturális munkatárs</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Kovácsné Szakály Krisztina</td>
                <td className="p-4">+36305631397</td>
                <td className="p-4">Hivatalsegéd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
