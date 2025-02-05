"use client"

import { Button } from "@/app/dashboard/components/button";
import styles from './styles.module.scss';
import { UploadCloud } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from "sonner";

interface CategoryProps {
    id: string,
    nome: string
}

interface Props {
    categorias: CategoryProps[]
}

export function Form({ categorias }: Props) {
    const [image, setImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState("");
    const [erroCategoria, setErroCategoria] = useState(true);
    const [erroImagem, setErroImagem] = useState(true);

    function handleMudancaCategoria(e: ChangeEvent<HTMLSelectElement>) {
        if (Number(e.target.value) !== -1) {
            setErroCategoria(false);
            console.log("erro está false");
        } else {
            setErroCategoria(true);
            console.log('erro está true');
        }
    }

    function handleErroCategoria() {
        toast.warning("Por favor, selecione uma categoria");
        return;
    }

    function handleErroImagem() {
        toast.warning("Por favor, faça upload de uma imagem");
        return;
    }

    async function handleCadastroProduto(formData: FormData, e: FormEvent<HTMLFormElement>) {
        const index = Number(formData.get("categorias"));

        if (!image) {
            console.error("Nenhuma imagem foi selecionada.");
            return;
        }

        const data = new FormData();
        data.append("nome", formData.get("nome") as string);
        data.append("preco", formData.get("valor") as string);
        data.append("descricao", formData.get("descricao") as string);
        data.append("file", image);
        data.append("id_categoria", categorias[index].id);

        const token = await getCookieClient();

        console.log(formData.get("categorias"));

        try {
            const response = await api.post("/cadastro-produto", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            toast.success("Produto cadastrado com sucesso");

            const form = e.currentTarget;

            setTimeout(() => {
                if (form) {
                    setPreviewImage("");
                    form.reset(); // Limpa o formulário
                }

            }, 5000);

        } catch (err) {
            console.log(err);
            toast.error("Erro ao cadastrar produto")
        }
    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type !== "image/png" && image.type !== "image/jpeg") {
                console.log("FORMATO DE IMAGEM PROIBIDO");
                return;
            }

            setImage(image);
            setPreviewImage(URL.createObjectURL(image));
            setErroImagem(false);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        if (erroCategoria) {
            e.preventDefault(); // Impede a submissão do formulário
            handleErroCategoria(); // Exibe a mensagem de erro
            return;
        }

        if (!image) {
            e.preventDefault();
            setErroImagem(true);
            handleErroImagem();
            return;
        }

        // Se não houver erro, continua com a submissão
        const formData = new FormData(e.currentTarget);
        handleCadastroProduto(formData, e);
    };

    return (
        <main className={styles.container}>
            <h1>Novo produto</h1>

            <form onSubmit={onSubmit} className={styles.form}>
                <label className={styles.labelImage}>
                    <span>
                        <UploadCloud size={30} color="#FFF" />
                    </span>

                    <input type="file"
                        accept="image/png, image/jpeg"
                        onChange={handleFile} />

                    {previewImage && (
                        <Image
                            alt="Preview da imagem"
                            src={previewImage}
                            className={styles.preview}
                            fill={true}
                            quality={100}
                            priority={true} />
                    )}
                </label>

                <select
                    className={`${styles.input} ${styles.select}`}
                    name="categorias"
                    onChange={handleMudancaCategoria} >
                    <option value="-1">Selecione uma categoria</option>
                    {categorias.map((categoria, index) => (
                        <option
                            key={categoria.id}
                            value={index} >
                            {categoria.nome}</option>
                    ))}
                </select>

                <input
                    className={styles.input}
                    type="text"
                    name="nome"
                    placeholder="Nome do item"
                    required />

                <input
                    className={styles.input}
                    type="text"
                    name="valor"
                    placeholder="Valor"
                    required />

                <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    name="descricao"
                    placeholder="Descrição"
                    required />

                <Button nome="Cadastrar" />
            </form>
        </main>

    )
}