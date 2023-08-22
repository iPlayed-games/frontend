import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import styles from '../styles/Leaderboard.module.css'

interface Column {
  id: 'name' | 'badgeCount'
  label: string
  minWidth?: number
  maxWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Username', minWidth: 150 },
  {
    id: 'badgeCount',
    label: 'Badges',
    minWidth: 150,
    maxWidth: 150,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]

interface Data {
  name: string
  badgeCount: number
}

function createData(name: string, badgeCount: number): Data {
  return { name, badgeCount }
}

const rows = [
  createData('Dennis', 88),
  createData('Andy', 103),
  createData('Hector', 58),
  createData('Raymond', 78),
  createData('Simon', 98),
]

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  // };

  return (
    <Paper className={styles.leaderboard}>
      <TableContainer>
        <h2 className={styles.h2}>Leaderboard</h2>
        <Table aria-label="Leaderboard">
          {/* <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id]
                    return (
                      <TableCell className={styles.tableText} key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value} <span> Badges</span>
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Paper>
  )
}
