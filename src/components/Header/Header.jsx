import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import logoSrc from "assets/icons/favicon.ico";
import { Logo } from "components/logo";

export function Header(props) {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container} justify-content-center`}>
      <div className="col-xs-12 col-sm-12">
        <Logo
          title="Ry Ry"
          subtitle={"Thế giới của bố và mẹ ❤"}
          image={logoSrc}
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
}
