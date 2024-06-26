import React from 'react'
import image from "../asset/Image.png"

function train_timetable() {
  return (
    <body>
    <div id="app"></div>
                <div className="min-h-screen bg-gray-100">
                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-64 bg-white p-5">
                            <div className="text-xl font-semibold mb-6">Rail.Ai</div>
                            <div className="mb-4 text-gray-800">
                                <div className="mb-2"><i className="fas fa-exclamation-circle text-red-500 mr-2"></i>Lost and Found</div>
                                <div className="mb-2"><i className="fas fa-leaf text-green-500 mr-2"></i>Ecovision</div>
                                <div className="mb-2"><i className="fas fa-table text-blue-500 mr-2"></i>Train TimeTable</div>
                                <div className="mb-2"><i className="fas fa-chart-line text-purple-500 mr-2"></i>Demandshift</div>
                            </div>
                            <div className="text-gray-800"><i className="fas fa-sign-out-alt mr-2"></i>Sign out</div>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 p-10">
                            <div className="flex justify-between items-center mb-10">
                                <div className="text-2xl font-semibold">View and Manage</div>
                                <div className="flex items-center">
                                    <img src={image} alt="User profile placeholder image" className="rounded-full mr-3"/>
                                    <div className="text-right">
                                        <div className="font-semibold">John Doe</div>
                                        <div className="text-sm text-gray-600">User</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <select className="border border-gray-300 rounded-lg p-2">
                                        <option>Select Date</option>
                                    </select>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Go</button>
                                </div>

                                <table className="w-full mb-6">
                                    <thead>
                                        <tr className="text-left text-gray-600">
                                            <th className="pb-2">TRAIN</th>
                                            <th className="pb-2">DEPARTURE</th>
                                            <th className="pb-2">ARRIVAL</th>
                                            <th className="pb-2">ORIGI</th>
                                            <th className="pb-2">DESTINATI</th>
                                            <th className="pb-2">DETAIL</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-800">
                                        <tr>
                                            <td className="py-2">123</td>
                                            <td className="py-2">08:00</td>
                                            <td className="py-2">10:00</td>
                                            <td className="py-2">City</td>
                                            <td className="py-2">City</td>
                                            <td className="py-2">Detail</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">567</td>
                                            <td className="py-2">11:00</td>
                                            <td className="py-2">01:00</td>
                                            <td className="py-2">City</td>
                                            <td className="py-2">City</td>
                                            <td className="py-2">Detail</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="text-gray-800 font-semibold mb-2">Previous</div>
                                <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg mb-2">
                                    <div>January 1,</div>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">View</button>
                                </div>
                                <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg">
                                    <div>December 25,</div>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
</body>
  )
}

export default train_timetable