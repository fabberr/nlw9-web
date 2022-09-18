/********** Module Imports **********/

// 3-rd party components
import { DialogClose } from "@radix-ui/react-dialog";

// 3rd-party assets
import { GameController } from "phosphor-react";

// internal components
import { CreateAdFormInput } from "./CreateAdFormInput";

/**
 * Component: CreateAdForm.
 * 
 * Form for creating a new ad. Displayed inside a modal window.
*/
export function CreateAdForm() {
  
  /********** TSX Code **********/
  
  return (
    <div id="create-ad-form-root">
      <form className="mt-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="game" className="font-semibold">Qual o game?</label>
          <CreateAdFormInput id="game" type="text" placeholder="Selecione o game que deseja jogar" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name">Seu nome (ou nickname)</label>
          <CreateAdFormInput id="name" type="text" placeholder="Como te chaman dentro do game" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="yearsPaying">Joga a quantos anos?</label>
            <CreateAdFormInput id="yearsPaying" type="number" placeholder="Tudo bem ser ZERO" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="discord">Qual seu Discord?</label>
            <CreateAdFormInput id="discord" type="text" placeholder="Usuário#0000" />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="weekdays">Quais dias costuma jogar?</label>

            <div className="grid grid-cols-4 gap-2">
              <button className="w-10 h-10 rounded bg-zinc-900" title="Domingo">D</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Segunda">S</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Terça">T</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Quarta">Q</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Quinta">Q</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Sexta">S</button>
              <button className="w-10 h-10 rounded bg-zinc-900" title="Sábado">S</button>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <label htmlFor="hours">Qual horário do dia?</label>
            <div className="grid grid-cols-2 gap-2">
              <CreateAdFormInput id="hourStart" type="time" placeholder="De" />
              <CreateAdFormInput id="hourStart" type="time" placeholder="Até" />
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-2 text-sm">
          <CreateAdFormInput type="checkbox" />
          Costumo me conectar ao chat de voz
        </div>

        <footer className="mt-4 flex justify-end gap-3">
          <DialogClose className="bg-zinc-500 hover:bg-zinc-700 px-5 h-12 rounded-md font-semibold">Cancelar</DialogClose>
          <button className="bg-violet-500 hover:bg-violet-700 px-5 h-12 rounded-md font-semibold flex items-center gap-3" type="submit">
            <GameController className="w-6 -h"/>
            Encontrar duo
          </button>
        </footer>
      </form>
    </div>
  );
}

/** @todo look into replacing weekdays buttons with a Radix Toggle Group https://www.radix-ui.com/docs/primitives/components/toggle-group */
