import React from 'react'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => <div>THIS IS THE MAIN ADMIN CONTENT</div>

const AdminChangePassword: React.FC = () => <AdminLayout content={<CustomContent />} />

export default AdminChangePassword
