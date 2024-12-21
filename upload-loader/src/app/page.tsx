import DragAndDrop from '@/components/dragAndDrop';
export default function Home() {
  return (
    <div className="">
      <main className="flex justify-center items-center -translate-x-1 translate-y-1/2">
        <div className="h-[300px] w-[500px] bg-clr_5 rounded-sm p-2">
          <div className="h-full w-full rounded-sm  border-[1px] border-dashed">
            <DragAndDrop />
          </div>
        </div>
      </main>
    </div>
  );
}
