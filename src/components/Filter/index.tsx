import { TouchableOpacityProps } from 'react-native';
import { Container, Title, FilteStylesProps } from './style';

type Props = TouchableOpacityProps & FilteStylesProps & {
    title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    );
}