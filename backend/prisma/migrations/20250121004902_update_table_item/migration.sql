/*
  Warnings:

  - Added the required column `fk_Id_Produto` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "fk_Id_Produto" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_fk_Id_Produto_fkey" FOREIGN KEY ("fk_Id_Produto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
