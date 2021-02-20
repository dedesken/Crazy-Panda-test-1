import React, { Fragment, useEffect, useState } from 'react'
import { CommentsApi } from '../../api/api'
import { Paginator } from '../paginator/paginator'
import { WithPreloader } from '../preloader/preloader'
import { Table } from './tableComponent'

export const TableContainer = () => {
    const pageSize = 50

    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [orderBy, setOrderBy] = useState('asc')
    const [sortColumn, setSortColumn] = useState('id')

    //Получение данных в хуке эффекта зависит от текущей страницы
    useEffect(()=>{
        setIsFetching(true)
        CommentsApi.getComments(currentPage, pageSize).then(res => {
            setData(res)
            setOrderBy('asc')
            setSortColumn('id')
            setIsFetching(false)
        })
    }, [currentPage])

    // Функция сортировки, в целом похожа на orderBy от lodash
    const sortBy = (key, sortType) => {
        if(sortType === 'asc') {
            return (a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
        }
        return (a, b) => (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0);
    };

    //Сортировка...
    const Sort = (column) => {
        const sortType = orderBy === 'asc' ? 'desc' : 'asc';

        setOrderBy(sortType)
        setSortColumn(column)
        setData([...data].sort(sortBy(column, sortType)))
    }

    //Для прелоадера решил использовать HOC WithPreloader
    return (
        <Fragment>
            {WithPreloader(Table, isFetching)({orderBy, sortColumn, Sort, data})}
            <Paginator totalCount={500} pageSize={pageSize} currentPage={currentPage} onPageChanged={setCurrentPage}/>
        </Fragment>
    )
}