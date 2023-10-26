import { useNavigate } from "react-router-dom";
import Quote from "../components/Quote";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";

const mockData = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra, type.fit",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln, type.fit",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe, type.fit",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu, type.fit",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg, type.fit",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle, type.fit",
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster, type.fit",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha, type.fit",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch, type.fit",
  },
  {
    text: "Life is change. Growth is optional. Choose wisely.",
    author: "Karen Clark, type.fit",
  },
  {
    text: "You'll see it when you believe it.",
    author: "Wayne Dyer, type.fit",
  },
  {
    text: "Today is the tomorrow we worried about yesterday.",
    author: "type.fit",
  },
];
const Quotes = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [quotes, setQuotes] = useState<any>([]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
      });
  }, []);

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          sx={{ width: "20rem", marginTop: "1rem", marginBottom: "1rem" }}
        >
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Date latest</MenuItem>
            <MenuItem value={20}>Date newest</MenuItem>
            <MenuItem value={30}>Top</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <button onClick={() => navigate("/homepage")}>Home</button>
      {quotes.map((el: { text: string; author: string }, index: any) => (
        <Quote key={index} author={el.author} text={el.text} />
      ))}
    </div>
  );
};

export default Quotes;
