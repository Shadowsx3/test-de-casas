import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:front_flutter/question_widget.dart';

class QuizScreen extends StatefulWidget {
  const QuizScreen({Key? key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late List<dynamic> questionsData = [];
  var questionIndex = 0;
  var score = {0: 0, 1: 0, 2: 0, 3: 0};
  late ImageProvider nextQuestionImage;
  late Future<void> dataLoaded; // Add a Future variable to track data loading

  @override
  void initState() {
    super.initState();
    dataLoaded = _loadData(); // Load data when the widget initializes
  }

  Future<void> _loadData() async {
    var data = await rootBundle.loadString("data/questions.json");
    setState(() {
      questionsData = json.decode(data)["questions"];
      _preloadNextImage();
    });
  }

  void _preloadNextImage() {
    final nextQuestionIndex = questionIndex + 1;
    if (nextQuestionIndex < questionsData.length) {
      final nextImage = AssetImage(
        "images/${questionsData[nextQuestionIndex]['questionIcon']}",
      );
      precacheImage(nextImage, context);
      nextQuestionImage = nextImage;
    }
  }

  void _answerQuestion(int selectedAnswerIndex) {
    setState(() {
      score[selectedAnswerIndex] = score[selectedAnswerIndex]! + 1;
      questionIndex++;
      _preloadNextImage();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder(
        future: dataLoaded, // Use the Future variable here
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            return Stack(
              children: [
                Image.asset(
                  "assets/images/fondo.png",
                  fit: BoxFit.cover,
                  width: double.infinity,
                  height: double.infinity,
                ),
                (questionIndex >= questionsData.length)
                    ? Center(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Text(
                              "¡Terminaste!",
                              style: TextStyle(
                                fontSize: 40,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            const SizedBox(height: 20),
                            Text(
                              "Tu casa ideal es la ${score.entries.reduce((a, b) => a.value > b.value ? a : b).key}",
                              style: const TextStyle(
                                fontSize: 30,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      )
                    : QuestionWidget(
                        questionData: questionsData[questionIndex],
                        onAnswer: (selectedAnswerIndex) {
                          _answerQuestion(selectedAnswerIndex);
                        },
                      ),
              ],
            );
          } else if (snapshot.hasError) {
            return const Center(
              child: Text("Error loading data"),
            );
          } else {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
        },
      ),
    );
  }
}
