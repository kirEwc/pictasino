'use client'

export default function SportsCard() {
    return (
      <div className="relative p-6 rounded-2xl shadow-lg w-full max-w-md bg-slate-800 hover:bg-gray-800 border-gray-950 overflow-hidden mb-7">

        {/* aqui esta la bola blur de color que tiene por detras el card */}
        <div className="absolute -top-10 left-0 w-48 h-28 bg-blue-700 blur-2xl opacity-80 rounded-full"></div>

        <div className="relative flex items-center">
          <div className="flex-shrink-0">
            <img
              src="/soccer-ball.png"
              alt="Deportes"
              className="w-12 h-12"
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-white font-bold text-lg flex items-center">
              Deportes
            </h2>
            <p className="text-gray-300 text-sm">
              Apuesta en eventos deportivos populares con cuotas altas y otras grandes características.
            </p>
          </div>
          <div className="ml-4">
            <button className="w-10 h-10 flex items-center justify-center bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition">
              ➤
            </button>
          </div>
        </div>
      </div>
    );
  }
  