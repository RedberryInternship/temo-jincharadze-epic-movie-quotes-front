import { useDashboard, Navigation, Panel } from 'components';

const Dashboard = (props: { children: React.ReactNode }) => {
  const { showPanel, closeModals } = useDashboard();
  return (
    <div>
      <Navigation />
      <div className='md:hidden'>
        {showPanel.isOpen && (
          <div className='fixed top-0 z-[10] md:hidden'>
            <Panel />
          </div>
        )}
      </div>
      <div className='flex bg-dashboard-color mt-[5.4rem]'>
        <div
          className='w-96 h-screen hidden md:flex pl-10'
          onClick={closeModals}
        >
          <div className='hidden md:flex fixed'>
            <Panel />
          </div>
        </div>
        <div className='w-full h-screen flex justify-center'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
