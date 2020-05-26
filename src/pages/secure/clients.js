import React from 'react';
import Page from "../../components/page/page";


const PageMeta = () => {

    const pageMetaStyle = {
        backgroundColor: "white",
        minHeight: "6vh"
    };

    return (
        <div style={pageMetaStyle}>
            <span>Clients</span>
            <span> 10 Total</span>
            <span> Sort by: Last Name</span>
        </div>
    )

}

const DataElement = () => {

    const dataElementStyle = {
        minHeight: "5vh",
        width: "80%",
        marginLeft: "5%",
        marginTop: "1%",
        backgroundColor: "blue",
    };

    return (
        <div style={dataElementStyle}>
            <span>element</span>
        </div>
    )
}

const PageContent = () => {

    const pageContentStyle = {};

    return (
        <div style={pageContentStyle}>
            <span>Content</span>
            <DataElement/>
            <DataElement/>
        </div>
    )
}

export default function ClientContainer() {


    return (
        <Page>
            <PageMeta/>
            <PageContent/>
        </Page>
    )
}


// TODO
// Add/New/+ button somewhere on the upper right?
// Results table, shown only if things are available.
// Pagination links at the bottom, if data is available.
// Modal for new. Edit on table or in modal?
// export default function ClientContainer() {
//
//     const dispatch = useDispatch();
//
//     const count = useSelector(selectCount);
//     const next = useSelector(selectNext);
//     const prev = useSelector(selectPrev);
//     const items = useSelector(selectItems);
//
//     const getAllClientsHandler = () => {
//         dispatch(getAll());
//     };
//
//     const headerKeys = [
//         "First Name",
//         "Last Name",
//         "YOB",
//     ];
//
//     const itemKeys = [
//         "id",
//         "first_name",
//         "last_name",
//         "year_of_birth",
//     ];
//
//     // from props.header [array]
//     const generateHeader = () => {
//         return;
//     };
//
//     // from props.data [array]
//     const generateRows = () => {
//
//     };
//
//     return (
//         <Page>
//             <p>Client Page</p>
//             <p>Count: {count}</p>
//             <p>Prev: {prev}</p>
//             <p>Next: {next}</p>
//
//             <Button>Add/New/+</Button>
//
//             <Table striped bordered hover>
//                 <thead>
//                 <tr>
//                     {headerKeys.map((item, index) =>
//                         <th key={index}>{item}</th>
//                     )}
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {items.map(item =>
//                     <tr key={item[itemKeys[0]]}>
//                         <td>{item[itemKeys[1]]}</td>
//                         <td>{item[itemKeys[2]]}</td>
//                         <td>{item[itemKeys[3]]}</td>
//                     </tr>
//                 )}
//                 </tbody>
//
//             </Table>
//
//             <Button>Prev</Button>
//             <Button>Next</Button>
//
//             <Button variant={"danger"} onClick={getAllClientsHandler}>GET ALL!</Button>
//         </Page>
//     );
// }
