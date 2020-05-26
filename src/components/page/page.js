import React from "react";
import Header from "../header/Header";

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
    minHeight: "100vh"
};

export default function Page(props) {
    return (
        <>
            <Header/>
            <div style={bodyStyle}>
                {props.children}
            </div>
        </>
    );
};