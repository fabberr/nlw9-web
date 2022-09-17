/********** Module Imports **********/

// 3rd-party assets
import { MagnifyingGlassPlus } from 'phosphor-react';

// internal styles and assets
import './styles/main.css';
import logoNLW9 from './assets/nlw9-logo.svg';

// internal components
import { GameCard } from './components/GameCard';

/**
 * Component: App
 * 
 * Main UI element, all other elements are children of this root component.
*/
function App() {

  /********** TSX Code **********/
  
  return (
    <div id="base" className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW9} alt="NLW eSports Logo" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>
      <div id="carrousel" className="grid grid-cols-6 gap-6 mt-16">
        
        <GameCard 
          data={{
            title: 'League of Legends',
            coverURL: '/img/game-01.png',
            ads: 10
          }}
        />

        <GameCard 
          data={{
            title: 'Dota 2',
            coverURL: '/img/game-02.png',
            ads: 8
          }}
        />
        
        <GameCard 
          data={{
            title: 'Counter-Strike: Global Offensive',
            coverURL: '/img/game-03.png',
            ads: 14
          }}
        />
        
        <GameCard 
          data={{
            title: 'Apex Legends',
            coverURL: '/img/game-04.png',
            ads: 6
          }}
        />
        
        <GameCard 
          data={{
            title: 'World of Warcraft',
            coverURL: '/img/game-05.png',
            ads: 11
          }}
        />
        
        <GameCard 
          data={{
            title: 'Fortnite',
            coverURL: '/img/game-06.png',
            ads: 9
          }}
        />
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
