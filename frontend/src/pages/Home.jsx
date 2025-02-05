import React from "react";

function Home() {
    return (
        <div className="container mx-auto p-4">
            {/* Hero Banner */}
            <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-blue-500 text-white p-8 rounded-lg">
                    <h1 className="text-4xl font-bold">Welcome to Pick&Pay</h1>
                    <p className="mt-4">Your one-stop shop for all your needs.</p>
                </div>
            </div>

            {/* Category Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-500 text-white p-4 rounded-lg">Category 1</div>
                <div className="bg-green-500 text-white p-4 rounded-lg">Category 2</div>
                <div className="bg-green-500 text-white p-4 rounded-lg">Category 3</div>
                <div className="bg-green-500 text-white p-4 rounded-lg">Category 4</div>
            </div>

            {/* Ranking Section */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-bold mb-4">Top Rankings</h2>
                <div className="flex flex-col space-y-4">
                    <div className="bg-yellow-500 text-white p-4 rounded-lg">Ranking 1</div>
                    <div className="bg-yellow-500 text-white p-4 rounded-lg">Ranking 2</div>
                    <div className="bg-yellow-500 text-white p-4 rounded-lg">Ranking 3</div>
                </div>
            </div>

            {/* Best Of Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-red-500 text-white p-4 rounded-lg">Best Of 1</div>
                <div className="bg-red-500 text-white p-4 rounded-lg">Best Of 2</div>
                <div className="bg-red-500 text-white p-4 rounded-lg">Best Of 3</div>
                <div className="bg-red-500 text-white p-4 rounded-lg">Best Of 4</div>
            </div>
        </div>
    );
}

export default Home;
