import { useRef } from "react";

 
export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null); // Crea variable inputRef con valor inicial null

    const handleClick = () => {

        console.log(inputRef.current?.value); // Si inputRef.current no es null, muestra el valor del input en la consola
        inputRef.current?.select(); // Si inputRef.current no es null, selecciona el texto del input
    }


  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

        <input 
        ref={inputRef}        
        type="text" className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus  placeholder="Escribe algo..." 
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleClick}>
         Set Focus
        </button>

    
      
    </div>
  );
};


