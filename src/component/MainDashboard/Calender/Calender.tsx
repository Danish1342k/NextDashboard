import React from "react";
import Calendar from "react-widgets/Calendar";
import "react-widgets/styles.css";
import BoxLayout from "../../BoxLayout/BoxLayout";
const Calender = (props: any) => {
  const { ...rest } = props;

  return (
    <>
      <BoxLayout {...rest} p="4" my="5" h="335px">
        <Calendar
          // max={new Date()}
          // bordered="none"
          style={{ border: "none" }}
        />
      </BoxLayout>
    </>
  );
};
export default Calender;
