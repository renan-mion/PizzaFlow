-- CreateTable
CREATE TABLE "Categoria" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_Criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_Atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "data_Criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_Atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "fk_Id_Categoria" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" TEXT NOT NULL,
    "mesa" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "rascunho" BOOLEAN NOT NULL DEFAULT true,
    "nome" TEXT,
    "data_Criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_Atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data_Criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "data_Atualizacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "fk_Id_Pedido" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_fk_Id_Categoria_fkey" FOREIGN KEY ("fk_Id_Categoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_fk_Id_Pedido_fkey" FOREIGN KEY ("fk_Id_Pedido") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
