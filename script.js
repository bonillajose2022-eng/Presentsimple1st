/* Banco editable: cada id debe ser único y estable. No contiene datos personales. */
const ACTIONS = [["Eat", "🍎", "comer"], ["Drink", "🥤", "beber"], ["Play", "⚽", "jugar"], ["Read", "📖", "leer"], ["Sleep", "😴", "dormir"], ["Walk", "🚶", "caminar"], ["Run", "🏃", "correr"], ["Sing", "🎤", "cantar"], ["Dance", "💃", "bailar"], ["Go to school", "🏫", "ir al colegio"]];
const WORLDS = [
  {
    "name": "My Daily Actions",
    "icon": "🌳",
    "goal": "Reconocer acciones cotidianas y decir lo que hago.",
    "example": "I play football.",
    "es": "Para contar algo que hacemos habitualmente: I + acción. I play football = Yo juego fútbol.",
    "demo": [
      "I play football.",
      "He plays football."
    ],
    "story": "My name is Ben. I like apples. I play football. I read books. I go to school.",
    "questions": [
      {
        "type": "match",
        "prompt": "Match the action.",
        "icon": "🧩",
        "pairs": [
          {
            "word": "Eat",
            "icon": "🍎",
            "meaning": "comer"
          },
          {
            "word": "Sleep",
            "icon": "😴",
            "meaning": "dormir"
          },
          {
            "word": "Read",
            "icon": "📖",
            "meaning": "leer"
          }
        ],
        "skill": "vocabulary",
        "id": "w1q1"
      },
      {
        "type": "choice",
        "prompt": "I ___ apples.",
        "icon": "🍎",
        "answer": "eat",
        "options": [
          "eat",
          "drink",
          "sleep"
        ],
        "feedback": {
          "drink": "“drink” no expresa la acción de esta imagen 🍎. Aquí necesitamos “eat”. I eat apples.",
          "sleep": "“sleep” no expresa la acción de esta imagen 🍎. Aquí necesitamos “eat”. I eat apples."
        },
        "skill": "vocabulary",
        "id": "w1q2"
      },
      {
        "type": "choice",
        "prompt": "I ___ water.",
        "icon": "🥤",
        "answer": "drink",
        "options": [
          "drink",
          "read",
          "dance"
        ],
        "feedback": {
          "read": "“read” no expresa la acción de esta imagen 🥤. Aquí necesitamos “drink”. I drink water.",
          "dance": "“dance” no expresa la acción de esta imagen 🥤. Aquí necesitamos “drink”. I drink water."
        },
        "skill": "vocabulary",
        "id": "w1q3"
      },
      {
        "type": "choice",
        "prompt": "I ___ football.",
        "icon": "⚽",
        "answer": "play",
        "options": [
          "play",
          "eat",
          "sing"
        ],
        "feedback": {
          "eat": "“eat” no expresa la acción de esta imagen ⚽. Aquí necesitamos “play”. I play football.",
          "sing": "“sing” no expresa la acción de esta imagen ⚽. Aquí necesitamos “play”. I play football."
        },
        "skill": "vocabulary",
        "id": "w1q4"
      },
      {
        "type": "complete",
        "prompt": "I ___ books.",
        "icon": "📖",
        "answer": "read",
        "options": [
          "read",
          "run",
          "drink"
        ],
        "feedback": {
          "run": "“run” no expresa la acción de esta imagen 📖. Aquí necesitamos “read”. I read books.",
          "drink": "“drink” no expresa la acción de esta imagen 📖. Aquí necesitamos “read”. I read books."
        },
        "skill": "vocabulary",
        "id": "w1q5"
      },
      {
        "type": "complete",
        "prompt": "I ___ songs.",
        "icon": "🎤",
        "answer": "sing",
        "options": [
          "sing",
          "walk",
          "sleep"
        ],
        "feedback": {
          "walk": "“walk” no expresa la acción de esta imagen 🎤. Aquí necesitamos “sing”. I sing songs.",
          "sleep": "“sleep” no expresa la acción de esta imagen 🎤. Aquí necesitamos “sing”. I sing songs."
        },
        "skill": "vocabulary",
        "id": "w1q6"
      },
      {
        "type": "complete",
        "prompt": "I ___ every day.",
        "icon": "🏫",
        "answer": "go to school",
        "options": [
          "go to school",
          "eat apples",
          "drink water"
        ],
        "feedback": {
          "eat apples": "“eat apples” no expresa la acción de esta imagen 🏫. Aquí necesitamos “go to school”. I go to school every day.",
          "drink water": "“drink water” no expresa la acción de esta imagen 🏫. Aquí necesitamos “go to school”. I go to school every day."
        },
        "skill": "vocabulary",
        "id": "w1q7"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌳",
        "answer": "I walk every day.",
        "words": [
          "I",
          "walk",
          "every",
          "day"
        ],
        "skill": "order",
        "id": "w1q8"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌳",
        "answer": "I run in the park.",
        "words": [
          "I",
          "run",
          "in",
          "the",
          "park"
        ],
        "skill": "order",
        "id": "w1q9"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌳",
        "answer": "I dance at home.",
        "words": [
          "I",
          "dance",
          "at",
          "home"
        ],
        "skill": "order",
        "id": "w1q10"
      },
      {
        "type": "reading",
        "prompt": "What does Ben like?",
        "icon": "🌳",
        "passage": "My name is Ben. I like apples. I play football. I read books. I go to school.",
        "answer": "🍎 Apples",
        "options": [
          "🍎 Apples",
          "🍌 Bananas",
          "🥛 Milk"
        ],
        "feedback": {
          "🍌 Bananas": "“🍌 Bananas” no coincide con la información de esta pregunta. El texto dice: “I like apples.”. Esa frase nos lleva a “🍎 Apples”.",
          "🥛 Milk": "“🥛 Milk” no coincide con la información de esta pregunta. El texto dice: “I like apples.”. Esa frase nos lleva a “🍎 Apples”."
        },
        "skill": "reading",
        "id": "w1q11"
      },
      {
        "type": "reading",
        "prompt": "What does Ben play?",
        "icon": "🌳",
        "passage": "My name is Ben. I like apples. I play football. I read books. I go to school.",
        "answer": "⚽ Football",
        "options": [
          "⚽ Football",
          "🎮 Games",
          "🎾 Tennis"
        ],
        "feedback": {
          "🎮 Games": "“🎮 Games” no coincide con la información de esta pregunta. El texto dice: “I play football.”. Esa frase nos lleva a “⚽ Football”.",
          "🎾 Tennis": "“🎾 Tennis” no coincide con la información de esta pregunta. El texto dice: “I play football.”. Esa frase nos lleva a “⚽ Football”."
        },
        "skill": "reading",
        "id": "w1q12"
      },
      {
        "type": "reading",
        "prompt": "Does Ben read books?",
        "icon": "🌳",
        "passage": "My name is Ben. I like apples. I play football. I read books. I go to school.",
        "answer": "✅ Yes, he does.",
        "options": [
          "✅ Yes, he does.",
          "❌ No, he does not.",
          "😴 He only sleeps."
        ],
        "feedback": {
          "❌ No, he does not.": "“❌ No, he does not.” no coincide con la información de esta pregunta. El texto dice: “I read books.”. Esa frase nos lleva a “✅ Yes, he does.”.",
          "😴 He only sleeps.": "“😴 He only sleeps.” no coincide con la información de esta pregunta. El texto dice: “I read books.”. Esa frase nos lleva a “✅ Yes, he does.”."
        },
        "skill": "reading",
        "id": "w1q13"
      }
    ]
  },
  {
    "name": "I, You, We, They",
    "icon": "🏕️",
    "goal": "Usar I, you, we y they con acciones sin -s.",
    "example": "We read books.",
    "es": "Con I, you, we y they usamos la acción sin agregar -s: We read books = Nosotros leemos libros.",
    "demo": [
      "We read books.",
      "They read books."
    ],
    "story": "We are friends. I like bananas. You play games. We read books. They eat pizza.",
    "questions": [
      {
        "type": "match",
        "prompt": "Match the action.",
        "icon": "🧩",
        "pairs": [
          {
            "word": "Drink",
            "icon": "🥤",
            "meaning": "beber"
          },
          {
            "word": "Play",
            "icon": "⚽",
            "meaning": "jugar"
          },
          {
            "word": "Walk",
            "icon": "🚶",
            "meaning": "caminar"
          }
        ],
        "skill": "vocabulary",
        "id": "w2q1"
      },
      {
        "type": "choice",
        "prompt": "I ___ bananas.",
        "icon": "🍌",
        "answer": "like",
        "options": [
          "like",
          "likes",
          "liking"
        ],
        "feedback": {
          "likes": "Con i usamos “like”, sin agregar -s ni -ing. I like bananas.",
          "liking": "“liking” es una forma con -ing. Para esta rutina usamos “like”. I like bananas."
        },
        "skill": "agreement",
        "id": "w2q2"
      },
      {
        "type": "choice",
        "prompt": "You ___ games.",
        "icon": "🎮",
        "answer": "play",
        "options": [
          "play",
          "plays",
          "playing"
        ],
        "feedback": {
          "plays": "Con you usamos “play”, sin agregar -s ni -ing. You play games.",
          "playing": "“playing” es una forma con -ing. Para esta rutina usamos “play”. You play games."
        },
        "skill": "agreement",
        "id": "w2q3"
      },
      {
        "type": "choice",
        "prompt": "We ___ books.",
        "icon": "📖",
        "answer": "read",
        "options": [
          "read",
          "reads",
          "reading"
        ],
        "feedback": {
          "reads": "Con we usamos “read”, sin agregar -s ni -ing. We read books.",
          "reading": "“reading” es una forma con -ing. Para esta rutina usamos “read”. We read books."
        },
        "skill": "agreement",
        "id": "w2q4"
      },
      {
        "type": "complete",
        "prompt": "They ___ pizza.",
        "icon": "🍕",
        "answer": "eat",
        "options": [
          "eat",
          "eats",
          "eating"
        ],
        "feedback": {
          "eats": "Con they usamos “eat”, sin agregar -s ni -ing. They eat pizza.",
          "eating": "“eating” es una forma con -ing. Para esta rutina usamos “eat”. They eat pizza."
        },
        "skill": "agreement",
        "id": "w2q5"
      },
      {
        "type": "complete",
        "prompt": "We ___ water.",
        "icon": "🥤",
        "answer": "drink",
        "options": [
          "drink",
          "drinks",
          "drinking"
        ],
        "feedback": {
          "drinks": "Con we usamos “drink”, sin agregar -s ni -ing. We drink water.",
          "drinking": "“drinking” es una forma con -ing. Para esta rutina usamos “drink”. We drink water."
        },
        "skill": "agreement",
        "id": "w2q6"
      },
      {
        "type": "complete",
        "prompt": "They ___ songs.",
        "icon": "🎤",
        "answer": "sing",
        "options": [
          "sing",
          "sings",
          "singing"
        ],
        "feedback": {
          "sings": "Con they usamos “sing”, sin agregar -s ni -ing. They sing songs.",
          "singing": "“singing” es una forma con -ing. Para esta rutina usamos “sing”. They sing songs."
        },
        "skill": "agreement",
        "id": "w2q7"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏕️",
        "answer": "You walk to school.",
        "words": [
          "You",
          "walk",
          "to",
          "school"
        ],
        "skill": "order",
        "id": "w2q8"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏕️",
        "answer": "We play in the park.",
        "words": [
          "We",
          "play",
          "in",
          "the",
          "park"
        ],
        "skill": "order",
        "id": "w2q9"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏕️",
        "answer": "They dance at home.",
        "words": [
          "They",
          "dance",
          "at",
          "home"
        ],
        "skill": "order",
        "id": "w2q10"
      },
      {
        "type": "reading",
        "prompt": "What do I like?",
        "icon": "🏕️",
        "passage": "We are friends. I like bananas. You play games. We read books. They eat pizza.",
        "answer": "🍌 Bananas",
        "options": [
          "🍌 Bananas",
          "🍎 Apples",
          "🍕 Pizza"
        ],
        "feedback": {
          "🍎 Apples": "“🍎 Apples” no coincide con la información de esta pregunta. El texto dice: “I like bananas.”. Esa frase nos lleva a “🍌 Bananas”.",
          "🍕 Pizza": "“🍕 Pizza” no coincide con la información de esta pregunta. El texto dice: “I like bananas.”. Esa frase nos lleva a “🍌 Bananas”."
        },
        "skill": "reading",
        "id": "w2q11"
      },
      {
        "type": "reading",
        "prompt": "What do we read?",
        "icon": "🏕️",
        "passage": "We are friends. I like bananas. You play games. We read books. They eat pizza.",
        "answer": "📖 Books",
        "options": [
          "📖 Books",
          "🎮 Games",
          "🥤 Water"
        ],
        "feedback": {
          "🎮 Games": "“🎮 Games” no coincide con la información de esta pregunta. El texto dice: “We read books.”. Esa frase nos lleva a “📖 Books”.",
          "🥤 Water": "“🥤 Water” no coincide con la información de esta pregunta. El texto dice: “We read books.”. Esa frase nos lleva a “📖 Books”."
        },
        "skill": "reading",
        "id": "w2q12"
      },
      {
        "type": "reading",
        "prompt": "Who eats pizza?",
        "icon": "🏕️",
        "passage": "We are friends. I like bananas. You play games. We read books. They eat pizza.",
        "answer": "👥 They",
        "options": [
          "👥 They",
          "🙋 I",
          "🫵 You"
        ],
        "feedback": {
          "🙋 I": "“🙋 I” no coincide con la información de esta pregunta. El texto dice: “They eat pizza.”. Esa frase nos lleva a “👥 They”.",
          "🫵 You": "“🫵 You” no coincide con la información de esta pregunta. El texto dice: “They eat pizza.”. Esa frase nos lleva a “👥 They”."
        },
        "skill": "reading",
        "id": "w2q13"
      }
    ]
  },
  {
    "name": "He and She",
    "icon": "🦊",
    "goal": "Agregar -s con he y she en acciones conocidas.",
    "example": "She drinks water.",
    "es": "Con he (él) y she (ella), muchas acciones llevan -s: I drink → She drinks. Go cambia a goes.",
    "demo": [
      "I play football.",
      "He plays football."
    ],
    "story": "This is Mia. She likes apples. She drinks water. She reads books. She plays games.",
    "questions": [
      {
        "type": "match",
        "prompt": "Match the action.",
        "icon": "🧩",
        "pairs": [
          {
            "word": "Run",
            "icon": "🏃",
            "meaning": "correr"
          },
          {
            "word": "Sing",
            "icon": "🎤",
            "meaning": "cantar"
          },
          {
            "word": "Dance",
            "icon": "💃",
            "meaning": "bailar"
          }
        ],
        "skill": "vocabulary",
        "id": "w3q1"
      },
      {
        "type": "choice",
        "prompt": "He ___ football.",
        "icon": "⚽",
        "answer": "plays",
        "options": [
          "plays",
          "play",
          "playing"
        ],
        "feedback": {
          "play": "Con he la acción cambia: aquí necesitamos “plays”. Recuerda la -s al final. He plays football.",
          "playing": "“playing” es una forma con -ing. Para esta rutina usamos “plays”. He plays football."
        },
        "skill": "agreement",
        "id": "w3q2"
      },
      {
        "type": "choice",
        "prompt": "She ___ apples.",
        "icon": "🍎",
        "answer": "likes",
        "options": [
          "likes",
          "like",
          "liking"
        ],
        "feedback": {
          "like": "Con she la acción cambia: aquí necesitamos “likes”. Recuerda la -s al final. She likes apples.",
          "liking": "“liking” es una forma con -ing. Para esta rutina usamos “likes”. She likes apples."
        },
        "skill": "agreement",
        "id": "w3q3"
      },
      {
        "type": "choice",
        "prompt": "He ___ books.",
        "icon": "📖",
        "answer": "reads",
        "options": [
          "reads",
          "read",
          "reading"
        ],
        "feedback": {
          "read": "Con he la acción cambia: aquí necesitamos “reads”. Recuerda la -s al final. He reads books.",
          "reading": "“reading” es una forma con -ing. Para esta rutina usamos “reads”. He reads books."
        },
        "skill": "agreement",
        "id": "w3q4"
      },
      {
        "type": "complete",
        "prompt": "She ___ water.",
        "icon": "🥤",
        "answer": "drinks",
        "options": [
          "drinks",
          "drink",
          "drinking"
        ],
        "feedback": {
          "drink": "Con she la acción cambia: aquí necesitamos “drinks”. Recuerda la -s al final. She drinks water.",
          "drinking": "“drinking” es una forma con -ing. Para esta rutina usamos “drinks”. She drinks water."
        },
        "skill": "agreement",
        "id": "w3q5"
      },
      {
        "type": "complete",
        "prompt": "She ___ at home.",
        "icon": "💃",
        "answer": "dances",
        "options": [
          "dances",
          "dance",
          "dancing"
        ],
        "feedback": {
          "dance": "Con she la acción cambia: aquí necesitamos “dances”. Recuerda la -s al final. She dances at home.",
          "dancing": "“dancing” es una forma con -ing. Para esta rutina usamos “dances”. She dances at home."
        },
        "skill": "agreement",
        "id": "w3q6"
      },
      {
        "type": "complete",
        "prompt": "He ___ to school.",
        "icon": "🏫",
        "answer": "goes",
        "options": [
          "goes",
          "go",
          "going"
        ],
        "feedback": {
          "go": "Con he la acción cambia: aquí necesitamos “goes”. Go cambia a goes. He goes to school.",
          "going": "“going” es una forma con -ing. Para esta rutina usamos “goes”. He goes to school."
        },
        "skill": "agreement",
        "id": "w3q7"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🦊",
        "answer": "She sings songs.",
        "words": [
          "She",
          "sings",
          "songs"
        ],
        "skill": "order",
        "id": "w3q8"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🦊",
        "answer": "He eats apples.",
        "words": [
          "He",
          "eats",
          "apples"
        ],
        "skill": "order",
        "id": "w3q9"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🦊",
        "answer": "She plays games.",
        "words": [
          "She",
          "plays",
          "games"
        ],
        "skill": "order",
        "id": "w3q10"
      },
      {
        "type": "reading",
        "prompt": "What does Mia like?",
        "icon": "🦊",
        "passage": "This is Mia. She likes apples. She drinks water. She reads books. She plays games.",
        "answer": "🍎 Apples",
        "options": [
          "🍎 Apples",
          "🍌 Bananas",
          "🍕 Pizza"
        ],
        "feedback": {
          "🍌 Bananas": "“🍌 Bananas” no coincide con la información de esta pregunta. El texto dice: “She likes apples.”. Esa frase nos lleva a “🍎 Apples”.",
          "🍕 Pizza": "“🍕 Pizza” no coincide con la información de esta pregunta. El texto dice: “She likes apples.”. Esa frase nos lleva a “🍎 Apples”."
        },
        "skill": "reading",
        "id": "w3q11"
      },
      {
        "type": "reading",
        "prompt": "What does Mia drink?",
        "icon": "🦊",
        "passage": "This is Mia. She likes apples. She drinks water. She reads books. She plays games.",
        "answer": "🥤 Water",
        "options": [
          "🥤 Water",
          "🥛 Milk",
          "🧃 Juice"
        ],
        "feedback": {
          "🥛 Milk": "“🥛 Milk” no coincide con la información de esta pregunta. El texto dice: “She drinks water.”. Esa frase nos lleva a “🥤 Water”.",
          "🧃 Juice": "“🧃 Juice” no coincide con la información de esta pregunta. El texto dice: “She drinks water.”. Esa frase nos lleva a “🥤 Water”."
        },
        "skill": "reading",
        "id": "w3q12"
      },
      {
        "type": "reading",
        "prompt": "What does Mia read?",
        "icon": "🦊",
        "passage": "This is Mia. She likes apples. She drinks water. She reads books. She plays games.",
        "answer": "📖 Books",
        "options": [
          "📖 Books",
          "⚽ Football",
          "🍎 Apples"
        ],
        "feedback": {
          "⚽ Football": "“⚽ Football” no coincide con la información de esta pregunta. El texto dice: “She reads books.”. Esa frase nos lleva a “📖 Books”.",
          "🍎 Apples": "“🍎 Apples” no coincide con la información de esta pregunta. El texto dice: “She reads books.”. Esa frase nos lleva a “📖 Books”."
        },
        "skill": "reading",
        "id": "w3q13"
      }
    ]
  },
  {
    "name": "My Daily Routine",
    "icon": "🌅",
    "goal": "Describir una rutina corta con I.",
    "example": "I brush my teeth.",
    "es": "Una rutina cuenta lo que hacemos cada día. I wake up = Me despierto. I brush my teeth = Me cepillo los dientes.",
    "demo": [
      "I eat breakfast.",
      "I go to school."
    ],
    "story": "I am Tom. I wake up in the morning. I brush my teeth. I eat breakfast. I go to school.",
    "questions": [
      {
        "type": "match",
        "prompt": "Match the action.",
        "icon": "🧩",
        "pairs": [
          {
            "word": "Eat",
            "icon": "🍎",
            "meaning": "comer"
          },
          {
            "word": "Go to school",
            "icon": "🏫",
            "meaning": "ir al colegio"
          },
          {
            "word": "Sleep",
            "icon": "😴",
            "meaning": "dormir"
          }
        ],
        "skill": "vocabulary",
        "id": "w4q1"
      },
      {
        "type": "choice",
        "prompt": "I ___ in the morning.",
        "icon": "🌅",
        "answer": "wake up",
        "options": [
          "wake up",
          "go to bed",
          "eat pizza"
        ],
        "feedback": {
          "go to bed": "“go to bed” no expresa la acción de esta imagen 🌅. Aquí necesitamos “wake up”. I wake up in the morning.",
          "eat pizza": "“eat pizza” no expresa la acción de esta imagen 🌅. Aquí necesitamos “wake up”. I wake up in the morning."
        },
        "skill": "vocabulary",
        "id": "w4q2"
      },
      {
        "type": "choice",
        "prompt": "I ___ my teeth.",
        "icon": "🪥",
        "answer": "brush",
        "options": [
          "brush",
          "drink",
          "read"
        ],
        "feedback": {
          "drink": "“drink” no expresa la acción de esta imagen 🪥. Aquí necesitamos “brush”. I brush my teeth.",
          "read": "“read” no expresa la acción de esta imagen 🪥. Aquí necesitamos “brush”. I brush my teeth."
        },
        "skill": "vocabulary",
        "id": "w4q3"
      },
      {
        "type": "choice",
        "prompt": "I ___ breakfast.",
        "icon": "🍳",
        "answer": "eat",
        "options": [
          "eat",
          "sleep",
          "walk"
        ],
        "feedback": {
          "sleep": "“sleep” no expresa la acción de esta imagen 🍳. Aquí necesitamos “eat”. I eat breakfast.",
          "walk": "“walk” no expresa la acción de esta imagen 🍳. Aquí necesitamos “eat”. I eat breakfast."
        },
        "skill": "vocabulary",
        "id": "w4q4"
      },
      {
        "type": "complete",
        "prompt": "I ___ to school.",
        "icon": "🏫",
        "answer": "go",
        "options": [
          "go",
          "read",
          "sing"
        ],
        "feedback": {
          "read": "“read” no expresa la acción de esta imagen 🏫. Aquí necesitamos “go”. I go to school.",
          "sing": "“sing” no expresa la acción de esta imagen 🏫. Aquí necesitamos “go”. I go to school."
        },
        "skill": "vocabulary",
        "id": "w4q5"
      },
      {
        "type": "complete",
        "prompt": "I ___ at night.",
        "icon": "🛏️",
        "answer": "go to bed",
        "options": [
          "go to bed",
          "go to school",
          "eat breakfast"
        ],
        "feedback": {
          "go to school": "“go to school” no expresa la acción de esta imagen 🛏️. Aquí necesitamos “go to bed”. I go to bed at night.",
          "eat breakfast": "“eat breakfast” no expresa la acción de esta imagen 🛏️. Aquí necesitamos “go to bed”. I go to bed at night."
        },
        "skill": "vocabulary",
        "id": "w4q6"
      },
      {
        "type": "complete",
        "prompt": "I ___ my hands.",
        "icon": "🧼",
        "answer": "wash",
        "options": [
          "wash",
          "read",
          "drink"
        ],
        "feedback": {
          "read": "“read” no expresa la acción de esta imagen 🧼. Aquí necesitamos “wash”. I wash my hands.",
          "drink": "“drink” no expresa la acción de esta imagen 🧼. Aquí necesitamos “wash”. I wash my hands."
        },
        "skill": "vocabulary",
        "id": "w4q7"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌅",
        "answer": "I wake up.",
        "words": [
          "I",
          "wake",
          "up"
        ],
        "skill": "order",
        "id": "w4q8"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌅",
        "answer": "I eat breakfast.",
        "words": [
          "I",
          "eat",
          "breakfast"
        ],
        "skill": "order",
        "id": "w4q9"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🌅",
        "answer": "I go to bed.",
        "words": [
          "I",
          "go",
          "to",
          "bed"
        ],
        "skill": "order",
        "id": "w4q10"
      },
      {
        "type": "reading",
        "prompt": "When does Tom wake up?",
        "icon": "🌅",
        "passage": "I am Tom. I wake up in the morning. I brush my teeth. I eat breakfast. I go to school.",
        "answer": "🌅 In the morning",
        "options": [
          "🌅 In the morning",
          "🌙 At night",
          "🌆 In the evening"
        ],
        "feedback": {
          "🌙 At night": "“🌙 At night” no coincide con la información de esta pregunta. El texto dice: “I wake up in the morning.”. Esa frase nos lleva a “🌅 In the morning”.",
          "🌆 In the evening": "“🌆 In the evening” no coincide con la información de esta pregunta. El texto dice: “I wake up in the morning.”. Esa frase nos lleva a “🌅 In the morning”."
        },
        "skill": "reading",
        "id": "w4q11"
      },
      {
        "type": "reading",
        "prompt": "What does Tom brush?",
        "icon": "🌅",
        "passage": "I am Tom. I wake up in the morning. I brush my teeth. I eat breakfast. I go to school.",
        "answer": "🪥 His teeth",
        "options": [
          "🪥 His teeth",
          "📖 His books",
          "⚽ His football"
        ],
        "feedback": {
          "📖 His books": "“📖 His books” no coincide con la información de esta pregunta. El texto dice: “I brush my teeth.”. Esa frase nos lleva a “🪥 His teeth”.",
          "⚽ His football": "“⚽ His football” no coincide con la información de esta pregunta. El texto dice: “I brush my teeth.”. Esa frase nos lleva a “🪥 His teeth”."
        },
        "skill": "reading",
        "id": "w4q12"
      },
      {
        "type": "reading",
        "prompt": "Where does Tom go?",
        "icon": "🌅",
        "passage": "I am Tom. I wake up in the morning. I brush my teeth. I eat breakfast. I go to school.",
        "answer": "🏫 To school",
        "options": [
          "🏫 To school",
          "🏖️ To the beach",
          "🌳 To the park"
        ],
        "feedback": {
          "🏖️ To the beach": "“🏖️ To the beach” no coincide con la información de esta pregunta. El texto dice: “I go to school.”. Esa frase nos lleva a “🏫 To school”.",
          "🌳 To the park": "“🌳 To the park” no coincide con la información de esta pregunta. El texto dice: “I go to school.”. Esa frase nos lleva a “🏫 To school”."
        },
        "skill": "reading",
        "id": "w4q13"
      }
    ]
  },
  {
    "name": "Present Simple Challenge",
    "icon": "🏰",
    "goal": "Integrar acciones, pronombres, rutinas y lectura.",
    "example": "They play. She plays.",
    "es": "¡Une lo aprendido! I, you, we, they: play. He, she: plays. Piensa quién hace la acción y mira la imagen.",
    "demo": [
      "They read books.",
      "She reads books."
    ],
    "story": "This is Leo. He likes bananas. He plays football. We read books. They sing songs.",
    "questions": [
      {
        "type": "match",
        "prompt": "Match the action.",
        "icon": "🧩",
        "pairs": [
          {
            "word": "Play",
            "icon": "⚽",
            "meaning": "jugar"
          },
          {
            "word": "Read",
            "icon": "📖",
            "meaning": "leer"
          },
          {
            "word": "Go to school",
            "icon": "🏫",
            "meaning": "ir al colegio"
          }
        ],
        "skill": "vocabulary",
        "id": "w5q1"
      },
      {
        "type": "choice",
        "prompt": "They ___ football.",
        "icon": "⚽",
        "answer": "play",
        "options": [
          "play",
          "plays",
          "playing"
        ],
        "feedback": {
          "plays": "Con they usamos “play”, sin agregar -s ni -ing. They play football.",
          "playing": "“playing” es una forma con -ing. Para esta rutina usamos “play”. They play football."
        },
        "skill": "agreement",
        "id": "w5q2"
      },
      {
        "type": "choice",
        "prompt": "She ___ milk.",
        "icon": "🥛",
        "answer": "drinks",
        "options": [
          "drinks",
          "drink",
          "drinking"
        ],
        "feedback": {
          "drink": "Con she la acción cambia: aquí necesitamos “drinks”. Recuerda la -s al final. She drinks milk.",
          "drinking": "“drinking” es una forma con -ing. Para esta rutina usamos “drinks”. She drinks milk."
        },
        "skill": "agreement",
        "id": "w5q3"
      },
      {
        "type": "choice",
        "prompt": "I ___ in the morning.",
        "icon": "🌅",
        "answer": "wake up",
        "options": [
          "wake up",
          "wakes up",
          "waking up"
        ],
        "feedback": {
          "wakes up": "Con i usamos “wake up”, sin agregar -s ni -ing. I wake up in the morning.",
          "waking up": "“waking up” es una forma con -ing. Para esta rutina usamos “wake up”. I wake up in the morning."
        },
        "skill": "agreement",
        "id": "w5q4"
      },
      {
        "type": "complete",
        "prompt": "He ___ books.",
        "icon": "📖",
        "answer": "reads",
        "options": [
          "reads",
          "read",
          "reading"
        ],
        "feedback": {
          "read": "Con he la acción cambia: aquí necesitamos “reads”. Recuerda la -s al final. He reads books.",
          "reading": "“reading” es una forma con -ing. Para esta rutina usamos “reads”. He reads books."
        },
        "skill": "agreement",
        "id": "w5q5"
      },
      {
        "type": "complete",
        "prompt": "We ___ songs.",
        "icon": "🎤",
        "answer": "sing",
        "options": [
          "sing",
          "sings",
          "singing"
        ],
        "feedback": {
          "sings": "Con we usamos “sing”, sin agregar -s ni -ing. We sing songs.",
          "singing": "“singing” es una forma con -ing. Para esta rutina usamos “sing”. We sing songs."
        },
        "skill": "agreement",
        "id": "w5q6"
      },
      {
        "type": "complete",
        "prompt": "She ___ apples.",
        "icon": "🍎",
        "answer": "eats",
        "options": [
          "eats",
          "eat",
          "eating"
        ],
        "feedback": {
          "eat": "Con she la acción cambia: aquí necesitamos “eats”. Recuerda la -s al final. She eats apples.",
          "eating": "“eating” es una forma con -ing. Para esta rutina usamos “eats”. She eats apples."
        },
        "skill": "agreement",
        "id": "w5q7"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏰",
        "answer": "He plays football.",
        "words": [
          "He",
          "plays",
          "football"
        ],
        "skill": "order",
        "id": "w5q8"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏰",
        "answer": "We drink water.",
        "words": [
          "We",
          "drink",
          "water"
        ],
        "skill": "order",
        "id": "w5q9"
      },
      {
        "type": "builder",
        "prompt": "Build the sentence.",
        "icon": "🏰",
        "answer": "She likes bananas.",
        "words": [
          "She",
          "likes",
          "bananas"
        ],
        "skill": "order",
        "id": "w5q10"
      },
      {
        "type": "reading",
        "prompt": "What does Leo like?",
        "icon": "🏰",
        "passage": "This is Leo. He likes bananas. He plays football. We read books. They sing songs.",
        "answer": "🍌 Bananas",
        "options": [
          "🍌 Bananas",
          "🍎 Apples",
          "🍕 Pizza"
        ],
        "feedback": {
          "🍎 Apples": "“🍎 Apples” no coincide con la información de esta pregunta. El texto dice: “He likes bananas.”. Esa frase nos lleva a “🍌 Bananas”.",
          "🍕 Pizza": "“🍕 Pizza” no coincide con la información de esta pregunta. El texto dice: “He likes bananas.”. Esa frase nos lleva a “🍌 Bananas”."
        },
        "skill": "reading",
        "id": "w5q11"
      },
      {
        "type": "reading",
        "prompt": "Who reads books?",
        "icon": "🏰",
        "passage": "This is Leo. He likes bananas. He plays football. We read books. They sing songs.",
        "answer": "👥 We",
        "options": [
          "👥 We",
          "👦 Leo",
          "👥 They"
        ],
        "feedback": {
          "👦 Leo": "“👦 Leo” no coincide con la información de esta pregunta. El texto dice: “We read books.”. Esa frase nos lleva a “👥 We”.",
          "👥 They": "“👥 They” no coincide con la información de esta pregunta. El texto dice: “We read books.”. Esa frase nos lleva a “👥 We”."
        },
        "skill": "reading",
        "id": "w5q12"
      },
      {
        "type": "reading",
        "prompt": "What do they do?",
        "icon": "🏰",
        "passage": "This is Leo. He likes bananas. He plays football. We read books. They sing songs.",
        "answer": "🎤 Sing songs",
        "options": [
          "🎤 Sing songs",
          "😴 Sleep",
          "🥤 Drink water"
        ],
        "feedback": {
          "😴 Sleep": "“😴 Sleep” no coincide con la información de esta pregunta. El texto dice: “They sing songs.”. Esa frase nos lleva a “🎤 Sing songs”.",
          "🥤 Drink water": "“🥤 Drink water” no coincide con la información de esta pregunta. El texto dice: “They sing songs.”. Esa frase nos lleva a “🎤 Sing songs”."
        },
        "skill": "reading",
        "id": "w5q13"
      }
    ]
  }
];

const KEY='presentSimpleAdventure.v1';
const fresh=()=>({version:1,sound:true,ledger:{},worlds:{},sessions:{}});
let state=fresh(),storageOK=true;
try{const raw=localStorage.getItem(KEY);if(raw){const s=JSON.parse(raw);if(s.version===1&&s.ledger&&s.worlds&&s.sessions)state={...fresh(),...s};}}catch(e){storageOK=false;}
const app=document.getElementById('app');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
let world=0,session=null,current=null,built=[],matchSelected=null,matched=[],locked=false,audioContext;
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(e){storageOK=false;}document.getElementById('storage').textContent=storageOK?'El progreso se guarda solo en este navegador y dispositivo.':'No se puede guardar en este navegador. El progreso durará solo esta sesión.';}
function points(){return Object.values(state.ledger).reduce((s,q)=>s+(q.points||0),0);}
function unlocked(i){return i===0||!!state.worlds[i-1];}
function btn(label,fn,cls=''){const b=document.createElement('button');b.textContent=label;b.className=cls;b.onclick=fn;return b;}
function view(html){if('speechSynthesis'in window)window.speechSynthesis.cancel();app.innerHTML=html;app.focus();}
function speak(text){if(!('speechSynthesis'in window)){notice('Tu navegador no ofrece pronunciación. Puedes seguir leyendo y jugando.');return;}const u=new SpeechSynthesisUtterance(text);u.lang='en-US';u.rate=.78;const voice=window.speechSynthesis.getVoices().find(v=>/^en[-_]/i.test(v.lang));if(voice)u.voice=voice;window.speechSynthesis.cancel();window.speechSynthesis.speak(u);}
function notice(text){let n=document.getElementById('notice');if(!n){n=document.createElement('p');n.id='notice';n.setAttribute('role','status');app.append(n);}n.textContent=text;}
function tone(good){if(!state.sound)return;try{audioContext=audioContext||new(window.AudioContext||window.webkitAudioContext)();audioContext.resume();const o=audioContext.createOscillator(),g=audioContext.createGain();o.connect(g);g.connect(audioContext.destination);o.frequency.value=good?660:240;g.gain.setValueAtTime(.06,audioContext.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.2);o.start();o.stop(audioContext.currentTime+.2);}catch(e){/* El juego sigue sin audio. */}}
function setMood(mood,text){const c=app.querySelector('.coach');if(c){c.className='coach '+mood;c.lastElementChild.textContent=text;}}
function coach(text,face='🦊'){return `<aside class="coach"><span class="pip" aria-label="Pip">${face}</span><span>${text}</span></aside>`;}
function help(text){const d=document.createElement('details');d.className='help';const s=document.createElement('summary');s.textContent='🇨🇴 Ayuda en español';d.append(s,document.createTextNode(text));return d;}
function welcome(){view(`<section class="hero"><div><div class="eyebrow">A little English. A big adventure.</div><h1>Small steps.<br>Big discoveries.</h1><p>Explore with Pip! Play, listen and learn about the things you do every day.</p><p>Una aventura de inglés para aprender a tu ritmo. 🌱</p><div id="start"></div><p class="tiny">5 worlds · 65 activities · Ages 6–7</p></div><div class="art"><span class="floating f1">📖</span><span class="pip" aria-label="Pip, your fox explorer">🦊</span><span class="floating f2">⭐</span><span class="floating f3">🍎</span></div></section>`);document.getElementById('start').append(btn('Let’s play! →',map,'primary'));}
function map(){view(`<div class="eyebrow">Your adventure map</div><h1>Let’s explore!</h1>${coach('One little mission at a time. ¡Vamos juntos!')}<div class="stats"><span>🪙 ${points()} points</span><span>🏅 ${Object.keys(state.worlds).length} / 5 badges</span><span>⭐ ${Object.values(state.worlds).reduce((n,w)=>n+w.stars,0)} / 15</span></div><progress aria-label="Completed worlds" max="5" value="${Object.keys(state.worlds).length}"></progress><section class="worlds" id="worlds"></section>`);WORLDS.forEach((w,i)=>{const d=document.createElement('article'),done=state.worlds[i];d.className='world'+(unlocked(i)?'':' locked');d.innerHTML=`<div class="eyebrow">World 0${i+1}</div><div class="scene">${w.icon}</div><h2>${esc(w.name)}</h2><p>${esc(w.goal)}</p><p>${done?'⭐'.repeat(done.stars)+' · Complete!':'${w.questions.length} activities · 5 ways to play'}</p>`;const b=btn(unlocked(i)?(state.sessions[i]?'Continue →':done?'Play again →':'Explore →'):'🔒 Complete world '+i,()=>lesson(i),'primary');b.disabled=!unlocked(i);d.append(b);document.getElementById('worlds').append(d);});}
function lesson(i){if(!unlocked(i))return;world=i;const w=WORLDS[i];view(`<div class="eyebrow">World ${i+1} · Learn with Pip</div><h2>${esc(w.name)}</h2><div class="lesson"><div class="illustration">${w.icon}<div class="sentence" id="example">${esc(w.example)}</div></div><div class="card"><h2>Look. Listen. Try!</h2><div id="lesson-buttons" class="row"></div><div id="lesson-help"></div><p>Tap to change the example.</p><div id="demo"></div><p class="tiny">Worked example · Ejemplo resuelto</p><p class="sentence">${esc(w.questions[1].prompt.replace('___',w.questions[1].answer))} ✅</p><p>${esc(w.es)}</p></div></div><div class="card"><h2>Action explorer</h2><div class="row" id="vocab"></div></div><div id="begin"></div>`);document.getElementById('lesson-buttons').append(btn('🔈 Listen',()=>speak(document.getElementById('example').textContent)));document.getElementById('lesson-help').append(help(w.es));let di=0;document.getElementById('demo').append(btn('✨ Change example',()=>{di=1-di;document.getElementById('example').textContent=w.demo[di];}));ACTIONS.forEach(([word,icon,meaning])=>document.getElementById('vocab').append(btn(`${icon} ${word}`,()=>{document.getElementById('example').textContent=word;notice(`${word} = ${meaning}`);speak(word);})));document.getElementById('begin').append(btn(state.sessions[i]?'Continue mission →':'Start mission →',()=>start(i),'primary'));}
function start(i){if(!unlocked(i))return;world=i;session=state.sessions[i]||{index:0,answers:[],error:false,errors:{}};state.sessions[i]=session;save();if(session.index>=WORLDS[i].questions.length){finish();return;}renderQuestion();}
const instructions={match:'Tap a word, then its picture.',choice:'Choose the correct word.',complete:'Complete the sentence.',builder:'Tap the words in order.',reading:'Read, then choose.'};
const spanish={match:'Toca una palabra y luego su imagen. Forma las tres parejas.',choice:'Mira quién hace la acción. Toca la palabra que completa la oración.',complete:'Completa la oración tocando una palabra del banco.',builder:'Toca primero quién hace la acción y luego las demás palabras. Puedes deshacer.',reading:'Lee el texto o escúchalo. Busca la frase que responde la pregunta.'};
function renderQuestion(){current=WORLDS[world].questions[session.index];locked=false;built=[];matched=[];matchSelected=null;const q=current;view(`<div class="eyebrow">${esc(WORLDS[world].name)} · Mission ${session.index+1} / ${WORLDS[world].questions.length}</div><div class="stats"><span>🪙 ${points()}</span><span>${esc(instructions[q.type])}</span><span>🌱 Keep growing!</span></div><progress max="${WORLDS[world].questions.length}" value="${session.index}" aria-label="Mission progress"></progress>${coach('Let’s try together!')}<section class="card"><div class="illustration">${q.icon}</div><div id="reading"></div><h2 id="prompt">${esc(q.prompt)}</h2><div class="row" id="audio"></div><div id="help"></div><div id="activity"></div><div id="feedback" role="status" aria-live="polite"></div></section>`);document.getElementById('audio').append(btn('🔈 Listen',()=>speak((q.passage?q.passage+' ':'')+(q.type==='builder'?'Build the sentence.':q.type==='match'?instructions.match:q.prompt.replace('___','blank')))),btn('🔈 Instructions',()=>speak(instructions[q.type])));document.getElementById('help').append(help(spanish[q.type]));if(q.passage)document.getElementById('reading').innerHTML=`<p class="reading">${esc(q.passage)}</p>`;
const a=document.getElementById('activity');if(q.type==='match'){renderMatch(a);return;}if(q.type==='builder'){renderBuilder(a);return;}const opts=document.createElement('div');opts.className='options';shuffle(q.options).forEach(o=>opts.append(btn(o,()=>answer(o,opts))));a.append(opts);}
function markError(skill){setMood('thinking','Let’s try together! Mira la pista de Pip.');session.error=true;session.errors[skill]=(session.errors[skill]||0)+1;const record=state.ledger[current.id]||{};record.hadError=true;state.ledger[current.id]=record;save();tone(false);}
function wrong(text,skill,onRetry){markError(skill);locked=true;const f=document.getElementById('feedback');f.className='feedback';f.replaceChildren();const p=document.createElement('p');p.textContent='🦊 Almost! Elegiste '+text;f.append(p,btn('Try again! ↻',()=>{locked=false;f.replaceChildren();f.className='';if(onRetry)onRetry();}));}
function answer(value,opts){if(locked)return;if(value===current.answer){correct();opts.querySelectorAll('button').forEach(b=>{b.disabled=true;if(b.textContent===value)b.classList.add('matched');});}else{wrong(`“${value}”. ${current.feedback[value]}`,current.skill);}}
function renderMatch(a){a.innerHTML='<div class="match"><div id="words"></div><div id="pictures"></div></div>';const q=current;shuffle(q.pairs).forEach(p=>document.getElementById('words').append(btn(p.word,()=>{if(locked||matched.includes(p.word))return;matchSelected=p;document.querySelectorAll('#words button').forEach(b=>b.classList.toggle('selected',b.textContent===p.word));})));shuffle(q.pairs).forEach(p=>{const b=btn(p.icon,()=>{if(locked||matched.includes(p.word))return;if(!matchSelected){notice('Primero toca una palabra.');return;}const s=matchSelected;if(s.word===p.word){matched.push(p.word);b.disabled=true;b.classList.add('matched');document.querySelectorAll('#words button').forEach(w=>{if(w.textContent===p.word){w.disabled=true;w.className='matched';w.textContent+=' ✓';}});matchSelected=null;tone(true);if(matched.length===q.pairs.length)correct();}else{wrong(`“${s.word}” con ${p.icon}. ${s.word} significa ${s.meaning}: busca ${s.icon}. Esta imagen representa ${p.word} (${p.meaning}).`,'vocabulary',()=>{matchSelected=null;document.querySelectorAll('#words button').forEach(w=>w.classList.remove('selected'));});}});b.setAttribute('aria-label',p.icon+' · '+p.meaning);document.getElementById('pictures').append(b);});}
function renderBuilder(a){a.innerHTML='<div class="tray" id="tray" aria-label="Your sentence" aria-live="polite"></div><div class="options" id="bank"></div><div class="row" id="builder-controls"></div>';const words=shuffle(current.words.map((word,id)=>({word,id})));for(const item of words){const b=btn(item.word,()=>{if(locked)return;built.push({item,button:b});b.disabled=true;update();});document.getElementById('bank').append(b);}function update(){document.getElementById('tray').textContent=built.map(x=>x.item.word).join(' ')+(built.length===current.words.length?'.':'');}document.getElementById('builder-controls').append(btn('↶ Undo',()=>{if(locked)return;const last=built.pop();if(last)last.button.disabled=false;update();}),btn('Check ✓',()=>{if(locked)return;const s=built.map(x=>x.item.word).join(' ')+'.';if(s===current.answer)correct();else{const n=built.findIndex((x,i)=>x.item.word!==current.words[i]);const clue=built.length<current.words.length?'Faltan palabras. Usa todas las tarjetas.':`En la posición ${n+1} pusiste “${built[n].item.word}”; necesitamos “${current.words[n]}”.`;wrong(`“${s}”. ${clue} Primero quién hace la acción, luego la acción y al final el complemento. Modelo: ${current.answer}`,'order',()=>{built.forEach(x=>x.button.disabled=false);built=[];update();});}},'primary'));}
function correct(){if(locked)return;locked=true;setMood('happy','Great job! ¡Sigue explorando!');const old=state.ledger[current.id]||{};let gained=0;if(!old.solved){gained=old.hadError||session.error?5:10;state.ledger[current.id]={...old,solved:true,points:gained};}session.answers[session.index]={first:!session.error};save();tone(true);const f=document.getElementById('feedback');f.className='feedback good';f.innerHTML=`<strong>✅ Great job!</strong><p>${esc(current.answer||'All three pairs match!')}<br>${gained?'+'+gained+' points':'Practice complete · Los puntos de esta actividad ya están guardados.'}</p>`;f.append(btn('Next →',()=>{session.index++;session.error=false;save();if(session.index===WORLDS[world].questions.length)finish();else renderQuestion();},'primary'));}
function starsFor(p){return p>=90?3:p>=70?2:1;}
function finish(){const first=session.answers.filter(a=>a.first).length,total=WORLDS[world].questions.length,pct=first/total*100,stars=starsFor(pct);const errors={...session.errors};const previous=state.worlds[world];state.worlds[world]={stars:Math.max(stars,previous?.stars||0),best:Math.max(pct,previous?.best||0)};delete state.sessions[world];save();view(`<div class="eyebrow">Mission complete!</div><section class="card"><div class="illustration celebrate">${world===4?'🏆':'🏅'}</div><h1>You did it!</h1><p class="sentence">${'⭐'.repeat(stars)}</p><p>${first} / ${total} correct on the first try · ${Math.round(pct)}%</p><p>Completaste los ${total} desafíos. ¡Los errores también te ayudaron a aprender!</p><p>🪙 ${points()} puntos acumulados · Insignia: ${esc(WORLDS[world].name)}</p><div id="review"></div><div id="result-buttons" class="row"></div></section>`);const labels={vocabulary:'acciones y vocabulario',agreement:'la acción con I / we / they y he / she',order:'el orden de las palabras',reading:'buscar respuestas en la lectura'};const r=document.getElementById('review');if(Object.keys(errors).length){r.innerHTML='<h2>Let’s practise a little more</h2>';Object.entries(errors).forEach(([k,n])=>{const p=document.createElement('p');p.textContent=`🌱 Repasa ${labels[k]} (${n} intentos con ayuda).`;r.append(p);});}else r.textContent='🌟 ¡Reconociste las acciones y seguiste las pistas con autonomía!';document.getElementById('result-buttons').append(btn('Adventure map →',map,'primary'),btn('Practise again',()=>lesson(world)),btn('My rewards 🏅',rewards));celebrate();}
function celebrate(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.getElementById('confetti');c.replaceChildren();for(let i=0;i<25;i++){const s=document.createElement('span');s.className='flake';s.textContent=['⭐','🍃','✨'][i%3];s.style.left=Math.random()*100+'%';s.style.animationDelay=Math.random()*.5+'s';c.append(s);}setTimeout(()=>c.replaceChildren(),3000);}
function rewards(){view(`<div class="eyebrow">Your treasure collection</div><h1>Little wins. Big smiles.</h1><p>🪙 ${points()} points · Cada ejercicio entrega puntos una sola vez.</p><div class="worlds" id="badges"></div><div id="reward-back"></div>`);WORLDS.forEach((w,i)=>{const d=document.createElement('article');d.className='world';d.innerHTML=`<div class="badge">${state.worlds[i]?w.icon:'🔒'}</div><h2>${esc(w.name)}</h2><p>${state.worlds[i]?'⭐'.repeat(state.worlds[i].stars):'Complete this world to earn its badge.'}</p>`;document.getElementById('badges').append(d);});if(state.worlds[4]){const p=document.createElement('p');p.className='sentence';p.textContent='🏆 Present Simple Explorer!';app.append(p);}document.getElementById('reward-back').append(btn('Back to map',map,'primary'));}
function teacher(){view(`<div class="eyebrow">Modo docente · Pre-A1 / A1</div><h2>Un pequeño paso cada día</h2><p>65 ejercicios · 5 mundos · 5 modalidades. Trabaja un mundo en varias sesiones cortas. El audio es un apoyo opcional: todas las tareas pueden resolverse de forma visual y textual.</p><div class="help">El progreso pertenece a este navegador y dispositivo, no a una cuenta. En un equipo compartido representa al grupo o al último usuario. No se solicitan nombres. Borrar los datos del navegador elimina el progreso.</div><div class="row" id="teacher-actions"></div><div id="question-bank"></div>`);document.getElementById('teacher-actions').append(btn('⬇ Exportar resultados',exportResults),btn('↻ Reiniciar progreso',reset),btn('Volver al mapa',map));WORLDS.forEach((w,i)=>{const d=document.createElement('details');const s=document.createElement('summary');s.textContent=`${w.icon} Mundo ${i+1}: ${w.name} · ${w.questions.length} ejercicios`;d.append(s);const g=document.createElement('p');g.textContent='Objetivo: '+w.goal;d.append(g);w.questions.forEach(q=>{const div=document.createElement('div');div.className='teacher-q';const solution=q.type==='match'?q.pairs.map(p=>p.word+' → '+p.icon+' ('+p.meaning+')').join('; '):q.answer;div.innerHTML=`<strong>${q.id} · ${q.type}</strong><p>${esc(q.prompt)}</p>${q.passage?'<p>'+esc(q.passage)+'</p>':''}<p>✅ ${esc(solution)}</p>${q.options?'<p>Opciones: '+q.options.map(esc).join(' / ')+'</p>':''}`;if(q.feedback)Object.entries(q.feedback).forEach(([o,f])=>{const p=document.createElement('p');p.textContent=`Si elige ${o}: ${f}`;div.append(p);});d.append(div);});document.getElementById('question-bank').append(d);});}
function exportResults(){const data={application:'Present Simple Adventure',date:new Date().toISOString(),note:'Progreso local de este navegador; no identifica a un estudiante.',points:points(),completedWorlds:state.worlds,activities:state.ledger,inProgress:state.sessions};const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='present-simple-results.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function reset(){if(!confirm('¿Borrar todos los puntos, insignias y misiones de este navegador? Esta acción no se puede deshacer.'))return;state=fresh();session=null;save();updateSound();map();}
function updateSound(){const b=document.getElementById('sound');b.textContent=state.sound?'🔊 Sound':'🔇 Sound';b.setAttribute('aria-pressed',String(state.sound));b.setAttribute('aria-label',state.sound?'Mute game effects':'Enable game effects');}
document.getElementById('home').onclick=map;document.getElementById('rewards').onclick=rewards;document.getElementById('teacher').onclick=teacher;document.getElementById('sound').onclick=()=>{state.sound=!state.sound;updateSound();save();};
updateSound();save();welcome();
