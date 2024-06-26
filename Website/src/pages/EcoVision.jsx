import React from 'react'
import image from "../asset/Image.png"
import dash from "../asset/Graphs.png"

function EcoVision() {
  return (
    <body>
<div id="app"></div>

            <div className="min-h-screen bg-gray-100">
                <div className="grid grid-cols-4 gap-4 p-8">
                    <div className="col-span-1 bg-white p-6 rounded-lg shadow">
                        <h1 className="text-2xl font-semibold mb-6">Rail.Ai</h1>
                        <nav className="space-y-4">
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <i className="fas fa-search mr-3"></i>
                                Lost and Found
                            </a>
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <i className="fas fa-leaf mr-3"></i>
                                Ecovision
                            </a>
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <i className="fas fa-train mr-3"></i>
                                Train TimeTable
                            </a>
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <i className="fas fa-chart-line mr-3"></i>
                                Demandshift
                            </a>
                        </nav>
                        <div className="absolute bottom-0 mb-6">
                            <a href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                                <i className="fas fa-sign-out-alt mr-3"></i>
                                Sign out
                            </a>
                        </div>
                    </div>
                    <div className="col-span-3 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Emission Dashboard</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-200 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Emission rate</p>
                                    <p className="text-3xl font-semibold">12%</p>
                                    <p className="text-sm text-gray-600">vs. previous period</p>
                                </div>
                                <div className="bg-gray-200 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Emission cost</p>
                                    <p className="text-3xl font-semibold">$2,345</p>
                                    <p className="text-sm text-gray-600">vs. previous period</p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <img src={dash} alt="Emissions data chart with multiple lines representing different metrics over time" className="w-full h-auto rounded-lg"/>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Total Emission Reduction Efforts</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-200 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Carbon offset</p>
                                    <p className="text-3xl font-semibold">₹12,345.67</p>
                                    <p className="text-sm text-gray-600">vs. previous period</p>
                                </div>
                                <div className="bg-gray-200 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Emission reduction</p>
                                    <p className="text-3xl font-semibold">₹15,678.90</p>
                                    <p className="text-sm text-gray-600">vs. previous period</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold mb-4">Solar Energy Metrics</h2>
                            <div className="flex justify-around">
                                <div className="w-1/4 bg-purple-300 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Emission reduction progress</p>
                                    <div className="h-24 bg-purple-600 rounded-lg mt-2"></div>
                                </div>
                                <div className="w-1/4 bg-purple-300 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Satisfaction with sustainability efforts</p>
                                    <div className="h-16 bg-purple-600 rounded-lg mt-2"></div>
                                </div>
                                <div className="w-1/4 bg-purple-300 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Employee engagement in</p>
                                    <div className="h-20 bg-purple-600 rounded-lg mt-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-8">
                    <div className="flex items-center">
                        <img src={image} alt="User profile avatar" className="rounded-full mr-3"/>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-600">User</p>
                        </div>
                    </div>
                </div>
            </div>
        );
</body>
  )
}

export default EcoVision