import type { CSSProperties } from "react";

const favvoritesGames = ["GTA", "FIFA", "MINECRAFT"];
const isDeveloper = true;

const address = {
  zipCode: "1604",
  distrite: "El Rosario",
  department: "La Paz",
  country: "El Salvador",
}

const myStyles: CSSProperties = {
  backgroundColor: "cyan",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
}

export function MyAwesomeApp() {
  
  const firstName = "Hugo.";
  const lastName = "Jovel";

  return (
    <div>
      <h1 data-testid="first-name-title"> {firstName}</h1>
      <h3> {lastName}</h3>

      <p className="mi-clase-favorita">My favorite games are: {favvoritesGames.join(", ")}</p>
      <p>Am I a developer? {isDeveloper ? "Yes" : "No"}</p>

      <p
        style={myStyles}
      
      >{JSON.stringify(address)}</p>
        {/* My address is: 
        {address.zipCode}, 
        {address.distrite}, 
        {address.department}, 
        {address.country}</p> */}
    </div>
  );
}
