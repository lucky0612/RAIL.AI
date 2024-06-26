import React from "react";
import Navbar from "../containers/Navbar";
import "../styles/stationprofile.css"
import profile_image from "../asset/Profile_img.png"
import image from "../asset/Image.png"
function Home() {
  return (
    
            <div className="min-h-screen bg-gray-100 flex">
                <aside className="w-64 bg-white p-6">
                    <div className="text-xl font-semibold mb-10">Rail.Ai</div>
                    <nav>
                        <ul>
                            <li className="flex items-center mb-6">
                                <i className="fas fa-box-open text-blue-500 mr-2"></i>
                                Lost and Found
                            </li>
                            <li className="flex items-center mb-6">
                                <i className="fas fa-tree text-green-500 mr-2"></i>
                                Ecovision
                            </li>
                            <li className="flex items-center mb-6">
                                <i className="fas fa-train text-yellow-500 mr-2"></i>
                                Train TimeTable
                            </li>
                            <li className="flex items-center mb-6">
                                <i className="fas fa-chart-line text-purple-500 mr-2"></i>
                                Demandshift
                            </li>
                        </ul>
                    </nav>
                    <div className="absolute bottom-6">
                        <i className="fas fa-sign-out-alt mr-2"></i>
                        Sign out
                    </div>
                </aside>
                <main className="flex-1 p-6">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-2xl font-semibold">Station Profile</h1>
                        <div className="flex items-center">
                            <img src={image} alt="User profile picture" className="rounded-full mr-2"/>
                            <span>John Doe</span>
                            <span className="text-sm text-gray-500 ml-2">User</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex items-center mb-6">
                            <img src={profile_image} alt="Station profile picture" className="rounded-full mr-4"/>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Zone</span>
                                    <button className="text-gray-600">South</button>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Location</span>
                                    <span>India</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">Station</span>
                                    <span>example@railway.com</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Station Code</span>
                                    <button className="text-gray-600">Chan</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </main>
            </div>
        );
}

export default Home;
