# Flashcard-Generator - Created the backend for a basic flashcard application.
Constitutes an API that allows users to create two types of flashcards - Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington"); Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")
Flash cards have three parts: The full text - the entire sentence users need to remember: "George Washington was the first president of the United States." The cloze deletion - the text that has been removed: "George Washington". The partial text - "... was the first president of the United States.
Constructors:
BasicCard.js - defines a Node module that exports a constructor for creating basic flashcards and accepts two arguments: front and back.
ClozeCard.js - defines a Node module that exports a constructor for creating cloze-deletion flashcards and accept two arguments: text and cloze.
