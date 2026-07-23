export type UnidadeMedida = 'G' | 'ML' | 'UN';

export interface InsumosResponse {
    id: number;
    nomeInsumo: string;
    quantidadeAtual: number;
    unidadeMedida: UnidadeMedida;
    custoMedioUnitario: number;
    dataCriacao: string;
} 

export interface InsumosRequest {
    nomeInsumo: string;
    unidadeMedida: UnidadeMedida;
}