import React, { Fragment, useState } from 'react'
import { SearchBar } from '../searchBar/searchBar'
import { Th } from './columns/th'
import './table.css'

export const Table = (props) => {
    //Создал дубликацию данных таблицы для динамичного поиска...
    const [tableData, setTableData] = useState(props.data)

    const Search = (val) => {
        //id привел к строке т.к. он хранит числовое знаечние
        const filtredData = props.data.filter(item => {
            return item['id'].toString().includes(val.toLowerCase())
              || item['name'].toLowerCase().includes(val.toLowerCase())
              || item['email'].toLowerCase().includes(val.toLowerCase())
              || item['body'].toLowerCase().includes(val.toLowerCase())
        })

        setTableData(filtredData)
    }

    return (
    <Fragment>
        <SearchBar onSearch={Search}/>
        <table className="table">
            <thead>
                <tr className="table--row">
                    <Th column='id' orderBy={props.orderBy} Sort={props.Sort} sortColumn={props.sortColumn}/>
                    <Th column='name' orderBy={props.orderBy} Sort={props.Sort} sortColumn={props.sortColumn}/>
                    <Th column='email' orderBy={props.orderBy} Sort={props.Sort} sortColumn={props.sortColumn}/>
                    <Th column='body' orderBy={props.orderBy} Sort={props.Sort} sortColumn={props.sortColumn}/>
                </tr>
            </thead>
            <tbody>
                { tableData.map(item =>(
                    <tr className="table--row" key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
    )
}