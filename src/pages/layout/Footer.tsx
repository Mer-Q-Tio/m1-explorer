import React from "react";
import {Box, Container, Typography, useTheme} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import {ReactComponent as GithubLogo} from "../../assets/github.svg";
import {ReactComponent as DiscordLogo} from "../../assets/discord.svg";
import {ReactComponent as TwitterLogo} from "../../assets/twitter.svg";
import {ReactComponent as MediumLogo} from "../../assets/medium.svg";
import {ReactComponent as LinkedInLogo} from "../../assets/linkedin.svg";
import {ReactComponent as MovementLogoBlack} from "../../assets/svg/logob.svg";
import {ReactComponent as MovementLogoWhite} from "../../assets/svg/logow.svg";

import {grey} from "../../themes/colors/aptosColorPalette";
import SvgIcon from "@mui/material/SvgIcon";

// import {ReactComponent as LogoFull} from "../../assets/svg/aptos_logo_labs.svg";
import {Link} from "../../routing";

const socialLinks = [
  {title: "Git", url: "https://github.com/movemntdev", icon: GithubLogo},
  {
    title: "Discord",
    url: "http://discord.gg/movementlabsxyz",
    icon: DiscordLogo,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/movementlabsxyz",
    icon: TwitterLogo,
  },
  {
    title: "Medium",
    url: "https://medium.com/movementlabsxyz",
    icon: MediumLogo,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/movementlabsxyz",
    icon: LinkedInLogo,
  },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.mode === "dark" ? grey[900] : "white",
        color: theme.palette.mode === "dark" ? grey[100] : "rgba(18,22,21,1)",
        mt: 8,
      }}
    >
      <Container maxWidth="xl" sx={{paddingTop: "2rem", paddingBottom: "2rem"}}>
        <Grid
          container
          gap={4}
          alignContent="center"
          alignItems="center"
          direction={{xs: "column", md: "row"}}
        >
          <Grid
            xs="auto"
            gap={1}
            container
            alignItems={{xs: "center", md: "start"}}
            direction="column"
          >
            <Link
              to="https://movementlabs.xyz/"
              target="_blank"
              title="Movement Labs"
              sx={{mr: {md: 2}}}
            >
              {theme.palette.mode !== "dark" ? (
                <MovementLogoBlack width={50} height={50} />
              ) : (
                <MovementLogoWhite width={50} height={50} />
              )}
            </Link>
            <Grid direction="row" padding="0">
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                    fontFamily:
                      "space-grotesk-variable, Geneva, Tahoma, Verdana, sans-serif",
                  },
                }}
                fontSize="0.8rem"
              >
                © {new Date().getFullYear()}{" "}
                <Box component="span" sx={{whiteSpace: "nowrap"}}>
                  Movement Labs
                </Box>
              </Typography>
              {/*<Stack
                direction="row"
                spacing={1}
                justifyContent={{xs: "center", md: "start"}}
              >
                <Link
                  color="inherit"
                  to="https://aptoslabs.com/privacy"
                  target="_blank"
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "space-grotesk-variable, Geneva, Tahoma, Verdana, sans-serif",
                  }}
                >
                  Privacy
                </Link>
                <Link
                  color="inherit"
                  to="https://aptoslabs.com/terms"
                  target="_blank"
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "space-grotesk-variable, Geneva, Tahoma, Verdana, sans-serif",
                  }}
                >
                  Terms
                </Link>
                </Stack>*/}
            </Grid>
          </Grid>

          <Grid
            xs="auto"
            sx={{marginLeft: {xs: "0", md: "auto"}}}
            container
            justifyContent="end"
          >
            <Grid
              container
              justifyContent={{xs: "center", md: "end"}}
              spacing={3}
              direction="row"
            >
              {socialLinks.map((link) => (
                <Grid key={link.title}>
                  <Link
                    color="inherit"
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    width="26px"
                    sx={{display: "block"}}
                  >
                    <SvgIcon component={link.icon} inheritViewBox />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
