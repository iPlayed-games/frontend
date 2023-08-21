import { FC } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import top100Films from '../tempData'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, backdropClasses, useAutocomplete } from '@mui/material'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import List from '@mui/material/List'
import styles from '../styles/Searchbar.module.css'

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  const { getRootProps, getInputLabelProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: 'use-autocomplete-demo',
      options: top100Films,
      getOptionLabel: (option) => option.label,
    })

  return (
    <Stack sx={{ backgroundColor: '#fafafa' }}>
      <div className={styles.searchbox} {...getRootProps()}>
        <SearchIcon />
        {/* <InputLabel {...getInputLabelProps()}>useAutocomplete</InputLabel> */}
        <input className={styles.input} placeholder="Search..." {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <List {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <li key={index} {...getOptionProps({ option, index })}>
              {option.label}
            </li>
          ))}
        </List>
      ) : null}
    </Stack>
  )
}

export default Searchbar
