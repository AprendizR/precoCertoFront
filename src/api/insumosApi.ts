import type { InsumosResponse, InsumosRequest } from "../types/Insumos";

const API_BASE = "http://localhost:8080/api/insumos";

export async function adicionarInsumo(insumo: InsumosRequest): Promise<InsumosResponse> {
    const response = await fetch(`${API_BASE}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(insumo),
    });
    if (!response.ok) throw new Error(`Erro ao adicionar insumo: ${response.statusText}`);
    return response.json();
}

export async function listarInsumos(): Promise<InsumosResponse[]> {
    const response = await fetch(`${API_BASE}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao listar insumos: ${response.statusText}`);
    return response.json();
}

export async function buscarInsumoPorId(id: number): Promise<InsumosResponse> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao buscar insumo por ID: ${response.statusText}`);
    return response.json();
}

export async function atualizarInsumo(id: number, insumo: InsumosRequest): Promise<InsumosResponse> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(insumo),
    });
    if (!response.ok) throw new Error(`Erro ao atualizar insumo: ${response.statusText}`);
    return response.json();
}

export async function excluirInsumo(id: number): Promise<void> {
    const response = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) throw new Error(`Erro ao excluir insumo: ${response.statusText}`);
}