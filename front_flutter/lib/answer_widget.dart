import 'package:flutter/material.dart';

import 'package:flutter/material.dart';

class AnswerOptionsWidget extends StatelessWidget {
  final List<dynamic> answerOptions;
  final ValueChanged<int> onAnswer;

  const AnswerOptionsWidget({
    Key? key,
    required this.answerOptions,
    required this.onAnswer,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isSmallScreen = MediaQuery.of(context).size.width < 520;
    final itemWidth =
        isSmallScreen ? MediaQuery.of(context).size.width - 20 : 500.0;
    final itemHeight = isSmallScreen ? 300.0 : 500.0;

    final grid = GridView.builder(
      physics: const NeverScrollableScrollPhysics(),
      shrinkWrap: true,
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: isSmallScreen ? 1 : 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
        childAspectRatio: isSmallScreen ? 3.5 : 1,
      ),
      itemCount: answerOptions.length,
      itemBuilder: (context, index) {
        var answer = answerOptions[index].toString();
        Widget buttonChild = answer.contains(".png")
            ? Image.asset(
                "assets/images/$answer",
                fit: BoxFit.fitHeight,
                width: itemWidth / (isSmallScreen ? 1.5 : 2.5),
                height: itemHeight / 1.5,
              )
            : Text(
                answer,
                style: const TextStyle(
                  fontSize: 14,
                  color: Colors.white,
                ),
                textAlign: TextAlign.center,
              );

        Widget elevatedButton = ElevatedButton(
          onPressed: () {
            onAnswer(index);
          },
          style: ButtonStyle(
            backgroundColor: MaterialStateProperty.all<Color>(Colors.black),
            shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
                side: const BorderSide(
                  color: Colors.black,
                ),
              ),
            ),
          ),
          child: buttonChild,
        );

        if (isSmallScreen) {
          // Wrap the ElevatedButton with Container for mobile screens
          elevatedButton = Container(
            margin: const EdgeInsets.only(left: 20.0, right: 20.0),
            padding: const EdgeInsets.all(0.0),
            child: elevatedButton,
          );
        }

        return elevatedButton;
      },
    );

    return isSmallScreen
        ? grid
        : SizedBox(
            height: itemHeight,
            width: itemWidth,
            child: grid,
          );
  }
}
