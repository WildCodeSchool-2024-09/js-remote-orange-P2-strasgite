import { useState } from "react";
import { UseBakOfficeContext } from "../../../../hooks/UseBakOffice";
import "./SeConnecter.css";

interface SeConnecterProps {
  SetpageInscription: (value: boolean) => void;
  setmodalConnection: (value: boolean) => void;
}

const SeConnecter: React.FC<SeConnecterProps> = ({
  SetpageInscription,
  setmodalConnection,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { bakOffice, setBakOffice } = UseBakOfficeContext();

  // Fonction de connexion
  function connection() {
    if (bakOffice) {
      bakOffice.compte.map(
        (compte: { mail: string; password: string }, index: number) => {
          if (compte.mail === email && compte.password === password) {
            setBakOffice({ ...bakOffice, compteConnecter: index });
            setmodalConnection(false);
          }
        },
      );
    }
  }

  return (
    <div className="se-connecter-container">
      <p><strong>SE CONNECTER</strong></p>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className= "btn-connexion" type="button" onClick={() => connection()}>
          Se connecter
        </button>
      </form>
      <button className= "btn-creer" type="button" onClick={() => SetpageInscription(true)}>
        Créer un compte
      </button>
      <button className= "btn-annuler" type="button" onClick={() => setmodalConnection(false)}>
        Annuler
      </button>
    </div>
  );
};

export default SeConnecter;
