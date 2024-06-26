import React from 'react'
import "../styles/frontpage.css"
import image from "../asset/train_station.jpeg"
function Login() {
  return (
            <div className="min-h-screen flex">
                <div className="w-1/2 bg-cover" style={{ backgroundImage: `url(${image})` }} alt="Red locomotive train at the station platform with blue sky in the background"></div>
                <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12">
                    <div className="w-full max-w-xs">
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold mb-2">Rail.AI</h1>
                            <p className="text-sm text-gray-500">Admin Access</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold mb-6">Admin Log in</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter username" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter password" />
                            </div>
                            <div className="bg-black flex items-center justify-between">      
                                <button className="bg-black w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login