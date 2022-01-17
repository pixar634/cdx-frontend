import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import api from "../config/axiosConfig";
import { useFormContext, Controller } from "react-hook-form";
function StepTwo() {
  const [age, setAge] = React.useState("");
  const { control } = useFormContext();
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const getuserAccessCodes = async () => {
    const res = await api.get("/users");
    let userIDList = res.data;
    setAge(userIDList);
    // let roots = userIDList.map((alldata) => {
    //   return alldata.id;
    // });
    console.log("all id", userIDList);
  };
  useEffect(() => {
    getuserAccessCodes();
  }, []);

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
              value={age.id}
              onChange={handleChange}
              label="Age"
              {...field}
              variant="outlined"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {age &&
                age.map((allUser) => (
                  <MenuItem value={allUser.id}>{allUser.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
      />
    </div>
  );
}

export default StepTwo;
