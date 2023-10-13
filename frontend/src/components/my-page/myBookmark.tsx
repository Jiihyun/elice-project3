'use Client';
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkEditIcon from '@mui/icons-material/Edit';

// help me! 코치님 북마크에 카테고리를 추가하고 수정, 삭제하는 코드를 구현하고 싶은데 참고할만한 자료가 있을까요?
interface Row {
  id: number;
  date: string;
  emotion: string;
  title: string;
  bookmarked: boolean;
}

const rows: Row[] = [
  {
    id: 1,
    date: '2023-01-01',
    emotion: '슬픔',
    title: '게시글제목',
    bookmarked: false,
  },
];

export default function Bookmark() {
  const [posts, setPosts] = useState<Row[]>(rows);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = posts.filter((row) => row.id !== id);
    setPosts(updatedPosts);
  };

  const handleBookmark = (id: number) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, bookmarked: !post.bookmarked } : post)));
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleSave = (id: number) => {
    setPosts(posts.map((post) => (post.id === id ? { ...post, title: editedTitle } : post)));
    setEditingId(null);
  };

  const visibleRows = posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).length;

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
              <TableCell style={{ fontWeight: 'bold', textAlign: 'right' }}>북마크</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              const currentIndex = page * rowsPerPage + index + 1;
              return (
                <TableRow key={row.id} hover>
                  <TableCell style={{ textAlign: 'left' }}>{currentIndex}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: 'left' }}>{row.emotion}</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>
                    {row.title.length > 40 ? row.title.slice(0, 40) + '...' : row.title}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip
                      title="북마크 해제"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(row.id);
                      }}
                    >
                      <IconButton>
                        <BookmarkRemoveIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="북마크 추가"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookmark(row.id);
                      }}
                    >
                      <IconButton>
                        <BookmarkAddIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      title="북마크 수정"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(row.id);
                      }}
                    >
                      <IconButton>
                        <BookmarkEditIcon />
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
        count={posts.length}
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
