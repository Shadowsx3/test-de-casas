import 'package:flutter/material.dart';

class AnswerOptionsWidget extends StatelessWidget {
  final List<dynamic> answerOptions;
  final ValueChanged<int> onAnswer;

  AnswerOptionsWidget({
    Key? key,
    required this.answerOptions,
    required this.onAnswer,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 500;
    final itemWidth = isSmallScreen ? 350.0 : 500.0;
    final itemHeight = isSmallScreen ? 300.0 : 500.0;

    return SizedBox(
      height: itemHeight,
      width: itemWidth,
      child: GridView.builder(
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: isSmallScreen ? 1 : 2,
          crossAxisSpacing: 10,
          mainAxisSpacing: 10,
          childAspectRatio: isSmallScreen ? 3.5 : 1, // Set the aspect ratio
        ),
        shrinkWrap: true,
        itemCount: answerOptions.length,
        itemBuilder: (context, index) {
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
                    "assets/images/$answer",
                    fit: BoxFit.fitHeight,
                    width:
                        itemWidth / (isSmallScreen ? 1.5 : 2.5), // Adjust width
                    height: itemHeight / 1.5, // Adjust height
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
    );
  }
}
