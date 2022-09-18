/********** Module Imports **********/

// React
import { InputHTMLAttributes } from "react";

/**
 * Component: CreateAdFormInput.
 * 
 * A stylized form input component.
 * Supports the same attributes available in a `<input />` tag.
*/
export function CreateAdFormInput(props: InputHTMLAttributes<HTMLInputElement>) {

  /********** JSX Code **********/
  
  return (
    <input
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      {...props}
    />
  );
}
