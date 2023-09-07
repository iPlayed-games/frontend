import { TableText, UserBox, Container, Title, Username, BadgeContainer, UserContainer, Divider } from './styles'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import { userData } from '../../data/usersMockData'
import { getSortedHighScores } from '../../utils/getSortedHighScores'
import { User } from '@typing/user'
import { AccountCircleIcon } from '@svg'

const NUM_RECORDS_TO_DISPLAY = 5

export default function Leaderboard() {
  const highScores: User[] = getSortedHighScores(userData, NUM_RECORDS_TO_DISPLAY)

  return (
    <Container>
      <TableContainer>
        <Title>Leaderboard</Title>
        <Table aria-label="Leaderboard">
          <TableBody>
            {highScores.map(({ id, username, totalBadge }) => (
              <TableRow key={id}>
                <TableText>
                  <UserContainer>
                    <UserBox>
                      <AccountCircleIcon />
                      <Username>{username}</Username>
                    </UserBox>
                    <BadgeContainer> {totalBadge} badges</BadgeContainer>
                  </UserContainer>
                </TableText>
                <Divider />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
