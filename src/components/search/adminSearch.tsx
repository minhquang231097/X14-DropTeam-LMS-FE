import { useContext, useEffect, useState } from 'react'
import { Input } from 'antd'
import { MdSearch } from 'react-icons/md'
import { debounce } from 'lodash'
import { ColorModeContext } from '@/contexts/colorMode'
import { UseSearchQuery } from '@/hooks/useSearchQuery'

interface SearchProps {
  endpoint: string
  keysearch: string
  onChangeInput: (value: string) => void
}

const AdminSearch: React.FC<SearchProps> = ({ endpoint, keysearch, onChangeInput }) => {
  const { mode } = useContext(ColorModeContext)
  const [searched, setSearched] = useState<boolean>(false)
  const [keySearch, setKeySearch] = useState<string>(keysearch)

  const searchQuery = UseSearchQuery(endpoint, keySearch)

  useEffect(() => {
    if (searched) {
      searchQuery.refetch()
    }
  }, [searchQuery, searched])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeySearch(event.target.value)
    setSearched(false)
    onChangeInput(event.target.value)
  }

  const handleSearch = () => {
    setSearched(true)
    debounce(() => {
      searchQuery.refetch()
    }, 1000)
  }

  return (
    <Input.Search
      placeholder='Search...'
      allowClear
      enterButton={<MdSearch className={`text-${mode === 'light' ? 'black' : 'white'} align-middle text-[24px]`} />}
      size='large'
      value={keySearch || ''}
      onPressEnter={handleSearch}
      onSearch={handleSearch}
      onChange={onChange}
    />
  )
}

export default AdminSearch
