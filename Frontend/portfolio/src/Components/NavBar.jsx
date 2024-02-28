import styled from "@emotion/styled";
import { AppBar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "#fff",
  fontSize: "20",
  "&.active": {
    background: "navy",
    padding: "10px",
    borderRadius: "5px",
  },
});

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1% 8%",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, letterSpacing: "2px" }}
            >
              MERN Stack developer .
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12%",
              padding: "0 8%",
            }}
          >
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="About">About</StyledNavLink>
            <StyledNavLink to="Project">Project</StyledNavLink>
            <StyledNavLink to="Contact">Contact</StyledNavLink>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBar;
