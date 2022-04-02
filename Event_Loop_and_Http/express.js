const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // console.log('Hello');
  res.send("hello");
});

app.get("/book", (req, res) => {
  res.json([
    {
      "book1": "Harry Potter",
      "content":
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry",
    },
    {
      "book2": "Atomic Habits",
      "content":
        "An atomic habit is a regular practice or routine that is not only small and easy to do but is also the source of incredible power; a component of the system of compound growth.",
    },
    {
      "book3": "The outsiders",
      "content":
        "The novel tells the story of Ponyboy Curtis and his struggles with right and wrong in a society in which he believes that he is an outsider",
    },
    {
      "book4": "Wonder",
      "content":
        "In Wonder, R.J. Palacio's debut middle-grade novel featuring Auggie, a fifth-grade boy born with a facial deformity, the author delivered a powerful message about the importance of kindness, tolerance, and acceptance.",
    },
  ]);
});

app.listen(5050, () => {
  console.log("listening on port 5050");
});