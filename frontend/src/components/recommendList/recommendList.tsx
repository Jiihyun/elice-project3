import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { usePosts } from '@hooks/usePost';
import Link from 'next/link';
import { BOARD_TYPE } from '@common/constants';

export default function RecommendList() {
  const [emotion, setEmotion] = useState('HAPPINESS'); //HAPPINESS라고 디폴트값
  //TODO: 🍎
  const { data: posts } = usePosts(BOARD_TYPE.RECOMMEND, emotion);
  console.log('해당 posts들이 들어오고있어요', posts); //들어옴

  //감정 카테고리가 바뀔 때마다
  const handleEmotionChange = (e: any) => {
    const { value } = e.target;
    setEmotion(value);
    return emotion;
  };
  console.log('버튼 클릭:', emotion);

  if (posts == undefined) {
    return <div> 포스트 없음.</div>;
  }

  return (
    <div style={{ marginTop: '2%' }}>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleEmotionChange}
        >
          <FormControlLabel name="emotion" value="HAPPINESS" control={<Radio />} label="HAPPINESS" />
          <FormControlLabel name="emotion" value="SADNESS" control={<Radio />} label="SADNESS" />
          <FormControlLabel name="emotion" value="ANGER" control={<Radio />} label="ANGER" />
          <FormControlLabel name="emotion" value="FEAR" control={<Radio />} label="FEAR" />
          <FormControlLabel name="emotion" value="LOVE" control={<Radio />} label="LOVE" />
          <FormControlLabel name="emotion" value="SURPRISE" control={<Radio />} label="SURPRISE" />
        </RadioGroup>
      </FormControl>
      <TableContainer sx={{ width: '100%', margin: 'auto' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>No</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>감정</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>게시글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성자</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>댓글</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>북마크</TableCell>
              <TableCell style={{ fontWeight: 'bold', textAlign: 'center' }}>작성일자</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((posts, index) => (
              <TableRow key={posts.data.id} hover>
                <TableCell style={{ textAlign: 'center' }}>{index + 1}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{posts.data.emotion}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>
                  <Link href={`/recommend-board/${posts.data.id}`}>{posts.data.title}</Link>
                </TableCell>
                <TableCell style={{ textAlign: 'center' }}>{posts.data.author}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{posts.data.commentsCnt}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{posts.data.bookmarksCnt}</TableCell>
                <TableCell style={{ textAlign: 'center' }}>{posts.data.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
