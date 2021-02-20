import React from 'react'

export const Th = ({column, orderBy, Sort, sortColumn}) => {
    //Проверка на соответстиве имени колонки к имени сортируемой колонки, если идентичны добавляется span с типом сортировки
    return <th onClick={()=>Sort(column)}>{column} {sortColumn === column ? <span>{orderBy}</span> : null}</th>
}