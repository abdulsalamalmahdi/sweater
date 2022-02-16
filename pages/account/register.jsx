import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Link from "components/Link";
import Layout from "components/account/Layout";
import  {userService} from "services";
import  {alertService} from "services/alert.service"
import Err from  "components/Error"

export default function Register() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(<Err>First Name is required</Err>),
    lastName: Yup.string().required(<Err>Last Name is required</Err>),
    email: Yup.string().required(<Err>Email is required</Err>),
    phone: Yup.string().required(<Err>Phone is required</Err>),
    password: Yup.string()
      .required(<Err>Password is required</Err>)
      .min(6,<Err>Password must be at least 6 characters</Err>),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(user) {
  
    return userService
      .register(user)
      .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className="center w-screen grid grid-cols-2 gap-4">
       
        <div className="form-group mb-6 m-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              {...register("firstName")}
              className={`form-control ${
                errors.firstName ? "is-invalid" : ""
              }  block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          `}
              aria-describedby="emailHelp123"
              placeholder="First name"
            />
            <div className="invalid-feedback">{errors.firstName?.message}</div>

            <label>Name</label>
            <input
              name="name"
              type="text"
              {...register("name")}
              className={` 
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          `}
              aria-describedby="emailHelp123"
              placeholder="First name"
            />
           

            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              {...register("lastName")}
              className={`form-control ${errors.lastName ? "is-invalid" : ""}
                             block
                             w-full
                             px-3
                             py-1.5
                             text-base
                             font-normal
                             text-gray-700
                             bg-white bg-clip-padding
                             border border-solid border-gray-300
                             rounded
                             transition
                             ease-in-out
                             m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              aria-describedby="emailHelp124"
              placeholder="Last name"
            />
            <div className="invalid-feedback">{errors.lastName?.message}</div>

            <label>Email</label>
            <input
              name="username"
              type="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}
                             block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              id="exampleInput125"
              placeholder="Email address"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>

            <label>Phone</label>
            <input
              name="phone"
              type="text"
              {...register("phone")}
              className={` 
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          `}
              aria-describedby="emailHelp123"
              placeholder="Phone"
            />
 <div className="invalid-feedback">{errors.phone?.message}</div>


            <label>Password</label>
            <input
              name="password"
              type="password"
              {...register("password")}
              className={`form-control ${
                errors.password ? "is-invalid" : ""
              } block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>

            <div className="flex mt-6">
              <button
                type="submit"
                disabled={formState.isSubmitting}
                className=" w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              >
                {formState.isSubmitting && (
                  <span className="spinner-border spinner-border-sm mr-1"></span>
                )}
                Register
              </button>
              <Link
                href="/account/login"
                className=" inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
