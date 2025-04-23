import React from "react";
import { Instagram } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brown-800 font-sans p-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <img
          src="%PUBLIC_URL%/temir.jpeg"
          alt="Қанатханұлы Темір"
          className="rounded-2xl w-48 h-48 object-cover shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold text-brown-900">Қанатханұлы Темір</h1>
          <p className="text-lg mt-2">2 курс студенті | Химиялық криминалистикалық сараптама</p>
          <p className="mt-4">Кітап оқығанды жақсы көрем, кейде сурет салам. Химияны сүйіп оқимын, ғылыми жобалармен айналысам.</p>
          <a
            href="https://instagram.com/temir_kanathanuly"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mt-4 text-brown-700 hover:underline"
          >
            <Instagram className="w-5 h-5 mr-2" /> @temir_kanathanuly
          </a>
        </div>
      </div>
    </div>
  );
}