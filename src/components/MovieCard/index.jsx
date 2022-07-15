import { Container } from './styles';
import { Ratings } from '../Ratings';
import { Tag } from '../Tag';

export function MovieCard({ data, ...rest }){
    return(
        <Container {...rest} to='/details/10'>
            <h2>{data.title}</h2>
            <Ratings rating={data.rating}/>
            <p>{data.description}</p>
            <footer>
                {data.tags.map( tag => (
                    <Tag key={tag.id} title={tag.name}/>
                ))}
            </footer>

        </Container>
    );
}