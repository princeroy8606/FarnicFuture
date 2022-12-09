import { Tab, Tabs, TextField, Toolbar, Box, IconButton, Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search-icon.png";
import Account from "../../assets/images/Account.png";
import Cart from "../../assets/images/Cart.png";
import { useState } from "react";
import { Container } from "@mui/system";
// import { textTheme } from "./themes";

export const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState();
  const takeInput = (e) => {
    setSearchQuery(e.target.value.toString());
    console.log(searchQuery);
  };
  return (
    <>
      <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Container sx={{ padding: "1rem 0 1rem 0" }}>
          <Toolbar>
            <img src={Logo} alt="" />
            <Tabs sx={{ paddingLeft: "2rem" }}>
              <Tab label="Home" />
              <Tab label="Pages >" />
              <Tab label="About" />
              <Tab label="Contact" />
            </Tabs>
            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              <Box >
                <TextField
                  id="search-bar"
                  className="text"
                  placeholder="Search"
                  onInput={takeInput}
                  variant="standard"
                />
                <img src={Search} />
              </Box>
              <Box sx={{ paddingLeft: "2rem" }}>
                <IconButton>
                  <Box component="img" src={Account} />
                </IconButton>
                <IconButton>
                  <Box component="img" src={Cart} />
                  <Badge/>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
