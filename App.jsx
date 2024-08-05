import React, { useState } from 'react';
import './App.css';


const mockData = [ { id: 1, name: "Alice Johnson", age: 28, role: "Engineer", hireDate: "2022-01-15", isActive: true, salary: 85000, department: "Development", projectsCompleted: 5, lastLogin: "2024-07-28T14:48:00.000Z", accessLevel: "Admin" }, { id: 2, name: "Bob Smith", age: 34, role: "Manager", hireDate: "2020-06-30", isActive: false, salary: 95000, department: "Operations", projectsCompleted: 10, lastLogin: "2024-07-30T09:21:00.000Z", accessLevel: "User" }, { id: 3, name: "Charlie Rose", age: 22, role: "Intern", hireDate: "2023-03-01", isActive: true, salary: 45000, department: "Development", projectsCompleted: 1, lastLogin: "2024-07-29T17:03:00.000Z", accessLevel: "User" }, { id: 4, name: "David Green", age: 40, role: "Director", hireDate: "2018-11-20", isActive: true, salary: 120000, department: "Management", projectsCompleted: 20, lastLogin: "2024-07-27T12:35:00.000Z", accessLevel: "Admin" }, { id: 5, name: "Eva White", age: 30, role: "Designer", hireDate: "2021-05-15", isActive: true, salary: 70000, department: "Design", projectsCompleted: 8, lastLogin: "2024-07-31T10:15:00.000Z", accessLevel: "User" }, { id: 6, name: "Frank Black", age: 29, role: "Engineer", hireDate: "2019-09-17", isActive: true, salary: 80000, department: "Development", projectsCompleted: 6, lastLogin: "2024-07-25T11:45:00.000Z", accessLevel: "User" }, { id: 7, name: "Grace Brown", age: 26, role: "Engineer", hireDate: "2021-04-10", isActive: false, salary: 78000, department: "Development", projectsCompleted: 4, lastLogin: "2024-07-20T09:00:00.000Z", accessLevel: "User" }, { id: 8, name: "Hank Green", age: 45, role: "Senior Manager", hireDate: "2017-03-25", isActive: true, salary: 110000, department: "Operations", projectsCompleted: 15, lastLogin: "2024-07-29T13:22:00.000Z", accessLevel: "Admin" }, { id: 9, name: "Ivy Blue", age: 31, role: "Designer", hireDate: "2019-08-05", isActive: true, salary: 72000, department: "Design", projectsCompleted: 7, lastLogin: "2024-07-28T08:48:00.000Z", accessLevel: "User" }, { id: 10, name: "Jack White", age: 37, role: "Product Manager", hireDate: "2020-02-20", isActive: false, salary: 95000, department: "Product", projectsCompleted: 12, lastLogin: "2024-07-26T15:18:00.000Z", accessLevel: "Admin" }, { id: 11, name: "Kara Black", age: 33, role: "Engineer", hireDate: "2018-12-12", isActive: true, salary: 85000, department: "Development", projectsCompleted: 9, lastLogin: "2024-07-29T12:00:00.000Z", accessLevel: "User" }, { id: 12, name: "Leo Green", age: 27, role: "Designer", hireDate: "2021-01-30", isActive: true, salary: 68000, department: "Design", projectsCompleted: 3, lastLogin: "2024-07-28T16:15:00.000Z", accessLevel: "User" }, { id: 13, name: "Mona Blue", age: 36, role: "Engineer", hireDate: "2019-11-18", isActive: true, salary: 87000, department: "Development", projectsCompleted: 11, lastLogin: "2024-07-30T14:50:00.000Z", accessLevel: "User" }, { id: 14, name: "Nina Brown", age: 25, role: "Intern", hireDate: "2023-04-14", isActive: true, salary: 42000, department: "Development", projectsCompleted: 2, lastLogin: "2024-07-31T11:00:00.000Z", accessLevel: "User" }, { id: 15, name: "Oscar White", age: 42, role: "Director", hireDate: "2016-05-11", isActive: true, salary: 125000, department: "Management", projectsCompleted: 22, lastLogin: "2024-07-29T09:33:00.000Z", accessLevel: "Admin" } ];


function App() {
    const [data, setData] = useState([]);
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const filterData = (type, value) => {
        let result;
        switch (type) {
            case 'id':
                const intValue = parseInt(value, 10);
                result = mockData.filter(item => {
                    return Object.values(item).some(val => Number.isInteger(val) && val === intValue);
                });
                break;

            case 'string':
                result = mockData.filter(item => {
                    return item.name.toLowerCase() === value.toLowerCase();
                });
                break;

            case 'date':
                result = mockData.filter(item => {
                    return [item.hireDate, item.lastLogin].some(dateStr => new Date(dateStr).toISOString().split('T')[0] === value);
                });
                break;

            default:
                result = [];
        }
        setData(result);
    };

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    const applyFilter = () => {
        filterData(filterType, filterValue);
    };

    return (
        <div>
            <div className="filter-controls">
                <select onChange={handleFilterTypeChange} value={filterType}>
                    <option value="">Select Filter Type</option>
                    <option value="id">Id</option>
                    <option value="string">String</option>
                    <option value="date">Date</option>
                </select>
                <input
                    type="text"
                    placeholder={`Enter ${filterType}`}
                    value={filterValue}
                    onChange={handleFilterChange}
                />
                <button onClick={applyFilter}>Apply Filter</button>
            </div>

            <div id="results">
                <h2>Results:</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{JSON.stringify(item)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
