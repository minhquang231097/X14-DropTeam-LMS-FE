import React from 'react'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => <div>THIS IS THE MAIN ADMIN CONTENT</div>

const AdminShowCategories: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminShowCategories
