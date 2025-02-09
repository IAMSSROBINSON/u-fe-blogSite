const data = {
  subjects: [
    "all",
    "philosophy",
    "programming",
    "art",
    "design",
    "technology",
    "fitness",
    "nutrition",
    "physics",
  ],
  posts: [
    {
      id: generateId(),
      title: "The Nature of Reality: A Philosophical Inquiry",
      article:
        "Throughout history, philosophers have debated the true nature of reality. From Plato’s theory of forms to modern existentialism, our understanding of existence continues to evolve. This article explores key philosophical perspectives on what it means to 'exist' and how perception shapes our reality.",
      subjects: ["philosophy", "all"],
      dateStamp: "01.01.2025",
      images: [
        {
          picSrc: "/assets/images/philosophy.webp",
          imgSrc: "/assets/images/philosophy.jpg",
          altText: "Article image.",
          captionText: "Plato contemplating thought itself",
        },
      ],
    },
    {
      id: generateId(),
      title:
        "The Evolution of Modern Art: From Impressionism to Digital Expression",
      article:
        "Art has transformed dramatically over the centuries, from the classical paintings of the Renaissance to the immersive digital art of today. We explore how artists have continuously pushed boundaries to redefine the way we perceive and experience art.",
      subjects: ["art", "all"],
      dateStamp: "03.01.2025",
      images: [
        {
          picSrc: "/assets/images/art.webp",
          imgSrc: "/assets/images/art.jpg",
          altText: "Abstract painting.",
          captionText: "A journey through modern artistic movements",
        },
      ],
    },
    {
      id: generateId(),
      title:
        "Functional vs. Object-Oriented Programming: Which is Right for You?",
      article:
        "Functional programming and object-oriented programming are two of the most widely used paradigms in software development. This article breaks down their differences, advantages, and real-world applications to help developers choose the right approach for their projects.",
      subjects: ["programming", "all"],
      dateStamp: "02.01.2025",
      images: [
        {
          picSrc: "/assets/images/programming.webp",
          imgSrc: "/assets/images/programming.jpg",
          altText: "Code on a screen.",
          captionText: "Comparing programming paradigms in action",
        },
      ],
    },
    {
      id: generateId(),
      title: "Minimalism vs. Maximalism: The Battle of Design Philosophies",
      article:
        "In the world of design, minimalism and maximalism represent two opposing approaches. While one embraces simplicity and clarity, the other thrives on complexity and abundance. This article delves into their core principles and when to use each.",
      subjects: ["design", "all"],
      dateStamp: "04.01.2025",
      images: [
        {
          picSrc: "/assets/images/design.webp",
          imgSrc: "/assets/images/design.jpg",
          altText: "Minimalist and maximalist design comparison.",
          captionText: "The contrast between minimalism and maximalism in design",
        },
      ],
    },
    {
      id: generateId(),
      title:
        "The Rise of AI: How Artificial Intelligence is Reshaping Our World",
      article:
        "Artificial Intelligence is no longer a futuristic concept—it’s a reality shaping industries, from healthcare to finance. This article explores how AI is transforming society and what the future holds for human-AI collaboration.",
      subjects: ["technology", "all"],
      dateStamp: "05.01.2025",
      images: [
        {
          picSrc: "/assets/images/technology.webp",
          imgSrc: "/assets/images/technology.jpg",
          altText: "Artificial intelligence network visualization.",
          captionText: "AI technology revolutionizing industries",
        },
      ],
    },
    {
      id: generateId(),
      title: "Strength Training vs. Cardio: Which One is Right for You?",
      article:
        "When it comes to fitness, the debate between strength training and cardio is ongoing. Each has its own benefits depending on personal goals. We break down the science behind both and how to balance them for optimal health.",
      subjects: ["fitness", "all"],
      dateStamp: "06.01.2025",
      images: [
        {
          picSrc: "/assets/images/fitness.webp",
          imgSrc: "/assets/images/fitness.jpg",
          altText: "Person lifting weights.",
          captionText: "Strength training vs. cardio: A breakdown of benefits",
        },
      ],
    },
    {
      id: generateId(),
      title: "Superfoods: Are They Worth the Hype?",
      article:
        "From kale to quinoa, so-called 'superfoods' are marketed as essential for a healthy diet. But do they really live up to the claims? This article separates the facts from the marketing and provides insights into building a truly balanced diet.",
      subjects: ["nutrition", "all"],
      dateStamp: "07.01.2025",
      images: [
        {
          picSrc: "/assets/images/nutrition.webp",
          imgSrc: "/assets/images/nutrition.jpg",
          altText: "A bowl of fresh superfoods.",
          captionText: "Superfoods: Nutritional facts vs. marketing hype",
        },
      ],
    },
  ],
  currentlySelectedSubjectId: "all",
  currentlySelectedCardId: null,
  currentURL: null,
};

function generateId() {
  return Math.random().toString(32).substring(2);
}
export default data;
