import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

// Todo 전역 로딩 구현
// ! 코치님 로딩 페이지를 구현하려고 하니 오류가 발생하여 해결점을 모르겠어요 ㅠㅠ
export default function Loading() {
  return (
    <div>로딩</div>
    // <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
    //   <CircularProgress color="secondary" />
    //   <CircularProgress color="success" />
    //   <CircularProgress color="inherit" />
    // </Stack>
  );
}
