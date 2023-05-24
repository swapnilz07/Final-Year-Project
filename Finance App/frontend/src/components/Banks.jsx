//Business Loan information in this page
import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  Paper,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@tanstack/react-query";
import { getBankData } from "../api";
import { useParams } from "react-router-dom";

function Banks() {
  const params = useParams();
  const [value, setValue] = useState(0);
  const loanName = useMemo(() => params.loanName, [params.loanName]);

  const { data } = useQuery({
    queryKey: ["bankData", loanName],
    queryFn: () => getBankData(JSON.stringify({ loan_name: loanName })),
    enabled: loanName ? true : false,
  });

  const handleChange = (event, newValue) => {
    console.log(newValue, "e", event);
    setValue(newValue);
  };
  //Accordian
  const [expanded, setExpanded] = useState(false);

  const handlerChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1", mt: 6 }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "90.5%",
              mx: "auto",
              bgcolor: "background.paper",
            }}
          >
            <TabList
              value={value}
              onChange={handleChange}
              aria-label="lab API tabs example"
              variant="scrollable"
              scrollButtons="auto"
            >
              {data &&
                data?.loan_data?.map((bank, key) => {
                  return (
                    <Tab
                      key={key}
                      // onclick={(e) => console.log(e)}

                      label={
                        <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image={bank.bank_logo}
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                {bank.bank_name}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {bank.bank_decs}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      }
                      value={key}
                    />
                  );
                })}
            </TabList>
          </Box>
          <Box sx={{ width: "97%", mx: "auto", mt: 2 }}>
            {data &&
              data?.loan_data?.map((bank, key) => {
                return (
                  <TabPanel value={key}>
                    {console.log(bank)}
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handlerChange("panel1")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          {bank.q1_mainheading}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TableContainer component={Paper}>
                          <Table area-label="simple table">
                            {bank.q1.map((e) => {
                              console.log(e, "e");
                              return (
                                <TableHead>
                                  <TableRow>
                                    <TableCell>{e.q_heading}</TableCell>
                                    <TableCell>{e.q_subheading}</TableCell>
                                  </TableRow>
                                </TableHead>
                              );
                            })}
                            {bank.q1.map((element) => {
                              return (
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      {element.q_heading_data}
                                    </TableCell>
                                    <TableCell>
                                      {element.q_subheading_data}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              );
                            })}
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handlerChange("panel2")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          {bank.q2_mainheading}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TableContainer component={Paper}>
                          <Table area-label="simple table">
                            {bank.q2.map((e) => {
                              return (
                                <TableHead>
                                  <TableRow>
                                    <TableCell>{e.q_heading}</TableCell>
                                    <TableCell>{e.q_subheading}</TableCell>
                                  </TableRow>
                                </TableHead>
                              );
                            })}
                            {bank.q2.map((element) => {
                              return (
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      {element.q_heading_data}
                                    </TableCell>
                                    <TableCell>
                                      {element.q_subheading_data}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              );
                            })}
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel3"}
                      onChange={handlerChange("panel3")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          {bank.q3_mainheading}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TableContainer component={Paper}>
                          <Table area-label="simple table">
                            {bank.q3.map((e) => {
                              return (
                                <TableHead>
                                  <TableRow>
                                    <TableCell>{e.q_heading}</TableCell>
                                    <TableCell>{e.q_subheading}</TableCell>
                                  </TableRow>
                                </TableHead>
                              );
                            })}
                            {bank.q3.map((element) => {
                              return (
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      {element.q_heading_data}
                                    </TableCell>
                                    <TableCell>
                                      {element.q_subheading_data}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              );
                            })}
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded === "panel4"}
                      onChange={handlerChange("panel4")}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          {bank.q4_mainheading}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <TableContainer component={Paper}>
                          <Table area-label="simple table">
                            {bank.q4.map((e) => {
                              return (
                                <TableHead>
                                  <TableRow>
                                    <TableCell>{e.q_heading}</TableCell>
                                    <TableCell>{e.q_subheading}</TableCell>
                                  </TableRow>
                                </TableHead>
                              );
                            })}
                            {bank.q4.map((element) => {
                              return (
                                <TableBody>
                                  <TableRow>
                                    <TableCell>
                                      {element.q_heading_data}
                                    </TableCell>
                                    <TableCell>
                                      {element.q_subheading_data}
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              );
                            })}
                          </Table>
                        </TableContainer>
                      </AccordionDetails>
                    </Accordion>
                  </TabPanel>
                );
              })}
          </Box>
        </TabContext>
      </Box>
    </>
  );
}

export default Banks;
