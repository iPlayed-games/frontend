import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import styles from './Leaderboard.module.css'
import { userData } from '../../data/usersMockData'

// Set Leaderboard Record Limit
const sortedHighScores = [...userData].sort((a, b) => b.totalBadge - a.totalBadge)
const highScores = sortedHighScores.slice(0, 5)
export default function Leaderboard() {
  return (
    <Paper className={styles.leaderboard}>
      <TableContainer>
        <h2 className={styles.h2}>Leaderboard</h2>
        <Table aria-label="Leaderboard">
          <TableBody>
            {highScores.map((user) => (
              <TableRow key={user.id}>
                <TableCell className={styles.tableText}>
                  <h3>
                    {user.username}
                    <span className={styles.alignRight}> {user.totalBadge}</span>
                  </h3>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
