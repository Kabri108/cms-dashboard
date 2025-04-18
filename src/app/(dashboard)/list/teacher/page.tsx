import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import Image from 'next/image';

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 m-4 mt-0 flex-1 h-full rounded-md">
      <div className="flex justify-between flex-col md:flex-row items-center gap-4 md:w-auto w-full">
        <h1 className="font-semibold text-lg">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 wfull md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-200">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-200">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>

      <Table/>

      <Pagination/>
    </div>
  );
};

export default TeacherListPage;
