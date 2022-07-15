import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles'

export function MovieItem({isNew, value, onClink, ...rest}) {

    return(
        <Container isNew={isNew}>
            <input type="text" 
            value={value} 
            readOnly={!isNew}
            {...rest}
            />

            <button
            type='button'
            onClick={onClink}
            className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus/> : <FiX/>}

            </button>
        </Container>
    );

}