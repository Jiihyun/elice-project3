import { ContBox, Text } from '../../styles/postdetail.styled';

export default function AiText() {
  return (
    <Text height={'auto'}>
      <h3>ai분석 결과</h3>
      <ContBox>
        <div className="cont-box">
          <h4 className="cont-title">감정 카테고리</h4>
          <div>기쁨</div>
        </div>
        <div className="cont-box">
          <h4 className="cont-title">처방 음악</h4>
          <div>떙떙땡의 어쩌구 노래</div>
        </div>
        <div className="cont-box">
          <h4 className="cont-title">처방 영화</h4>
          <div>영화 이름 어쩌구</div>
        </div>
        <div className="cont-box">
          <h4 className="cont-title">처방 도서</h4>
          <div> 책 이름 어쩌구</div>
        </div>
      </ContBox>
    </Text>
  );
}
