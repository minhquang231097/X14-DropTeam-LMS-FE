import { useContext } from 'react'
import { Input } from 'antd'
import { MdSearch } from 'react-icons/md'
import { ColorModeContext } from '@/contexts/colorMode'

const AdminSearch = () => {
  const { Search } = Input
  const { mode } = useContext(ColorModeContext)

  const onSearch = (value: string) => console.log(value)

  return (
    <Search
      placeholder='Search...'
      allowClear
      enterButton={<MdSearch className={`text-${mode === 'light' ? 'black' : 'white'} align-middle text-[24px]`} />}
      size='large'
      onSearch={onSearch}
    />
  )
}

export default AdminSearch
