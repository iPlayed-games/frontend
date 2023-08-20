import { FC } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import top100Films from '../tempData'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  return (
    <Stack sx={{ width: 300, backgroundColor: '#fafafa', py: '.5rem', px: '1rem' }}>
      <Autocomplete
        freeSolo
        id="free-solo-demo"
        disableClearable
        options={top100Films.map((option) => option.label)}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              variant="standard"
              margin="none"
              fullWidth
              size="medium"
              InputProps={{
                ...params.InputProps,
                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )
        }}
      />
    </Stack>
  )
}

export default Searchbar
