import { Attr, Tags } from './Attributes.styled';

function Attributes({ attr }) {
  return (
    <Attr>
      <h3>
        Categories
      </h3>
      <Tags>
        {attr.categories.map(i => <p key={i.id}># {i.name}</p>)}
      </Tags>
      <h3>Bussiness Models</h3>
      <Tags>
        {attr.businessModels.map(i => <p key={i.id}># {i.name}</p>)}
      </Tags>
      <h3>Technology Readiness Level</h3>
      <Tags>
        <p>{attr.trl.name}</p>
      </Tags>
    </Attr>
  );
}

export default Attributes;
