import express from "express";
import cors from "cors";

const app = express();
const port = 3100;
app.use(cors());

app.get("/", (req, res) => {
  const msg =
    "Use /users, /users/:uid, /eventorganizers, /eventorganizers/:uid, /events, /events:id, /reviews, /eventreactions/:id, /reviewscomments/:reviewId";
  res.send(msg);
});
app.get("/users", (req, res) => {
  const users = [
    {
      uid: "12ejfio22ioj2ce2cescw",
      name: "marko",
      surname: "marketic",
      birthDate: "05-07-1990",
    },
    {
      uid: "1sejfiojfjeidke2cescw",
      name: "Laura",
      surname: "Loncaric",
      birthDate: "05-01-2001",
    },
    {
      uid: "1fejfio22iojfjfjeiscw",
      name: "matej",
      surname: "visnjic",
      birthDate: "07-07-1999",
    },
    {
      uid: "1fejfio22iojfjfjeiscw",
      name: "goran",
      surname: "goranic",
      birthDate: "10-01-1988",
    },
    {
      uid: "1fejfio22iojfjfjeiscw",
      name: "luka",
      surname: "peric",
      birthDate: "01-01-2003",
    },
  ];

  res.send(users);
});

app.get("/users/:uid", (req, res) => {
  const user = [
    {
      uid: "12ejfio22ioj2ce2cescw",
      name: "marko",
      surname: "marketic",
      birthDate: "05-07-1990",
    },
  ];

  res.send(user);
});

app.get("/eventorganizers", (req, res) => {
  const eventOrganizers = [
    {
      uid: "koefoekwfok333223",
      name: "mario",
      surname: "miletic",
      birthDate: "15-12-1980",
    },
    {
      uid: "1fawdajkorfkre2cescw",
      name: "Martina",
      surname: "Parti",
      birthDate: "10-10-1985",
    },
    {
      uid: "1ffejookfokefke2cescw",
      name: "Martina",
      surname: "Parti",
      birthDate: "10-10-1985",
    },
  ];

  res.send(eventOrganizers);
});
app.get("/eventorganizers/:uid", (req, res) => {
  const organizer = [
    {
      uid: "koefoekwfok333223",
      name: "mario",
      surname: "miletic",
      birthDate: "15-12-1980",
    },
  ];

  res.send(organizer);
});

app.get("/events", (req, res) => {
  const users = [
    {
      id: "koefoekwfok333223",
      eventOrganizerId: "koefoekwfok333223",
      eventName: "party in Stela",
      category: "cajke",
      description: "best party in Pula.",
      location: "Valturska 71, 52100, Pula",
      date: "15-08-2022",
      time: "21:00",
    },
    {
      id: "jfeiwjfidjwiowdkowk",
      eventOrganizerId: "1fawdajkorfkre2cescw",
      eventName: "party in fort punta christo",
      category: "techno",
      description: "best techo party in Pula.",
      location: "Štinjan bb, 52100, Pula",
      date: "1-08-2022",
      time: "23:00",
    },
    {
      id: "fjeiwofjiwjweiofj",
      eventOrganizerId: "1fawdajkorfkre2cescw",
      eventName: "party in fort punta christo vol. 2",
      category: "techno",
      description: "best techo party in Pula.",
      location: "Štinjan bb, 52100, Pula",
      date: "20-08-2022",
      time: "23:00",
    },
  ];

  res.send(users);
});
app.get("/events/:id", (req, res) => {
  const events = [
    {
      id: "jfeiwjfidjwiowdkowk",
      eventOrganizerId: "1fawdajkorfkre2cescw",
      eventName: "party in fort punta christo",
      category: "techno",
      description: "best techo party in Pula.",
      location: "Štinjan bb, 52100, Pula",
      date: "1-08-2022",
      time: "23:00",
    },
  ];

  res.send(events);
});

app.get("/reviews", (req, res) => {
  const reviews = [
    {
      id: "jfeiwjfidjwiowdkowk",
      userId: "12ejfio22ioj2ce2cescw",
      eventOrganizerId: "12ejfio22ioj2ce2cescw",
      reviewMessage: "Everything is good!",
      date: "1-05-2022",
      time: "2:00:02",
    },
    {
      id: "eiwjfwiejofoekfm",
      userId: "12ejfio22ioj2ce2cescw",
      eventOrganizerId: "12ejfio22ioj2ce2cescw",
      reviewMessage: "new event soon?",
      date: "1-05-2022",
      time: "23:33:49",
    },
    {
      id: "12e912i091d832f9i3",
      userId: "12ejfio22ioj2ce2cescw",
      eventOrganizerId: "12ejfio22ioj2ce2cescw",
      reviewMessage: "I hope for a new event soon! :)",
      date: "09-03-2022",
      time: "11:03:55",
    },
    {
      id: "jo23jf892cn28n2839cn",
      userId: "12ejfio22ioj2ce2cescw",
      eventOrganizerId: "12ejfio22ioj2ce2cescw",
      reviewMessage: "perfect organizator",
      date: "1-02-2022",
      time: "16:22:11",
    },
  ];

  res.send(reviews);
});

app.get("/eventreactions/:id", (req, res) => {
  const users = [
    {
      eventId: "eiwjfwiejofoekfm",
      likesCount: 1000,
      allLikedUsersUid: [
        { uid: "12ejfio22ioj2ce2cescw" },
        { uid: "1fejfio22iojfjfjeiscw" },
      ],
    },
  ];

  res.send(users);
});
app.get("/reviewscomments/:reviewId", (req, res) => {
  const users = [
    {
      reviewId: "jfeiwjfidjwiowdkowk",
      userId: "12ejfio22ioj2ce2cescw",
      reviewMessage: "Thank you. :D",
      date: "12-05-2022",
      time: "7:00:02",
    },
  ];

  res.send(users);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
