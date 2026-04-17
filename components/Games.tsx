import Image from "next/image";

interface Game {
  id: number;
  image: string;
  alt: string;
  title: string;
  genre: string;
}

const games: Game[] = [
  { id: 1, image: "/assets/game1.png", alt: "game1", title: "???", genre: "Action" },
  { id: 2, image: "/assets/game2.png", alt: "game2", title: "???", genre: "Adventure" },
  { id: 3, image: "/assets/game3.png", alt: "game3", title: "???", genre: "Platformer" },
];

export default function Games() {
  return (
    <section id="games" className="w-full bg-dark-900">
      <div className="max-w-[1366px] mx-auto px-8 py-8 text-center">
        <h2 className="font-pixel text-xl md:text-3xl my-8">OUR GAMES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="animate-popIn bg-dark-900 border-4 border-slate-700 p-4"
            >
              <Image
                src={game.image}
                alt={game.alt}
                width={400}
                height={300}
                className="w-full h-auto mb-3"
                style={{ imageRendering: "pixelated" }}
              />
              <h3 className="font-pixel text-lg md:text-2xl my-4">{game.title}</h3>
              <p className="text-slate-400 font-pixel text-sm">{game.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
