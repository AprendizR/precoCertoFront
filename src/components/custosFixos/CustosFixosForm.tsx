import { useState } from "react";
import { adicionarCustos } from "../../api/custosFixosApi";
import Swal from "sweetalert2";

type Props = {
    onAtualizar: () => void;
};

export function CustosFixosForm({ onAtualizar }: Props) {
    const [custoPorMinutoGas, setCustoPorMinutoGas] = useState<number>(0);
    const [custoPorMinutoEnergia, setCustoPorMinutoEnergia] = useState<number>(0);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        try {
            await adicionarCustos({ custoPorMinutoGas, custoPorMinutoEnergia });
            setCustoPorMinutoGas(0);
            setCustoPorMinutoEnergia(0);
            Swal.fire({
                icon: 'success',
                title: 'Custos fixos adicionados com sucesso!',
            });
            onAtualizar();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao adicionar custos fixos',
                text: (error as Error).message,
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Custo por minuto de gás:
                    <input type="number" step="0.01" value={custoPorMinutoGas}
                        onChange={(e) => setCustoPorMinutoGas(parseFloat(e.target.value) || 0)} />
                </label>
            </div>
            <div>
                <label>
                    Custo por minuto de energia:
                    <input type="number" step="0.01" value={custoPorMinutoEnergia}
                        onChange={(e) => setCustoPorMinutoEnergia(parseFloat(e.target.value) || 0)} />
                </label>
            </div>
            <button type="submit">Adicionar</button>
        </form>
    );
}