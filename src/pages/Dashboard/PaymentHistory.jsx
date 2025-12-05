import React from "react";

export default function PaymentHistory() {
  return (
    <div className="min-h-screen bg-white font-display text-black p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Payment History</h1>
        </header>

        <main className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase border-b">
                <tr>
                  <th className="px-6 py-4 font-semibold">Parcel Info</th>
                  <th className="px-6 py-4 font-semibold">Recipient Info</th>
                  <th className="px-6 py-4 font-semibold">Tracking Number</th>
                  <th className="px-6 py-4 font-semibold">Payment Info</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>

                {/* Row 1 */}
                <tr className="border-t">
                  <td className="px-6 py-4">Liquid Cleanser</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold">Shakil</p>
                    <p className="text-gray-600">Lalkhan Dighi, Panchagarh</p>
                    <p className="text-gray-600">01773689877</p>
                  </td>
                  <td className="px-6 py-4">568352</td>
                  <td className="px-6 py-4">৳ 121 (Paid)</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors">
                      View
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="bg-gray-50 border-t">
                  <td className="px-6 py-4">Liquid Cleanser</td>
                  <td className="px-6 py-4 text-gray-600">
                    Lalkhan Dighi, Panchagarh
                  </td>
                  <td className="px-6 py-4">568352</td>
                  <td className="px-6 py-4">৳ 121 (Paid)</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors">
                      View
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="border-t">
                  <td className="px-6 py-4">Liquid Cleanser</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold">Anika</p>
                    <p className="text-gray-600">Savar, Dhaka</p>
                    <p className="text-gray-600">01987654321</p>
                  </td>
                  <td className="px-6 py-4">568352</td>
                  <td className="px-6 py-4">৳ 121 (Paid)</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors">
                      View
                    </button>
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="bg-gray-50 border-t">
                  <td className="px-6 py-4">Liquid Cleanser</td>
                  <td className="px-6 py-4 text-gray-600">
                    Lalkhan Dighi, Panchagarh
                  </td>
                  <td className="px-6 py-4">568352</td>
                  <td className="px-6 py-4">৳ 121 (Paid)</td>
                  <td className="px-6 py-4">
                    <button className="bg-gray-200 px-5 py-2 rounded font-semibold hover:bg-gray-300 transition-colors">
                      View
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
