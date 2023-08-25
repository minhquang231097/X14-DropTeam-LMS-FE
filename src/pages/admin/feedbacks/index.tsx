import React, { useEffect, useState } from 'react';
import AdminLayout from '@/layouts/admin'
import { Breadcrumb, Input, Button, Card, Image, PaginationProps, Space, Table, Typography, theme } from 'antd'
import VirtualList from 'rc-virtual-list';
import { Avatar, List, message } from 'antd';
import { getFeedback } from '@/apis/feedback.api';
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { searchFeedback } from '@/apis/searchFeedback.api';


interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

type FeedbackList = {
  data: { count: number; data: []; page: number; statusCode: number; total: number; total_page: number }
  searchText: string
  setSearchParams: any
  avatar: string;
  username: string;
  rate: number;
  content: string; 
  filteredData: { data: [] }
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;

const CustomContent = () => {
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [data, setData] = useState<UserItem[]>([]);

  //Example

  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  
  // My code below

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'

  const feedbackData = useQuery({
    queryKey: [ page, limit],
    queryFn: async () => {
      const res = await getFeedback( page, limit)
      return res.data
    },
  }).data

  useQuery({
    queryKey: ['search', searchText],
    queryFn: async () => {
      const res = await searchFeedback(String(searchText).toUpperCase())
      setFilteredData(res.data)
    },
  }).data

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Feedback',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <div className='flex justify-between'>
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Feedback Management
          </Typography.Title>
          <Input.Search
            placeholder='Search Student Name ...'
            style={{ width: 280 }}
            onChange={(e) => handleSearch(e.target.value)}
            onSearch={handleSearch}
          />
        </div>
        <List>
          <VirtualList
            data={feedbackData}
            height={600}
            itemHeight={47}
            itemKey="username"
            onScroll={onScroll}
          >
            {(item: FeedbackList) => (
              <List.Item key={item.username}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.username}
                  description={item.content}
                />
                <div>Content</div>
              </List.Item>
            )}
          </VirtualList>
        </List>
      </Card>
    </div>
  )
}

const AdminFeedbacks: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminFeedbacks
