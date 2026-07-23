import { Fragment, useState } from "react";
import { InsumosRequest, InsumosResponse } from "../../types/Insumos";
import { atualizarInsumo, excluirInsumo } from "../../api/insumosApi";
import { confirmAction } from "../../utils/sweetAlertToast";
import Swal from "sweetalert2";

type Props = {
    insumos: InsumosResponse[];
    onAtualizado: () => void;
}

export function InsumosList({ insumos, onAtualizado }: Props) {
    const [editando, setEditando] = useState<InsumosResponse | null>(null);
    const [form, setForm] = useState<InsumosRequest>({
        nomeInsumo: '',
        unidadeMedida: 'UN'
    });

    function abrirEdicao(insumo: InsumosResponse) {
        setEditando(insumo);
        setForm({
            nomeInsumo: insumo.nomeInsumo,
            unidadeMedida: insumo.unidadeMedida
        });
    }

    function handleSalvar() {
        if (!editando) return;
        try {
            atualizarInsumo(editando.id, form);
            Swal.fire({
                icon: 'success',
                title: 'Insumo atualizado com sucesso!',
            });
            setEditando(null);
            onAtualizado();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao atualizar insumo',
                text: (error as Error).message,
            });
        }
    }

    async function handleDeletar(insumoId: number) {
        const confirmar = await confirmAction({
            title: "Excluir insumo?",
            text: "Tem certeza que deseja excluir este insumo? Esta ação não pode ser desfeita.",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar",
        });
        if (!confirmar) return;
        try {
            await excluirInsumo(insumoId);
            Swal.fire({
                icon: 'success',
                title: 'Insumo excluído com sucesso!',
            });
            onAtualizado();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao excluir insumo',
                text: (error as Error).message,
            });
        }
    }

    if (insumos.length === 0) {
        return <p>Nenhum insumo cadastrado.</p>
    }

    return (
        <div>
            <h3>Insumos Cadastrados</h3>
            <table>
                <thead>
                    <tr>
                        <th>Insumo</th>
                        <th>Unidade de Medida</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {insumos.map((insumo) => (
                        <Fragment key={insumo.id}>
                            <tr>
                                <td>{insumo.nomeInsumo}</td>
                                <td>{insumo.unidadeMedida}</td>
                                <td>
                                    <button onClick={() => abrirEdicao(insumo)}>Editar</button>
                                    <button onClick={() => handleDeletar(insumo.id)}>Excluir</button>
                                </td>
                            </tr>

                            {editando?.id === insumo.id && (
                                <tr key={`edit-${insumo.id}`}>
                                    <td colSpan={3}>
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            <input
                                                placeholder="Insumo"
                                                value={form.nomeInsumo}
                                                onChange={e => setForm({ ...form, nomeInsumo: e.target.value })}
                                            />
                                            <select
                                                value={form.unidadeMedida}
                                                onChange={e => setForm({ ...form, unidadeMedida: e.target.value as InsumosRequest["unidadeMedida"] })}
                                            >
                                                <option value="G">G</option>
                                                <option value="ML">ML</option>
                                                <option value="UN">UN</option>
                                            </select>
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