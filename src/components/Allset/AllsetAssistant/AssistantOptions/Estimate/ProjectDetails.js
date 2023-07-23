import React, { useState } from "react";
import "../assistantOptions.css";
import mapArrayToMenuItems from "../../../utils/mapArrayToMenuItems";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const ProjectDetails = ({
  nextPage
}) => {
  const [size, setSize] = useState(1200);

  const people = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const beds = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const baths = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const pets = ["None", "1", "2", "3", "4", "5", "6", "7", "8+"];

  const peopleOptions = mapArrayToMenuItems(people);
  const bedOptions = mapArrayToMenuItems(beds);
  const bathOptions = mapArrayToMenuItems(baths);
  const petOptions = mapArrayToMenuItems(pets);

  return (
    <>
      <div className="optionChip">Instant Estimate</div>
      <Grid
        className="estimateContainer"
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={1.5}>
          Size
        </Grid>
        <Grid item xs={8}>
          <Slider
            min={1200}
            max={5000}
            value={size}
            onChange={(e, newValue) => setSize(newValue)}
          />
        </Grid>
        <Grid item xs={2.5}>
          {size} ft
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>How many people live here?</InputLabel>
            <Select label="How many people live here?">{peopleOptions}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Beds</InputLabel>
            <Select label="Beds">{bedOptions}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Baths</InputLabel>
            <Select label="Baths">{bathOptions}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel>Pets</InputLabel>
            <Select label="Pets">{petOptions}</Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <button
            className="botButton"
            onClick={nextPage}
          >
            Continue
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectDetails;
