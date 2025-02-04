"use client"

import { Button } from "@/app/dashboard/components/button";
import styles from './styles.module.scss';
import { UploadCloud } from "lucide-react";
import { ChangeEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookieClient";

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

    async function handleCadastroProduto(formData: FormData) {
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

        try {
            const response = await api.post("/cadastro-produto", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setPreviewImage("");
            console.log(response.data);
        } catch (err) {
            console.log(err);
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
        }
    }

    return (
        <main className={styles.container}>
            <h1>Novo produto</h1>

            <form action={handleCadastroProduto} className={styles.form}>
                <label className={styles.labelImage}>
                    <span>
                        <UploadCloud size={30} color="#FFF" />
                    </span>

                    <input type="file"
                        accept="image/png, image/jpeg"
                        required
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
                    name="categorias" >
                    <option value="0" defaultValue={0}>Selecione uma categoria</option>
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