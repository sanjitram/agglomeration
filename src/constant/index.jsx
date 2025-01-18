export const Types = [
  {
    id: 9,
    name: "Memory"
  },
  {
    id: 10,
    name: "Attention"
  },
  {
    id: 11, 
    name: "Problem Solving"
  },
  {
    id: 12,
    name: "Vocabulary"
  }
];

export const Question = [
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen", 
    question: "If all roses are flowers and some flowers are red, which of the following is definitely true?",
    correct_answer: "Some flowers are not roses.",
    incorrect_answers: ["All roses are red.", "Some roses are not red.", "No roses are red."]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen", 
    question: "In a family of six members P, Q, R, S, T, and U, there are two married couples. S is the father of T and U. R is the mother of P. Q is married to P. Who is the father of R?",
    correct_answer: "S",
    incorrect_answers: ["T", "U", "Q"]
  },
  {
    category: "Problem Solving",
    type: "multiple", 
    difficulty: "adult/teen",
    question: "If in a certain code language, 'CAT' is written as 'DBU', how would 'DOG' be written?",
    correct_answer: "EPH",
    incorrect_answers: ["EPF", "EOG", "DNF"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen",
    question: "In a class, A is taller than B but shorter than C. D is taller than E but shorter than B. E is taller than C. Who is the shortest?",
    correct_answer: "E",
    incorrect_answers: ["A", "B", "D"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "adult/teen",
    question: "If the first two statements are true, is the final statement true? All pencils are pens. Some pens are markers. Therefore, some pencils are markers.",
    correct_answer: "Cannot be determined",
    incorrect_answers: ["True", "False", "None of the above"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you have two apples and you take away one, how many apples do you have?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "0"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "What comes next in the sequence: 1, 3, 5, 7, ...?",
    correct_answer: "9",
    incorrect_answers: ["8", "6", "10"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you divide a cake into 4 equal pieces and you eat 2, how many pieces are left?",
    correct_answer: "2",
    incorrect_answers: ["3", "1", "4"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "Which number is larger: 15 or 12?",
    correct_answer: "15",
    incorrect_answers: ["12", "Both are equal", "Neither"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "toddler",
    question: "If you have 5 red balls and you buy 3 more, how many red balls do you have?",
    correct_answer: "8",
    incorrect_answers: ["7", "6", "5"]
  },

  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "If a train travels 60 miles in 1 hour, how far will it travel in 4 hours?",
    correct_answer: "240 miles",
    incorrect_answers: ["200 miles", "220 miles", "260 miles"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "In a race, you pass the person in second place. What place are you in now?",
    correct_answer: "Second place",
    incorrect_answers: ["First place", "Third place", "Fourth place"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "If you mix red and yellow, what color do you get?",
    correct_answer: "Orange",
    incorrect_answers: ["Green", "Purple", "Brown"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "A car travels 60 miles per hour. How far will it travel in 2.5 hours?",
    correct_answer: "150 miles",
    incorrect_answers: ["160 miles", "140 miles", "130 miles"]
  },
  {
    category: "Problem Solving",
    type: "multiple",
    difficulty: "old",
    question: "What is the next number in the sequence: 3, 6, 9, 12, ...?",
    correct_answer: "15",
    incorrect_answers: ["13", "14", "16"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date", "grape", "melon"],
    correct_answer: "banana",
    incorrect_answers: ["carrot", "kiwi", "orange"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date", "grape", "melon"],
    correct_answer: "date",
    incorrect_answers: ["lemon", "peach", "plum"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date", "grape", "melon"],
    correct_answer: "cherry",
    incorrect_answers: ["pear", "lime", "watermelon"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date", "grape", "melon"],
    correct_answer: "apple",
    incorrect_answers: ["papaya", "fig", "coconut"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "toddler",
    question: "Which word was present before?",
    words: ["apple", "banana", "cherry", "date", "grape", "melon"],
    correct_answer: "grape",
    incorrect_answers: ["plum", "pineapple", "apricot"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which word was present before?",
    words: ["technology", "science", "math", "history", "literature", "philosophy", "psychology", "economics"],
    correct_answer: "literature",
    incorrect_answers: ["arts", "geography", "sociology"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which word was present before?",
    words: ["technology", "science", "math", "history", "literature", "philosophy", "psychology", "economics"],
    correct_answer: "science",
    incorrect_answers: ["biology", "chemistry", "art"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which word was present before?",
    words: ["technology", "science", "math", "history", "literature", "philosophy", "psychology", "economics"],
    correct_answer: "economics",
    incorrect_answers: ["finance", "law", "engineering"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which word was present before?",
    words: ["technology", "science", "math", "history", "literature", "philosophy", "psychology", "economics"],
    correct_answer: "history",
    incorrect_answers: ["sociology", "political science", "linguistics"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which word was present before?",
    words: ["technology", "science", "math", "history", "literature", "philosophy", "psychology", "economics"],
    correct_answer: "math",
    incorrect_answers: ["algebra", "calculus", "statistics"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "Which word was present before?",
    words: ["guitar", "piano", "violin", "drums", "saxophone", "trumpet", "clarinet", "harp", "accordion", "flute"],
    correct_answer: "piano",
    incorrect_answers: ["banjo", "cello", "organ"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "Which word was present before?",
    words: ["guitar", "piano", "violin", "drums", "saxophone", "trumpet", "clarinet", "harp", "accordion", "flute"],
    correct_answer: "saxophone",
    incorrect_answers: ["bass", "trombone", "oboe"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "Which word was present before?",
    words: ["guitar", "piano", "violin", "drums", "saxophone", "trumpet", "clarinet", "harp", "accordion", "flute"],
    correct_answer: "trumpet",
    incorrect_answers: ["viola", "clarinet", "harp"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "Which word was present before?",
    words: ["guitar", "piano", "violin", "drums", "saxophone", "trumpet", "clarinet", "harp", "accordion", "flute"],
    correct_answer: "drums",
    incorrect_answers: ["marimba", "cymbals", "tambourine"]
  },
  {
    category: "Memory",
    type: "multiple",
    difficulty: "old",
    question: "Which word was present before?",
    words: ["guitar", "piano", "violin", "drums", "saxophone", "trumpet", "clarinet", "harp", "accordion", "flute"],
    correct_answer: "violin",
    incorrect_answers: ["viola", "bassoon", "oboe"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "How many rope hangers are there in the image?",
    image: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/ed9/660/53980d548cb101007423d751b0.jpg",
    correct_answer: "4",
    incorrect_answers: ["2", "1", "3"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "Which English Alphabet is in the image?",
    image: "https://www.mentalup.co/img/blog/concentration-test-4.jpg",
    correct_answer: "M",
    incorrect_answers: ["N", "S", "K"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "How many differences are there in the given image?",
    image: "https://img.jagranjosh.com/images/2023/November/3112023/spot-3-differences-in-pug-pictures.webp",
    correct_answer: "3",
    incorrect_answers: ["1", "0", "4"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "Which is the odd one out in the image?",
    image: "https://cdn1.vectorstock.com/i/1000x1000/94/65/find-odd-one-out-game-for-kids-worksheet-visual-vector-31769465.jpg",
    correct_answer: "3",
    incorrect_answers: ["1", "2", "4"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "toddler",
    question: "Solve?",
    image: "https://www.smartbrainpuzzles.com/wp-content/uploads/2020/12/projection-puzzles-fb-version.jpg",
    correct_answer: "D",
    incorrect_answers: ["A", "B", "C"]
  },

//

{
    category: "Attention",
    type: "multiple",
    difficulty: "old",
    question: "How many rope hangers are there in the image?",
    image: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/ed9/660/53980d548cb101007423d751b0.jpg",
    correct_answer: "4",
    incorrect_answers: ["2", "1", "3"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "old",
    question: "Which English Alphabet is in the image?",
    image: "https://www.mentalup.co/img/blog/concentration-test-4.jpg",
    correct_answer: "M",
    incorrect_answers: ["N", "S", "K"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "old",
    question: "How many differences are there in the given image?",
    image: "https://img.jagranjosh.com/images/2023/November/3112023/spot-3-differences-in-pug-pictures.webp",
    correct_answer: "3",
    incorrect_answers: ["1", "0", "4"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "old",
    question: "Which is the odd one out in the image?",
    image: "https://cdn1.vectorstock.com/i/1000x1000/94/65/find-odd-one-out-game-for-kids-worksheet-visual-vector-31769465.jpg",
    correct_answer: "3",
    incorrect_answers: ["1", "2", "4"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "old",
    question: "Solve?",
    image: "https://www.smartbrainpuzzles.com/wp-content/uploads/2020/12/projection-puzzles-fb-version.jpg",
    correct_answer: "D",
    incorrect_answers: ["A", "B", "C"]
  },
//

{
    category: "Attention",
    type: "multiple",
    difficulty: "adult/teen",
    question: "How many rope hangers are there in the image?",
    image: "https://wl-brightside.cf.tsp.li/resize/728x/jpg/ed9/660/53980d548cb101007423d751b0.jpg",
    correct_answer: "4",
    incorrect_answers: ["2", "1", "3"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which English Alphabet is in the image?",
    image: "https://www.mentalup.co/img/blog/concentration-test-4.jpg",
    correct_answer: "M",
    incorrect_answers: ["N", "S", "K"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "adult/teen",
    question: "How many differences are there in the given image?",
    image: "https://img.jagranjosh.com/images/2023/November/3112023/spot-3-differences-in-pug-pictures.webp",
    correct_answer: "3",
    incorrect_answers: ["1", "0", "4"]
  },
    {
    category: "Attention",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Which is the odd one out in the image?",
    image: "https://cdn1.vectorstock.com/i/1000x1000/94/65/find-odd-one-out-game-for-kids-worksheet-visual-vector-31769465.jpg",
    correct_answer: "3",
    incorrect_answers: ["1", "2", "4"]
  },
  {
    category: "Attention",
    type: "multiple",
    difficulty: "adult/teen",
    question: "Solve?",
    image: "https://i.pinimg.com/originals/39/61/b0/3961b0f15b5c9cd7a1949fd37e918c68.png",
    correct_answer: "14",
    incorrect_answers: ["12", "18", "10"]
  },
  
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "toddler",
      question: "Which is a color?",
      correct_answer: "red",
      incorrect_answers: ["banana", "dog", "car"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "toddler",
      question: "Which is an animal?",
      correct_answer: "cat",
      incorrect_answers: ["tree", "sun", "sky"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "toddler",
      question: "Which is a fruit?",
      correct_answer: "apple",
      incorrect_answers: ["carrot", "bread", "cheese"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "toddler",
      question: "Which is a vegetable?",
      correct_answer: "carrot",
      incorrect_answers: ["chicken", "cake", "pasta"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "toddler",
      question: "Which is a shape?",
      correct_answer: "circle",
      incorrect_answers: ["pyramid", "house", "tree"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "adult/teen",
      question: "Which is a synonym for 'happy'?",
      correct_answer: "joyful",
      incorrect_answers: ["sad", "angry", "tired"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "adult/teen",
      question: "Which is the opposite of 'hot'?",
      correct_answer: "cold",
      incorrect_answers: ["warm", "cool", "humid"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "adult/teen",
      question: "Which is a synonym for 'beautiful'?",
      correct_answer: "gorgeous",
      incorrect_answers: ["ugly", "strange", "plain"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "adult/teen",
      question: "Which word is related to books?",
      correct_answer: "library",
      incorrect_answers: ["kitchen", "guitar", "car"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "adult/teen",
      question: "Which is a synonym for 'quick'?",
      correct_answer: "fast",
      incorrect_answers: ["slow", "lazy", "tired"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "old",
      question: "Which is a synonym for 'courage'?",
      correct_answer: "bravery",
      incorrect_answers: ["fear", "timid", "weakness"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "old",
      question: "Which is an antonym of 'light'?",
      correct_answer: "heavy",
      incorrect_answers: ["bright", "soft", "fragile"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "old",
      question: "Which word means 'to grow stronger'?",
      correct_answer: "strengthen",
      incorrect_answers: ["weaken", "deteriorate", "collapse"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "old",
      question: "Which is a synonym for 'wise'?",
      correct_answer: "intelligent",
      incorrect_answers: ["stupid", "naive", "ignorant"]
    },
    {
      category: "Vocabulary",
      type: "multiple",
      difficulty: "old",
      question: "Which is a word for 'unexpected'?",
      correct_answer: "surprise",
      incorrect_answers: ["plan", "routine", "predictable"]
    }
  
];

export const Level = ["toddler", "old", "adult/teen"];

export const Idx = ["A", "B", "C", "D"];
