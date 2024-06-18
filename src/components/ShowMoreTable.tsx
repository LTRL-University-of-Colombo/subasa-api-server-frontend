/****
 * for future developers. this page isnt complete.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * *****/






import React, { useEffect, useState } from 'react';

interface Column<T> {
    header: string;
    accessor: (row: T) => React.ReactNode;
}

interface Props<T> {
    columns: Column<T>[];
    loadMoreFunction: (limit: number, skip: number) => Promise<T[] | null>;
}

const ShowMoreTable = <T,>({ columns, loadMoreFunction }: Props<T>) => {
    const [data, setData] = useState<T[] | null>(null)

    let limit = 10
    let skip = 0

    const fetchData = async () => {


        const responseData = await loadMoreFunction(limit, skip)
        if (data !== null && responseData !== null) {
            setData([...data, ...responseData])
            return
        }

    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="d-flex flex-column">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col">{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data !== null ?
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((column, colIndex) => (
                                        <td key={colIndex}>{column.accessor(row)}</td>
                                    ))}
                                </tr>
                            ))
                            :
                            <>No data available</>
                    }
                </tbody>
            </table>
            <button className="btn btn-sm" onClick={() => { loadMoreFunction }}>Show more</button>
        </div>
    );
};

export default ShowMoreTable;
