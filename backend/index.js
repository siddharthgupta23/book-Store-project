import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js";
import payementRoutes from "./route/payementRoutes.js";
import Course from "./model/course.model.js";
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3089;

const URI = process.env.MongoDBURI;
try {
  mongoose.connect(URI);
  console.log("connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/api", payementRoutes);
let users = [{ id: 1, email: "user@example.com" }];
let courses = [
  {
    id: "1",
    name: "Comics",
    title: "Batman: Year One",
    price: 0,
    category: "Free",
    image: "book_image(2).jpg",
    description:
      "Comics have a unique and captivating storytelling format that combines vivid illustrations with concise dialogue to create engaging and immersive narratives. These visual stories appeal to all age groups and cover a wide range of genres, including superhero adventures, sci-fi epics, fantasy realms, historical tales, and humorous shorts. Comics are more than just entertainment; they are a vibrant art form that reflects culture, conveys powerful messages, and often explores complex themes through accessible visual language.",
  },
  {
    id: "2",
    name: "Comics",
    title: "Superman",
    price: 0,
    category: "Free",
    image: "book_image(2).jpg",
    description:
      "Comics have a unique and captivating storytelling format that combines vivid illustrations with concise dialogue to create engaging and immersive narratives. These visual stories appeal to all age groups and cover a wide range of genres, including superhero adventures, sci-fi epics, fantasy realms, historical tales, and humorous shorts. Comics are more than just entertainment; they are a vibrant art form that reflects culture, conveys powerful messages, and often explores complex themes through accessible visual language.",
  },
  {
    id: "3",
    name: "Comics",
    title: "Spider-Man",
    price: 0,
    category: "Free",
    image: "book_image(2).jpg",
    description:
      "Spider-Man comics are a significant part of the Marvel Universe and have been hugely influential in the world of comic books. Here's a summary of the key aspects of Spider-Man comics:",
  },
  {
    id: "4",
    name: "Comics",
    title: "Superman: Red Son",
    price: 0,
    category: "Free",
    image: "book_image(2).jpg",
    description:
      "Superman: Red Son is a three-issue comic book miniseries published by DC Comics in 2003, written by Mark Millar and illustrated by Dave Johnson. The story is part of the Elseworlds imprint, which explores alternate realities and what if scenarios involving iconic DC characters. In Red Son, the central premise is that Superman's spacecraft lands not in Kansas but in the Soviet Union during the Cold War",
  },
  {
    id: "5",
    name: "Comics",
    title: "Webtoon",
    price: 0,
    category: "Free",
    image: "book_image(2).jpg",
    description:
      "A Webtoon is a digital comic format originating in South Korea, designed specifically for viewing on mobile devices, with vertical scrolling as the primary way to read the story. The format is highly popular worldwide, with platforms like LINE Webtoon, Tapas, and Lezhin providing a wide array of webcomics across genres such as romance, fantasy, action, and drama. Webtoons have gained immense popularity, especially among younger audiences, due to their easy accessibility and the fact that they cater to a wide range of tastes and interests.",
  },

  {
    id: "6",
    name: "Sports Book",
    title: "Open by Andre Agassi",
    price: 20,
    category: "Sports",
    image: "book_image(2).jpg",
    description:
      "Open is the autobiography of Andre Agassi, one of the greatest tennis players in history. Published in 2009, the book offers a candid and deeply personal look into Agassi’s life, both on and off the tennis court. The title 'Open' is a fitting reference to Agassi's decision to be completely honest and open about his struggles, triumphs, and the realities of his career. It is widely regarded as one of the most revealing sports autobiographies, offering readers an insight into the pressures and inner conflicts faced by a world-class athlete.",
  },
  {
    id: "7",
    name: "Filmy Books",
    title: "Bossypants",
    price: 40,
    category: "Entertainment",
    image: "book_image(2).jpg",
    description:
      "'Bossypants' is a memoir written by comedian, actress, and writer Tina Fey. Published in 2011, the book quickly became a bestseller and received widespread praise for its humor, wit, and candidness. Known for her work on Saturday Night Live (SNL), 30 Rock, and as the first woman to anchor Weekend Update on SNL, Fey’s Bossypants offers readers an inside look at her life, career, and the challenges and absurdities she encountered on her way to becoming one of Hollywood's most beloved figures. ",
  },
  {
    id: "8",
    name: "Comedy Books",
    title: "Yes Please",
    price: 80,
    category: "Comedy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'Yes Please' is a memoir written by comedian, actress, and writer Amy Poehler. Published in 2014, the book is a mix of personal stories, humorous anecdotes, reflections on her career, and advice on life and work. Much like Poehler’s comedic style, Yes Please is filled with wit, charm, and an abundance of self-deprecating humor, making it an engaging read for fans of her work and anyone who appreciates good comedy writing.",
  },
  {
    id: "9",
    name: "Music Books",
    title: "Life",
    price: 200,
    category: "Music",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'Life' is an autobiography written by Keith Richards, the legendary guitarist of The Rolling Stones. Published in 2010, Life provides an in-depth, candid, and often surprising look into Richards’ personal life, his career with The Rolling Stones, and his experiences with fame, music, and addiction. As one of rock and roll's most iconic figures, Richards offers readers a unique perspective on the highs and lows of a life lived in the fast lane, delivering an unfiltered account of his journey in the music industry.",
  },
  {
    id: "10",
    name: "Literature Books ",
    title: "Pride and Prejudice",
    price: 300,
    category: "Literature",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'Pride and Prejudice' is a classic novel written by Jane Austen, first published in 1813. Often regarded as one of the greatest works of English literature, it is a witty, romantic novel that explores themes of social class, marriage, and personal growth. Set in early 19th-century England, the story follows the Bennet family, particularly the five Bennet sisters, as they navigate societal expectations, romantic entanglements, and personal misunderstandings.",
  },
  {
    id: "11",
    name: "Historical Books ",
    title: "The History of the Peloponnesian War",
    price: 400,
    category: "History",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'History of the Peloponnesian War' is a monumental work of ancient Greek literature written by the historian Thucydides. It chronicles the protracted conflict between two powerful Greek city-states—the Athenian Empire and the Peloponnesian League, led by Sparta—over the course of nearly 30 years, from 431 BCE to 404 BCE. Widely considered one of the greatest works of historical writing, History of the Peloponnesian War is not only a detailed account of the events of the war itself but also a profound analysis of power, politics, human nature, and the impact of war on societies and individuals.",
  },
  {
    id: "12",
    name: "Fiction Books ",
    title: "The Great Gatsby",
    price: 500,
    category: "Fiction",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'The Great Gatsby' is a novel written by American author F. Scott Fitzgerald, first published in 1925. Widely regarded as one of the greatest works of American fiction, the novel explores themes of wealth, class, love, and the American Dream, set against the backdrop of the Jazz Age—the extravagant, hedonistic period of the 1920s in the United States. Through its complex characters and rich symbolism, The Great Gatsby critiques the ideal of the American Dream, illustrating its flaws and the moral decay of society during that time.",
  },
  {
    id: "13",
    name: "Music Books ",
    title: "The Complete Idiot's Guide to Music Composition",
    price: 200,
    category: "Music",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "The Complete Idiot's Guide to Music Competitions is a comprehensive guide designed to help musicians, regardless of their skill level, navigate and succeed in music competitions. The book covers various aspects of music contests, from understanding the basics of music competitions to preparing for and excelling in them. This guide is intended to demystify the process of entering, performing in, and potentially winning a music competition, offering advice for individuals interested in various genres and types of musical contests.",
  },
  {
    id: "14",
    name: "Computer Science Books ",
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    price: 1000,
    category: "Information Technology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pPckgN0t9nxzer43ImsNr3TODGVparaUmJTfdLvwmTREsv1EcvnL1o4&s",
    description:
      "'The Pragmatic Programmer: Your Journey to Mastery' is a widely regarded book in the field of computer science and software development, authored by Andrew Hunt and David Thomas. Originally published in 1999 and later updated in 2019 with new content and revised examples, this book has become a cornerstone for developers who want to improve their programming skills and adopt best practices for building high-quality software.",
  },
];

app.post("/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "admin@gmail.com" && password === "admin123556778") {
    return res.json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/admin/users", (req, res) => {
  res.json(users);
});

app.post("/book", async (req, res) => {
  const { name, title, price, description, image,category,id } = req.body;


  if (!name) {
    return res.status(400).json({ message: "Course name is required" });
  } else if (!title) {
    return res.status(400).json({ message: "Title is required" });
  } else if (!price) {
    return res.status(400).json({ message: "Price is required" });
  } else if (isNaN(price) || parseFloat(price) <= 0) {
    return res.status(400).json({ message: "Price must be a valid number greater than zero" });
  } else if (!description) {
    return res.status(400).json({ message: "Description is required" });
  } else if (!image) {
    return res.status(400).json({ message: "Image URL is required" });
  }
  else if (!category) {
    return res.status(400).json({ message: "category is required" });
  }
  else if(!id)
  {
    return res.status(400).json({message: " id is required"});
  }


  try {
    const newCourse = new Course({
      id,
      name,
      title,
      description,
      price: parseFloat(price),  
      image,
      category,
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error("Error adding course:", err);
    res.status(500).json({ message: "Error adding course", error: err.message });
  }
});

/*app.get('/admin/courses', (req, res) => {
   res.json(courses);
 });*/
app.get("/admin/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    console.error("Error fetching courses:", err);
    res
      .status(500)
      .json({ message: "Error fetching courses", error: err.message });
  }
});

app.delete("/admin/users/:id", (req, res) => {
  const { id } = req.params;
   users = users.filter((user) => user.id !== parseInt(id));
   res.json({ message: "User deleted" });
 });
 
app.delete("/book/:id", async(req, res) => {
    const { id } = req.params;
   courses = courses.filter((course) => course.id !== parseInt(id));
   res.json({ message: "Course deleted" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
