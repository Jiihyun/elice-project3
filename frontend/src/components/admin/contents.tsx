import React, { useState, useEffect } from 'react';
import { StyledTablePagination } from '@styles/admin.styled';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { PostDto } from '@dto/postDto';
import { deletePost } from '@http/admin/admin';
import { useUserPosts } from '@hooks/useAdmin';

export default function Board() {
  const [posts, setPosts] = useState<PostDto[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  //TODO 5/15~

  // const { fetchedPosts, refetch } = useUserPosts();
  //help me! 코치님, board_type와 emotion은 설정을 어떻게 해야 할까요
  // const { data: fetchedPosts, isLoading, error } = useUserPosts(board_type, emotion);
  // useEffect(() => {
  //   if (fetchedPosts) {
  //     setPosts(fetchedPosts);
  //   }
  // }, [fetchedPosts]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 게시글 삭제
  const handleDeletePost = async (id: string) => {
    try {
      await deletePost(id);
      alert('게시글이 삭제되었습니다.');
    } catch (error) {
      alert('게시글 삭제에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const visibleRows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

  return (
    <div style={{ marginTop: '2%' }}>
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(73px * 6)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                No
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                작성자
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                감정
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                제목
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                댓글수
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                북마크수
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                작성일자
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ id, nickname, emotion, content, commentsCnt, bookmarksCnt, created_at }, index) => {
                const currentIndex = page * rowsPerPage + index + 1;
                return (
                  <TableRow key={id} hover>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {currentIndex}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {nickname}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {emotion}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {content}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {commentsCnt}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {bookmarksCnt}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      {created_at}
                    </TableCell>
                    <TableCell align="center" style={{ textAlign: 'center' }}>
                      <Tooltip
                        title="게시글 삭제"
                        color="error"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePost(id);
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
      <StyledTablePagination
        count={posts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          'display': 'flex',
          'justifyContent': 'flex-end',
          '& .MuiSelect-select': {
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '& .MuiTablePagination-actions button': {
            fontSize: '1rem',
            fontWeight: 'bold',
          },
        }}
      />
    </div>
  );
}
