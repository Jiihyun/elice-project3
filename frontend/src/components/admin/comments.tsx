import React, { useState } from 'react';
import { StyledTablePagination } from '@styles/admin.styled';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useUserComments } from '@hooks/useAdmin';
import { deleteUserComment } from '@http/admin/admin';
import { AdminDto } from '@dto/adminDto';
import { BOARD_TYPE } from '@common/constants';
//TODO 댓글 내용은 어디서 불러와야 하지?
//TODO 백엔드 준비되면 테스트 해보자..아직 완성은 아닌듯
import { Link } from 'react-router-dom';

export default function Comments() {
  const [posts, setPosts] = useState<AdminDto[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  // const { comments, isLoading, error } = useUserComments('board_type_value', 'emotion_value');
  const { data: comments, isSuccess, error } = useUserComments('user_id_value', 'board_type_value', 'emotion_value');
  const handleDeleteComment = async (id: string) => {
    try {
      await deleteUserComment(id);
      alert('댓글이 삭제되었습니다.');
    } catch (error) {
      alert('댓글 삭제에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                닉네임
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                이메일
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                제목
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                댓글
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                관리
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const currentIndex = page * rowsPerPage + index + 1;
              return (
                <TableRow key={row.id} hover>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {currentIndex}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {row.nickname}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {row.email}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {row.title}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {row.comment}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    <Tooltip
                      title="댓글 삭제"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteComment(row.id);
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
