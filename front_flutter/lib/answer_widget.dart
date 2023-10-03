import 'package:flutter/material.dart';

class AnswerOptionsWidget extends StatelessWidget {
  final List<dynamic> answerOptions;
  final ValueChanged<int> onAnswer; // Change the callback to accept an int

  const AnswerOptionsWidget({
    super.key,
    required this.answerOptions,
    required this.onAnswer,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      width: 500,
      child: GridView.count(
        crossAxisCount: 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        children: List.generate(
          4,
          (index) {
            var answer = answerOptions[index].toString();
            return ElevatedButton(
              onPressed: () {
                // Pass the selected answer index to the callback
                onAnswer(index);
              },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(
                  Colors.black,
                ),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                    side: const BorderSide(
                      color: Colors.black,
                    ),
                  ),
                ),
              ),
              child: answer.contains(".png")
                  ? Image.asset(
                      "images/$answer",
                      fit: BoxFit.fitHeight,
                      width: 250,
                    )
                  : Text(
                      answer,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Colors.white,
                      ),
                      textAlign: TextAlign.center,
                    ),
            );
          },
        ),
      ),
    );
  }
}
