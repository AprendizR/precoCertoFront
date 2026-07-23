export interface CustosFixosResponse {
    id: number;
    custoPorMinutoGas: number;
    custoPorMinutoEnergia: number;
}

export interface CustosFixosRequest {
    custoPorMinutoGas: number;
    custoPorMinutoEnergia: number;
}