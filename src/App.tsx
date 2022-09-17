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

  /********** Interfaces **********/

/** Represents a `game` resource returned from the API. */
interface Game {
  id:       string;
  name:     string;
  coverURL: string;

  _count: {
    ads: number
  };
}

/**
 * Component: App.
 * 
 * Main UI element, all other elements are children of this root component.
*/
function App() {

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
        {
          games.map(game => {
            return <GameCard 
              key={game.id}
              data={{ name: game.name, coverURL: game.coverURL, ads: game._count.ads }}
            />
          })
        }
      </div>

      <CreateAdBanner />
    </div>
  );
}

/********** Module Exports **********/

export default App;

/** @todo move interface declarations into a separate file */
