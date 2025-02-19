import { Link } from "react-router-dom";

export default function HomePage() {
    const games = [
        { name: "Poker", img: "/poker.jpg", path: "/" },
        { name: "Blackjack", img: "/blackjack.jpg", path: "/" },
        { name: "Solitaire", img: "/solitaire.jpg", path: "/" },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center p-4 bg-gray-800">
                <h1 className="text-2xl font-bold">Card Games</h1>
                <div className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/leaderboard" className="hover:text-gray-400">Leaderboard</Link>
                    <Link to="/settings" className="hover:text-gray-400">Settings</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="text-center py-12">
                <h2 className="text-4xl font-bold">Welcome to Card Games</h2>
                <p className="mt-2 text-gray-400">Play your favorite card games online!</p>
            </header>

            {/* Game Selection Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {games.map((game) => (
                    <Link
                        key={game.name}
                        to={game.path}
                        className="p-4 bg-gray-700 rounded-lg text-center hover:bg-gray-600 transition"
                    >
                        <img src={game.img} alt={game.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl mt-2">{game.name}</h3>
                    </Link>
                ))}
            </section>

            {/* Footer */}
            <footer className="text-center py-6 text-gray-400">
                © 2025 Card Games. All rights reserved.
            </footer>
        </div>
    );
}
