import React from 'react'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => <div>THIS IS THE MAIN ADMIN CONTENT</div>
const CustomSider = () => <div>Custom Sider</div>

const AdminHome: React.FC = () => (
  <AdminLayout
    sider={<CustomSider />}
    content={<CustomContent />}
  />
)

export default AdminHome
