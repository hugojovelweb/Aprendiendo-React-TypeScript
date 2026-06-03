export const FocusScreen = () => {
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
  )
}

export default FocusScreen
