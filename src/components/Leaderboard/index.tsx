import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import styles from './Leaderboard.module.css'
import { userData } from '../../data/usersMockData'
import { getSortedHighScores } from '@/src/utils/getSortedHighScores'
import { User } from '../../types/userType'

const NUM_RECORDS_TO_DISPLAY = 5

export default function Leaderboard() {
  const highScores: User[] = getSortedHighScores(userData, NUM_RECORDS_TO_DISPLAY)

  return (
    <Paper className={styles.leaderboard}>
      <TableContainer>
        <h2 className={styles.title}>Leaderboard</h2>
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
