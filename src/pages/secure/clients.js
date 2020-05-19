import React from 'react';
import Page from "../../components/page/page";
import Button from 'react-bootstrap/Button'
import {useDispatch} from "react-redux";
import {getAllClients} from "../../slices/clientSlice";

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
