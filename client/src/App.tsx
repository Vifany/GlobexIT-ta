import StaffPage from "./pages/staff-page"
import React from "react"
import useEmployeeStore from "./utils/employeeStore"

const App:React.FC = () => {
  const {fetchEmployees} = useEmployeeStore();
  React.useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <StaffPage />
  )
}

export default App
