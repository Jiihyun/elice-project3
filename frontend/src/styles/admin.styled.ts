import styled from '@emotion/styled';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import Tab, { tabClasses } from '@mui/base/Tab';
import { buttonClasses } from '@mui/base/Button';
import { createTheme } from '@mui/material/styles';
import { TablePagination } from '@mui/material';

const blue = {
  50: '#F5F0FF',
  100: '#D8C2FF',
  200: '#B980FF',
  300: '#A366FF',
  400: '#8C33FF',
  500: '#7F00FF',
  600: '#7200E5',
  700: '#5900B2',
  800: '#4C0099',
  900: '#3A0075',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

export const StyledTab = styled(Tab)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const theme = createTheme();
export const StyledTabsList = styled(TabsList)`
  min-width: 400px;
  background-color: ${blue[400]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 8px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
`;

//admin 스타일
export const AdminInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: left; */
  margin: 10px;
`;

export const Avatar = styled.img<{ src: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const AdminInfoText = styled.div`
  line-height: 1.1;
  text-align: left;
  margin-left: 40px; // 원하는 간격으로 조절
`;

export const StyledTablePagination = styled(TablePagination)`
  && {
    display: flex;
    justify-content: flex-end;

    .MuiTypography-root {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }

    .MuiSelect-select {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }

    .MuiMenuItem-root {
      font-size: 1rem;
      /* font-weight: bold; */
    }

    .MuiButtonBase-root {
      font-size: 1rem;
      /* font-weight: bold; */
      /* color: red; */
    }
  }
`;
