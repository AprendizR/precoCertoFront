import type { CustosFixosResponse, CustosFixosRequest } from "../types/CustosFixos";

const API_BASE = "http://localhost:8080/api/custos";

export async function adicionarCustos(custos: CustosFixosRequest): Promise<CustosFixosResponse> {
    const response = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(custos),
    });
    if (!response.ok) throw new Error(`Erro ao adicionar custos: ${response.statusText}`);
    return response.json();
}

export async function listarCustos(): Promise<CustosFixosResponse[]> {
    const response = await fetch(`${API_BASE}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao listar custos: ${response.statusText}`);
    return response.json();
}

export async function buscarCustosPorId(id: number): Promise<CustosFixosResponse> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao buscar custos por ID: ${response.statusText}`);
    return response.json();
}

export async function atualizarCustos(id: number, custos: CustosFixosRequest): Promise<CustosFixosResponse> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(custos),
    });
    if (!response.ok) throw new Error(`Erro ao atualizar custos: ${response.statusText}`);
    return response.json();
}

export async function excluirCustos(id: number): Promise<void> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao excluir custos: ${response.statusText}`);
}