import { useEffect, useState } from 'react'
import { Select } from 'antd'
import { debounce } from 'lodash'
import { useQuery } from '@tanstack/react-query'
import http from '@/utils/http'

interface SelectProps {
  endpoint: string
  status: string
  options: any
  optionFilterProp: string
  filterOption?: any
  onChangeInput: (value: string) => void
}

const UseSelectQuery = (endpoint: string, status?: any) => {
  return useQuery({
    queryKey: [`${endpoint}`, status],
    queryFn: async () => {
      const res = await http.get(`/${endpoint}`, {
        params: {
          status,
        },
      })
      return res.data.data
    },
    enabled: !!status,
  })
}

const AdminStatusSelect: React.FC<SelectProps> = ({
  endpoint,
  status,
  options,
  optionFilterProp,
  filterOption,
  onChangeInput,
}) => {
  const [searched, setSearched] = useState<boolean>(false)
  const [statusValue, setStatusValue] = useState<string>(status)

  const filterQuery = UseSelectQuery(endpoint, statusValue)

  useEffect(() => {
    if (searched) {
      debounce(() => {
        filterQuery.refetch()
      }, 1000)
    }
  }, [filterQuery, searched])

  const handleChange = (value: string) => {
    setStatusValue(value)
    setSearched(false)
    onChangeInput(value)
  }

  const handleSearch = () => {
    setSearched(true)
    debounce(() => {
      filterQuery.refetch()
    }, 1000)
  }

  return (
    <Select
      placeholder='Select Status'
      size='large'
      style={{ width: 150 }}
      options={options}
      optionFilterProp={optionFilterProp}
      filterOption={filterOption}
      onChange={handleChange}
      onSearch={handleSearch}
      allowClear
      showSearch
    />
  )
}

export default AdminStatusSelect
