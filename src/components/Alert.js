import React from "react";

const Alert = (props) => {
   const capitalize = (word)=>{
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);
   }
  return (
    props.alert && <div className={`my-3 alert alert-${props.alert.type} alert-dismissible fade show d-inline-block`} align="right" style={{float: 'right'}} role="alert">
      <strong>{capitalize(props.alert.type)}! </strong>{props.alert.msg}
    </div>
  );
};

export default Alert;
