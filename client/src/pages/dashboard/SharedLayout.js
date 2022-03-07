import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-jobs">All jobs</Link>
        <Link to="add-job">Add job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
