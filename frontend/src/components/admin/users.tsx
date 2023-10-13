import React, { useState, useEffect } from 'react';
import { StyledTablePagination } from '@styles/admin.styled';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AdminDto } from '@dto/adminDto';
import { useUserPost, useDeleteUser } from '@hooks/useAdmin';

// TODO 이미지, 플랫폼 가져오기
export default function Users() {
  const [posts, setPosts] = useState<AdminDto[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const deleteUserMutation = useDeleteUser();
  const { data, isSuccess } = useUserPost();

  // posts 상태가 업데이트되면 그에 따라 컴포넌트가 재렌더링
  useEffect(() => {
    if (isSuccess) {
      setPosts(data);
    }
  }, [isSuccess, data]);

  // 카카오, 네이버 로고
  const renderPlatform = (platform: string) => {
    if (!platform) return null;
    if (platform === 'KAKAO') {
      return <img src="/kakao-icon.png" alt="Kakao" width="60" height="30" />;
    } else if (platform === 'NAVER') {
      return <img src="/naver-icon.png" alt="Naver" width="60" height="30" />;
    } else {
      return null;
    }
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // 유저 삭제 헨들러
  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUserMutation.mutateAsync(id);
      alert('회원이 삭제되었습니다.');
    } catch (error) {
      alert('회원 삭제에 실패했습니다. 다시 시도해 주세요.');
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
                닉네임
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                이메일
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                프로필
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                플랫폼
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                가입일자
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold', textAlign: 'center' }}>
                비활성화
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
                    <img src={row.profileImage} alt="Profile" />
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {renderPlatform(row.platform)}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    {new Date(row.created_at).toLocaleDateString('ko-KR')}
                  </TableCell>
                  <TableCell align="center" style={{ textAlign: 'center' }}>
                    <Tooltip
                      title="회원 삭제"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteUser(row.id);
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
        onRowsPerPageChange={handleChangePerPage}
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
