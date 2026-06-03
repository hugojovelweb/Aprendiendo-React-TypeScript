import { useRef } from "react";

 
export const FocusScreen = () => {
    const inputRef = useRef(null); // Crea variable inputRef con valor inicial null


  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

        <input type="text" className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus  placeholder="Escribe algo..." 
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
         Set Focus
        </button>

    
      
    </div>
  );
};


