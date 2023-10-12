import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:convert';
import 'quiz.dart'; // Make sure to import your 'quiz.dart' file

void main() {
  runApp(const MyApp());
}

class DataLoadingAndCaching {
  static Future<String> loadDataAndPrecacheImages(BuildContext context) async {
    var data = await rootBundle.loadString("assets/data/questions.json");
    return data;
  }

  static void precache(BuildContext context, String data) {
    List<dynamic> questionsData = json.decode(data)["questions"];
    List<dynamic> resultsData = json.decode(data)["results"];

    precacheImage(const AssetImage("assets/images/fondo.png"), context);
    for (var question in questionsData) {
      precacheImage(
        AssetImage("assets/images/${question['questionIcon']}"),
        context,
      );

      for (var item in question['answerOptions']) {
        if (item.toString().contains(".png")) {
          precacheImage(
            AssetImage("assets/images/$item"),
            context,
          );
        }
      }
    }

    // Precache all images for results
    for (var result in resultsData) {
      precacheImage(
        AssetImage("assets/images/${result["flag"]}"),
        context,
      );
    }
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<String>(
      future: DataLoadingAndCaching.loadDataAndPrecacheImages(context),
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.done) {
          DataLoadingAndCaching.precache(context, snapshot.data ?? "");
          return MaterialApp(
              title: 'Test de casas',
              debugShowCheckedModeBanner: false,
              theme: ThemeData(
                colorScheme:
                const ColorScheme.dark().copyWith(primary: Colors.orange),
                useMaterial3: true,
              ),
              home: MyHomePage(data: snapshot.data ?? ""));
        } else {
          return const MaterialApp(
            home: Scaffold(
              body: Center(
                child: CircularProgressIndicator(),
              ),
            ),
          );
        }
      },
    );
  }
}

class MyHomePage extends StatefulWidget {
  final String data;

  const MyHomePage({Key? key, required this.data}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}
class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/images/fondo.png"),
            fit: BoxFit.cover,
          ),
        ),
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                SizedBox(
                  height: 250,
                  child: Image.asset(
                    "assets/images/escudos.png",
                    fit: BoxFit.fitHeight,
                    width: 250,
                  ),
                ),
                Container(
                  width: 500,
                  decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.circular(16),
                  ),
                  padding: const EdgeInsets.all(14.0),
                  margin: const EdgeInsets.all(20.0),
                  child: const Column(
                    children: [
                      Text(
                        'Por favor, futuro estudiante de la Academia, responda las siguientes preguntas con el corazón de frente, la cabeza fría y el alma tranquila para obtener el resultado más exacto. Trate de no sobrepensar las respuestas, pues, independiente del resultado, su casa no va aferrada a su destino. Les deseo buena suerte.',
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.white,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      SizedBox(height: 10),
                      Text(
                        "-Nuestro vicedirector, Alonzo D'Agostino",
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.white,
                        ),
                        textAlign: TextAlign.center,
                      )
                    ],
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => QuizScreen(data: widget.data),
                      ),
                    );
                  },
                  style: TextButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                    backgroundColor: Colors.orange,
                  ),
                  child: const Text(
                    'Empezar test',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.black,
                    ),
                    textAlign: TextAlign.center,
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
