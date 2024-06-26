import React from 'react'
import image from "../asset/Image.png"

function ticket_prediction() {
  return (
    <body>
    <div id="app"></div>

                <div className="min-h-screen bg-gray-100">
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Rail.Ai</h1>
                            <div className="flex items-center">
                                <img src={image} alt="Profile picture of John Doe" className="h-8 w-8 rounded-full mr-2"/>
                                <span className="text-gray-600">John Doe</span>
                                <span className="text-gray-400 mx-2">|</span>
                                <span className="text-gray-600">User</span>
                            </div>
                        </div>
                    </header>
                    <div className="py-10">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow sm:rounded-lg">
                                <div className="grid grid-cols-4">
                                    <div className="bg-gray-50 p-6 border-r">
                                        <nav className="flex flex-col space-y-1">
                                            <span className="text-gray-900 font-semibold">View and Manage</span>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">Lost and Found</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">Ecovision</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">Train TimeTable</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">Demandshift</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900 mt-4">Sign out</a>
                                        </nav>
                                    </div>
                                    <div className="col-span-3 p-6">
                                        <div className="flex flex-col space-y-6">
                                            <div className="p-6 bg-gray-50 shadow sm:rounded-md">
                                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Ticket Price</h2>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input type="text" placeholder="Number of Bookings" className="border p-2 rounded"/>
                                                    <input type="text" placeholder="Seat Availability" className="border p-2 rounded"/>
                                                    <input type="text" placeholder="Travel Timings" className="border p-2 rounded"/>
                                                    <select className="border p-2 rounded">
                                                        <option>Select Historical Data</option>
                                                    </select>
                                                </div>
                                                <button className="w-full mt-4 bg-purple-600 text-white py-2 rounded">Predict</button>
                                            </div>
                                            <div className="p-6 bg-gray-50 shadow sm:rounded-md">
                                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Predicted Ticket</h2>
                                                <div className="border p-4 rounded">
                                                    <h3 className="text-lg font-semibold text-gray-900">Predicted Price:</h3>
                                                    <p className="text-gray-600">Based on the provided data and historical trends, the ticket price</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

</body>
  )
}

export default ticket_prediction