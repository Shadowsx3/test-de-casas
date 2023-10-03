import 'package:flutter/material.dart';
import 'package:front_flutter/answer_widget.dart';

class QuestionWidget extends StatelessWidget {
  final dynamic questionData;
  final ValueChanged<int> onAnswer; // Change the callback to accept an int

  const QuestionWidget({super.key,
    required this.questionData,
    required this.onAnswer,
  });

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(
      builder: (context, StateSetter setState) {
        final questionIcon = questionData['questionIcon'];
        final questionText = questionData['questionText'];
        final answerOptions = questionData['answerOptions'];

        return Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Image.asset(
              "images/$questionIcon",
              fit: BoxFit.fitHeight,
              width: 250,
            ),
            SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  Container(
                    width: 500,
                    decoration: BoxDecoration(
                      color: Colors.black,
                      borderRadius: BorderRadius.circular(16),
                    ),
                    padding: const EdgeInsets.all(14.0),
                    margin: const EdgeInsets.only(top: 60),
                    child: Text(
                      questionText,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                  const SizedBox(height: 20),
                  AnswerOptionsWidget(
                    answerOptions: answerOptions,
                    onAnswer: (selectedAnswerIndex) {
                      // Pass the selected answer index to the callback
                      onAnswer(selectedAnswerIndex);
                    },
                  ),
                  const SizedBox(height: 20),
                ],
              ),
            ),
          ],
        );
      },
    );
  }
}
