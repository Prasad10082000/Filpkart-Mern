import React, { useState } from "react";
import { Box, Menu, MenuItem, Typography, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";

const Container = styled(Menu)`
  margin-top: 5px;
`;
const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleclick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleclose = () => {
    setOpen(false);
  };

  const Logoutmenu = () => {
    setAccount("");
  };
  return (
    <>
      <Box onClick={handleclick}>
        <Typography style={{ marginTop: 3, cursor: "pointer" }}>
          {account}
        </Typography>
        <Container anchorEl={open} open={Boolean(open)} onClose={handleclose}>
          <MenuItem
            onClick={() => {
              handleclose();
              Logoutmenu();
            }}
          >
            <PowerSettingsNew color="primary" fontSize="small" />
            <Logout>Logout</Logout>
          </MenuItem>
        </Container>
      </Box>
    </>
  );
};

export default Profile;
