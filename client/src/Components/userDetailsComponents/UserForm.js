import React,{useState} from 'react';
import { setUserDetails } from '../../state/actions/userDetails';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    users: yup.array().of(
        yup.object().shape({
            name: yup.string().max(20, <h1 className='text-red-500 inline'>*invalid Name</h1>).required(<h1 className='text-red-500 inline'> *required</h1>),
            gender: yup.string().required(<h1 className='text-red-500 inline'> *required</h1>),
            age: yup.number().min(18, <h1 className='text-red-500 inline'>*invalid age</h1>).max(100, <h1 className='text-red-500 inline'>*invalid age</h1>).required(<h1 className='text-red-500 inline'> *required</h1>),
            email: yup.string().email('Invalid email').required(<h1 className='text-red-500 inline'> *required</h1>),
            phone: yup.string().min(10, <h1 className='text-red-500 inline'>*invalid Phone Number</h1>).max(10, <h1 className='text-red-500 inline'>*invalid Phone Number</h1>).required(<h1 className='text-red-500 inline'> *required</h1>)
        }))
  });

export default function UserForm(props) {
  const [isFormDisabled, setFormDisabled] = useState(false);
  const dispatch = useDispatch();
  let users;
  if(props.seats){users=props.seats.selectedSeat};

  return (
    <>
    {users?
    <div>
    <Formik 
      validationSchema={validationSchema}
      initialValues={{users: users.map((user) => ({name: '',gender: 'male',age:18,email: '',phone: ''}))}}
      onSubmit={(values, { resetForm }) => {setFormDisabled(true);setUserDetails(dispatch,values);
        resetForm({users: users.map(() => ({name: '',gender: '',age: null,email: '',phone: ''}))
        });
        toast.info('Passengers details Saved. Please proceed to pay', {position: "top-right",autoClose: 4000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "light"});
      }}
    >
      {(formik) => (
        <>
        <div className="sm:ml-16 mt-4 sm:w-[65vw] w-[85vw]">
              <h2 className="font-semibold sm:text-[x-large] text-[15px]">
                Enter Traveller Details
              </h2>
          <Form>
            {formik.values.users.map((user, index) => (
              <section key={index} className='bg-white my-1 flex flex-col gap-1 border-2 border-slate-400 rounded-lg p-4'>
                <h1 className='text-lg font-semibold '>Passanger Details for seat {users[index]}</h1>
              <div className="flex sm:flex-row flex-col sm:flex-wrap flex-nowrap gap-1 sm:gap-[30px] mt-2">
                  <div className='flex flex-row justify-between sm:flex-col gap-1'>
                      <label className='text-[rgb(112,105,105)] self-center  sm:self-start' htmlFor={`users[${index}].name`}>Name</label>
                      <Field disabled={isFormDisabled} type="text" name={`users[${index}].name`}
                      className='sm:w-[400px] w-[50vw]  px-3 h-8 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]'
                      />
                      <ErrorMessage  name={`users[${index}].name`} />
                  </div>
                  <div className="flex justify-between sm:flex-col flex-row  gap-1">
                      <label className='text-[rgb(112,105,105)] self-center  sm:self-start' htmlFor={`users[${index}].gender`}>Gender</label>
                      <Field disabled={isFormDisabled} className="sm:w-[150px] w-[50vw] h-8 pl-[5px] rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]" name={`users[${index}].gender`} as="select">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      </Field>
                      <ErrorMessage  name={`users[${index}].gender`} />
                  </div>
                  <div className="flex justify-between sm:flex-col flex-row gap-1">
                      <label htmlFor={`users[${index}].age`} className="text-[rgb(112,105,105)] self-center  sm:self-start">Age</label>
                      <Field disabled={isFormDisabled} type="number" name={`users[${index}].age`}
                       className="sm:w-[150px] w-[50vw] px-3  h-8 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                      />
                      <ErrorMessage  name={`users[${index}].age`} />
                  </div>
              </div>
                <div className="flex sm:flex-row flex-col sm:flex-wrap flex-nowrap gap-1 sm:gap-[30px]">
                  <div  className="flex justify-between sm:flex-col flex-row gap-1">
                      <label className="text-[rgb(112,105,105)] self-center  sm:self-start" htmlFor={`users[${index}].email`}>Email</label>
                      <Field disabled={isFormDisabled}
                      type="email"
                      name={`users[${index}].email`}
                      className="px-3 sm:w-[400px] w-[50vw] h-8 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                      />
                      <ErrorMessage name={`users[${index}].email`} />
                  </div>
                  <div className="flex justify-between sm:flex-col flex-row gap-1">
                      <label htmlFor={`users[${index}].phone`} className="text-[rgb(112,105,105)] self-center  sm:self-start">Phone</label>
                      <Field disabled={isFormDisabled}
                      type="number"
                      name={`users[${index}].phone`}
                      className="sm:w-[400px] w-[50vw] px-3 h-8 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                      />
                      <ErrorMessage name={`users[${index}].phone`} />
                  </div>
                </div>
              </section>
            ))}
            {isFormDisabled?
            <div className='flex justify-center'>
              <button  type='submit'
            className=' border-2 bg-slate-500 text-white font-semibold font-mono px-2 py-1 rounded-lg text-xl'>
            Submit
            </button>
            </div>
            :
            <div className='flex justify-center'>
              <button type='submit'
              className=' border-2 bg-[#FF8700] text-white font-semibold font-mono px-2 py-1 rounded-lg my-1 text-xl'>
              Submit
              </button>
            </div>
            }
            
          </Form>
          </div>
        </>
      )}
    </Formik>
    <ToastContainer />
  </div>
    :
    <h1 className='flex justify-center py-4'>No data Found!! <p className='text-blue-600'><Link to="/">Click here</Link></p></h1>
    }
    </>
  )
}