import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Button } from "@mui/material";
const Middleview = ({ opList, setOpList, players }) => {
  //const [opList, setOpList] = useState([]);

  const increaseOp2 = () => {
    const newOp = {
      num: opList.length + 1,
      hold: "none",
      color: "primary",
    };
    setOpList([...opList, newOp]);
    console.log(opList);
  };

  const decreaseOp2 = () => {
    console.log(opList.length);
    setOpList(opList.filter((o) => o.num !== opList.length));
  };

  const changeHold = (op) => {
    console.log(op);
    let updatedOp = {};
    if (op.hold === "none") {
      updatedOp = { ...op, hold: "player 1", color: "secondary" };
    } else if (op.hold === "player 1") {
      updatedOp = { ...op, hold: "player 2", color: "error" };
    } else if (op.hold === "player 2") {
      updatedOp = { ...op, hold: "none", color: "primary" };
    }

    const updatedOpList = opList.map((op) => {
      if (op.num === updatedOp.num) {
        return updatedOp;
      } else {
        return op;
      }
    });

    setOpList(updatedOpList);

    console.log(opList);
    console.log(updatedOpList);
  };

  /* const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  })); */

  return (
    <div>
      <div>
        <button onClick={() => increaseOp2()}>add OP2</button>
        <button onClick={() => decreaseOp2()}>remove OP2</button>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {opList.map((op) => (
              <Grid key={op.num} size={4}>
                <Button
                  variant="contained"
                  size="large"
                  color={op.color}
                  onClick={() => changeHold(op)}
                >
                  Point {op.num} <br></br>
                  Holding: {op.hold}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Middleview;
