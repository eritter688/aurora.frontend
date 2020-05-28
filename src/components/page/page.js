import React from "react";
import PublicHeader from "../header/PublicHeader";

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
    minHeight: "100vh"
};

export default function Page(props) {
    return (
        <>
            <PublicHeader/>
            <div style={bodyStyle}>
                {props.children}
            </div>
        </>
    );
};