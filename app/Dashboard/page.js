// import Dashboard from '@/components/Dashboard';
import DashboardCom from '@/components/Dashboard';
import Loading from '@/components/Loading';
import Login from '@/components/Login';
import Main from '@/components/Main';

export const metadata = {
    title: "Date Piker ⋅ Dashboard",
};  

export default function Dashboard() {

  return (
    <Main>
      <DashboardCom/>
    </Main>
  )
}
