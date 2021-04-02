function Attributes({ attr }) {
  return (
    <div className="attr">
      <h3>
        Categories
      </h3>
      <div className="tags">
        {attr.categories.map(i => <p key={i.id}>{i.name}</p>)}
      </div>
      <h3>Bussiness Models</h3>
      <div className="tags">
        {attr.businessModels.map(i => <p key={i.id}>{i.name}</p>)}
      </div>
      <h3>Technology Readiness Level</h3>
      <div className="tags">
        {attr.trl.name}
      </div>
    </div>
  )
}

export default Attributes;
