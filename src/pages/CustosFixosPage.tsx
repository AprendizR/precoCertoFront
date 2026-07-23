import { useEffect, useState } from "react";
import { CustosFixosResponse } from "../types/CustosFixos";
import { listarCustos } from "../api/custosFixosApi";
import { CustosFixosForm } from "../components/custosFixos/CustosFixosForm";
import { CustosFixosList } from "../components/custosFixos/CustosFixosList";

export function CustosFixosPage() {
    const [custosFixos, setCustosFixos] = useState<CustosFixosResponse[]>([]);

    async function carregarCustos() {
        try {
            const response = await listarCustos();
            setCustosFixos(response);
        } catch (error) {
            console.error("Erro ao carregar custos fixos:", error);
        }
    }
    useEffect(() => {
        carregarCustos();
    }, []);

    return (
        <div>
            <h1>Custos Fixos</h1>
            <CustosFixosForm onAtualizar={carregarCustos} />
            <CustosFixosList custosFixos={custosFixos} onAtualizado={carregarCustos} />
        </div>
    );
}