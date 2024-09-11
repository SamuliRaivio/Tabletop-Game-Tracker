import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { useCallback, useState } from "react";
import { Button } from "@mui/material";
import { useLongPress } from "use-long-press";
const Middleview = ({ opList, setOpList, players, currentPlayer }) => {
  //const [opList, setOpList] = useState([]);

  const x = "asd";

  const increaseOp2 = () => {
    const newOp = {
      num: opList.length + 1,
      hold: "none",
      color: "primary",
    };
    setOpList([...opList, newOp]);
  };

  const decreaseOp2 = () => {
    setOpList(opList.filter((o) => o.num !== opList.length));
  };

  const changeHold = (op) => {
    let updatedOp = {};
    let updatedOpList = [];

    if (currentPlayer.name) {
      updatedOp = { ...op, hold: currentPlayer.name, color: "secondary" };
      updatedOpList = opList.map((op) => {
        if (op.num === updatedOp.num) {
          return updatedOp;
        } else {
          return op;
        }
      });
      setOpList(updatedOpList);
    }
  };

  const changeHoldNone = (op) => {
    let updatedOp = { ...op, hold: "none", color: "primary" };
    let updatedOpList = opList.map((op) => {
      if (op.num === updatedOp.num) {
        return updatedOp;
      } else {
        return op;
      }
    });
    setOpList(updatedOpList);
  };

  const longpressEvent = (event, context) => {
    changeHoldNone(context.context);
  };

  const bind = useLongPress(longpressEvent, {
    onCancel: (event, { context }) => changeHold(context),
  });

  return (
    <div>
      <div>
        <button onClick={() => increaseOp2()}>add OP2</button>
        <button onClick={() => decreaseOp2()}>remove OP2</button>
      </div>
      <div>
        <Button variant="contained" size="large">
          LP test
        </Button>
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
                  {...bind(op)}
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
