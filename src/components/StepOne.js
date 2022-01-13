import React from "react";
import TextField from "@mui/material/TextField";
function Stepone() {
  const test = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <TextField id="project-name" label="Name" variant="standard" />
      <br></br>

      <TextField
        id="project-description"
        label="Description"
        variant="standard"
        onKeyUp={test}
      />
    </div>
  );
}

export default Stepone;
