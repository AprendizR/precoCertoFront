import {NavLink} from "react-router-dom";

type Props = {
    onLogout: () => void;
}

export function Header({ onLogout }: Props) {
    return (
        <header className="header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/insumos">Insumos</NavLink>
                <NavLink to="/custos">Custos Fixos</NavLink>
            </nav>
        </header>
    );
}
