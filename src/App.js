import Header from './components/Header';
import CurrentDate from './components/CurrentDate';
import MainDetails from './components/MainDetails';
import TableForm from './components/TableForm';
import { useState } from 'react';
import Select from './components/Select';
import Footer from './components/Footer';

function App() {
  const [showInvoice, setShowInvoice] = useState(true);

  const [yourCompany, setYourCompany] = useState('');
  const [invoiceTo, setInvoiceTo] = useState('');

  const [projectDescription, setProjectDescription] = useState('');

  const [invoiceBy, setInvoiceBy] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [invoiceTerms, setInvoiceTerms] = useState('');

  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');

  const [list, setList] = useState([]);
  const [subtotal, setSubTotal] = useState(0);

  return (
    <div>
      <Header />
      <main className='mt-5 p-10 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
        {showInvoice ? (
          <div className='flex flex-col justify-center'>
            <section className='flex flex-col items-center justify-center'>
              <button
                onClick={() => setShowInvoice(false)}
                className='bg-indigo-900 text-white font-bold py-2 px-8 rounded shadow border-2 border-indigo-900 hover:bg-transparent hover:text-indigo-900 transition-all duration-300'
              >
                Edit
              </button>
            </section>
            <article className='md:grid grid-cols-3 gap-5'>
              <div className='flex flex-col'>
                <div className='invoice'>INVOICE</div>
                <span className='texts'>{yourCompany}</span>
              </div>
              <div className='flex flex-col'></div>
              <div className='flex flex-col'>
                <CurrentDate />
              </div>
            </article>

            <article className='md:grid grid-cols-3 gap-5 md:mt-16'>
              <div className='flex flex-col'>
                <label htmlFor='invoiceTo'>INVOICE TO</label>
                <span className='texts'>{invoiceTo}</span>
              </div>

              <div className='flex flex-col'></div>
              <div className='flex flex-col'>
                <MainDetails total={subtotal} dueDate={dueDate} />
              </div>
            </article>

            <article>{!showInvoice && <Select />}</article>

            <article className='md:grid'>
              <div className='flex flex-col'>
                <label htmlFor='projectDescription'>INVOICE FOR</label>
                <span className='texts'>{projectDescription}</span>
              </div>
            </article>

            {/* This is our table form */}
            <article>
              <TableForm
                description={description}
                setDescription={setDescription}
                quantity={quantity}
                setQuantity={setQuantity}
                price={price}
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                list={list}
                setList={setList}
                subtotal={subtotal}
                setSubTotal={setSubTotal}
                showInvoice={showInvoice}
                setshowInvoice={setShowInvoice}
              />
            </article>

            <article className='md:grid grid-cols-4 gap-5 md:mt-8 md:mb-8'>
              <div className='flex flex-col'>
                <label htmlFor='invoiceBy'>INVOICE BY</label>
                <span className='texts'>{invoiceBy}</span>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='invoiceDate'>INVOICE DATE</label>
                <span className='texts'>{invoiceDate}</span>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='dueDate'>DUE DATE</label>
                <span className='texts'>{dueDate}</span>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='bankName'>PAYMENT DETAILS</label>
                <span className='texts'>{bankName}</span>
              </div>
            </article>

            <article className='md:grid grid-cols-4 gap-5 md:mb-8'>
              <div className='flex flex-col'></div>

              <div className='flex flex-col'>
                <label htmlFor='invoiceNumber'>INVOICE NUMBER</label>
                <span className='texts'>{invoiceNumber}</span>
              </div>

              <div className='flex flex-col'>
                <label htmlFor='referenceNumber'>REFERENCE NO</label>
                <span className='texts'>{referenceNumber}</span>
              </div>

              <div className='flex flex-col'></div>
            </article>
            <article className='md:grid grid-cols-4 gap-5'>
              <div className='flex flex-col'></div>

              <div className='flex flex-col'>
                <label htmlFor='invoiceTerms'>INVOICE TERMS</label>
                <span className='texts'>{invoiceTerms}</span>
              </div>

              <div className='flex flex-col'></div>

              <div className='flex flex-col'></div>
            </article>
          </div>
        ) : (
          <>
            {/* name, address, email, phone, bank name, bank account number, website, client name, client address, invoice number, invoice date, due date, notes*/}
            <div className='flex flex-col justify-center'>
              <section className='flex flex-col items-center justify-center'>
                <button
                  onClick={() => setShowInvoice(true)}
                  className='bg-indigo-900 text-white font-bold py-2 px-8 rounded shadow border-2 border-indigo-900 hover:bg-transparent hover:text-indigo-900 transition-all duration-300'
                >
                  Preview
                </button>
              </section>

              <article className='md:grid grid-cols-3 gap-5'>
                <div className='flex flex-col'>
                  <div className='invoice'>INVOICE</div>
                  <input
                    type='text'
                    name='text'
                    id='yourCompany'
                    placeholder='by Your Company'
                    autoComplete='off'
                    value={yourCompany}
                    onChange={(e) => setYourCompany(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'></div>
                <div className='flex flex-col'>
                  <CurrentDate />
                </div>
              </article>

              <article className='md:grid grid-cols-3 gap-5 md:mt-16'>
                <div className='flex flex-col'>
                  <label htmlFor='invoiceTo'>INVOICE TO</label>
                  <input
                    type='text'
                    name='text'
                    id='invoiceTo'
                    placeholder='Client Company'
                    autoComplete='off'
                    value={invoiceTo}
                    onChange={(e) => setInvoiceTo(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'></div>
                <div className='flex flex-col'>
                  <MainDetails total={subtotal} dueDate={dueDate} />
                </div>
              </article>

              <article>
                <Select />
              </article>

              <article className='md:grid'>
                <div className='flex flex-col'>
                  <label htmlFor='projectDescription'>INVOICE FOR</label>
                  <input
                    type='text'
                    name='projectDescription'
                    id='projectDescription'
                    placeholder='Project Description'
                    autoComplete='off'
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  subtotal={subtotal}
                  setSubTotal={setSubTotal}
                />
              </article>

              <article className='md:grid grid-cols-4 gap-5 md:mt-8'>
                <div className='flex flex-col'>
                  <label htmlFor='invoiceBy'>INVOICE BY</label>
                  <input
                    type='text'
                    name='invoiceBy'
                    id='invoiceBy'
                    placeholder='Your Company'
                    autoComplete='off'
                    value={invoiceBy}
                    onChange={(e) => setInvoiceBy(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='invoiceDate'>INVOICE DATE</label>
                  <input
                    type='date'
                    name='invoiceDate'
                    id='invoiceDate'
                    placeholder='Enter your invoiceDate'
                    autoComplete='off'
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='dueDate'>DUE DATE</label>
                  <input
                    type='date'
                    name='dueDate'
                    id='dueDate'
                    placeholder='Enter your dueDate'
                    autoComplete='off'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='bankName'>PAYMENT DETAILS</label>
                  <input
                    type='text'
                    name='text'
                    id='bankName'
                    placeholder='Bank Information'
                    autoComplete='off'
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
              </article>

              <article className='md:grid grid-cols-4 gap-5'>
                <div className='flex flex-col'></div>

                <div className='flex flex-col'>
                  <label htmlFor='invoiceNumber'>INVOICE NUMBER</label>
                  <input
                    type='text'
                    name='invoiceNumber'
                    id='invoiceNumber'
                    placeholder='######'
                    autoComplete='off'
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='referenceNumber'>REFERENCE NO</label>
                  <input
                    type='text'
                    name='referenceNumber'
                    id='referenceNumber'
                    placeholder='######'
                    autoComplete='off'
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'></div>
              </article>
              <article className='md:grid grid-cols-4 gap-5'>
                <div className='flex flex-col'></div>

                <div className='flex flex-col'>
                  <label htmlFor='invoiceTerms'>INVOICE TERMS</label>
                  <input
                    type='text'
                    name='invoiceTerms'
                    id='invoiceTerms'
                    placeholder='14 days of notice'
                    autoComplete='off'
                    value={invoiceTerms}
                    onChange={(e) => setInvoiceTerms(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'></div>

                <div className='flex flex-col'></div>
              </article>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
