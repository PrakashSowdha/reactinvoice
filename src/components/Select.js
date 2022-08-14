export default function Select() {
  return (
    <div className='flex items-end justify-end text-gray-800 text-4xl font-bold md:mt-10'>
      <form>
        <select>
          <option value='' disabled selected>
            Payment Methods
          </option>
          <option value='Stripe-Credit Card'>Stripe - Credit Card</option>
          <option value='PayPal'>PayPal</option>
        </select>
      </form>
    </div>
  );
}
