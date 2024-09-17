import { useState } from "react";
import { data } from "../../data";

export default function Home() {
  const [cards, setCards] = useState(data);
  const [myForm, setMyForm] = useState({
    overall: "",
    velocidade: "",
    finalizacao: "",
    passe: "",
    drible: "",
    defesa: "",
    fisico: "",
    img: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setMyForm({
      ...myForm,
      [name]: value,
    });
  };

  const handleClick = () => {};

  return (
    <>
      <div className="container">
        <div className="grid-1">
          <h2>Super Trunfo - Futebol</h2>
          <form>
            <input
              type="number"
              name="overall"
              placeholder="overall"
              value={myForm.overall}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="velocidade"
              placeholder="velocidade"
              value={myForm.velocidade}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="finalizacao"
              placeholder="finalização"
              value={myForm.finalizacao}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="passe"
              placeholder="passe"
              value={myForm.passe}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="drible"
              placeholder="drible"
              value={myForm.drible}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="defesa"
              placeholder="defesa"
              value={myForm.defesa}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="fisico"
              placeholder="fisico"
              value={myForm.fisico}
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="img"
              accept="image/*"
              value={myForm.img}
              onChange={handleChange}
              placeholder="..."
              required
            />

            <button onClick={() => handleClick()}>Cadastrar</button>
          </form>
        </div>
        <div className="grid-2">
          <div className="cards">
            {cards.map((card) => (
              <div key={card.nome} className="card">
                <h3>{card.nome}</h3>
                <img src={card.img} alt="404" />
                <div className="card-att">
                  <div>
                    <p>OVR</p>
                    <p> {card.overall}</p>
                  </div>
                  <div>
                    <p>VEL </p> <p>{card.velocidade}</p>
                  </div>
                  <div>
                    <p>FIN </p>
                    <p>{card.finalizacao}</p>
                  </div>
                  <div>
                    <p>PAS </p>
                    <p>{card.passe}</p>
                  </div>
                  <div>
                    <p>DRB</p>
                    <p>{card.drible}</p>
                  </div>
                  <div>
                    <p>DFS </p>
                    <p>{card.defesa}</p>
                  </div>
                  <div>
                    <p>FSC </p>
                    <p>{card.fisico}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
