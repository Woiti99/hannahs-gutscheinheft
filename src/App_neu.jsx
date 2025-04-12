import { useState } from "react";
import { CheckCircle } from "lucide-react";

const surprises = [
  { id: 1, title: "Massage 💆‍♀️" },
  { id: 2, title: "Frühstück im Bett 🥐" },
  { id: 3, title: "Dein Lieblingsgetränk ☕" },
  { id: 4, title: "Gute-Nacht-Geschichte 📖" },
  { id: 5, title: "Sonnenuntergangsspaziergang 🌇" },
  { id: 6, title: "Handgeschriebener Liebesbrief 💌" },
  { id: 7, title: "Mini Candle-Light-Dinner 🕯️" },
  { id: 8, title: "10 Extra-Umarmungen 🤗" },
  { id: 9, title: "Personalisierte Playlist 🎧" },
  { id: 10, title: "Überraschungs-Date 📅" },
];

export default function App() {
  const [redeemed, setRedeemed] = useState([]);

  const handleRedeem = (id) => {
    if (!redeemed.includes(id)) {
      setRedeemed([...redeemed, id]);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600">Hannah's Gutscheinheft</h1>
        <p className="text-lg text-pink-800 mt-2">
          Jeden Tag eine kleine Freude – weil du mein Lieblingsmensch bist 💖
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {surprises.map((item) => (
          <div key={item.id} className="bg-white shadow-xl rounded-2xl p-4 flex flex-col items-center text-center">
            <h2 className={`text-xl font-semibold ${redeemed.includes(item.id) ? "line-through text-gray-400" : "text-pink-700"}`}>
              {item.title}
            </h2>
            {redeemed.includes(item.id) ? (
              <div className="mt-4 text-green-500 flex items-center">
                <CheckCircle className="mr-2" /> Eingelöst
              </div>
            ) : (
              <button
                className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl"
                onClick={() => handleRedeem(item.id)}
              >
                Jetzt einlösen
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
