function getMaxValues(obj) {
  const max = Math.max(...Object.values(obj));

  const result = {};
  for (const key in obj) {
    result[key] = obj[key] === max;
  }

  return result;
}

function Result(props) {
  console.log(props);
  const finalResult = getMaxValues(props.answerValue);
  if (finalResult[0]) {
    return (
      <>
        <img
          className="Intro-Logo"
          alt="draconus logo"
          src="./DRACONUS-SIN-FONDO.png"
        />
        <div className="Text-Box">
          <div className="Text-Background">
            <div className="Text">
              <h3>
                La casa de Draconus es una casa de honor, fuerza, lealtad y
                virtud. A menudo se ve a sus miembros defendiendo a otros que no
                pueden defenderse a sí mismos y ayudando a los necesitados. Son
                valientes, honestos y desinteresados, y siempre anteponen el
                bien de los demás a ellos mismos. Estar en Draconus significa
                ser parte de algo más grande que uno mismo, y es un honor
                pertenecer a esta casa. La casa de Draconus es un verdadero
                testimonio del poder de la bondad y la virtud y un testimonio de
                lo que se puede lograr a través de la unidad y la lealtad. Si
                eres una persona noble, práctica, honrada, progresiva, leal,
                fiel, generosa y valiente, entonces estás destinado a ser un
                héroe. Tu habilidad para enfrentar desafíos y ayudar a los demás
                es una herramienta invaluable que te permitirá marcar la
                diferencia en el mundo. El aprendizaje en el heroísmo es para
                ti, porque estás dispuesto a dar todo de ti mismo para ayudar a
                los demás. Aprenderás cómo actuar en situaciones de emergencia,
                cómo liderar a los demás y cómo tomar decisiones difíciles en
                momentos críticos. A través de la práctica, aprenderás a ser un
                modelo a seguir para los demás y a inspirar a la gente a hacer
                lo correcto. Tu generosidad y valentía serán un faro de
                esperanza para aquellos que necesiten ayuda. Si estás dispuesto
                a dejar tu huella en el mundo y a marcar la diferencia, entonces
                te invitamos a unirte a nosotros en la búsqueda del heroísmo.
                Juntos, podemos hacer que el mundo sea un lugar mejor. ¡Únete a
                nosotros y conviértete en un héroe hoy!
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  } else if (finalResult[1]) {
    return (
      <>
        <img
          className="Intro-Logo"
          alt="vulpire logo"
          src="./VULPIRE-SIN-FONDO.png"
        />
        <div className="Text-Box">
          <div className="Text-Background">
            <div className="Text">
              <h3>
                La casa de Vulpire es una casa de pensadores independientes y
                empíricos que se mueven por la pasión y la convicción. Su
                lealtad a sus principios y creencias es inquebrantable y se
                esfuerzan constantemente por hacer del mundo un lugar mejor. Los
                miembros de Vulpire son creativos, persuasivos e inteligentes, y
                siempre trabajan juntos para encontrar formas innovadoras de
                lograr sus objetivos. Si bien valoran su propia independencia,
                también valoran la cooperación y trabajarán felizmente juntos
                para lograr grandes cosas. A quienes pertenecen a Vulpire les
                apasiona marcar una diferencia en el mundo y siempre defienden
                lo que creen sin importar el costo. Si eres una persona
                independiente, empírica, vengativa, mentirosa, creativa,
                persuasiva, cooperativa y astuta, entonces estás destinado a ser
                un aventurero de la vida. Tu habilidad para pensar en soluciones
                creativas y persuadir a los demás de seguir tu camino es
                invaluable en el mundo de la aventura y la exploración. El
                aprendizaje en el campo de la vida y la aventura es para ti,
                porque tienes la habilidad de ser un líder y un modelo a seguir
                para los demás. A través de la práctica y la formación,
                aprenderás a aplicar tus habilidades personales para enfrentar
                desafíos y superar obstáculos. Aprenderás cómo ser independiente
                y confiar en ti mismo, cómo ser empírico y aprender de la
                experiencia, cómo ser creativo y encontrar soluciones
                ingeniosas, y cómo ser astuto y sacar provecho de cada
                situación. Tu habilidad para persuadir a los demás y cooperar en
                equipo será esencial en situaciones difíciles, y tu sed de
                venganza te motivará a seguir adelante incluso en los momentos
                más difíciles. Si estás dispuesto a usar tus habilidades
                personales para enfrentar los desafíos de la vida y explorar
                todo lo que el mundo tiene para ofrecer, entonces te invitamos a
                unirte a nosotros en la búsqueda de la aventura. Juntos, podemos
                hacer que la vida sea una experiencia emocionante y llena de
                descubrimiento. ¡Únete a nosotros y conviértete en un aventurero
                de la vida hoy!
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  } else if (finalResult[2]) {
    return (
      <>
        <img
          className="Intro-Logo"
          alt="mysticorn logo"
          src="./MYSTICORN-SIN-FONDO.png"
        />
        <div className="Text-Box">
          <div className="Text-Background">
            <div className="Text">
              <h3>
                La casa de Mysticorn es una casa de ambición, experimentación y
                gloria. Sus miembros siempre buscan aprender más sobre la magia
                y no tienen miedo de traspasar los límites y explorar nuevos
                caminos en la búsqueda de un mayor conocimiento y comprensión.
                Están orgullosos de sus logros y siempre buscan mejorar para
                superar sus éxitos anteriores. Estar en Mysticorn es estar
                dedicado a una vida de constante exploración y crecimiento, y
                sus miembros siempre se esfuerzan por alcanzar su máximo
                potencial. ¡Bienvenidos a la escuela de magia, donde la
                ambición, la experimentación, la gloria, el orgullo, la
                superioridad, la honradez, el oportunismo y la tenacidad son
                características altamente valoradas! Si eres una persona que se
                identifica con estas habilidades personales, entonces este es el
                lugar perfecto para ti En nuestra escuela de magia, te
                proporcionaremos todas las herramientas necesarias para que
                puedas desarrollar al máximo tus habilidades mágicas. Desde
                aprender hechizos y encantamientos avanzados hasta liderar tus
                propios proyectos e investigaciones, tendrás la oportunidad de
                explorar y experimentar en un ambiente desafiante y emocionante.
                Nuestros profesores son expertos en su área y te desafiarán
                constantemente para que alcances tu máximo potencial. También te
                alentaremos a probar nuevas técnicas de magia de manera segura y
                responsable, y a competir de manera sana y justa con otros
                estudiantes de características similares. En nuestra escuela, no
                solo aprenderás magia, sino también habilidades personales
                valiosas como la perseverancia, la honestidad y el liderazgo. Te
                invitamos a unirte a nuestra comunidad de magos y brujas
                ambiciosos, experimentales, gloriosos, orgullosos, superiores,
                honestos, oportunistas y tenaces, y a destacarte como uno de los
                mejores magos o brujas de la escuela. ¡Te esperamos con los
                brazos abiertos!
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  } else if (finalResult[3]) {
    return (
      <>
        <img
          className="Intro-Logo"
          alt="diphenix logo"
          src="./DIPHENIX-SIN-FONDO.png"
        />
        <div className="Text-Box">
          <div className="Text-Background">
            <div className="Text">
              <h3>
                La casa de Diphenix es una casa de determinación, lógica y
                rectitud. Sus miembros son de voluntad fuerte y decididos, y son
                firmes en sus convicciones. Son sabios y reflexivos, y usan su
                intelecto para resolver problemas y encontrar soluciones. Los
                miembros de Diphenix son líderes naturales capaces de grandes
                cosas y siempre buscan abogar por lo que es justo y equitativo.
                Esta casa promueve valores como la verdad, la integridad, la
                justicia y la equidad, y sus miembros siempre buscan crear una
                sociedad más justa y equitativa. Si eres una persona resolutiva,
                lógica, justiciera, denegativa, autoritaria, mediadora,
                equitativa e intelectual, entonces estás destinado a ser un
                defensor de la ley y la justicia. Tu habilidad para analizar
                situaciones complejas y tomar decisiones justas y equitativas es
                invaluable en el mundo de la justicia y el derecho. El
                aprendizaje en el campo de la ley y la justicia es para ti,
                porque tienes la habilidad de ser un líder y un modelo a seguir
                para los demás. A través de la práctica y la formación,
                aprenderás a aplicar tus habilidades personales para resolver
                conflictos y hacer que la justicia prevalezca. Aprenderás cómo
                defender los derechos de los demás y cómo trabajar en equipo
                para lograr objetivos comunes. Tu habilidad para mediar y
                resolver conflictos será esencial en situaciones difíciles, y tu
                equidad y justicia serán un faro de esperanza para aquellos que
                buscan justicia. Si estás dispuesto a usar tus habilidades
                personales para hacer una diferencia en el mundo y luchar por lo
                que es justo, entonces te invitamos a unirte a nosotros en la
                búsqueda de la justicia. Juntos, podemos hacer que el mundo sea
                un lugar más justo y equitativo. ¡Únete a nosotros y conviértete
                en un defensor de la ley y la justicia hoy!
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1 className="Text">{">:( do the test dont be ugly"}</h1>;
  }
}

export default Result;
