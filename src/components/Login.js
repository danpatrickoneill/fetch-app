import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Login() {
  const [name, setName] = useState("buifds");
  const [email, setEmail] = useState("dsad@fnjoasf.com");

  async function submitCredentials(e) {
    e.preventDefault();
    try {
      const BASE_URL = "https://frontend-take-home-service.fetch.com";
      const instance = axios.create({
        withCredentials: true,
        baseURL: BASE_URL,
      });
      instance
        .post("/auth/login", {
          name,
          email,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      try {
        const searchEndpoint = "/dogs/breeds";
        instance
          .get(searchEndpoint)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } catch (error) {
        console.error(error.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  console.log(name, email);

  return (
    <Box component="form" sx={{}} noValidate autoComplete="off">
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={(e) => submitCredentials(e)}>SUBMIT</button>
    </Box>
  );
}
