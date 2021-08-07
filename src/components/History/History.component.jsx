import React, { useContext } from "react";
import { Wrapper, Heading, HistoryTab } from "./History.style";
import { GlobalContext } from "../../Context/GlobalContext";

const History = () => {
  const { details, Delete } = useContext(GlobalContext);

  const handleDelete = (id) => {
    Delete(id);
  };
  return (
    <Wrapper>
      <Heading>
        <h3>History</h3>
      </Heading>
      {details.length !== 0
        ? details.map((detail) => {
            return (
              <HistoryTab
                className={detail.value > 0 ? "incomeBorder" : "expenseBorder"}
                key={detail.id}
              >
                <input
                  type="button"
                  value="x"
                  onClick={() => handleDelete(detail.id)}
                />
                <p className="descp">{detail.text}</p>
                <p className="money">{detail.value}</p>
              </HistoryTab>
            );
          })
        : ""}
    </Wrapper>
  );
};

export default History;
