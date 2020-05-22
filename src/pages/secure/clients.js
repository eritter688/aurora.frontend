import React from 'react';
import Page from "../../components/page/page";
import Button from 'react-bootstrap/Button'
import {useDispatch} from "react-redux";
import {getAllClients} from "../../slices/clientSlice";

// TODO
// Add/New/+ button somewhere on the upper right?
// Results table, shown only if things are available.
// Modal for new. Edit on table or in modal?
export default function ClientContainer() {

    const dispatch = useDispatch();

    const getAllClientsHandler = () => {
        dispatch(getAllClients());
    };

    return (
        <Page>
            <p>Client Page</p>
            <Button variant={"danger"} onClick={getAllClientsHandler}>GET ALL!</Button>
        </Page>
    );
}
