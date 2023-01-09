import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, Title } from './styles'

type Props = {
    name: string;
    onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: Props) {
    return (
        <Container>
            <Icon />
            <Title>{name}</Title>
            <ButtonIcon
                icon='close'
                type='SECUNDARY'
                onPress={onRemove}
            />
        </Container>
    );
}