import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormContext, Controller } from "react-hook-form";
function StepTwo() {
  const [age, setAge] = React.useState("");
  const { control } = useFormContext();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Controller
        control={control}
        name="userAccess"
        render={({ field }) => (
          <FormControl variant="standard" sx={{ m: 1, width: 250 }}>
            <InputLabel id="userAccess-label">Access Group/Person</InputLabel>
            <Select
              labelId="userAccess"
              id="userAccess"
              value={age}
              onChange={handleChange}
              label="Age"
              {...field}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
}

export default StepTwo;
