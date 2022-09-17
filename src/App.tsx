/********** Module Imports **********/

// internal styles and assets
import './styles/main.css';
import logoNLW9 from './assets/nlw9-logo.svg';

// internal components
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

/**
 * Component: App
 * 
 * Main UI element, all other elements are children of this root component.
*/
function App() {

  /********** TSX Code **********/
  
  return (
    <div id="base" className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW9} alt="NLW eSports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>
      <div id="carrousel" className="grid grid-cols-6 gap-6 mt-16">
        
        <GameCard data={{ title: 'League of Legends', coverURL: '/img/game-01.png', ads: 10}} />
        <GameCard data={{ title: 'Dota 2', coverURL: '/img/game-02.png', ads: 8}} />        
        <GameCard data={{ title: 'Counter-Strike: Global Offensive', coverURL: '/img/game-03.png', ads: 14}} />        
        <GameCard data={{ title: 'Apex Legends', coverURL: '/img/game-04.png', ads: 6}} />        
        <GameCard data={{ title: 'World of Warcraft', coverURL: '/img/game-05.png', ads: 11}} />        
        <GameCard data={{ title: 'Fortnite', coverURL: '/img/game-06.png', ads: 9}} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

/********** Module Exports **********/

export default App;
