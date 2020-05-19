import React from "react";
import Header from "../header/Header";

const pageStyle = {};

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
};

export default function Page(props) {
    return (
        <div style={pageStyle}>
            <Header/>
            <div style={bodyStyle}>
                {props.children}
            </div>
        </div>
    );
};