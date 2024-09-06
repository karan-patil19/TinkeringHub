import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import { ExampleNavbarThree } from "../../components/Navigation"
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    {
     id:"728ed52f",
  srno: 101,
  date: '01/08/2024',
  name:"Machine Learning "
    },
    
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="flex min-h-screen flex-col items-center p-8 justify-between bg-primary_color1" >
    <div className="w-full max-w-screen-lg bg-primary_color2  rounded-lg shadow-lg" >
    <ExampleNavbarThree></ExampleNavbarThree>
    <h2 className="text-4xl font-bold text-center text-black mb-12 mt-4">Past Bootcamps</h2>
      <DataTable columns={columns} data={data} />
    </div>
    
    
    </div>
  )
}
