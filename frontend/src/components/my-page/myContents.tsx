'use Client';
import React, { useState, useEffect } from 'react';
import { useGetPosts } from '@hooks/useGetPost';
import { deletePost } from '@http/mypage/myContents';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { SERVER_URL } from 'common/constants';
// help me! 코치님 handleDeletePost 함수를 생성하여 삭제 진행을 하려고 하는데, 삭제가 되지 않습니다. 무슨 이유일까요?
interface Row {
  id: number;
  created_at: string;
  emotion: string;
  content: string;
}

export default function MyContents() {
  const [contents, setContents] = useState<Row[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const visibleRows = contents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;
  const { data: fetchedPosts, refetch } = useGetPosts();

  //코드리뷰 - 훅 제거해라,,근데 그럼 조회가 안되는디,,?
  useEffect(() => {
    if (fetchedPosts && fetchedPosts.data) {
      setContents(fetchedPosts.data);
    }
  }, [fetchedPosts]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 게시글 삭제
  const handleDeletePost = async (id: any) => {
    try {
      await deletePost(id);
      refetch(); // 게시물 삭제 후 목록을 다시 불러오기
      console.log('성공'); //TODO 성공이 뜨는데 왜 안 사라지지..?
    } catch (error) {
      console.error('Failed to delete the post:', error);
    }
  };

  return (
    <div style={{ marginTop: '2%' }}>
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(73px * 6)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>작성일자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'right' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const currentIndex = page * rowsPerPage + index + 1;

              return (
                <TableRow key={row.id} hover>
                  <TableCell style={{ textAlign: 'left' }}>{currentIndex}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>
                    {new Date(row.created_at).toLocaleDateString('ko-KR')}
                  </TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.emotion}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    <Link href={`${SERVER_URL}/`}>
                      {row.content.length > 20 ? row.content.slice(0, 20) + '...' : row.content}
                    </Link>
                  </TableCell>
                  <TableCell style={{ textAlign: 'right' }}>
                    <Tooltip
                      title="게시글 삭제"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(row.id);
                      }}
                    >
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={contents.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          'width': '100%',
          'margin': '1%',
          'display': 'flex',
          'justifyContent': 'flex-end',
          '& .MuiSelect-select': {
            fontSize: '1rem',
          },
          '& .MuiTablePagination-actions button': {
            fontSize: '1rem',
          },
        }}
      />
    </div>
  );
}
