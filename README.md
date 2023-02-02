# Morse-Code-Translator
The basic style of this Morse Code translator is inspired from old physical Morse Code radios.
Therefore likewise, it has the functionality to generate live audio input during translation, recreating an authentic and historical feel.
## Introduction
This project allows user to input English text and translates it into Morse Code or vice versa. It also includes live audio transcriptions for both English and Morse Code.
<strong> View live project at: https://jackythesmurf.github.io/Morse-Code-Translator/</strong>

<img width="500" src="Screen Shot 2023-01-23 at 2.40.43 pm.png">

## How its created

The morse radio signals were generated with an OscillatorNode that represents a periodic waveform, and creates a constant tone. Therefore by setting the tone of the dot, and the hyphen as three times the dot's duration, I was able to recreate the morse code audio transcription. 
This translator can also output live voice transcription when translating from Morse Code to English, the voice is derived from the SpeechSynthesisUtterance interface from the Web Speech API.
I have also utilised the Jest testing framework to ensure that translations from both Morse to English, and English to Morse are accurate and handles invalid outputs with feedback to user.


## Features

* Accepts both morse code and english input from user
* Translate english input from the user into Morse Code and vice versa
* Live audio transcription for both English and Morse Code (sound up)
* Used Jest tests to ensure functionality and error handling 
* Utilise knowledge of Function, Objects, and Modules to translate Morse Code

## Difficulties and lessons learnt

The main knowledge gained from this project was understanding how to structure and break apart javascript code into functions and modules. Because breaking up code on a granular level increases readability, and prevents code repetition. I have refactored my code upon feedback.

## Further Development
This functionality of the project has reached most of its desired capabilities, however the user interface and overall styling can be greatly improved. The web app should be more accessible towards the general user and as of currently, the interface can be hard to understand.