import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        {/* <title> Dashboard | Minimal UI </title> */}
        <title> Trang chủ | Thiếu nhi Thánh Thể Việt Nam</title>
      </Helmet>

      <AppView />
    </>
  );
}
