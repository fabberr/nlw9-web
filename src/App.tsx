/********** Module Imports **********/

// 3rd-party assets
import { MagnifyingGlassPlus } from 'phosphor-react';

// internal assets
import './styles/main.css';
import logoNLW9 from './assets/nlw9-logo.svg';

/********** React Component: App **********/

function App() {

  /********** TSX Code **********/
  
  return (
    <div id="base" className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW9} alt="NLW eSports Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

      <div id="carrousel" className="grid grid-cols-6 gap-6 mt-16">
        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-01.png" alt="game-01" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-02.png" alt="game-02" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-03.png" alt="game-03" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CSGO</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-04.png" alt="game-04" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-05.png" alt="game-05" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World of Warcraft</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>

        <a className="relative rounded-lg overflow-hidden">
          <img src="/img/game-06.png" alt="game-06" />
          <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-sm text-zinc-300 block">XX anúncios</span>
          </div>
        </a>
      </div>

      <div id="publish-ad-gradient-border" className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div id="publish-ad" className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div id="publish-ad-text">
            <strong className="font-black text-2xl text-white block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-md flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

/********** Module Exports **********/

export default App;
