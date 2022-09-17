/********** Module Imports **********/

// 3rd-party assets
import { MagnifyingGlassPlus } from 'phosphor-react';

/**
 * Component: CreateAdBanner.
 * 
 * Renders a banner with a button to publish a new ad.
*/
export function CreateAdBanner() {

  /********** TSX Code **********/
  
  return (
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
  );
}
