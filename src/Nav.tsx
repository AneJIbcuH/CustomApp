import { useNavigate } from "react-router-dom";

const Nav: React.FC = () => {
 const navigate = useNavigate()

  return (
    <nav className="nav">
      <button onClick={() => navigate("/")}>Главная</button>
      <button onClick={() => navigate("/Share")}>Акция</button>
      <button onClick={() => navigate("/MyChart")}>График</button>
      <button onClick={() => navigate("/News")}>Новости компании</button>
    </nav>
  );
};

export default Nav;
