const Pizza = ({ name, ingridients, photoName, price }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div className="">
        <h3>{name}</h3>
        <p>{ingridients}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}
export default Pizza
