import  React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
export default function StarRating() {
  const [value, setValue] = React.useState(4);
  return (
    <Box
      sx={{
        "& > legend": { mt: 4 },
      }}
    >
      {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}