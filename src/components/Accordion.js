import React, { useState } from 'react';
const Accordion = (props) => {
  const [accordionState, setAccordionState] = useState(false);

  const [IsOpened, setIsOpened] = useState([]);
  console.log(IsOpened);
  const ControlCollapse = (id) => {
    setAccordionState(!accordionState);

    IsOpened.length === 0
      ? setIsOpened([...IsOpened, id])
      : setIsOpened(IsOpened.filter((d) => d !== id));
  };

  return (
    <div>
      <div className="accordion">
        <div className="accordion-item item">
          <h2 className="accordion-header">
            <button
              className={` custom_btn ${
                //accordion-button
                accordionState ? '' : 'collapsed'
              } `}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded={accordionState}
              aria-controls="collapseOne"
              onClick={() => ControlCollapse(props.id)}
            >
              {props.title}
              {!accordionState ? (
                <img src="https://cdn-icons-png.flaticon.com/512/32/32339.png" />
              ) : (
                <img src="https://cdn-icons-png.flaticon.com/512/32/32320.png" />
              )}
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse  ${
              accordionState ? 'show' : 'collapse'
            } `}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">{props.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
