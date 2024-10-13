import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Title = styled.Text`
    color: #FFF;
    font-size: 32px;
`;

export const GroupName = styled.TextInput`
    flex: 1;
    background-color: aliceblue;
    height: 52px;
    font-size: 24px;
    padding: 8px;
`;

