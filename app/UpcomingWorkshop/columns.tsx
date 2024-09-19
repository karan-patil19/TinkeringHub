"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../components/ui/button"
export interface ColumnsWithOpenDocument extends Array<ColumnDef<Payment>> {
  openDocument: (url: string) => void;
}

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  srno: number
  status: "pending" | "processing" | "success" | "failed"
  date: Date
  name:string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "srno",
    header: "SrNo",
  },
  {
    accessorKey: "name",
    header: "Name of the BootCamp",
  },
  {
    accessorKey: "date",
    header: "Date of the Bootcamp",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;
  
      return (
        <Button variant="outline" onClick={() => openDocument(payment.url)}>Book</Button>
      );
    },
    header: "Book The BootCamp",
  },
  
]
