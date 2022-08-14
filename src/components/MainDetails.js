export default function MainDetails({ total, dueDate }) {
  return (
    <>
      <section className='flex flex-col items-end justify-end'>
        <h2 className='font-bold text-xl uppercase mb-1 md:text-4xl'>
          <span>
            <strong>$ </strong>
          </span>
          {total}
        </h2>
        <p className='red'>
          <span>Due date on: </span>
          {dueDate}
        </p>
      </section>
    </>
  );
}
