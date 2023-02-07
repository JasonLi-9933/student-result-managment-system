import Table from "react-bootstrap/Table";

function CustomTable({ columnNames, data, propertyNames }) {
  const getColumns = () => {
    return columnNames.map((col) => {
      return <th key={col}>{col}</th>;
    });
  };
  const getDataRows = () => {
    return data.map((d, i) => {
      return (
        <tr key={i}>
          {propertyNames.map((p) => (
            <td key={`${i}${p}`}>{d[p]}</td>
          ))}
        </tr>
      );
    });
  };
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>{getColumns()}</tr>
        </thead>
        <tbody>{getDataRows()}</tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
