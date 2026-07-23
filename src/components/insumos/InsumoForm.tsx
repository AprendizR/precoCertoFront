import { useState } from "react";
import { adicionarInsumo } from "../../api/insumosApi";
import Swal from "sweetalert2";

type Props = {
    onCadastrado: () => void;
};

export function InsumoForm({ onCadastrado }: Props) {
    const [nomeInsumo, setNomeInsumo] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState<'G' | 'ML' | 'UN'>('UN');

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        try {
            await adicionarInsumo({ nomeInsumo, unidadeMedida });
            setNomeInsumo("");
            setUnidadeMedida('UN');
            Swal.fire({
                icon: 'success',
                title: 'Insumo adicionado com sucesso!',
            });
            onCadastrado();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao adicionar insumo',
                text: (error as Error).message,
            });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nomeInsumo">Nome do Insumo: </label>
                <input type="text" id="nomeInsumo" value={nomeInsumo} 
                onChange={(e) => setNomeInsumo(e.target.value)} required/>
            </div>
            <div>
                <label htmlFor="unidadeMedida">Unidade de Medida: </label>
                <select id="unidadeMedida" value={unidadeMedida}
                    onChange={(e) => setUnidadeMedida(e.target.value as 'G' | 'ML' | 'UN')} required>
                    <option value="G">Gramas</option>
                    <option value="ML">Mililitros</option>
                    <option value="UN">Unidades</option>
                </select>
            </div>
            <button type="submit">Adicionar Insumo</button>
        </form>
    );
}
