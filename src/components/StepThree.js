import React from "react";
import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";
function StepThree() {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name="projectAdditionalDetails"
        render={({ field }) => (
          <TextField
            id="projectAdditionalDetails"
            label="Add Notes"
            variant="standard"
            margin="normal"
            {...field}
          />
        )}
      />
    </div>
  );
}

export default StepThree;
