// ========================================
// Word Game - All Units & Lessons Data
// ========================================

const WORD_DATA = {

  // ==================== UNIT 2 ====================
  "2": {
    title: "Unit 2",
    lessons: {
      "1": {
        title: "Lesson 1 – Stationery",
        words: [
          { en: "bag", zh: "书包", emoji: "🎒", type: "noun" },
          { en: "book", zh: "书", emoji: "📖", type: "noun" },
          { en: "eraser", zh: "橡皮", emoji: "___eraser___", type: "noun" },
          { en: "glue", zh: "胶水", emoji: "___glue___", type: "noun" },
          { en: "paper", zh: "纸", emoji: "📄", type: "noun" },
          { en: "pen", zh: "钢笔", emoji: "🖊️", type: "noun" },
          { en: "pencil", zh: "铅笔", emoji: "✏️", type: "noun" },
          { en: "ruler", zh: "尺子", emoji: "📏", type: "noun" },
          { en: "scissors", zh: "剪刀", emoji: "✂️", type: "noun" },
          { en: "nut", zh: "坚果", emoji: "🥜", type: "noun" },
          { en: "bed", zh: "床", emoji: "🛏️", type: "noun" },
          { en: "bug", zh: "虫子", emoji: "🐛", type: "noun" },
          { en: "pet", zh: "宠物", emoji: "🐾", type: "noun" }
        ],
        story: {
          title: "Elsa Packs Her Bag",
          scenes: [
            { text: "Elsa picks up her <b>bag</b>. \"This is my school bag!\"", word: "bag", emoji: "🎒", audio: "bag" },
            { text: "She puts a <b>book</b> inside. \"I love reading!\"", word: "book", emoji: "📖", audio: "book" },
            { text: "Then an <b>eraser</b>. \"Mistakes are OK — I can erase them!\"", word: "eraser", emoji: "___eraser___", audio: "eraser" },
            { text: "Some <b>glue</b> too. \"Glue is sticky — be careful!\"", word: "glue", emoji: "___glue___", audio: "glue" },
            { text: "A sheet of <b>paper</b>. \"Paper for drawing and writing!\"", word: "paper", emoji: "📄", audio: "paper" },
            { text: "A blue <b>pen</b>. \"My favorite pen!\"", word: "pen", emoji: "🖊️", audio: "pen" },
            { text: "A yellow <b>pencil</b>. \"Pencils are great for sketching.\"", word: "pencil", emoji: "✏️", audio: "pencil" },
            { text: "A long <b>ruler</b>. \"I can draw straight lines!\"", word: "ruler", emoji: "📏", audio: "ruler" },
            { text: "Sharp <b>scissors</b>. \"Cut carefully with scissors!\"", word: "scissors", emoji: "✂️", audio: "scissors" },
            { text: "Elsa finds a little <b>nut</b> on the desk. \"A tasty snack!\"", word: "nut", emoji: "🥜", audio: "nut" },
            { text: "She goes to her <b>bed</b>. \"Time to rest for a moment.\"", word: "bed", emoji: "🛏️", audio: "bed" },
            { text: "Oh! A tiny <b>bug</b> is on the bed! \"Hello, little bug!\"", word: "bug", emoji: "🐛", audio: "bug" },
            { text: "Her <b>pet</b> comes to say hello. \"This is my lovely pet!\"", word: "pet", emoji: "🐾", audio: "pet" }
          ]
        },
        wordSearch: { gridSize: 7, words: ["BAG","BOOK","GLUE","PAPER","PEN","RULER","NUT","BED","BUG","PET"] },
        // Cloze passage for Stage 5 Boss
        cloze: {
          title: "Elsa's School Day",
          sentences: [
            { text: "Elsa puts her ___ in her ___.", blanks: ["book", "bag"], emoji: "👸📖🎒" },
            { text: "She writes with a ___ on the ___.", blanks: ["pencil", "paper"], emoji: "👸✏️📄" },
            { text: "She uses an ___ to fix her mistake.", blanks: ["eraser"], emoji: "👸📝✨" },
            { text: "She uses ___ to stick a picture.", blanks: ["glue"], emoji: "👸🖼️📌" },
            { text: "With ___, she cuts the paper.", blanks: ["scissors"], emoji: "👸✂️📄" },
            { text: "She draws a line with her ___.", blanks: ["ruler"], emoji: "👸📏➖" },
            { text: "She writes her name with a ___.", blanks: ["pen"], emoji: "👸🖊️✍️" },
            { text: "At home, she sees a ___ on her ___.", blanks: ["bug", "bed"], emoji: "👸🐛🛏️" },
            { text: "She eats a ___ and plays with her ___.", blanks: ["nut", "pet"], emoji: "👸🥜🐕" }
          ]
        }
      },
      "2": {
        title: "Lesson 2 – Actions",
        words: [
          { en: "draw", zh: "画画", emoji: "🎨", type: "verb" },
          { en: "write", zh: "写", emoji: "✍️", type: "verb" },
          { en: "stick", zh: "粘贴", emoji: "📌", type: "verb" },
          { en: "fold", zh: "折叠", emoji: "___fold___", type: "verb" },
          { en: "cut", zh: "剪", emoji: "✂️", type: "verb" },
          { en: "color", zh: "涂色", emoji: "🖍️", type: "verb" },
          { en: "open", zh: "打开", emoji: "📂", type: "verb" },
          { en: "close", zh: "关上", emoji: "📁", type: "verb" },
          { en: "point", zh: "指", emoji: "👉", type: "verb" },
          { en: "tidy", zh: "整理", emoji: "🧹", type: "verb" },
          { en: "put away", zh: "收好", emoji: "📦", type: "verb" },
          { en: "got", zh: "得到", emoji: "✅", type: "verb" },
          { en: "gum", zh: "口香糖", emoji: "___gum___", type: "noun" }
        ],
        story: {
          title: "Let's Make a Card!",
          scenes: [
            { text: "\"Let's make a birthday card!\" says Elsa. First, she will <b>draw</b> a picture.", word: "draw", emoji: "🎨", audio: "draw" },
            { text: "Then she will <b>write</b> a message. \"Happy Birthday, Anna!\"", word: "write", emoji: "✍️", audio: "write" },
            { text: "Now she will <b>stick</b> the paper together. \"The glue helps it stick!\"", word: "stick", emoji: "📌", audio: "stick" },
            { text: "Time to <b>fold</b> the card in half. \"Fold it nice and straight.\"", word: "fold", emoji: "___fold___", audio: "fold" },
            { text: "Elsa will <b>cut</b> the edges carefully. \"Scissors — cut, cut, cut!\"", word: "cut", emoji: "✂️", audio: "cut" },
            { text: "She will <b>color</b> the snowflake blue. \"Blue is my favorite color!\"", word: "color", emoji: "🖍️", audio: "color" },
            { text: "She will <b>open</b> the card to check. \"Open it up!\"", word: "open", emoji: "📂", audio: "open" },
            { text: "And <b>close</b> it gently. \"Close it carefully.\"", word: "close", emoji: "📁", audio: "close" },
            { text: "\"Look!\" she says. \"Let me <b>point</b> to the pretty snowflake!\"", word: "point", emoji: "👉", audio: "point" },
            { text: "After making the card, Elsa will <b>tidy</b> the desk. \"Keep it clean!\"", word: "tidy", emoji: "🧹", audio: "tidy" },
            { text: "She will <b>put away</b> all the supplies. \"Everything in its place.\"", word: "put away", emoji: "📦", audio: "put away" },
            { text: "Elsa <b>got</b> a hug from Anna! \"The best reward!\"", word: "got", emoji: "✅", audio: "got" },
            { text: "And she shares some <b>gum</b> with her sister. \"Yummy gum!\"", word: "gum", emoji: "___gum___", audio: "gum" }
          ]
        },
        wordSearch: { gridSize: 7, words: ["DRAW","WRITE","STICK","FOLD","CUT","COLOR","OPEN","CLOSE","POINT","TIDY","GOT","GUM"] },
        cloze: {
          title: "Elsa Makes a Card",
          sentences: [
            { text: "Elsa will ___ a picture and ___ a message.", blanks: ["draw", "write"], emoji: "l2s0" },
            { text: "She will ___ the paper and ___ the card.", blanks: ["stick", "fold"], emoji: "l2s1" },
            { text: "She will ___ the edges and ___ it blue.", blanks: ["cut", "color"], emoji: "l2s2" },
            { text: "She will ___ and ___ the card.", blanks: ["open", "close"], emoji: "l2s3" },
            { text: "She will ___ to the pretty snowflake.", blanks: ["point"], emoji: "l2s4" },
            { text: "She will ___ up and ___ her supplies.", blanks: ["tidy", "put away"], emoji: "l2s5" },
            { text: "She ___ a hug and shares some ___.", blanks: ["got", "gum"], emoji: "l2s6" }
          ]
        }
      },
      "3": {
        title: "Lesson 3 – Classroom",
        words: [
          { en: "chair", zh: "椅子", emoji: "🪑", type: "noun" },
          { en: "desk", zh: "书桌", emoji: "___desk___", type: "noun" },
          { en: "door", zh: "门", emoji: "🚪", type: "noun" },
          { en: "board", zh: "黑板", emoji: "🖥️", type: "noun" },
          { en: "teacher", zh: "老师", emoji: "👩‍🏫", type: "noun" },
          { en: "student", zh: "学生", emoji: "🧒", type: "noun" },
          { en: "classroom", zh: "教室", emoji: "🏫", type: "noun" },
          { en: "trash can", zh: "垃圾桶", emoji: "🗑️", type: "noun" },
          { en: "mug", zh: "杯子", emoji: "🍺", type: "noun" },
          { en: "ten", zh: "十", emoji: "🔟", type: "number" },
          { en: "bed", zh: "床", emoji: "🛏️", type: "noun" },
          { en: "ban", zh: "禁止", emoji: "🚫", type: "verb" },
          { en: "mad", zh: "生气的", emoji: "😠", type: "adj" }
        ],
        story: {
          title: "In Our Classroom",
          scenes: [
            { text: "Elsa walks into the <b>classroom</b>. \"Welcome to our class!\"", word: "classroom", emoji: "🏫", audio: "classroom" },
            { text: "She sits on her <b>chair</b>. \"This is my chair — so comfy!\"", word: "chair", emoji: "🪑", audio: "chair" },
            { text: "She puts her book on the <b>desk</b>. \"My desk is ready for learning.\"", word: "desk", emoji: "___desk___", audio: "desk" },
            { text: "The <b>door</b> opens. \"Someone is coming in!\"", word: "door", emoji: "🚪", audio: "door" },
            { text: "The <b>teacher</b> writes on the <b>board</b>. \"Look at the board!\"", word: "board", emoji: "🖥️", audio: "board" },
            { text: "\"Good morning!\" says the <b>teacher</b>. \"Let's begin our lesson.\"", word: "teacher", emoji: "👩‍🏫", audio: "teacher" },
            { text: "Every <b>student</b> listens carefully. \"We are good students!\"", word: "student", emoji: "🧒", audio: "student" },
            { text: "Oops! Elsa throws paper into the <b>trash can</b>. \"Where does trash go?\"", word: "trash can", emoji: "🗑️", audio: "trash can" },
            { text: "Elsa drinks water from her <b>mug</b>. \"Stay hydrated!\"", word: "mug", emoji: "🍺", audio: "mug" },
            { text: "The teacher says: \"Count to <b>ten</b>!\" 1, 2, 3... 10!", word: "ten", emoji: "🔟", audio: "ten" },
            { text: "At home, Elsa jumps on her <b>bed</b>. \"Bouncy bed!\"", word: "bed", emoji: "🛏️", audio: "bed" },
            { text: "A sign says: \"No running!\" Running is <b>banned</b>. \"I must walk.\"", word: "ban", emoji: "🚫", audio: "ban" },
            { text: "Sometimes Elsa feels <b>mad</b>. \"But then I take a deep breath. I'm OK!\"", word: "mad", emoji: "😠", audio: "mad" }
          ]
        },
        wordSearch: { gridSize: 7, words: ["CHAIR","DESK","DOOR","BOARD","TRASH","MUG","TEN","BED","BAN","MAD"] },
        cloze: {
          title: "In Our Classroom",
          sentences: [
            { text: "Elsa walks into the ___ and sits on her ___.", blanks: ["classroom", "chair"], emoji: "l3s0" },
            { text: "She puts her book on the ___ and looks at the ___ .", blanks: ["desk", "board"], emoji: "l3s1" },
            { text: "The ___ opens. The ___ comes in.", blanks: ["door", "teacher"], emoji: "l3s2" },
            { text: "Every ___ listens and throws trash in the ___.", blanks: ["student", "trash can"], emoji: "l3s3" },
            { text: "Elsa drinks from her ___ and counts to ___.", blanks: ["mug", "ten"], emoji: "l3s4" },
            { text: "At home, she lies on her ___ to rest.", blanks: ["bed"], emoji: "l3s5" },
            { text: "There is a ___ on running. Do not be ___!", blanks: ["ban", "mad"], emoji: "l3s6" }
          ]
        }
      },
      "review": {
        title: "Review",
        words: [],
        spell: [
          { word: "bag", hint: "b _ g", missing: ["a"], distractors: ["e","i","o","u"] },
          { word: "book", hint: "b _ _ k", missing: ["o","o"], distractors: ["a","e","i","u"] },
          { word: "pen", hint: "p _ n", missing: ["e"], distractors: ["a","i","o","u"] },
          { word: "ruler", hint: "r _ l _ r", missing: ["u","e"], distractors: ["a","i","o"] },
          { word: "eraser", hint: "e _ a s _ r", missing: ["r","e"], distractors: ["a","i","o","u"] },
          { word: "scissors", hint: "s c _ s s _ r s", missing: ["i","o"], distractors: ["a","e","u"] },
          { word: "draw", hint: "d r _ w", missing: ["a"], distractors: ["e","i","o","u"] },
          { word: "write", hint: "w r _ t _", missing: ["i","e"], distractors: ["a","o","u"] },
          { word: "fold", hint: "f _ l d", missing: ["o"], distractors: ["a","e","i","u"] },
          { word: "cut", hint: "c _ t", missing: ["u"], distractors: ["a","e","i","o"] },
          { word: "color", hint: "c _ l _ r", missing: ["o","o"], distractors: ["a","e","i","u"] },
          { word: "open", hint: "o p _ n", missing: ["e"], distractors: ["a","i","o","u"] },
          { word: "chair", hint: "c h _ _ r", missing: ["a","i"], distractors: ["e","o","u"] },
          { word: "desk", hint: "d _ s k", missing: ["e"], distractors: ["a","i","o","u"] },
          { word: "door", hint: "d _ _ r", missing: ["o","o"], distractors: ["a","e","i","u"] }
        ],
        story: { title: "Review", scenes: [] },
        wordSearch: { gridSize: 7, words: ["BAG","PEN","NUT","BED","BUG","PET","CUT","GOT","GUM","DRAW","FOLD","DOOR","MUG","TEN","BAN","MAD"] },
        cloze: {
          title: "Elsa's School Day",
          sentences: [
            { text: "Elsa packs her ___ with a ___ and a ___.", blanks: ["bag", "book", "pencil"], emoji: "rvs0" },
            { text: "At school, she sits on her ___ at her ___.", blanks: ["chair", "desk"], emoji: "rvs1" },
            { text: "The ___ writes on the ___ and says hello.", blanks: ["teacher", "board"], emoji: "rvs2" },
            { text: "Elsa will ___ a picture and ___ it blue.", blanks: ["draw", "color"], emoji: "rvs3" },
            { text: "She will ___ the paper and ___ it with scissors.", blanks: ["fold", "cut"], emoji: "rvs4" },
            { text: "She will ___ her supplies and ___ them away.", blanks: ["tidy", "put"], emoji: "rvs5" },
            { text: "At home, she sees a ___ on her ___ near her ___.", blanks: ["bug", "bed", "pet"], emoji: "rvs6" }
          ]
        }
      }
    }
  },

  // ==================== UNIT 3 ====================
  "3": {
    title: "Unit 3",
    lessons: {
      "1": {
        title: "Lesson 1 – Body Parts",
        words: [
          { en: "ears", zh: "耳朵", emoji: "👂", type: "noun" },
          { en: "eyes", zh: "眼睛", emoji: "👁️", type: "noun" },
          { en: "head", zh: "头", emoji: "🗣️", type: "noun" },
          { en: "nose", zh: "鼻子", emoji: "👃", type: "noun" },
          { en: "mouth", zh: "嘴", emoji: "👄", type: "noun" },
          { en: "neck", zh: "脖子", emoji: "🧣", type: "noun" },
          { en: "hair", zh: "头发", emoji: "💇", type: "noun" },
          { en: "long", zh: "长的", emoji: "📏", type: "adj" },
          { en: "short", zh: "短的", emoji: "📐", type: "adj" },
          { en: "big", zh: "大的", emoji: "🔵", type: "adj" },
          { en: "small", zh: "小的", emoji: "🔹", type: "adj" },
          { en: "tip", zh: "提示/尖端", emoji: "💡", type: "noun" },
          { en: "log", zh: "木头", emoji: "🪵", type: "noun" },
          { en: "hen", zh: "母鸡", emoji: "🐔", type: "noun" },
          { en: "lip", zh: "嘴唇", emoji: "💋", type: "noun" }
        ],
        story: { title: "My Body", scenes: [] },
        wordSearch: { gridSize: 8, words: ["EARS","EYES","HEAD","NOSE","MOUTH","NECK","HAIR","LONG","SHORT","BIG","SMALL","TIP","LOG","HEN","LIP"] }
      },
      "2": {
        title: "Lesson 2 – Body & Colors",
        words: [
          { en: "hand", zh: "手", emoji: "✋", type: "noun" },
          { en: "foot", zh: "脚", emoji: "🦶", type: "noun" },
          { en: "leg", zh: "腿", emoji: "🦵", type: "noun" },
          { en: "arms", zh: "手臂", emoji: "💪", type: "noun" },
          { en: "black", zh: "黑色", emoji: "⬛", type: "color" },
          { en: "blond", zh: "金色", emoji: "💛", type: "color" },
          { en: "blue", zh: "蓝色", emoji: "🔵", type: "color" },
          { en: "brown", zh: "棕色", emoji: "🟤", type: "color" },
          { en: "green", zh: "绿色", emoji: "🟢", type: "color" },
          { en: "pink", zh: "粉色", emoji: "🩷", type: "color" },
          { en: "red", zh: "红色", emoji: "🔴", type: "color" },
          { en: "you", zh: "你", emoji: "👉", type: "pronoun" },
          { en: "we", zh: "我们", emoji: "👥", type: "pronoun" },
          { en: "he", zh: "他", emoji: "👨", type: "pronoun" },
          { en: "she", zh: "她", emoji: "👩", type: "pronoun" }
        ],
        story: { title: "Colors Around Me", scenes: [] },
        wordSearch: { gridSize: 8, words: ["HAND","FOOT","LEG","ARMS","BLACK","BLOND","BLUE","BROWN","GREEN","PINK","RED","YOU","WE","HE","SHE"] }
      },
      "3": {
        title: "Lesson 3 – Numbers",
        words: [
          { en: "one", zh: "一", emoji: "1️⃣", type: "number" },
          { en: "two", zh: "二", emoji: "2️⃣", type: "number" },
          { en: "three", zh: "三", emoji: "3️⃣", type: "number" },
          { en: "four", zh: "四", emoji: "4️⃣", type: "number" },
          { en: "five", zh: "五", emoji: "5️⃣", type: "number" },
          { en: "six", zh: "六", emoji: "6️⃣", type: "number" },
          { en: "seven", zh: "七", emoji: "7️⃣", type: "number" },
          { en: "eight", zh: "八", emoji: "8️⃣", type: "number" },
          { en: "nine", zh: "九", emoji: "9️⃣", type: "number" },
          { en: "ten", zh: "十", emoji: "🔟", type: "number" },
          { en: "but", zh: "但是", emoji: "✋", type: "conj" },
          { en: "clap", zh: "拍手", emoji: "👏", type: "verb" },
          { en: "miss", zh: "想念/错过", emoji: "💭", type: "verb" },
          { en: "skip", zh: "跳跃", emoji: "🦘", type: "verb" },
          { en: "slip", zh: "滑倒", emoji: "💨", type: "verb" }
        ],
        story: { title: "Let's Count!", scenes: [] },
        wordSearch: { gridSize: 8, words: ["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","BUT","CLAP","MISS","SKIP","SLIP"] }
      }
    }
  },

  // ==================== UNITS 4-6 (placeholder structure) ====================
  "4": {
    title: "Unit 4",
    lessons: {
      "1": { title: "Lesson 1 – Clothes", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "2": { title: "Lesson 2 – Colors & More", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "3": { title: "Lesson 3 – Actions", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } }
    }
  },
  "5": {
    title: "Unit 5",
    lessons: {
      "1": { title: "Lesson 1 – Sports (-ing)", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "2": { title: "Lesson 2 – Sports", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "3": { title: "Lesson 3 – Phonics", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } }
    }
  },
  "6": {
    title: "Unit 6",
    lessons: {
      "1": { title: "Lesson 1 – Animals", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "2": { title: "Lesson 2 – Verbs", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } },
      "3": { title: "Lesson 3 – Farm", words: [], story: { title: "", scenes: [] }, wordSearch: { gridSize: 8, words: [] } }
    }
  }
};

// ========================================
// Gift Shop Items (Elsa's Wardrobe)
// ========================================
const GIFT_SHOP = {
  food: [
    { id: "f1", name: "Strawberry Cake", emoji: "🍰", cost: 3 },
    { id: "f2", name: "Chocolate", emoji: "🍫", cost: 2 },
    { id: "f3", name: "Ice Cream", emoji: "🍦", cost: 1 },
    { id: "f4", name: "Blueberry Pie", emoji: "🥧", cost: 3 },
    { id: "f5", name: "Snow Cookie", emoji: "🍪", cost: 2 }
  ],
  clothes: [
    { id: "c1", name: "Ice Blue Dress", emoji: "👗", cost: 5 },
    { id: "c2", name: "Purple Cape", emoji: "🧥", cost: 4 },
    { id: "c3", name: "Snow Boots", emoji: "👢", cost: 3 },
    { id: "c4", name: "Silver Gloves", emoji: "🧤", cost: 2 },
    { id: "c5", name: "Crystal Crown Dress", emoji: "👘", cost: 6 }
  ],
  accessories: [
    { id: "a1", name: "Crystal Crown", emoji: "👑", cost: 5 },
    { id: "a2", name: "Snowflake Necklace", emoji: "📿", cost: 4 },
    { id: "a3", name: "Ice Bracelet", emoji: "💎", cost: 3 },
    { id: "a4", name: "Star Earrings", emoji: "⭐", cost: 2 },
    { id: "a5", name: "Frozen Hairpin", emoji: "❄️", cost: 3 }
  ]
};

// ========================================
// Star rewards per stage
// ========================================
const STAGE_STARS = {
  story: 2,      // Stage 1
  listen: 3,     // Stage 2
  wordsearch: 3, // Stage 3
  match: 3,      // Stage 4
  boss: 5        // Stage 5
};
