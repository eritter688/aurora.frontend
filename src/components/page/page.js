import React from "react";
import AuroraNavBar from "../navbar/NavBar";

const pageStyle = {};

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
};

export default function Page(props) {
    return (
        <div style={pageStyle}>
            <AuroraNavBar/>
            <div style={bodyStyle}>
                {props.children}
            </div>
        </div>
    );
};