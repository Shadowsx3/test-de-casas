import 'package:flutter/material.dart';
import 'package:front_flutter/answer_widget.dart';

class QuestionWidget extends StatefulWidget {
  final dynamic questionData;
  final ValueChanged<int> onAnswer; // Change the callback to accept an int

  const QuestionWidget({
    Key? key,
    required this.questionData,
    required this.onAnswer,
  }) : super(key: key);

  @override
  _QuestionWidgetState createState() => _QuestionWidgetState();
}

class _QuestionWidgetState extends State<QuestionWidget> {
  final ScrollController _scrollController = ScrollController();

  @override
  void dispose() {
    _scrollController.dispose();
    super.dispose();
  }

  void resetScrollPosition() {
    _scrollController.jumpTo(0.0);
  }

  @override
  Widget build(BuildContext context) {
    final questionIcon = widget.questionData['questionIcon'];
    final questionText = widget.questionData['questionText'];
    final answerOptions = widget.questionData['answerOptions'];

    return LayoutBuilder(
      builder: (context, constraints) {
        final isSmallScreen = constraints.maxWidth < 880;

        return isSmallScreen
            ? Center(
          child: SingleChildScrollView(
            controller: _scrollController,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(
                  height: isSmallScreen ? 250 : 350,
                  child: Image.asset(
                    "assets/images/$questionIcon",
                    fit: BoxFit.fitHeight,
                    width: isSmallScreen ? 250 : 350,
                  ),
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
                    widget.onAnswer(selectedAnswerIndex);
                    resetScrollPosition(); // Reset scroll position here
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
            SizedBox(
              height: 350,
              child: Image.asset(
                "assets/images/$questionIcon",
                fit: BoxFit.fitHeight,
                width: 350,
              ),
            ),
            SingleChildScrollView(
              controller: _scrollController,
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
                      widget.onAnswer(selectedAnswerIndex);
                      resetScrollPosition(); // Reset scroll position here
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
