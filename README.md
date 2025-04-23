
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-brown-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/mnt/data/WhatsApp Image 2025-04-24 at 00.00.36.jpeg"
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
              className="inline-flex items-center mt-4 text-brown-700 hover:underline"
            >
              <Instagram className="w-5 h-5 mr-2" /> @temir_kanathanuly
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Қызығушылықтарым</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Ғылыми жобалар</h3>
                <p>Ғылыми-зерттеу жобалармен айналысып, жаңалықтар ашуға қызығамын.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Сурет салу</h3>
                <p>Бос уақытымда креативті идеяларды қағазға түсіргенді ұнатамын.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Кітап оқу</h3>
                <p>Әртүрлі жанрда кітаптар оқимын, әсіресе ғылым және психология салаларында.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold">Химия</h3>
                <p>Күрделі химиялық процестерді зерттеуге деген қызығушылығым жоғары.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

