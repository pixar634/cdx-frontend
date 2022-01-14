import React from "react";
import TextField from "@mui/material/TextField";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
function Stepone() {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        control={control}
        name="projectName"
        render={({ field }) => (
          <TextField
            id="projectName"
            label="projectName"
            variant="outlined"
            margin="normal"
            {...field}
          />
        )}
      />

      <br></br>
      <Controller
        control={control}
        name="projectDescription"
        render={({ field }) => (
          <TextField
            id="projectDescription"
            label="projectDescription"
            variant="outlined"
            margin="normal"
            {...field}
          />
        )}
      />
    </div>
  );
}

export default Stepone;
