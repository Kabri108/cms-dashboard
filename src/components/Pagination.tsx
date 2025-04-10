const Pagination = () => {
  return (
    <div className='flex flex-row justify-center gap-4 items-center'>
        <button disabled className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            prev
        </button>
        <div className="flex flex-row gap-2 items-center text-sm">
            <button className="px-2 rounded bg-sky-200">1</button>
            <button className="px-2 rounded ">2</button>
            <button className="px-2 rounded b">3</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
            next
        </button>
    </div>
  )
}

export default Pagination