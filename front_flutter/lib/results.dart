import 'package:flutter/material.dart';

import 'main.dart';

class ResultsScreen extends StatelessWidget {
  final Map result;

  const ResultsScreen({super.key, required this.result});

  @override
  Widget build(BuildContext context) {
    return StatefulBuilder(builder: (context, StateSetter setState) {
      return Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const SizedBox(height: 20),
              Image.asset(
                "assets/images/${result["flag"]}",
                fit: BoxFit.fitHeight,
                width: 250,
              ),
              const SizedBox(height: 20),
              Container(
                width: 700,
                decoration: BoxDecoration(
                  color: Colors.black,
                  borderRadius: BorderRadius.circular(16),
                ),
                padding: const EdgeInsets.all(14.0),
                margin: const EdgeInsets.all(20.0),
                child: Text(
                  result["text"],
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.center,
                ),
              ),
              ElevatedButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const MyHomePage()),
                  );
                },
                style: TextButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8),
                    ),
                    padding: const EdgeInsets.only(
                      left: 20,
                      right: 20,
                      top: 12,
                      bottom: 12,
                    ),
                    backgroundColor: Colors.orange),
                child: const Text(
                  'Volver',
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.black),
                  textAlign: TextAlign.center,
                ),
              ),
              const SizedBox(height: 20),
            ],
          ),
        ),
      );
    });
  }
}
