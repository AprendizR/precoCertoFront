import { Fragment, useState } from "react";
import { CustosFixosResponse, CustosFixosRequest } from "../../types/CustosFixos";
import { atualizarCustos, excluirCustos } from "../../api/custosFixosApi";
import { confirmAction } from "../../utils/sweetAlertToast";
import Swal from "sweetalert2";

type Props = {
    custosFixos: CustosFixosResponse[];
    onAtualizado: () => void;
}

export function CustosFixosList({ custosFixos, onAtualizado }: Props) {
    const [editando, setEditando] = useState<CustosFixosResponse | null>(null);
    const [form, setForm] = useState<CustosFixosRequest>({
        custoPorMinutoGas: 0,
        custoPorMinutoEnergia: 0
    });

    function abrirEdicao(custos: CustosFixosResponse) {
        setEditando(custos);
        setForm({
            custoPorMinutoGas: custos.custoPorMinutoGas,
            custoPorMinutoEnergia: custos.custoPorMinutoEnergia
        });
    }

    function handleSalvar() {
        if (!editando) return;
        try {
            atualizarCustos(editando.id, form);
            Swal.fire({
                icon: 'success',
                title: 'Custos fixos atualizados com sucesso!',
            });
            setEditando(null);
            onAtualizado();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao atualizar custos fixos',
                text: (error as Error).message,
            });
        }
    }

    async function handleDeletar(custosId: number) {
        const confirmar = await confirmAction({
            title: "Excluir custos fixos?",
            text: "Tem certeza que deseja excluir estes custos fixos? Esta ação não pode ser desfeita.",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar",
        });
        if (!confirmar) return;
        try {
            await excluirCustos(custosId);
            Swal.fire({
                icon: 'success',
                title: 'Custos fixos excluídos com sucesso!',
            });
            onAtualizado();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao excluir custos fixos',
                text: (error as Error).message,
            });
        }
    }

    if (custosFixos.length === 0) {
        return <p>Nenhum custo fixo cadastrado.</p>;
    }

    return (
        <div>
            <h3>Custos Fixos Cadastrados</h3>
            <table>
                <thead>
                    <tr>
                        <th>Custo por Minuto de Gás</th>
                        <th>Custo por Minuto de Energia</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {custosFixos.map((custo) => (
                        <Fragment key={custo.id}>
                            <tr>
                                <td>R$ {custo.custoPorMinutoGas.toFixed(2)}</td>
                                <td>R$ {custo.custoPorMinutoEnergia.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => abrirEdicao(custo)}>Editar</button>
                                    <button onClick={() => handleDeletar(custo.id)}>Excluir</button>
                                </td>
                            </tr>

                            {editando?.id === custo.id && (
                                <tr key={`edit-${custo.id}`}>
                                    <td colSpan={3}>
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            <input
                                                placeholder="Custo Gás"
                                                value={form.custoPorMinutoGas}
                                                onChange={e => setForm({ ...form, custoPorMinutoGas: Number(e.target.value) })} />
                                            <input
                                                placeholder="Custo Energia"
                                                value={form.custoPorMinutoEnergia}
                                                onChange={e => setForm({ ...form, custoPorMinutoEnergia: Number(e.target.value) })} />
                                            <button onClick={() => setEditando(null)}>Cancelar</button>
                                            <button onClick={handleSalvar}>Salvar</button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
