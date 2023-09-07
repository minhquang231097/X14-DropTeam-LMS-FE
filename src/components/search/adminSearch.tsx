import { useContext, useState } from 'react'
import { Input } from 'antd'
import { MdSearch } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import { ColorModeContext } from '@/contexts/colorMode'
import http from '@/utils/http'

interface SearchProps {
  endpoint?: string
  keysearch?: string
}

const useSearchQuery = (endpoint?: string, keysearch?: string) => {
  return useQuery({
    queryKey: [`${endpoint}`],
    queryFn: async () => {
      const res = await http.get(`/${endpoint}`, {
        params: {
          search: keysearch,
        },
      })
      return res.data.data
    },
    staleTime: 1000,
  })
}

const AdminSearch: React.FC<SearchProps> = ({ endpoint }) => {
  const { mode } = useContext(ColorModeContext)
  const [keySearch, setKeySearch] = useState<string>('')

  const { data } = useSearchQuery(endpoint, keySearch)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeySearch(event.target.value)
  }

  return (
    <Input.Search
      placeholder='Search...'
      allowClear
      enterButton={<MdSearch className={`text-${mode === 'light' ? 'black' : 'white'} align-middle text-[24px]`} />}
      size='large'
      value={keySearch}
      onChange={onChange}
    />
  )
}

export default AdminSearch
