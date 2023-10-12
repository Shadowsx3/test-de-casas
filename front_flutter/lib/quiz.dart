import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:front_flutter/question_widget.dart';
import 'package:front_flutter/results.dart';

class QuizScreen extends StatefulWidget {
  const QuizScreen({Key? key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late List<dynamic> questionsData = [];
  late List<dynamic> resultsData = [];
  var questionIndex = 0;
  var score = {0: 0, 1: 0, 2: 0, 3: 0};
  late Future<void> dataLoaded;
  final flags = ["DIPHENIX", "DRACONUS", "MYSTICORN", "VULPIRE"];

  @override
  void initState() {
    super.initState();
    dataLoaded = _loadData(); // Load data when the widget initializes
  }

  Future<void> _loadData() async {
    var data = await rootBundle.loadString("assets/data/questions.json");
    setState(() {
      questionsData = json.decode(data)["questions"];
      resultsData = json.decode(data)["results"];

      // Precache all images for questions
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
    });
  }

  void _answerQuestion(int selectedAnswerIndex) {
    setState(() {
      score[selectedAnswerIndex] = score[selectedAnswerIndex]! + 1;
      questionIndex++;
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
                    ? ResultsScreen(
                        result: resultsData[score.entries
                            .reduce((a, b) => a.value > b.value ? a : b)
                            .key])
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
