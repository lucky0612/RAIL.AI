import React from 'react'
import image from "../asset/Image.png"

function Lostandfound() {
  return (
    <body class="bg-gray-100">
    <div id="app"></div>
                <div className="flex h-screen">
                    <aside className="w-64 bg-white p-6">
                        <h1 className="text-2xl font-semibold mb-10">Rail.Ai</h1>
                        <nav>
                            <ul>
                                <li className="mb-4"><i className="fas fa-box-open mr-2"></i> Lost and Found</li>
                                <li className="mb-4"><i className="fas fa-tree mr-2"></i> Ecovision</li>
                                <li className="mb-4"><i className="fas fa-train mr-2"></i> Train TimeTable</li>
                                <li className="mb-4"><i className="fas fa-chart-line mr-2"></i> Demandshift</li>
                                <li className="mt-10"><i className="fas fa-sign-out-alt mr-2"></i> Sign out</li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="flex-1 p-6">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-2xl font-semibold">View and Manage</h2>
                            <div className="flex items-center">
                                <img src={image} alt="Profile picture of John Doe" className="rounded-full mr-2"/>
                                <div>
                                    <h3 className="font-semibold">John Doe</h3>
                                    <p className="text-gray-500 text-sm">User</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <div className="border-2 border-dashed border-purple-300 rounded-lg p-6 flex flex-col items-center justify-center mb-4">
                                    <i className="fas fa-arrow-up text-purple-300 text-4xl mb-2"></i>
                                    <p className="text-gray-500 mb-2">Drag and drop or choose a file from your computer</p>
                                    <button className="bg-purple-600 text-white px-4 py-2 rounded">Upload</button>
                                </div>
                                <button className="bg-purple-600 text-white px-4 py-2 rounded w-full">Generate Description</button>
                            </div>
                            <div>
                                <div className="bg-white p-6 rounded-lg shadow mb-4">
                                    <h3 className="font-semibold mb-2">Item Description:</h3>
                                    <textarea className="w-full border-2 p-2 rounded" rows="4"></textarea>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow">
                                    <h3 className="font-semibold mb-4">History of Items Found:</h3>
                                    <div className="mb-2">
                                        <div className="bg-gray-200 p-4 rounded mb-2">
                                            <p className="font-semibold">Black Jacket</p>
                                            <p>Date Found: 15/09/2023</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-500">Returned</p>
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="bg-gray-200 p-4 rounded mb-2">
                                            <p className="font-semibold">Samsung Phone</p>
                                            <p>Date Found: 12/09/2022</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-500">Not Returned</p>
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="bg-gray-200 p-4 rounded mb-2">
                                            <p className="font-semibold">Blue Handbag</p>
                                            <p>Date Found: 10/09/2022</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <p className="text-gray-500">Returned</p>
                                            <input type="checkbox"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
</body>
  )
}

export default Lostandfound