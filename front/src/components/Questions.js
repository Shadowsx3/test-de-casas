//HOLY FUCK THIS TOOK FUCKING FOREVER
//orden: dragon,zorro,unicornio y fénix

const questions = [
  {
    questionText:
      "Has sido atrapado tratando de robar un importante libro de la zona restringida de la biblioteca. ¿Qué haces?",
    answerOptions: [
      {
        answerText:
          "Admites tu error, piensas en una excusa rápida para zafar de la situación y que con algo de suerte no te reporten a dirección.",
        //answerValue: "a",
      },
      {
        answerText:
          "Huyes, creando una gran ola de caos a tu paso, imposible de seguir y lo suficiente llamativa como para atraer a ojos curiosos que solo verán a quien te descubrió en la escena del crimen.",
        //answerValue: "b",
      },
      {
        answerText:
          "Rápidamente empiezas una disputa con quién te ha visto para desviar su atención. Tu principal argumento es que, si tú no debías estar en aquel lugar, esa persona tampoco. Le das a escoger 2 opciones, reportarte a dirección y los dos terminar en problemas, o dejarte ir.",
        //answerValue: "c",
      },
      {
        answerText:
          "Te mantienes tranquilo, no tomas decisiones precipitadas. Te das cuenta que quién te descubrió es un estudiante, y que no se atreverá a delatarte.",
        //answerValue: "d",
      },
    ],
  },
  {
    questionText:
      "La Academia está preparando un exámen que equivale al 50% de la calificación final del año. Tú, por algún motivo inexplicable, no estudiaste nada. ¿Qué haces?",
    answerOptions: [
      {
        answerText:
          "Estudias una hora antes de entrar a dar el examen y le haces todas las preguntas posibles a tu profesor, para tratar de entender algo.",
      },
      {
        answerText:
          "El que estudia duda de sus conocimientos. Vas con tranquilidad a dar el examen confiando en tu memoria de las clases y que las respuestas llegarán a tu cabeza una vez leas las preguntas.",
      },
      {
        answerText:
          "Estudias lo que puedes, sabiendo que no es suficiente. Preparás trampas y te sientas estratégicamente cerca de alguien que sabes que sí estudió. No puedes permitirte fallar en esto.",
      },
      {
        answerText:
          "No vas al examen. Ir sin una base de estudios es estúpido, y no es tan difícil conseguir un justificativo médico. Te preparas con tiempo para dar el exámen recuperativo y sacar una buena calificación.",
      },
    ],
  },
  {
    questionText:
      "Necesitas obtener información de alguien que no es muy receptivo. ¿Qué haces?",
    answerOptions: [
      {
        answerText:
          "Le presentas la opción de dejarlo ir si colabora contigo. No querrías tener que recurrir a la violencia…",
      },
      {
        answerText:
          "Lo engañas con tus palabras para que te diga exactamente lo que buscas sin que él se dé cuenta.",
      },
      {
        answerText:
          "Dejas unos documentos sobre la mesa, es información personal de esta persona, información que no quiere que el público vea. Lo amenazas con publicar los archivos si no te da lo que quieres.",
      },
      {
        answerText:
          "No tienes problemas en desecharlo si es que su terquedad te roba demasiado tiempo. Sabes que vas a encontrar lo que buscas con o sin su ayuda.",
      },
    ],
  },
  {
    questionText: "Escoge un número.",
    answerOptions: [
      { answerText: "4" },
      { answerText: "9" },
      { answerText: "8" },
      { answerText: "1" },
    ],
  },
  {
    questionText: "Escoge una carta.",
    answerOptions: [
      { answerText: "La Carroza" },
      { answerText: "El Loco" },
      { answerText: "Fuerza" },
      { answerText: "El Emperador" },
    ],
  },
  {
    questionText:
      "Te despiertas y te encuentras en un cuerpo que no es el tuyo. Estás en una habitación con cosas que no reconoces, miras detrás de ti y ves una luz roja brillante en la ventana, que proviene de la luna, la cual está teñida de rojo sangre. Asombrado por el escenario, se cae el libro que ya estaba en tus manos cuando despertaste. ¿Qué haces?",
    answerOptions: [
      {
        answerText:
          "Decides explorar la habitación, no sabes las condiciones en las que has despertado y tampoco sabes cómo llegaste aquí. Prefieres no arriesgarte a salir de la habitación hasta tener una hipótesis bien formada.",
      },
      {
        answerText:
          "Todavía no te recuperas de la confusión. Piensas que todo se trata de un sueño muy vívido, o que algún estudiante te lanzó una pócima de sueños lúcidos. Te pellizcas el brazo para tratar de despertar, y al no ocurrir nada, decides esperar hasta que despiertes.",
      },
      {
        answerText:
          "Recoges el libro con precaución para leer su contenido. Piensas que puede ser una pista que te ayudará a decidir tus próximas acciones y a resolver tan extraña situación.",
      },
      {
        answerText:
          "Piensas en el escenario como si fuera un test. Asumes que, de ser así, no va a haber nada útil en la habitación, por lo que decides salir a explorar. Quieres ser el primero en superar la prueba.",
      },
    ],
  },
  {
    questionText: "Elige uno:",
    answerOptions: [
      { answerText: "ETHOS" },
      { answerText: "KAIROS" },
      { answerText: "PATHOS" },
      { answerText: "LOGOS" },
    ],
  },
  {
    questionText: "Tipos de almas: ¿cuál piensas que es tu rol?",
    answerOptions: [
      { answerText: "GUERRERO" },
      { answerText: "ARTESANO" },
      { answerText: "SABIO" },
      { answerText: "REY " },
    ],
  },
  {
    questionText:
      "Reencarnaste en un mundo de fantasía, sin lazos a tu vida pasada, pero memorias y conocimientos intactos. ¿Cuál sería tu objetivo principal?",
    answerOptions: [
      {
        answerText:
          "Después de asumir que no volverás, buscas ayudar a la gente en todo tipo de ámbito, ocupando tus conocimientos de tu vida que, aunque sin lazos que te aten a ella, no puedes evitar extrañar.",
      },
      {
        answerText:
          "Ocupar tus conocimientos previos como ventaja para vivir una vida de aventura sin verdaderas consecuencias. Ser el villano si debo serlo, o el héroe sí así me nombra la gente.",
      },
      {
        answerText:
          "Aprender todos los secretos que esté mundo me pueda ofrecer.",
      },
      {
        answerText:
          "Construir una nación, la perfecta utopía conmigo como líder.",
      },
    ],
  },
  {
    questionText:
      "Si cometes un error que causa una pérdida, ¿qué pensamientos te vienen a la mente?",
    answerOptions: [
      {
        answerText:
          "Arrepentimiento y frustración conmigo mismo, no estoy seguro de qué pasos tomar a continuación.",
      },
      {
        answerText:
          "Debo actuar con rapidez para recuperar mis pérdidas, arriesgando perder el enfoque o retrasar el objetivo. Al final, ¿qué es una buena aventura sin un poco de sorpresas?",
      },
      {
        answerText:
          "La pérdida me tomó por sorpresa, trataré de pensar en dónde estaba el error que cometí para no volverlo a hacer. También siento un poco de frustración, ya que pensaba que mi plan era perfecto.",
      },
      {
        answerText:
          "Si existe solución, entonces la situación es favorable. Sin embargo, si no hay solución, no tiene sentido detenerse en lo que ya ha ocurrido.",
      },
    ],
  },
  {
    questionText:
      "Vas de camino a clases tarde y te encuentras con alguien que necesita ayuda, usted:",
    answerOptions: [
      {
        answerText:
          "Te detienes a ayudarle, después puedes conseguir los apuntes de tu clase.",
      },
      {
        answerText:
          "Te detienes y le preguntas que te ofrece a cambio de tu ayuda. Si es algo que te gusta, lo ayudas. Si no, sigues tu camino.",
      },
      {
        answerText: "Le das un consejo, pero no te involucras más allá de eso.",
      },
      {
        answerText:
          "Lo ignoras y te vas. No puedes permitirte perder más tiempo.",
      },
    ],
  },
  {
    questionText:
      "Se forma un debate en la clase, en el cual, no estás de acuerdo con la opinión mayoritaria de tus compañeros. Tú…",
    answerOptions: [
      {
        answerText:
          "Tratas de dar tu opinión, pero al final terminas encontrando sentido a lo que dicen los demás.",
      },
      {
        answerText:
          "Tus compañeros están en lo correcto, pero decides persuadirlos para que estén de acuerdo contigo.",
      },
      {
        answerText:
          "Refutas sus opiniones directamente, sabes que estás en lo correcto y no te importa que tú opinión sea parte de la minoría.",
      },
      {
        answerText:
          "No le explicas tus pensamientos a nadie. Dejas que tus compañeros sigan en lo incorrecto para que el día del examen, puedas tener una ventaja por sobre los demás.",
      },
    ],
  },
  {
    questionText:
      "Una flor que tarda un siglo en florecer, ha florecido justo en la época que estás viviendo. Está flor está protegida y su uso está restringido solo para el consejo de magia, ya que florecen en poca cantidad. Si sabes que esta flor sirve para potenciar todas las pócimas existentes, tú…",
    answerOptions: [
      {
        answerText:
          "No te parece correcto que su uso sea exclusivo para los altos cargos, te inclinas en buscar una opción mejor y más poderosa, a la cuál todos puedan acceder.",
      },
      {
        answerText:
          "Te infiltras en el campo de flores y robas 10 flores. Sabes que cada flor tiene 20 pétalos y solo basta 1 para crear las más poderosas pociones. Planeas vender aquellas que no vas a ocupar en el mercado negro.",
      },
      {
        answerText:
          "Buscas la flor en el mercado negro, infiltrarse en el campo de flores es una estupidez ya que es monitoreado exclusivamente por el consejo de magia. ",
      },
      {
        answerText:
          "Te infiltras en el campo de flores y arrancas una sola flor, para tu uso personal.",
      },
    ],
  },
  {
    questionText:
      "Te encuentras junto a un compañero en una bóveda donde se guardan importantes reliquias mágicas de distintas civilizaciones que ya no existen. En ese momento se presenta una catástrofe en la Academia y no puedes dejar que ciertos objetos se pierdan, pero también tu compañero está en problemas. ¿Qué haces?",
    answerOptions: [
      {
        answerText:
          "Salvo a mí compañero, las reliquias son objetos y la vida de una persona es mucho más importante.",
      },
      {
        answerText:
          "No me preocupo por ninguno de los dos, solo veo por mí mismo y mi propia seguridad.",
      },
      {
        answerText:
          "Trato de salvar a los dos, pero si el estado de mi compañero es lo suficientemente malo para retrasarme a mí, lo dejó atrás.",
      },
      {
        answerText:
          "Salvo las reliquias, son lo único que quedó de las civilizaciones erradicadas, su importancia histórica es demasiado importante y a veces se deben hacer sacrificios.",
      },
    ],
  },
  {
    questionText: "¿Qué darías a cambio de lo que tu corazón más desea?",
    answerOptions: [
      { answerText: "Lo imposible." },
      { answerText: "Lo que puedo permitirme perder." },
      { answerText: "Todo." },
      { answerText: "Lo que vale." },
    ],
  },
  {
    questionText:
      "Debes hacer un trabajo grupal, en el cuál el profesor escoge a tus compañeros de equipo. Tú…",
    answerOptions: [
      {
        answerText:
          "Decides que no habrá un líder en el grupo, logras hacer que todas las ideas de tus compañeros sean escuchadas y trabajan en armonía.",
      },
      {
        answerText:
          "Sabes que puedes hacer un trabajo mejor si estás solo. No te importa que ya haya un líder y haces lo que te dé la gana con el trabajo.",
      },
      {
        answerText:
          "Tienes un talento natural para dar instrucciones y guiar a las personas. Tus compañeros inconscientemente te ven como el líder del grupo.",
      },
      {
        answerText:
          "Tomas el liderazgo del grupo, no confías en alguien más para esta tarea. Además, sabes que tú puedes hacer un trabajo mejor.",
      },
    ],
  },
  {
    questionText: "¿Qué crees que le da sentido a la vida?",
    answerOptions: [
      {
        answerText:
          "Vivir por una razón; todo lo que debe hacerse debe tener un propósito. Si no hay una razón bien definida de lo que estás haciendo, entonces no tiene sentido hacerlo.",
      },
      {
        answerText:
          "Dándole a tu vida un toque creativo de música, arte o literatura. Quizás un poco de aventura por aquí y por allá, ¡es la mejor manera de darle sentido a tu vida! ",
      },
      {
        answerText:
          "Hacer algo grande que esté libre de la participación de la voluntad de alguien excepto de la tuya. Su origen, ejecución y final están todos en ti.",
      },
      {
        answerText:
          "Mantenerse alejado de todo lo que no se puede definir lógicamente o no tiene prueba de existencia. Creer sólo en aquellas cosas que pueden expresarse razonablemente.",
      },
    ],
  },
  {
    questionText: "Piensas que…",
    answerOptions: [
      { answerText: "El país es unido porque la gente es feliz." },
      { answerText: "El país es fuerte porque la gente es libre." },
      { answerText: "Cuánto más fuerte es el país, más libre es el pueblo." },
      { answerText: "Cuánto más unido es el país, más feliz es el pueblo." },
    ],
  },
  {
    questionText: "Sí tuvieras que escoger una frase...",
    answerOptions: [
      { answerText: "No importa lo lento que vayas mientras no te detengas." },
      {
        answerText:
          "[...] Y los que fueron vistos bailando, fueron considerados locos por aquellos que no podían escuchar la música.",
      },
      {
        answerText:
          "Las mentes más grandes son capaces de los vicios más grandes, así como de las virtudes más grandes.",
      },
      {
        answerText:
          "Del más profundo de los deseos,  a menudo surge el odio más mortífero.",
      },
    ],
  },
  {
    questionText: "El alma se daña por la falta de...",
    answerOptions: [
      { answerText: "Comunidad." },
      { answerText: "Coraje." },
      { answerText: "Poder." },
      { answerText: "Conocimiento." },
    ],
  },
  {
    questionText: "Escoge una pieza de Ajedrez.",
    answerOptions: [
      { answerText: "La Torre" },
      { answerText: "El Caballo" },
      { answerText: "La Reina" },
      { answerText: "El Rey" },
    ],
  },
  {
    questionText:
      "La emoción más longeva y fuerte de la historia de la humanidad es…",
    answerOptions: [
      { answerText: "Ira" },
      { answerText: "Sorpresa" },
      { answerText: "Felicidad" },
      { answerText: "Miedo" },
    ],
  },
  {
    questionText: "Si tuvieras que escoger un camino...",
    answerOptions: [
      {
        answerText:
          "ESTOICISMO: El bien está en la sabiduría y dominio del alma, que permite liberarse de las pasiones y deseos que perturban la vida.",
      },
      {
        answerText:
          "CINISMO: Rechaza los convencionalismos sociales y consideraa que la única preocupación del hombre debe ser la virtud, pues sólo a través de esta se puede alcanzar la felicidad.",
      },
      {
        answerText:
          "EPICUREISMO: El placer constituye el bien supremo pero no debe reducirse su doctrina a un placer banal y egoísta. El placer perseguido es uno modesto y sostenible a lo largo del tiempo.",
      },
      {
        answerText:
          "ESCEPTICISMO: No hay ningún saber firme, ni puede encontrarse ninguna opinión segura. Se debe dudar de todas las cosas, fenómenos, hechos y verdades.",
      },
    ],
  },
  {
    questionText: "En una orquesta, ¿en qué parte estás?",
    answerOptions: [
      { answerText: "Eres un músico de la orquesta." },
      { answerText: "En el público." },
      { answerText: "En el Palco Real." },
      { answerText: "Eres quién dirige a la orquesta." },
    ],
  },
  {
    questionText: "La esencia del ser humano es…",
    answerOptions: [
      { answerText: "Su corazón." },
      { answerText: "Su sexto sentido." },
      { answerText: "Sus recuerdos." },
      { answerText: "Su razón." },
    ],
  },
];
