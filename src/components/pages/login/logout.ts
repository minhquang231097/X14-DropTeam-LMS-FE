const handleLogout = (navigate: any) => {
  localStorage.removeItem('user')
  navigate(0)
}
export default handleLogout
