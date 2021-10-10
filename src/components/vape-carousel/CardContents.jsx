import React from "react";

const CardContents = ({
  title,
  description,
  firstAside,
  secondAside,
  leftCircleTitle,
  leftCircleText,
  whiteCircleContent,
  orangeCircleContent,
}) => {
  return (
    <>
      <h1 className="card-header">
        {!!title &&
          title.split(" ").map((text, i) => {
            // check if the item is the last to be concatinated, we dont need a "."
            if (i === title.split(" ").length - 1) {
              return (
                <>
                  {text}
                  <span className="orange-colored">!</span>
                </>
              );
            }
            return (
              <>
                {text}
                <span className="orange-colored">. </span>
              </>
            );
          })}
      </h1>

      {/* !! makes sure that the prop is a truthy type before printing to dom  */}
      <h3 className="card-message">{!!description && description}</h3>
      <div className="circles-container">
        <div className="left-circle">
          <h1 className="circle-header">
            {!!leftCircleTitle && leftCircleTitle}
          </h1>
          <h3 className="circle-message">
            {!!leftCircleText && leftCircleText}
          </h3>
        </div>
        <div className="right-circles-container">
          <div className="white-right-circle">
            <h1>{!!whiteCircleContent && whiteCircleContent}</h1>
          </div>
          <div className="orange-right-circle">
            <h1>{!!orangeCircleContent && orangeCircleContent}</h1>
          </div>
        </div>
        <div className="right-circles-message-container">
          <div>
            <p> {!!firstAside && firstAside}</p>
          </div>

          <div>
            <p> {!!secondAside && secondAside}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContents;
