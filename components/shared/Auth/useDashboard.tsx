import { useSelector } from 'react-redux';

const useDashboard = () => {
  const showPanel = useSelector(
    (state: { panel: { isOpen: boolean } }) => state.panel
  );

  return { showPanel };
};

export default useDashboard;
