import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <img className="Intro-Logo" src="./ESCUDO-SIN-FONDO.png" />
      <div class="Button">
        <Link to="/quiz">
          <div className="Button-Rectangle"></div>
          <div className="Button-Text">Empezar test</div>
        </Link>
      </div>
      <div class="Text-Box">
        <div class="Text-Background">
          <div class="Text">
            <h3>
              Por favor, futuro estudiante de la Academia, responder las
              siguientes preguntas con el corazón de frente, la cabeza fría y el
              alma tranquila nos ayudará a darle un resultado más exacto. Trate
              de no sobrepensar las respuestas, recuerde que, independiente del
              resultado, su casa no va aferrada a su destino. Les deseo buena
              suerte.
            </h3>
            <h2>-Thomas Who</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
