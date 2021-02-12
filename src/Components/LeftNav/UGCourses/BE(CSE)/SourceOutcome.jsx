import React from "react";
import { Button } from "react-bootstrap";
import "../BE(CSE)/BECSE.css";
export const SourceOutcome = () => {
  return (
    <div>
      <h3 className="headerclass">CSE Course Outcomes</h3>
      <h5 className="h5class">CSE-R16</h5>
      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-1-1.pdf">
        BTech(CSE) R16 1-1
      </Button>
      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-1-2.pdf">
        BTech(CSE) R16 1-2
      </Button>

      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-2-1.pdf">
        BTech(CSE) R16 2-1
      </Button>
      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-2-2.pdf">
        BTech(CSE) R16 2-2
      </Button>
      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-3-1.pdf">
        BTech(CSE) R16 3-1
      </Button>
      <Button className="buttonclass" href="MYPDF/BT-CSE-R16-3-2.pdf">
        BTech(CSE) R16 3-2
      </Button>
    </div>
  );
};
