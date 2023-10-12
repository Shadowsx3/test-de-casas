import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:front_flutter/question_widget.dart';
import 'package:front_flutter/results.dart';

class QuizScreen extends StatefulWidget {
  final String data;

  const QuizScreen({super.key, required this.data});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late List<dynamic> questionsData;
  late List<dynamic> resultsData;
  var questionIndex = 0;
  var score = {0: 0, 1: 0, 2: 0, 3: 0};
  final flags = ["DIPHENIX", "DRACONUS", "MYSTICORN", "VULPIRE"];

  @override
  void initState() {
    super.initState();
    questionsData = json.decode(widget.data)["questions"];
    resultsData = json.decode(widget.data)["results"];
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
      body: Stack(
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
                      .key],
                )
              : QuestionWidget(
                  questionData: questionsData[questionIndex],
                  onAnswer: (selectedAnswerIndex) {
                    _answerQuestion(selectedAnswerIndex);
                  },
                ),
        ],
      ),
    );
  }
}
