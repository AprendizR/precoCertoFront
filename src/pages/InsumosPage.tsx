import { useState, useEffect } from "react";
import { InsumoForm } from "../components/insumos/InsumoForm";
import { InsumosResponse } from "../types/Insumos";
import { listarInsumos } from "../api/insumosApi";
import { InsumosList } from "../components/insumos/InsumosList";


export function InsumosPage() {
    const [insumos, setInsumos] = useState<InsumosResponse[]>([]);

    async function carregarInsumos() {
        try {
            const response = await listarInsumos();
            setInsumos(response);
        } catch (error) {
            console.error("Erro ao carregar insumos:", error);
        }
    }
    useEffect(() => {
        carregarInsumos();
    },[]);

    return (
        <div>
            <h1>Insumos</h1>
            <InsumoForm onCadastrado={carregarInsumos} />
            <InsumosList insumos={insumos} onAtualizado={carregarInsumos} />
        </div>
    );
}


