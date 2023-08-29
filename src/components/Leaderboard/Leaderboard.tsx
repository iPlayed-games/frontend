import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import styles from './Leaderboard.module.css'
import { userData } from '../../data/usersMockData'

const NUM_RECORDS_TO_DISPLAY = 5

interface User {
  id: string
  username: string
  totalBadge: number
}

function getSortedHighScores(): User[] {
  if (userData.length > 0) {
    return [...userData].sort((a, b) => b.totalBadge - a.totalBadge).slice(0, NUM_RECORDS_TO_DISPLAY)
  }
  return []
}

const Leaderboard: React.FC = () => {
  const highScores: User[] = getSortedHighScores()

  return (
    <Paper className={styles.leaderboard}>
      <TableContainer>
        <h2 className={styles.h2}>Leaderboard</h2>
        <Table aria-label="Leaderboard">
          <TableBody>
            {highScores.map(({ id, username, totalBadge }) => (
              <TableRow key={id}>
                <TableCell className={styles.tableText}>
                  <h3>
                    {username}
                    <span className={styles.badgeAlignRight}> {totalBadge}</span>
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

export default Leaderboard
