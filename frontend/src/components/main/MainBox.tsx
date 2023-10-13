import Image from 'next/image';
import { Mainbox, BoxStyled } from '../../styles/MainBox.styled';

export default function MainBox({ height }: { height: number }) {
  return (
    <Mainbox>
      <BoxStyled height={700}>
        <Image src="/main1.png" width={450} height={450} alt="Main Picture" />
        <div className="box1-text">
          <div>감정 표현에 인색한 현대사회</div>
          <div>내 마음을 들여다 볼 시간이 없나요? </div>
        </div>
      </BoxStyled>
      <BoxStyled height={700}>
        <Image src="/main2.png" width={300} height={400} alt="Main Picture" />
        <div className="box2-text">
          <div>글을 쓰면 나의 감정을 쉽게 마주하고 살펴볼 수 있어요</div>
          <div>글을 쓰는 것만으로 블라블라~ </div>
        </div>
      </BoxStyled>
      <BoxStyled height={700}>
        <Image src="/main3.png" width={400} height={400} alt="Main Picture" />
        <div className="box3-text">
          <div> 마음 처방전의 AI가 나의 마음을 분석해서 알맞은 "컨텐츠 서비스"를 처방해 드려요 </div>
          <div>작은 글씨로 부연 설명~~~~</div>
        </div>
      </BoxStyled>
      <BoxStyled height={700}>
        <Image src="/main4.png" width={450} height={350} alt="Main Picture" />
        <div className="box4-text">
          <div> 내 처방전을 다른 사람과 공유할 수 있으며</div>
          <div> 다른 사람들의 컨텐츠 처방전도 살펴볼 수 있어요! </div>
          <div>또 직접 컨텐츠를 추천해 보세요!</div>
        </div>
      </BoxStyled>
      <BoxStyled height={700}>
        <Image src="/main5.png" width={400} height={400} alt="Main Picture" />
        <div>지금! 나의 진심이 담긴 글을 작성해 처방전을 받아보세요!</div>
        <a href="/write">
          <button className="button">글쓰러가기</button>
        </a>
      </BoxStyled>
    </Mainbox>
  );
}
