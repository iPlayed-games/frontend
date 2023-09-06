import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import styles from './Leaderboard.module.css'
import { userData } from '../../data/usersMockData'
import { getSortedHighScores } from '../../utils/getSortedHighScores'
import { User } from '@typing/user'
import { AccountCircleIcon } from '@svg'

const NUM_RECORDS_TO_DISPLAY = 5

export default function Leaderboard() {
  const highScores: User[] = getSortedHighScores(userData, NUM_RECORDS_TO_DISPLAY)

  return (
    <Paper className={styles.leaderboard}>
      <TableContainer>
        <h2 className={styles.leaderboardTitle}>Leaderboard</h2>
        <Table aria-label="Leaderboard">
          <TableBody>
            {highScores.map(({ id, username, totalBadge }) => (
              <TableRow key={id}>
                <TableCell className={styles.tableText}>
                  <div className={styles.userContainer}>
                    <div className={styles.userBox}>
                      <AccountCircleIcon />
                      <h3 className={styles.username}>{username}</h3>
                    </div>
                    <span className={styles.badgeAlignRight}> {totalBadge} Badges</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
