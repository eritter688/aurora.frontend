import React from 'react';
import Page from "../../components/page/page";
import Button from 'react-bootstrap/Button'
import {useDispatch, useSelector} from "react-redux";
import {getAll, selectCount, selectItems, selectNext, selectPrev} from "../../slices/clientSlice";
import Table from 'react-bootstrap/Table'

// TODO
// Add/New/+ button somewhere on the upper right?
// Results table, shown only if things are available.
// Pagination links at the bottom, if data is available.
// Modal for new. Edit on table or in modal?
export default function ClientContainer() {

    const dispatch = useDispatch();

    const count = useSelector(selectCount);
    const next = useSelector(selectNext);
    const prev = useSelector(selectPrev);
    const items = useSelector(selectItems);

    const getAllClientsHandler = () => {
        dispatch(getAll());
    };

    return (
        <Page>
            <p>Client Page</p>
            <p>Count: {count}</p>
            <p>Prev: {prev}</p>
            <p>Next: {next}</p>

            <Button>Add/New/+</Button>

            {/*// TODO */}
            {/*// Take header keys as array*/}
            {/*// Take item keys as array*/}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>YOB</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item =>
                    <tr key={item.id}>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.year_of_birth}</td>
                    </tr>
                )}
                </tbody>

            </Table>

            <Button>Prev</Button>
            <Button>Next</Button>

            <Button variant={"danger"} onClick={getAllClientsHandler}>GET ALL!</Button>
        </Page>
    );
}
