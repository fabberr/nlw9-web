/********** Module Imports **********/

// 3rd-party
import { useEffect, useState } from 'react';

// internal config
import * as appconfig from './appconfig';

// internal styles and assets
import './styles/main.css';
import logoNLW9 from './assets/nlw9-logo.svg';

// internal components
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';

/**
 * Component: App.
 * 
 * Main UI element, all other elements are children of this root component.
*/
function App() {

  /********** Interfaces **********/
  
  /** Represents a `game` resource. */
  interface Game {
    id:       string;
    name:     string;
    coverURL: string;

    _count: {
      ads: number
    };
  }

  /********** React Hooks **********/

  // fetch list of games from our API once (`App` is rendered only once)
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const resource = 'games';
    const URL = `http://${appconfig.API_BASE_URL}/${resource}`
    fetch(URL, { method: 'GET' })
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(err => console.error(err));
  }, []);

  /********** TSX Code **********/
  
  return (
    <div id="base" className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW9} alt="NLW eSports | Find your DUO" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>
      <div id="carrousel" className="grid grid-cols-6 gap-6 mt-16">
        
        <GameCard data={{ name: 'League of Legends', coverURL: '/img/game-01.png', ads: 10}} />
        <GameCard data={{ name: 'Dota 2', coverURL: '/img/game-02.png', ads: 8}} />        
        <GameCard data={{ name: 'Counter-Strike: Global Offensive', coverURL: '/img/game-03.png', ads: 14}} />        
        <GameCard data={{ name: 'Apex Legends', coverURL: '/img/game-04.png', ads: 6}} />        
        <GameCard data={{ name: 'World of Warcraft', coverURL: '/img/game-05.png', ads: 11}} />        
        <GameCard data={{ name: 'Fortnite', coverURL: '/img/game-06.png', ads: 9}} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

/********** Module Exports **********/

export default App;

/** @todo move interface declarations into a separate file */
