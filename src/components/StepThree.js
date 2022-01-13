import React from "react";
import TextField from "@mui/material/TextField";
function StepThree() {
  return (
    <div>
      <div className="pb-1">
        <TextField
          id="extra-information"
          label="Add Notes"
          variant="standard"
          className="pb-2"
        />
      </div>

      <br></br>
      {/* <Input
                    id="extra-information"
                    label="Add Notes"
                    type="file"
                    variant="standard"
                    
                  /> */}
    </div>
  );
}

export default StepThree;
