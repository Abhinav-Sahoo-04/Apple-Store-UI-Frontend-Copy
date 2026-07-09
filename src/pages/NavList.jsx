import "../assets/styles/NavList.css"
export default function NavList({ store, classN }) {
  return (
    <div className={`${classN}`}>
      <div className="left">
      <p>{store[0].category}</p>
        <ul>
        {store[0].links.map((st) => (
          <li key={st}><strong>{st}</strong></li>
        ))}
      </ul>
      </div>
      <div className="middle">
        <p>{store[1].category}</p>
        <ul>
        {store[1].links.map((st) => (
          <li key={st}><strong>{st}</strong></li>
        ))}
      </ul>
      </div>
      <div className="right">
        <p>{store[2].category}</p>
        <ul>
        {store[2].links.map((st) => (
          <li key={st}><strong>{st}</strong></li>
        ))}
      </ul>
      </div>
    </div>
  );
}
