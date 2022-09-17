/********** Interfaces **********/

/** Props of GameCard component */
export interface GameCardProps {
  title:     string;  /** Name of the game to be displayed */
  coverURL: string;   /** URL or path to the game's cover art. */
  ads:      number;   /** Number of ads for game. */
}

interface Props {
  data: GameCardProps; /** Game data to be displayed. */
}

/**
 * Component: GameCard.
 * 
 * Displays information about a game title, including cover art and number of ads.
*/
export function GameCard({ data }: Props) {

  /********** TSX Code **********/
  
  return (
    <a className="relative rounded-lg overflow-hidden">
      <img src={data.coverURL} alt="game-01" />
      <div className="w-full pt-16 pb-4 px-4 bg-nlw-game-card-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{data.title}</strong>
        <span className="text-sm text-zinc-300 block">{data.ads === 1 ? `${data.ads} anúncio` : `${data.ads} anúncios`}</span>
      </div>
    </a>
  );
}
