'use client';
import React, { useState, ChangeEvent } from 'react';
import { Avatar, Button, Tooltip } from '@mui/material';
import {
  BodyBox,
  ChatContainer,
  MessagesContainer,
  Message,
  MessageContent,
  MessageText,
  Divider,
  ChatInputContainer,
  ButtonsContainer,
  StyledTextField,
  EnterButton,
} from '@styles/write.styled';
import { SaveModal } from '@components/titleModal/saveModal';
import { ShareModal } from '@components/titleModal/shareModal';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

// help me! 코치님, 다른 코드 작성으로 여기까지 진도를 못 뽑았지만.. 질문드립니다.
// 오피스아워때 설명해주셨는데 제가 잘 이해를 못해서 다시한번 질문드려요 (무지한 저를 용서해주세요..ㅠㅠ)
// 쳇봇 형식으로 질문 -> 답변 으로 응답을 받을건데, 답변 받은것 중에 원하는 것만 저장, 공유하기를 하려고 합니다.
// 저장하기를 누르면 제목을 입력하고 저장을 하게 되어 있는데,, 질문-답변-제목 을 한 세트로 저장을 하려고 합니다.
// 코드를 어떤식으로 작성해야 하는지 감조차 잡히지 않아서 질문드립니다.
export default function Write() {
  const [messages, setMessages] = useState([
    { id: 2, isUser: false, text: '안녕하세요, 현재의 기분을 자유롭게 작성해보세요!' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const userAvatar = '/img.png';
  const chatAvatar = '/heart.png';

  /// 모달 상태 관리
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [saveModalInputValue, setSaveModalInputValue] = useState('');
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareModalInputValue, setShareModalInputValue] = useState('');
  // 모달 열기/닫기 핸들러
  const handleSaveModalOpen = () => {
    setSaveModalOpen(true);
  };
  const handleSaveModalClose = () => {
    setSaveModalOpen(false);
  };
  const handleSaveModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSaveModalInputValue(e.target.value);
  };
  const handleShareModalOpen = () => {
    setShareModalOpen(true);
  };
  const handleShareModalClose = () => {
    setShareModalOpen(false);
  };
  const handleShareModalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShareModalInputValue(e.target.value);
  };

  const handleSend = () => {
    setMessages((prevMessages) => [...prevMessages, { id: Date.now(), isUser: true, text: inputValue }]);
    setInputValue('');

    // 답변 임의 설정
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now() + 1,
          isUser: false,
          text: '당신의 기분이 많이 우울하군요, 헤이즈- 돌아오지마 노래를 들어보세요. 더 우울해집니다 ^^',
        },
      ]);
    }, 1000); // 1초 후에 답변 출력
  };

  return (
    <BodyBox>
      <ChatContainer>
        <MessagesContainer>
          {messages.map((message, index) => (
            <React.Fragment key={message.id}>
              <Message>
                <Avatar src={message.isUser ? userAvatar : chatAvatar} />
                <MessageContent>
                  <MessageText $isUser={message.isUser} variant="body1">
                    {message.text}
                  </MessageText>
                  {/* 질문자의 메시지가 아닌 경우에만 버튼 컨테이너 렌더링 */}
                  {!message.isUser && (
                    <ButtonsContainer>
                      <Tooltip title="저장하기">
                        <Button size="small" onClick={handleSaveModalOpen}>
                          <SaveAltIcon color="action" />
                        </Button>
                      </Tooltip>
                      <Tooltip title="공유하기">
                        <Button size="small" onClick={handleShareModalOpen}>
                          <ShareIcon color="action" />
                        </Button>
                      </Tooltip>
                    </ButtonsContainer>
                  )}
                </MessageContent>
              </Message>
              {index < messages.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </MessagesContainer>
        <ChatInputContainer color="action">
          <StyledTextField
            variant="outlined"
            size="small"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="당신의 기분을 표현해주세요."
            fullWidth
          />
          <EnterButton variant="contained" onClick={handleSend} disabled={!inputValue}>
            Enter
          </EnterButton>
        </ChatInputContainer>
      </ChatContainer>
      {/* Modal */}
      <SaveModal
        open={saveModalOpen}
        onClose={handleSaveModalClose}
        value={saveModalInputValue}
        onChange={handleSaveModalInputChange}
      />
      <ShareModal
        open={shareModalOpen}
        onClose={handleShareModalClose}
        value={shareModalInputValue}
        onChange={handleShareModalInputChange}
      />
    </BodyBox>
  );
}
