import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Err from "components/Error";
import * as Yup from "yup";

import Link from "components/Link";
import Layout from "components/account/Layout";
import { userService } from "services/user.service";

import { alertService } from "services/alert.service";

export default function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(<Err>Username is required</Err>),
    password: Yup.string().required(<Err>Password is required</Err>),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ email, password }) {
    return userService
      .login(email, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className=" m-6 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h4 className="card-header">Login</h4>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6">
            <label
              for="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}block
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
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div class="form-group mb-6">
            <label
              for="exampleInputPassword2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
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
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none `}
              id="exampleInputPassword2"
              placeholder="Password"
            />
            <div className="invalid-feedback">{errors.password?.message}</div>

            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  id="exampleCheck2"
                ></input>
                <label
                  className="form-check-label inline-block text-gray-800"
                  for="exampleCheck2"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#!"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="
      w-full
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
              Sign in
            </button>

            <p className="text-gray-800 mt-6 text-center">
              Not a member?{" "}
              <a
                href="/account/register"
                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
      {}
    </Layout>
  );
}
