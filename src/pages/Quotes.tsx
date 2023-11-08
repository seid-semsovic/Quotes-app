import { useNavigate, useParams } from "react-router-dom";
import Quote from "../components/Quote";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button, Modal } from "@mui/material";
import AddQuoteModal from "../dialogs/AddQuoteModal";

const Quotes = () => {
  const navigate = useNavigate();
  const searchParams = window.location.search;
  const params = new URLSearchParams(searchParams);
  const [filterType, setFilterType] = useState("");
  const username = params.get("username");
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  function handleSortBy() {
    if (filterType === "longest") {
      const numAscending = [...quotes].sort(
        (a, b) => a.text.length - b.text.length
      );
      setQuotes(numAscending);
    } else {
      const numDscending = [...quotes].sort(
        (a, b) => b.text.length - a.text.length
      );
      setQuotes(numDscending);
    }
  }
  useEffect(() => {
    handleSortBy();
  }, [filterType]);

  function openModalHandler() {
    setOpenModal(true);
  }

  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <Header username={username}></Header>
      <Box
        sx={{
          minWidth: 120,
          marginLeft: "35%",
        }}
      >
        <FormControl
          sx={{
            width: "100%",
            marginTop: "1rem",
            marginBottom: "1rem",

            display: "flex",
            gap: "1rem",
          }}
        >
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            sx={{ width: "10rem" }}
            onChange={handleChange}
          >
            <MenuItem
              value={"longest"}
              onClick={() => setFilterType("longest")}
            >
              Longest
            </MenuItem>
            <MenuItem
              value={"shortest"}
              onClick={() => setFilterType("shortest")}
            >
              Shortest
            </MenuItem>
          </Select>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "10rem" }}
            onClick={openModalHandler}
          >
            Add Quote
          </Button>
        </FormControl>
      </Box>

      {quotes.map((el: { text: string; author: string }, index: any) => (
        <Quote key={index} author={el.author} text={el.text} />
      ))}

      <AddQuoteModal open={openModal} onClose={closeModal} />
    </div>
  );
};

export default Quotes;
