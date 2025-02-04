import { Form } from './components/form';
import { api } from '@/services/api';
import { getCookieServer } from '@/lib/cookieServer';

export default async function Produto() {

    const token = await getCookieServer();

    const response = await api.get("/listar-categorias", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return (
        <Form categorias={response.data} />
    )
}