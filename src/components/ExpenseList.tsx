import React from 'react';

const ExpenseList = () => {
    return (
        <table className="table" >
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>item 1</td>
                    <td>$</td>
                    <td>Groceries</td>
                </tr>
            </tbody>

        </table>
    )
}

export default ExpenseList
