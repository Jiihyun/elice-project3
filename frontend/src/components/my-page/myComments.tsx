'use Client';
import React, { useState, useEffect } from 'react';
import { useGetMyComments } from '@hooks/useGetPost';
import { deleteMyComment } from '@http/mypage/myComments';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// WAIT 백엔드 아직 준비 안됨
interface Row {
  id: number;
  date: string;
  emotion: string;
  content: string;
}

export default function MyComments() {
  const [comments, setComments] = useState<Row[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const { data: fetchedComments, refetch } = useGetMyComments();

  useEffect(() => {
    if (fetchedComments && fetchedComments.data) {
      setComments(fetchedComments.data);
    }
  }, [fetchedComments]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteMyComment = async (id: number) => {
    try {
      await deleteMyComment(id);
      refetch(); // 댓글 삭제 후 목록을 다시 불러오기
    } catch (error) {
      console.error('Failed to delete the comment:', error);
    }
  };
  const visibleRows = comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

  return (
    <div style={{ marginTop: '2%' }}>
      <TableContainer sx={{ width: '100%', margin: 'auto', maxHeight: visibleRows < 6 ? 'auto' : 'calc(73px * 6)' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>작성일자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'left' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>제목</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'right' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const currentIndex = page * rowsPerPage + index + 1;
              return (
                <TableRow key={row.id} hover>
                  <TableCell style={{ textAlign: 'left' }}>{currentIndex}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.emotion}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {row.content.length > 40 ? row.content.slice(0, 40) + '...' : row.content}
                  </TableCell>
                  <TableCell style={{ textAlign: 'right' }}>
                    <Tooltip
                      title="댓글 삭제"
                      color="error"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteMyComment(row.id);
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
        count={comments.length}
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
