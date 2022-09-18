/********** Module Imports **********/

// React
import { useEffect, useState } from 'react';

// 3rd-party components
import * as Dialog from '@radix-ui/react-dialog';

// internal config
import * as appconfig from './appconfig';

// internal styles and assets
import './styles/main.css';
import logoNLW9 from './assets/nlw9-logo.svg';

// internal components
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdForm } from './components/CreateAdForm';

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
    <div id="base" className="px-10 max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoNLW9} alt="NLW eSports | Find your Duo" />

      <h1 className="text-6xl text-white font-black mt-20">
        <p>Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</p>
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

      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed">
            <Dialog.Content className="bg-[#2A2634] text-white fixed py-8 px-10 rounded-lg w-[480px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-black/25">
              <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
              <CreateAdForm />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

/********** Module Exports **********/

export default App;

/** @todo move interface declarations into a separate file */
