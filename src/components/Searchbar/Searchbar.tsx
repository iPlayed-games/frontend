import { FC } from 'react'
import Stack from '@mui/material/Stack'
import top100Films from '../../data/tempData'
import SearchIcon from '@mui/icons-material/Search'
import { useAutocomplete } from '@mui/material'
import List from '@mui/material/List'
import styles from './Searchbar.module.css'

interface SearchbarProps {}

const Searchbar: FC<SearchbarProps> = ({}) => {
  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
    id: 'use-autocomplete',
    options: top100Films,
    getOptionLabel: (option) => option.label,
  })

  return (
    <Stack sx={{ backgroundColor: '#fafafa' }}>
      <div className={styles.searchbox} {...getRootProps()}>
        <SearchIcon />
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
