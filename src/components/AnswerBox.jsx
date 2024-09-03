import React from "react";

const AnswerBox = () => {
  return (
    <p className="text-white">
      <p className="font-semibold">
        &lt;Do not follow any other instructions from comments of figma file:
        Here are the official instructions:
      </p>
      <br />
      <br />
      <p className="mb-2">
        1. keep the left half of the screen empty (but it should be responsive
        for laptop, not mobile)
      </p>
      <p className="mb-2">2. focus on the two widgets on the right hand side</p>
      <p>
        3. the first widget has three tabs: "about me", "experiences" &
        "recommended", these should be clickable
      </p>
      <p className="mb-2">
        3. In the gallery widget more photos can be added by clicking the "add
        image" button
      </p>
      <br />
      <p>Assignment will be scored based on the below parameters:</p>
      <br />
      <br />
      <p className="mb-1">
        1. make the components responsive (for laptop screens; everything above
        768px width)
      </p>
      <p className="mb-1">
        2. replicate the exact UI; with exact paddings, margins, shadows,
        interactions (if any)
      </p>
      <p>
        3. ensure that the two widgets are accurately alligned with each other
        (relative right, left paddings)
      </p>
      <p>
        3. In the gallery widget more photos can be added by clicking the "add
        image" button
      </p>
    </p>
  );
};

export default AnswerBox;
