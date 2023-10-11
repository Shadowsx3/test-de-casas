import 'package:flutter/material.dart';
import 'package:front_flutter/answer_widget.dart';

class QuestionWidget extends StatelessWidget {
  final dynamic questionData;
  final ValueChanged<int> onAnswer; // Change the callback to accept an int

  const QuestionWidget({
    Key? key,
    required this.questionData,
    required this.onAnswer,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(
      builder: (context, StateSetter setState) {
        final questionIcon = questionData['questionIcon'];
        final questionText = questionData['questionText'];
        final answerOptions = questionData['answerOptions'];

        return LayoutBuilder(
          builder: (context, constraints) {
            final isSmallScreen = constraints.maxWidth < 880;

            return isSmallScreen
                ? Center(
                    child: SingleChildScrollView(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Image.asset(
                            "images/$questionIcon",
                            fit: BoxFit.fitHeight,
                            width: isSmallScreen ? 250 : 350,
                          ),
                          const SizedBox(height: 20),
                          Container(
                            width: isSmallScreen ? 400 : 500,
                            decoration: BoxDecoration(
                              color: Colors.black,
                              borderRadius: BorderRadius.circular(16),
                            ),
                            padding: const EdgeInsets.all(14.0),
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
                              onAnswer(selectedAnswerIndex);
                            },
                          ),
                          const SizedBox(height: 20),
                        ],
                      ),
                    ),
                  )
                : Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Image.asset(
                        "images/$questionIcon",
                        fit: BoxFit.fitHeight,
                        width: 350,
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
      },
    );
  }
}
